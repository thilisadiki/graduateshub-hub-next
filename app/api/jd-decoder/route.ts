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

  let jobDescription: string;
  try {
    const body = await request.json();
    jobDescription = body.jobDescription;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!jobDescription?.trim() || jobDescription.trim().length < 100) {
    return NextResponse.json({ error: 'Please paste a job description (at least 100 characters).' }, { status: 400 });
  }

  const ai = new GoogleGenAI({ apiKey });
  const catalog = getSimplifiedCatalog();

  const systemPrompt = `
You are an expert career coach and job description analyst for Graduates Hub.
Your job is to decode a job posting and extract everything a candidate needs to know — clearly and practically.

Here is our course catalog (JSON) — recommend courses from it to help candidates meet the job requirements:
${JSON.stringify(catalog)}

INSTRUCTIONS:
1. Extract the job title and company name (if mentioned, otherwise null).
2. Write a 1-2 sentence plain-English summary of what the role actually involves day-to-day.
3. Separate required skills (must-have) from nice-to-have skills (bonus).
4. List 3 to 5 key responsibilities in plain language (not copy-pasted from the JD).
5. Extract the experience and qualification requirements.
6. Flag any red flags in the posting (e.g. "unlimited responsibilities", vague compensation, excessive requirements for junior roles). If none, return an empty array.
7. Recommend 2 to 4 courses from the catalog (or Alison.com external) that directly address required skills.
8. You MUST respond ONLY with a valid JSON object. No markdown, no explanation text.
9. Format:
{
  "jobTitle": "Extracted or inferred job title",
  "company": "Company name or null",
  "summary": "Plain-English summary of the role.",
  "requiredSkills": ["skill1", "skill2"],
  "niceToHaveSkills": ["skill3", "skill4"],
  "responsibilities": ["What you will actually do day-to-day (plain language)"],
  "experienceRequired": "e.g. 2-3 years in a similar role",
  "qualifications": ["Bachelor's degree in X or equivalent"],
  "redFlags": ["e.g. '5+ years experience required for an entry-level salary'"],
  "courses": [
    {"type": "local", "id": "course-id", "targetSkill": "The required skill this addresses"},
    {"type": "external", "title": "Alison Course Title", "description": "1 sentence.", "category": "Category", "tag": "Certificate or Diploma", "targetSkill": "The skill this addresses"}
  ]
}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite-preview',
      contents: jobDescription,
      config: { systemInstruction: systemPrompt, temperature: 0.2, responseMimeType: 'application/json' },
    });

    const responseText = response.text ?? '';

    let decoded: any;
    try {
      decoded = JSON.parse(responseText);
    } catch {
      console.error('Failed to parse Gemini response:', responseText);
      return NextResponse.json({ error: 'The AI returned an invalid format. Please try again.' }, { status: 500 });
    }

    const resolvedCourses = (decoded.courses || [])
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
      jobTitle: decoded.jobTitle,
      company: decoded.company || null,
      summary: decoded.summary,
      requiredSkills: decoded.requiredSkills || [],
      niceToHaveSkills: decoded.niceToHaveSkills || [],
      responsibilities: decoded.responsibilities || [],
      experienceRequired: decoded.experienceRequired || null,
      qualifications: decoded.qualifications || [],
      redFlags: decoded.redFlags || [],
      courses: resolvedCourses,
    });
  } catch (error: any) {
    console.error('Error fetching JD decode from Gemini:', error);
    return NextResponse.json({ error: error.message || 'An unexpected error occurred.' }, { status: 500 });
  }
}
