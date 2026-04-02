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
    keywords: course.description.substring(0, 150) + '...',
  }));

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing Gemini API Key.' }, { status: 500 });
  }

  let userQuery: string;
  try {
    const body = await request.json();
    userQuery = body.query;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!userQuery || userQuery.trim() === '') {
    return NextResponse.json(
      { error: "Please provide some information about what you'd like to learn." },
      { status: 400 }
    );
  }

  const ai = new GoogleGenAI({ apiKey });
  const catalog = getSimplifiedCatalog();

  const systemPrompt = `
You are an expert career and educational advisor for Graduates Hub.
Your task is to recommend the best courses from our catalog based on the user's input.
Analyze the user's core interests, goals, or current skill gaps.

Here is our current course catalog (in JSON format):
${JSON.stringify(catalog)}

INSTRUCTIONS:
1. Select exactly 3 to 6 courses that best match the user's request.
2. If the user's request matches courses in our provided JSON catalog, recommend those.
3. If the user wants to learn a topic that is NOT well-covered in our local catalog, recommend real courses available on the main Alison.com platform.
4. You MUST respond ONLY with a valid JSON array of objects. Do not include markdown formatting like \`\`\`json in the response.
5. For local courses from the catalog, the object should look like:
   {"type": "local", "id": "the-course-id"}
6. For external Alison courses not in the catalog, the object should look like:
   {
     "type": "external",
     "title": "Exact Full Alison Course Title",
     "description": "A short 1-sentence description.",
     "category": "Broad Category (e.g. IT, Business)",
     "tag": "Certificate or Diploma"
   }
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite-preview',
      contents: userQuery,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.2,
      },
    });

    const responseText = response.text ?? '';
    const cleanJsonString = responseText.replace(/```json/g, '').replace(/```/g, '').trim();

    let parsedResponse: any[];
    try {
      parsedResponse = JSON.parse(cleanJsonString);
    } catch {
      console.error('Failed to parse Gemini response as JSON:', responseText);
      return NextResponse.json(
        { error: 'The AI returned an invalid format. Please try again.' },
        { status: 500 }
      );
    }

    if (!Array.isArray(parsedResponse)) {
      return NextResponse.json(
        { error: 'The AI returned an invalid format. Expected an array.' },
        { status: 500 }
      );
    }

    const recommendedCourses = parsedResponse
      .map((item) => {
        if (item.type === 'local' && item.id) {
          return courses.find((c) => c.id === item.id) ?? null;
        } else if (item.type === 'external') {
          return {
            id: `ext-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            title: item.title,
            description: item.description,
            category: item.category || 'Alison Course',
            tag: item.tag || 'Online Course',
            duration: 'Self-Paced',
            rating: 4.8,
            image:
              'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            affiliateLink: `https://alison.com/courses?query=${encodeURIComponent(item.title)}&utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205`,
            isExternal: true,
          };
        }
        return null;
      })
      .filter(Boolean);

    return NextResponse.json({ courses: recommendedCourses });
  } catch (error: any) {
    console.error('Error fetching recommendations from Gemini:', error);
    return NextResponse.json({ error: error.message || 'An unexpected error occurred.' }, { status: 500 });
  }
}
