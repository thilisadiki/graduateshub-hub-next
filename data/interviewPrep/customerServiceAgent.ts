import type { InterviewPrep } from '@/types';

export const customerServiceAgentPrep: InterviewPrep = {
  id: 'customer-service-agent',
  role: 'Customer Service Agent',
  category: 'business',
  curator: 'jason',
  lastUpdated: 'Apr 2026',
  description: 'CV tips and common interview questions for customer service and call centre roles in South Africa. Covers complaint handling, NPS, CRM basics, and the communication skills SA contact centres specifically screen for.',
  salaryRange: 'R90,000 – R180,000 per year (entry level, South Africa)',

  cvMustInclude: [
    'Any customer-facing work experience, even part-time or volunteer: retail, hospitality, tutoring, community work',
    'Specific metrics you improved or maintained if available: customer satisfaction scores, response times, or resolution rates',
    'CRM systems you have used: Salesforce, Freshdesk, Zoho, SAP CRM, or even basic ticketing tools',
    'Languages you speak fluently, listed clearly - multilingual ability is a significant competitive advantage in SA contact centres',
    'A professional summary that leads with customer service orientation, not just your qualification',
    'Any short courses completed: Conflict Resolution, Telephone Etiquette, or Customer Experience Management',
  ],

  cvAvoid: [
    'Vague statements like "good with people" - back up every claim with a real example or context',
    'Listing a customer-facing job without describing what you did, who you served, or any outcome you contributed to',
    'Using a CV template that looks informal or unprofessional - even for entry-level roles, SA contact centre managers screen for attention to detail',
    'Omitting your language proficiency - this is one of the most actively screened fields in SA customer service hiring',
    'A CV longer than one page for entry-level. Contact centre HR teams process high volumes and read quickly',
  ],

  cvTips: [
    {
      heading: 'Turn every customer interaction into a measurable result',
      body: 'Even without formal work experience, you can describe customer-facing interactions with outcomes. "Volunteered as a frontline query handler at a campus financial aid office for six months, assisting an average of 30 students per day with fee-related queries" is far stronger than "volunteered at a student office." If you worked in retail, estimate the transaction volume: "served approximately 80 customers per shift in a high-volume grocery environment." Numbers signal that you understand the scale and pace of service work.',
    },
    {
      heading: 'Highlight your language abilities prominently',
      body: 'South Africa has 11 official languages, and most large contact centres actively recruit agents who can serve customers in isiZulu, Afrikaans, Sesotho, isiXhosa, or other languages in addition to English. List every language you can communicate in professionally, with an honest proficiency level (conversational, professional, or native). A bilingual or multilingual agent in South Africa commands attention immediately in a stack of English-only CVs.',
    },
    {
      heading: 'Address conflict resolution directly',
      body: 'SA customer service roles deal with a high rate of frustrated or escalating callers, and hiring managers know this. Proactively addressing your ability to de-escalate and resolve complaints - even in your summary - signals maturity. Include a concrete example if possible: "During my part-time retail role, I managed several customer returns disputes that escalated to supervisor level and resolved all of them without escalation by following our returns policy and maintaining a calm, solution-focused tone."',
    },
    {
      heading: 'Demonstrate familiarity with customer experience concepts',
      body: 'Many SA contact centres operate formal customer experience (CX) frameworks. Mentioning familiarity with NPS (Net Promoter Score), CSAT (Customer Satisfaction Score), or FCR (First Call Resolution) on your CV - even if only from coursework or self-study - signals that you understand service quality measurement. These terms appear constantly in SA contact centre job postings and stand out when a candidate uses them unprompted.',
    },
  ],

  keySkills: [
    'Verbal and written communication across multiple channels',
    'Active listening and empathy',
    'De-escalation and complaint resolution',
    'CRM data entry and ticket management',
    'Multilingual communication (varies by candidate)',
    'First-call resolution principles',
    'South African Consumer Protection Act basics',
  ],

  questions: [
    {
      question: 'Tell me about a time you dealt with an angry or difficult customer. What happened and how did you handle it?',
      why: 'This is the single most common customer service interview question in South Africa. It tests emotional regulation, empathy, and professional conflict resolution simultaneously.',
      sampleAnswer: 'While working part-time at a retail store, a customer came in very upset about a product she had bought that stopped working after two days. She was raising her voice and said she felt like she had been sold a defective product on purpose. I let her finish speaking without interrupting. I then said: "I completely understand your frustration - that is not the experience we want you to have, and I am going to make sure we resolve this for you right now." I checked the product against our returns policy, confirmed it was within the exchange window, and offered her an immediate exchange or a full refund. She chose the exchange, left satisfied, and even thanked me. The key was not taking her tone personally and staying focused on the resolution, not the emotion.',
      redFlag: 'Saying "I would stay calm" without describing any specific de-escalation technique or empathy expression. Generic composure answers do not convince SA interviewers.',
    },
    {
      question: 'What does good customer service mean to you?',
      why: 'SA contact centres use this to test whether a candidate has thought about customer service as a craft or just sees it as answering calls. Candidates who show awareness of the customer experience difference stand out.',
      sampleAnswer: 'Good customer service means resolving the customer\'s actual problem, not just the one they described. Often what someone calls about is a symptom of a larger frustration. Good service also means making the customer feel heard before trying to solve anything - people can tell when an agent is rushing to get to the solution without listening. It means being honest when something cannot be done, rather than creating false expectations. And it means following through: if you tell a customer you will call them back, you call them back. In South Africa specifically, where many customers have had poor service experiences, delivering on what you promised - even in small things - builds the kind of loyalty that drives repeat business.',
    },
    {
      question: 'How do you manage your composure when you have had ten difficult calls in a row and a customer is rude to you?',
      why: 'Contact centre agents in SA handle high call volumes, and burnout and emotional fatigue are real. Managers want to see that you have strategies for sustaining performance through pressure.',
      sampleAnswer: 'I remind myself that in almost every case, the customer is not angry with me personally - they are frustrated with a situation, and I happen to be the person they can reach. That reframe helps me stay neutral. I also practise what I would call a micro-reset between calls: before picking up the next call I take one breath, review the account or ticket history, and go in focused rather than carrying the residue of the previous call. In a team environment, I would also be honest with a team leader if I felt my quality slipping - better to flag it early and get a short break than to have a poor interaction that damages a customer relationship or reflects badly on the team.',
    },
    {
      question: 'What do you know about the Consumer Protection Act and how does it affect a customer service agent?',
      why: 'The Consumer Protection Act (CPA) is South African legislation that every customer service agent is expected to be familiar with. Mentioning it signals local market readiness.',
      sampleAnswer: 'The Consumer Protection Act of 2008 gives South African consumers a set of fundamental rights in their dealings with businesses, including the right to fair and honest dealing, the right to disclosure of information, the right to return defective goods within six months of purchase, and the right to plain language contracts. For a customer service agent, the most relevant sections deal with returns and exchanges, product warranties, and misleading advertising. If a customer has a complaint about a defective product, the CPA gives them the right to a repair, replacement, or refund. Understanding this means I can resolve disputes confidently without overpromising or underpromising - I know what the customer is legally entitled to, which makes the conversation more productive for both parties.',
    },
    {
      question: 'Describe how you would handle a call where you do not know the answer to a customer\'s question.',
      why: 'Bluffing is one of the most common and damaging things call centre agents do. SA contact centre managers test whether candidates know how to handle knowledge gaps honestly.',
      sampleAnswer: 'I would not guess or make up an answer. I would be upfront with the customer: "That is a great question and I want to give you an accurate answer rather than guess - let me put you on a brief hold while I check the correct information, or I can get a specialist to call you back within a set timeframe." I would then escalate to the correct person or check our knowledge base. When I return to the customer, I would confirm the answer clearly and follow up in writing if it was complex. The worst thing you can do is give incorrect information that a customer acts on - it erodes trust and creates more problems than the original query.',
    },
    {
      question: 'What does NPS stand for and what does it measure?',
      why: 'NPS is the most widely used customer loyalty metric in SA contact centres. Entry-level candidates who know this terminology stand out from those who do not.',
      sampleAnswer: 'NPS stands for Net Promoter Score. It measures customer loyalty by asking one question: "How likely are you to recommend this company to a friend or colleague?" on a scale from 0 to 10. Respondents are grouped into Promoters (9–10), Passives (7–8), and Detractors (0–6). The NPS is calculated by subtracting the percentage of Detractors from the percentage of Promoters. A higher score means more customers are likely to recommend the business. In a customer service context, the score is often tracked at the individual agent level as well - so how I handle each call can directly affect the company\'s NPS. Knowing this makes me take every interaction seriously, not just the escalated ones.',
    },
  ],

  relatedRoadmapId: '',
  relatedPrepIds: ['digital-marketing-coordinator', 'business-analyst', 'hr-coordinator'],
};
