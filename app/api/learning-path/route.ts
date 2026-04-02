import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { courses } from '@/data/courses';

const getSimplifiedCatalog = () =>
  courses.map((course) => ({
    id: course.id,
    title: course.title,
    category: course.category,
    subCategory: course.subCategory || '',
    level: course.tag || 'Certificate',
    keywords: course.description.substring(0, 150),
  }));

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'Missing Gemini API Key.' }, { status: 500 });

  let goal: string;
  try {
    const body = await request.json();
    goal = body.goal;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!goal?.trim()) {
    return NextResponse.json({ error: 'Please provide a career goal.' }, { status: 400 });
  }

  const ai = new GoogleGenAI({ apiKey });
  const catalog = getSimplifiedCatalog();

  const systemPrompt = `
You are an expert career coach and educational advisor for Graduates Hub.
Your task is to create a structured, step-by-step learning path for the user to reach their stated goal.

Here is our course catalog (JSON):
${JSON.stringify(catalog)}

INSTRUCTIONS:
1. Create 3 to 4 learning phases (e.g. Foundation → Intermediate → Advanced → Specialization).
2. Each phase should have 1 to 2 course recommendations.
3. For courses available in our catalog, use type "local" with the course id.
4. For topics not covered in the catalog, recommend real Alison.com courses using type "external".
5. You MUST respond ONLY with a valid JSON array. No markdown, no explanation text.
6. Format:
[
  {
    "phase": 1,
    "title": "Phase Title",
    "goal": "What the learner will achieve in this phase (1 sentence).",
    "courses": [
      {"type": "local", "id": "the-course-id"},
      {"type": "external", "title": "Exact Alison Course Title", "description": "1 sentence description.", "category": "Category", "tag": "Certificate or Diploma"}
    ]
  }
]`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite-preview',
      contents: goal,
      config: { systemInstruction: systemPrompt, temperature: 0.2 },
    });

    const responseText = response.text ?? '';
    const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();

    let phases: any[];
    try {
      phases = JSON.parse(cleanJson);
    } catch {
      console.error('Failed to parse Gemini response:', responseText);
      return NextResponse.json({ error: 'The AI returned an invalid format. Please try again.' }, { status: 500 });
    }

    if (!Array.isArray(phases)) {
      return NextResponse.json({ error: 'The AI returned an invalid format.' }, { status: 500 });
    }

    const result = phases.map((phase) => ({
      phase: phase.phase,
      title: phase.title,
      goal: phase.goal,
      courses: (phase.courses || [])
        .map((item: any) => {
          if (item.type === 'local' && item.id) {
            return courses.find((c) => c.id === item.id) ?? null;
          } else if (item.type === 'external') {
            return {
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
          return null;
        })
        .filter(Boolean),
    }));

    return NextResponse.json({ phases: result });
  } catch (error: any) {
    console.error('Error fetching learning path from Gemini:', error);
    return NextResponse.json({ error: error.message || 'An unexpected error occurred.' }, { status: 500 });
  }
}
