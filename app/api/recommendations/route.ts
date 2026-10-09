import { NextRequest, NextResponse } from 'next/server';
import { generateStructuredJSON } from '@/lib/ai';
import { checkBotProtection } from '@/utils/security';
import { createRateLimiter, getClientIp } from '@/utils/rateLimit';
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

const MAX_QUERY_LENGTH = 1_000;

const limiter = createRateLimiter({ max: 10, windowSeconds: 60 });

export async function POST(request: NextRequest) {
  const limited = limiter.check(getClientIp(request));
  if (limited) return limited;

  let userQuery: string;
  try {
    const body = await request.json();
    const botCheck = await checkBotProtection(body);
    if (botCheck) return botCheck;

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
  if (userQuery.length > MAX_QUERY_LENGTH) {
    return NextResponse.json(
      { error: `Your query must be under ${MAX_QUERY_LENGTH.toLocaleString()} characters.` },
      { status: 400 }
    );
  }

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
4. You MUST respond ONLY with a valid JSON object.
5. Format:
{
  "courses": [
    {"type": "local", "id": "the-course-id"},
    {
      "type": "external",
      "title": "Exact Full Alison Course Title",
      "description": "A short 1-sentence description.",
      "category": "Broad Category (e.g. IT, Business)",
      "tag": "Certificate or Diploma"
    }
  ]
}`;

  try {
    const parsed = await generateStructuredJSON({
      systemPrompt,
      userInput: userQuery,
      temperature: 0.2,
    });

    const rawCourses: any[] = Array.isArray(parsed)
      ? parsed
      : Array.isArray(parsed?.courses)
      ? parsed.courses
      : [];

    const recommendedCourses = rawCourses
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
    console.error('Error fetching recommendations:', error);
    return NextResponse.json(
      { error: error?.message?.includes('Missing AI API Key') ? 'AI service configuration error: missing API key.' : 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
