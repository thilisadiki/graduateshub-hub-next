import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { getTaskById } from '@/data/portfolioTasks';
import { getCategoryById } from '@/data/portfolioCategories';
import { getSupabase } from '@/utils/supabase';
import type { PortfolioEvaluation, RubricScore } from '@/types';

const MIN_SUBMISSION_LENGTH = 200;
const MAX_SUBMISSION_LENGTH = 20000;
const MAX_NAME_LENGTH = 80;
const MAX_LINKS = 5;

function generateProofId(): string {
  const bytes = new Uint8Array(12);
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function sanitiseLinks(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((v): v is string => typeof v === 'string')
    .map((v) => v.trim())
    .filter((v) => v.length > 0 && v.length < 500)
    .filter((v) => {
      try {
        const url = new URL(v);
        return url.protocol === 'http:' || url.protocol === 'https:';
      } catch {
        return false;
      }
    })
    .slice(0, MAX_LINKS);
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing Gemini API Key.' }, { status: 500 });
  }

  let taskId: string;
  let graduateName: string;
  let submission: string;
  let submissionLinks: string[];
  try {
    const body = await request.json();
    taskId = String(body.taskId || '').trim();
    graduateName = String(body.graduateName || '').trim().slice(0, MAX_NAME_LENGTH);
    submission = String(body.submission || '').trim();
    submissionLinks = sanitiseLinks(body.submissionLinks);
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!taskId) {
    return NextResponse.json({ error: 'Missing task id.' }, { status: 400 });
  }
  if (!graduateName) {
    return NextResponse.json({ error: 'Please enter the name you want on your badge.' }, { status: 400 });
  }
  if (submission.length < MIN_SUBMISSION_LENGTH) {
    return NextResponse.json(
      { error: `Your submission is too short. Aim for at least ${MIN_SUBMISSION_LENGTH} characters.` },
      { status: 400 },
    );
  }
  if (submission.length > MAX_SUBMISSION_LENGTH) {
    return NextResponse.json(
      { error: `Your submission exceeds the ${MAX_SUBMISSION_LENGTH} character limit.` },
      { status: 400 },
    );
  }

  const task = getTaskById(taskId);
  if (!task) {
    return NextResponse.json({ error: 'Unknown task.' }, { status: 404 });
  }
  const category = getCategoryById(task.categoryId);
  const categoryName = category?.name || task.categoryId;

  const rubricSpec = task.rubric.map((c) => ({
    key: c.key,
    label: c.label,
    description: c.description,
    weight: c.weight,
    maxScore: 5,
  }));

  const systemPrompt = `
You are an experienced hiring manager and technical assessor for Graduates Hub. You are grading a real submission from a South African graduate who has completed a practical "Proof of Work" task to demonstrate their skills.

Be fair but rigorous. Graduates are applying for entry-level or first-professional roles. A good submission should show:
- Direct engagement with the specific scenario (not generic advice)
- Practical judgment proportionate to the task
- Clear, well-structured communication

TASK CONTEXT:
Title: ${task.title}
Category: ${categoryName}
Difficulty: ${task.difficulty}
Scenario: ${task.scenario}
Brief: ${task.brief}
Deliverables required:
${task.deliverables.map((d, i) => `${i + 1}. ${d}`).join('\n')}

RUBRIC (score each criterion 1 to 5):
${rubricSpec.map((c) => `- ${c.key} (${c.label}, weight ${c.weight}%): ${c.description}`).join('\n')}

SCORING GUIDE:
- 1: Missing or incorrect
- 2: Attempted but weak
- 3: Acceptable, meets basic bar
- 4: Strong, shows real judgment
- 5: Exceptional, would impress a hiring manager

Compute overallScore as the weighted percentage: sum(score/5 * weight) rounded to the nearest integer.
Verdict:
- 80 or above: "Pass with Distinction"
- 60 to 79: "Pass"
- below 60: "Needs Revision"

You MUST respond ONLY with a valid JSON object in this exact shape:
{
  "overallScore": 78,
  "verdict": "Pass",
  "summary": "1 to 2 sentence overall read of the submission.",
  "strengths": ["2 to 4 specific things the graduate did well"],
  "improvements": ["2 to 4 specific things they should change before sharing this publicly"],
  "rubricScores": [
    { "key": "diagnosis", "label": "Diagnosis Quality", "score": 4, "maxScore": 5, "feedback": "1 sentence specific feedback on this criterion." }
  ]
}
Include one rubricScores entry for every rubric criterion listed above, in the same order.`;

  const userInput = `Graduate name: ${graduateName}
${submissionLinks.length ? `Reference links provided: ${submissionLinks.join(', ')}` : ''}

SUBMISSION:
${submission}`;

  const ai = new GoogleGenAI({ apiKey });

  let evaluation: PortfolioEvaluation;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite-preview',
      contents: userInput,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.2,
        responseMimeType: 'application/json',
      },
    });

    const raw = response.text ?? '';
    const parsed = JSON.parse(raw);

    const rubricScores: RubricScore[] = (parsed.rubricScores || []).map((r: any) => ({
      key: String(r.key || ''),
      label: String(r.label || ''),
      score: Math.max(0, Math.min(5, Number(r.score) || 0)),
      maxScore: 5,
      feedback: String(r.feedback || ''),
    }));

    const overallScore = Math.max(0, Math.min(100, Math.round(Number(parsed.overallScore) || 0)));
    const verdict = ((): PortfolioEvaluation['verdict'] => {
      if (overallScore >= 80) return 'Pass with Distinction';
      if (overallScore >= 60) return 'Pass';
      return 'Needs Revision';
    })();

    evaluation = {
      overallScore,
      verdict,
      summary: String(parsed.summary || '').slice(0, 600),
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths.map(String).slice(0, 5) : [],
      improvements: Array.isArray(parsed.improvements) ? parsed.improvements.map(String).slice(0, 5) : [],
      rubricScores,
    };
  } catch (error: any) {
    console.error('Gemini evaluation failed:', error);
    return NextResponse.json(
      { error: 'We could not grade your submission right now. Please try again in a minute.' },
      { status: 502 },
    );
  }

  const proofId = generateProofId();

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from('portfolio_proofs').insert({
      id: proofId,
      task_id: task.id,
      task_title: task.title,
      task_field: categoryName,
      graduate_name: graduateName,
      submission,
      submission_links: submissionLinks,
      evaluation,
    });
    if (error) throw error;
  } catch (error: any) {
    console.error('Supabase insert failed:', error);
    return NextResponse.json(
      { error: 'We graded your work but could not save it. Please try again.' },
      { status: 500 },
    );
  }

  return NextResponse.json({
    proofId,
    proofUrl: `/proof/${proofId}`,
    evaluation,
  });
}
