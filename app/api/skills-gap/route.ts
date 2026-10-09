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
    level: course.tag || 'Certificate',
    keywords: course.description.substring(0, 150),
  }));

const MAX_TARGET_LENGTH = 200;
const MAX_SKILLS_LENGTH = 2_000;

const limiter = createRateLimiter({ max: 5, windowSeconds: 60 });

export async function POST(request: NextRequest) {
  const limited = limiter.check(getClientIp(request));
  if (limited) return limited;

  let jobTarget: string;
  let currentSkills: string;
  try {
    const body = await request.json();
    const botCheck = await checkBotProtection(body);
    if (botCheck) return botCheck;

    jobTarget = body.jobTarget;
    currentSkills = body.currentSkills;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!jobTarget?.trim()) {
    return NextResponse.json({ error: 'Please provide a target job or role.' }, { status: 400 });
  }
  if (jobTarget.length > MAX_TARGET_LENGTH) {
    return NextResponse.json({ error: `Target role must be under ${MAX_TARGET_LENGTH} characters.` }, { status: 400 });
  }
  if (currentSkills && currentSkills.length > MAX_SKILLS_LENGTH) {
    return NextResponse.json({ error: `Skills list must be under ${MAX_SKILLS_LENGTH.toLocaleString()} characters.` }, { status: 400 });
  }

  const catalog = getSimplifiedCatalog();
  const userInput = `Target job/role: ${jobTarget}\nCurrent skills: ${currentSkills || 'Not specified'}`;

  const systemPrompt = `
You are a career coach and skills gap analyst for Graduates Hub.
Given a user's target job/role and current skills, identify the gap and recommend courses.

Here is our course catalog (JSON):
${JSON.stringify(catalog)}

INSTRUCTIONS:
1. Identify 2 to 4 skills the user already has that are relevant to their target role (matchedSkills).
2. Identify 3 to 5 skills they are missing or need to improve (missingSkills).
3. Recommend 3 to 5 courses from the catalog (or Alison.com external) to fill the gaps.
4. You MUST respond ONLY with a valid JSON object. No markdown, no explanation text.
5. Format:
{
  "jobTitle": "Cleaned/formatted job title",
  "summary": "1-2 sentence summary of the gap analysis.",
  "matchedSkills": ["skill1", "skill2"],
  "missingSkills": ["skill3", "skill4", "skill5"],
  "courses": [
    {"type": "local", "id": "course-id", "targetSkill": "The skill this course addresses"},
    {"type": "external", "title": "Alison Course Title", "description": "1 sentence.", "category": "Category", "tag": "Certificate or Diploma", "targetSkill": "The skill this addresses"}
  ]
}`;

  try {
    const analysis = await generateStructuredJSON({
      systemPrompt,
      userInput,
      temperature: 0.2,
    });

    const resolvedCourses = (analysis.courses || [])
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
      jobTitle: analysis.jobTitle,
      summary: analysis.summary,
      matchedSkills: analysis.matchedSkills || [],
      missingSkills: analysis.missingSkills || [],
      courses: resolvedCourses,
    });
  } catch (error: any) {
    console.error('Error fetching skills gap:', error);
    return NextResponse.json(
      { error: error?.message?.includes('Missing AI API Key') ? 'AI service configuration error: missing API key.' : 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
