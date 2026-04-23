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

  let jobTitle: string;
  let experienceLevel: string;
  try {
    const body = await request.json();
    jobTitle = body.jobTitle;
    experienceLevel = body.experienceLevel || 'Mid Level';
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!jobTitle?.trim()) {
    return NextResponse.json({ error: 'Please provide a job title.' }, { status: 400 });
  }

  const ai = new GoogleGenAI({ apiKey });
  const catalog = getSimplifiedCatalog();
  const userInput = `Job title: ${jobTitle}\nExperience level: ${experienceLevel}`;

  const systemPrompt = `
You are an expert interview coach and career advisor for Graduates Hub.
Generate a realistic, practical interview preparation guide for the given job title and experience level.

Here is our course catalog (JSON) - recommend courses from it where relevant:
${JSON.stringify(catalog)}

INSTRUCTIONS:
1. Generate 6 to 8 interview questions: mix of behavioural, technical, and situational.
2. For each question include: the question, why interviewers ask it, a strong sample answer, and an optional red flag (what not to say).
3. Group questions by category: "Behavioural", "Technical", or "Situational".
4. List 4 to 6 key skills the candidate should highlight.
5. Provide 2 to 3 practical preparation tips specific to this role.
6. Recommend 2 to 3 courses from the catalog (or Alison.com external) relevant to the role.
7. You MUST respond ONLY with a valid JSON object. No markdown, no explanation text.
8. Format:
{
  "jobTitle": "Cleaned job title",
  "experienceLevel": "Entry Level / Mid Level / Senior",
  "summary": "1-2 sentence overview of what to expect in interviews for this role.",
  "keySkills": ["skill1", "skill2", "skill3"],
  "prepTips": ["tip1", "tip2"],
  "questions": [
    {
      "category": "Behavioural",
      "question": "Tell me about a time you handled a conflict at work.",
      "why": "Interviewers want to assess your communication and conflict resolution skills.",
      "sampleAnswer": "A concise, structured answer using the STAR method.",
      "redFlag": "Avoid blaming colleagues or speaking negatively about a previous employer."
    }
  ],
  "courses": [
    {"type": "local", "id": "course-id", "targetSkill": "The skill this course addresses"},
    {"type": "external", "title": "Alison Course Title", "description": "1 sentence.", "category": "Category", "tag": "Certificate or Diploma", "targetSkill": "The skill this addresses"}
  ]
}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite-preview',
      contents: userInput,
      config: { systemInstruction: systemPrompt, temperature: 0.3, responseMimeType: 'application/json' },
    });

    const responseText = response.text ?? '';

    let prep: any;
    try {
      prep = JSON.parse(responseText);
    } catch {
      console.error('Failed to parse Gemini response:', responseText);
      return NextResponse.json({ error: 'The AI returned an invalid format. Please try again.' }, { status: 500 });
    }

    const resolvedCourses = (prep.courses || [])
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
      jobTitle: prep.jobTitle,
      experienceLevel: prep.experienceLevel,
      summary: prep.summary,
      keySkills: prep.keySkills || [],
      prepTips: prep.prepTips || [],
      questions: prep.questions || [],
      courses: resolvedCourses,
    });
  } catch (error: any) {
    console.error('Error fetching interview prep from Gemini:', error);
    return NextResponse.json({ error: error.message || 'An unexpected error occurred.' }, { status: 500 });
  }
}
