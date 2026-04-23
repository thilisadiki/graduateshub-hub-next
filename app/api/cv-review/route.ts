import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { courses } from '@/data/courses';

const getSimplifiedCatalog = () =>
  courses.map((course) => ({
    id: course.id,
    title: course.title,
    category: course.category,
    level: course.tag || 'Certificate',
    keywords: course.description.substring(0, 150),
  }));

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'Missing Gemini API Key.' }, { status: 500 });

  let cvText: string;
  let targetRole: string;
  try {
    const body = await request.json();
    cvText = body.cvText;
    targetRole = body.targetRole || '';
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!cvText?.trim() || cvText.trim().length < 50) {
    return NextResponse.json({ error: 'Please paste your CV text (at least 50 characters).' }, { status: 400 });
  }

  const ai = new GoogleGenAI({ apiKey });
  const catalog = getSimplifiedCatalog();
  const userInput = targetRole?.trim()
    ? `Target role: ${targetRole}\n\nCV:\n${cvText}`
    : `CV:\n${cvText}`;

  const systemPrompt = `
You are an expert CV/resume reviewer and career coach for Graduates Hub.
Review the provided CV and give structured, actionable feedback.
${targetRole ? `The candidate is targeting the role: ${targetRole}. Tailor your review to that role.` : ''}

Here is our course catalog (JSON) - recommend courses from it to fill skill gaps:
${JSON.stringify(catalog)}

INSTRUCTIONS:
1. Give an overall score from 0 to 100 (be honest but constructive).
2. Identify 2 to 4 strengths of the CV.
3. Identify 3 to 5 specific improvements with a clear suggestion for each.
4. List any missing sections or elements (e.g. LinkedIn, summary, quantified achievements).
5. Recommend 2 to 4 courses from the catalog (or Alison.com external) that address identified skill gaps.
6. You MUST respond ONLY with a valid JSON object. No markdown, no explanation text.
7. Format:
{
  "overallScore": 72,
  "scoreLabel": "Good - some key gaps to address",
  "summary": "1-2 sentence overall impression of the CV.",
  "strengths": ["strength one", "strength two"],
  "improvements": [
    {
      "section": "Work Experience",
      "issue": "Bullet points are vague and lack measurable results.",
      "suggestion": "Add numbers: 'Increased sales by 30%' instead of 'Helped grow sales'."
    }
  ],
  "missingSections": ["Professional summary", "LinkedIn URL"],
  "courses": [
    {"type": "local", "id": "course-id", "targetSkill": "The skill this course addresses"},
    {"type": "external", "title": "Alison Course Title", "description": "1 sentence.", "category": "Category", "tag": "Certificate or Diploma", "targetSkill": "The skill this addresses"}
  ]
}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite-preview',
      contents: userInput,
      config: { systemInstruction: systemPrompt, temperature: 0.2, responseMimeType: 'application/json' },
    });

    const responseText = response.text ?? '';

    let review: any;
    try {
      review = JSON.parse(responseText);
    } catch {
      console.error('Failed to parse Gemini response:', responseText);
      return NextResponse.json({ error: 'The AI returned an invalid format. Please try again.' }, { status: 500 });
    }

    const resolvedCourses = (review.courses || [])
      .map((item: any) => {
        let courseData: any = null;
        if (item.type === 'local' && item.id) {
          const found = courses.find((c) => c.id === item.id);
          if (found) courseData = { ...found };
        } else if (item.type === 'external') {
          courseData = {
            id: `ext-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            title: item.title,
            description: item.description,
            category: item.category || 'Online Course',
            tag: item.tag || 'Certificate',
            duration: 'Self-Paced',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            affiliateLink: `https://alison.com/courses?query=${encodeURIComponent(item.title)}&utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205`,
            isExternal: true,
          };
        }
        if (!courseData) return null;
        return { ...courseData, targetSkill: item.targetSkill };
      })
      .filter(Boolean);

    return NextResponse.json({
      overallScore: review.overallScore,
      scoreLabel: review.scoreLabel,
      summary: review.summary,
      strengths: review.strengths || [],
      improvements: review.improvements || [],
      missingSections: review.missingSections || [],
      courses: resolvedCourses,
    });
  } catch (error: any) {
    console.error('Error fetching CV review from Gemini:', error);
    return NextResponse.json({ error: error.message || 'An unexpected error occurred.' }, { status: 500 });
  }
}
