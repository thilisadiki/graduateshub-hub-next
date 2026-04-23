import type { InterviewPrep } from '@/types';

export const juniorGraphicDesignerPrep: InterviewPrep = {
  id: 'junior-graphic-designer',
  role: 'Junior Graphic Designer',
  category: 'marketing',
  curator: 'jason',
  lastUpdated: 'Apr 2026',
  description: 'CV tips and the real interview questions for junior graphic designer roles in South Africa. Covers portfolio presentation, Adobe suite proficiency, brand consistency, and the creative briefs SA employers use to screen candidates.',
  salaryRange: 'R120,000 – R210,000 per year (entry level, South Africa)',

  cvMustInclude: [
    'A portfolio link at the very top of your CV - Behance, a personal website, or a Google Drive folder. Without a portfolio, the CV is effectively incomplete',
    'A focused summary that names your design specialisation (brand identity, social media graphics, UI/UX, print)',
    'Specific tools you are proficient in: Adobe Illustrator, Photoshop, InDesign, Figma, Canva Pro',
    'Internship, freelance, or volunteer design work, even small projects count - a local business flyer, a student club social post, a church event programme',
    'Any formal qualification: National Diploma in Graphic Design, BA Visual Communication, or a recognised online certificate from institutions like Vega or Red & Yellow',
    'File format knowledge: working with print-ready files, CMYK vs RGB colour modes, bleeds and safe zones',
  ],

  cvAvoid: [
    'A text-heavy CV with no visual design quality - your CV IS your first design submission',
    'Listing tools without demonstrating them. If you claim Illustrator proficiency, your portfolio must contain vector work',
    'Including every piece of student work regardless of quality. Curate ruthlessly - five strong pieces beat fifteen mediocre ones',
    'A portfolio that is not mobile-accessible. SA recruiters open links on their phones and a PDF-only portfolio is a barrier',
    'Claiming brand design experience without being able to discuss the brief, client objective, and design decisions made',
  ],

  cvTips: [
    {
      heading: 'Your CV is a design test before the interview',
      body: 'South African design studios and agencies treat the visual quality of your CV as part of the screening. Layout, typography, white space, and colour choices all communicate your design judgment. Do not use a generic Microsoft Word template. Build your CV in InDesign or Figma, export it as a clean PDF, and make sure the typography is consistent, the hierarchy is clear, and the spacing is deliberate. If it looks like a first-year student made it, that is the signal you are sending.',
    },
    {
      heading: 'Frame every portfolio piece with context',
      body: 'SA creative directors do not just want to see what you made - they want to know why you made those choices. For each portfolio piece, include a one or two line brief summary: what the client or brief asked for, what the audience was, and what constraint you were designing within. "Social media campaign for a Cape Town coffee brand targeting students, designed for Instagram Reels format in a 48-hour turnaround" is far more useful than just posting the finished image.',
    },
    {
      heading: 'Demonstrate print AND digital fluency',
      body: 'Many SA design roles require both print (brochures, banners, business cards, magazines) and digital (social media, email headers, web assets) output. Entry-level candidates who know only one medium limit themselves significantly. If your portfolio is only social media graphics, add even one print-ready document showing bleed marks, CMYK colour mode, and correct DPI. It signals to a studio that you understand production requirements beyond the screen.',
    },
    {
      heading: 'Include process work, not just finished products',
      body: 'South African agencies value designers who can articulate their thinking. Include rough sketches, mood boards, or iteration screenshots alongside final work. This is especially important for roles in brand identity and packaging. Showing that you explored multiple directions before arriving at the final answer demonstrates structured creative thinking, which is what separates employable designers from people who got lucky with a good-looking output.',
    },
  ],

  keySkills: [
    'Adobe Creative Suite: Illustrator, Photoshop, InDesign',
    'Typography and layout principles',
    'Brand identity and visual consistency',
    'Print production: CMYK, bleeds, DPI, print-ready file preparation',
    'Digital asset creation: social media, email, web',
    'Figma or similar UI/UX tools (increasingly expected)',
    'Creative brief interpretation and client communication',
  ],

  questions: [
    {
      question: 'Walk me through one piece in your portfolio and explain the design decisions you made.',
      why: 'This is the most common opening question in SA design interviews. It tests whether you can articulate your process or whether you just produce output without intention.',
      sampleAnswer: 'I would choose the brand identity project I completed for a local coffee shop during my internship. The brief was to create a visual identity that felt warm and artisanal without looking generic. I started by mapping competitors - most used dark brown and rustic textures, which felt clichéd. I decided to go a lighter, more modern direction: a warm off-white background with a terracotta accent, paired with a hand-lettered wordmark. The typography choice was intentional - a clean sans-serif for body text balanced the character of the handwritten logo. I presented three different directions to the client and walked through the rationale for each one before they selected a direction.',
    },
    {
      question: 'What is the difference between CMYK and RGB, and when do you use each?',
      why: 'A fundamental production knowledge check. Getting this wrong at entry level is a significant red flag for SA studios that produce print work.',
      sampleAnswer: 'RGB stands for Red, Green, Blue and is the colour model used for screens - monitors, phones, projectors. Because screens produce light, combining the three channels at full strength gives white. CMYK stands for Cyan, Magenta, Yellow, and Key (Black) and is the colour model used for print. Ink on paper is subtractive - combining all colours gives dark brown or black, not white. You should always design print work in CMYK from the start, because colours that look vibrant on screen in RGB often become flat or shift significantly when converted to CMYK for printing. For digital-only output - social media, web, email - RGB is correct.',
      redFlag: 'A candidate who claims print design experience but cannot explain this distinction has likely not produced real print-ready work.',
    },
    {
      question: 'How do you handle feedback from a client or creative director who wants changes you disagree with?',
      why: 'SA design studios deal with strong-willed clients and internal hierarchies. Interviewers test whether you can take direction professionally without being a pushover or a yes-person.',
      sampleAnswer: 'I would not simply accept feedback silently or push back defensively. If a client asks for a change I think weakens the design, I will acknowledge their feedback first, then explain my original reasoning briefly and professionally: "I understand you want the logo larger - my concern is that it starts to compete with the headline text at that size. Could I show you a version where we increase brand presence through colour instead?" I present an alternative and let them decide. Ultimately, it is their brand and their money, and if they still want the original change after understanding the trade-off, I make it without resentment. Part of being a professional designer is knowing when to advocate and when to execute.',
    },
    {
      question: 'Describe how you would approach a brand identity design project from brief to delivery.',
      why: 'This question separates designers with structured process thinking from those who open Illustrator and start drawing immediately - a common and costly mistake.',
      sampleAnswer: 'I would start with a discovery phase: interviewing the client about their business, their target audience, their competitors, and what they want the brand to feel like. I would ask for reference brands they admire and ones they want to avoid. From there, I do a competitive audit to understand the visual landscape. I then develop a mood board to align on direction before drawing anything. Once approved, I sketch multiple logo concepts - usually exploring three distinct directions - before refining them digitally. I present the shortlisted directions with rationale, gather feedback, and iterate. Final deliverables include the logo in all required file formats (AI, EPS, SVG, PNG, PDF), a basic brand guide covering colour codes, typography, and usage rules.',
    },
    {
      question: 'Which design trends are you currently following and how do they influence your work?',
      why: 'SA creative directors want to know that entry-level designers are engaged with the industry and have opinions, not just technical skills.',
      sampleAnswer: 'I have been following the shift toward more tactile, hand-crafted aesthetics as a response to the clean and sterile look that dominated the 2010s. Brands are leaning into imperfect textures, hand-lettering, and analogue photography. I also find the resurgence of brutalist typography in digital design interesting - it challenges the assumption that good design must be safe and polished. That said, I am careful about applying trends indiscriminately. A trend that works for a streetwear brand would look wrong for a financial services firm. My approach is to stay aware of what is happening in the industry so I have the vocabulary to have that conversation with a client, but always design for the specific brief first.',
    },
    {
      question: 'How do you manage your time when working on multiple design projects with competing deadlines?',
      why: 'Studio environments in SA often require designers to handle three to five projects simultaneously. Poor time management is one of the most common complaints SA creative directors have about junior designers.',
      sampleAnswer: 'I use a simple system: each project gets broken into production phases - brief, concept, design, review, amends, delivery - with estimated hours for each. I map these against my deadlines to see where the crunch points are. If I identify a conflict early, I raise it with my manager immediately rather than hoping I can absorb it. I also protect concept time specifically - the beginning of a project is where the most important thinking happens, and it gets squeezed if you leave it to last. I set aside the first part of my day for creative work and save client emails and admin for the afternoon when my best thinking energy has already been used.',
    },
  ],

  relatedRoadmapId: 'digital-marketing-specialist',
  relatedPrepIds: ['digital-marketing-coordinator', 'web-developer', 'business-analyst'],
};
