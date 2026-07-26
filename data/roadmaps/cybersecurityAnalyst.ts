import type { CareerRoadmap } from '@/types';

export const cybersecurityAnalystRoadmap: CareerRoadmap = {
  id: 'cybersecurity-analyst',
  title: 'How to Become a Cybersecurity Analyst',
  tagline: 'Protect corporate networks, audit security controls, and respond to cyber threats. No degree required.',
  category: 'it',
  curator: 'jason',
  timeToJobReady: '6–12 months',
  demandLevel: 'Very High',
  entryLevel: true,
  description:
    'A step-by-step career roadmap for becoming a Cybersecurity Analyst. Covers computer networking, threat intelligence, security architecture (CISSP), risk compliance (DORA/GDPR), and incident response.',
  overview:
    'Cybersecurity analysts serve as the frontline defenders of corporate digital infrastructure. Your core job is to monitor networks, identify vulnerabilities, configure security controls, and respond to cyber threats before data breaches occur. As organizations face rising cyber attacks and strict data privacy regulations, demand for skilled security analysts continues to skyrocket worldwide.\n\nThe cybersecurity learning path is highly accessible to self-taught learners. While formal computer science degrees were once required, employers now prioritize hands-on tool competency, practical threat analysis, and industry certifications. By following this structured roadmap, you will gain the foundational knowledge to land entry-level roles such as Junior SOC Analyst, Security Administrator, or Information Security Assistant.',
  jobTitles: [
    'Junior Cybersecurity Analyst',
    'SOC Analyst Level 1',
    'Information Security Assistant',
    'Cyber Risk & Compliance Analyst',
    'IT Security Administrator',
    'Vulnerability Assessment Assistant',
  ],
  technicalSkills: [
    'Computer Networking (TCP/IP, DNS, Subnetting, Firewalls)',
    'Security Frameworks (CISSP Domains, NIST, ISO 27001)',
    'SIEM & Log Monitoring (Splunk, Elastic, Wireshark)',
    'Vulnerability Assessment & Threat Modeling',
    'Regulatory Compliance (DORA, GDPR, POPIA)',
    'Secure Architecture & IAM (Identity Access Management)',
  ],
  softSkills: [
    'Critical thinking & investigative mindset',
    'Calm under pressure during security incidents',
    'Clear written incident reporting',
    'Ethical integrity & discretion',
  ],
  stages: [
    {
      number: 1,
      title: 'Master Networking & System Fundamentals',
      duration: '4–6 weeks',
      description:
        'You cannot defend a network if you do not understand how data travels across it. Stage 1 focuses on computer networking fundamentals: TCP/IP protocols, IP addressing, DNS resolution, routing, and basic firewall configurations. You will learn how systems communicate and where traffic vulnerabilities exist.',
      courseIds: ['diploma-in-certified-information-systems-security-professional-cissp-2024'],
      milestone:
        'You understand the OSI model, IP subnetting, port protocols, and how firewalls inspect network traffic.',
    },
    {
      number: 2,
      title: 'Understand Security Governance & CISSP Domains',
      duration: '6–8 weeks',
      description:
        'Security is more than just stopping hackers; it is about building enterprise governance. This stage explores the core domains of information security: Identity and Access Management (IAM), security architecture, cryptography, and asset protection.',
      courseIds: ['diploma-in-certified-information-systems-security-professional-cissp-2024'],
      milestone:
        'You understand CIA Triad principles (Confidentiality, Integrity, Availability), IAM permission schemes, and enterprise security architecture.',
    },
    {
      number: 3,
      title: 'Master Compliance & Regulatory Frameworks (DORA & GDPR)',
      duration: '4–5 weeks',
      description:
        'Global legislation mandates how companies handle cybersecurity. Stage 3 covers key regulatory compliance frameworks such as the Digital Operational Resilience Act (DORA) and GDPR/POPIA data protection laws. Compliance knowledge is a major hiring factor for corporate and financial sector security roles.',
      courseIds: ['fundamentals-of-dora', 'gdpr-general-data-protection'],
      milestone:
        'You can evaluate organizational risk under DORA pillars, draft data protection guidelines, and conduct basic security compliance audits.',
    },
    {
      number: 4,
      title: 'Learn Secure Software Design & Threat Analysis',
      duration: '6–8 weeks',
      description:
        'Security must be built into applications from the design phase. This stage covers Secure Software Concepts, OWASP Top 10 vulnerabilities (SQL Injection, XSS), threat modeling, and input sanitization to prevent software exploits.',
      courseIds: ['secure-software-concepts-and-requirements', 'secure-software-design-and-implementation'],
      milestone:
        'You can identify common web vulnerabilities (OWASP Top 10), conduct basic threat modeling, and define secure software requirements.',
    },
    {
      number: 5,
      title: 'Vulnerability Testing, Incident Response & Portfolio',
      duration: '4–6 weeks',
      description:
        'The final stage prepares you for real-world Security Operations Center (SOC) duties. You will learn dynamic security testing (DAST/SAST), vulnerability scanning, incident logging, and how to write clear security incident reports.',
      courseIds: ['secure-software-testing-and-acceptance'],
      milestone:
        'You have conducted mock vulnerability audits, written incident response reports, and published a Proof of Work Portfolio badge.',
    },
  ],
  certifications: [
    {
      name: 'CompTIA Security+ (SY0-701)',
      provider: 'CompTIA',
      free: false,
      why: 'The globally recognized gold-standard baseline credential for entry-level cybersecurity roles.',
    },
    {
      name: 'Google Cybersecurity Professional Certificate',
      provider: 'Google / Coursera',
      free: false,
      why: 'Covers Python for security, Linux CLI, Wireshark, and SIEM tools (available free via Coursera Financial Aid).',
    },
    {
      name: 'IBM Cybersecurity Fundamentals Badge',
      provider: 'IBM SkillsBuild',
      free: true,
      why: '100% free digital badge verifying foundational threat intelligence and network defense skills.',
    },
    {
      name: 'Diploma in CISSP (CPD Accredited)',
      provider: 'Alison',
      free: true,
      why: 'Free CPD-accredited diploma covering enterprise security architecture and risk governance.',
    },
  ],
  portfolioProjects: [
    'Wireshark Packet Analysis: capture and analyze network traffic to identify suspicious HTTP/DNS anomalies',
    'Security Audit & Risk Assessment: conduct a mock DORA & GDPR compliance review for a small financial business',
    'Vulnerability Scan Report: run Nmap/OpenVAS scans on an isolated VM lab and draft a executive mitigation summary',
    'SIEM Dashboard: configure basic log ingestion alerts in Splunk or Elastic for failed SSH login attempts',
    'Incident Response Plan: draft a step-by-step containment and recovery playbook for a simulated ransomware outbreak',
  ],
  relatedRoadmapIds: ['it-support-specialist', 'web-developer', 'junior-qa-tester'],
  salaryBenchmarks: [
    { region: 'United States', range: '$60,000 – $90,000/year' },
    { region: 'United Kingdom', range: '£30,000 – £50,000/year' },
    { region: 'Canada', range: 'CA$58,000 – CA$85,000/year' },
    { region: 'Australia', range: 'A$70,000 – A$105,000/year' },
    { region: 'South Africa', range: 'R220,000 – R420,000/year' },
  ],
  remoteFriendly: 'Hybrid',
  difficulty: 'Intermediate',
  faqs: [
    {
      q: 'Do I need a university degree to become a Cybersecurity Analyst?',
      a: 'No. While computer science degrees are common, many hiring managers prioritize hands-on technical skills, CompTIA Security+ certification, and practical portfolio projects over traditional 4-year degrees.',
    },
    {
      q: 'Do I need to know how to code to work in cybersecurity?',
      a: 'Not heavily for entry-level SOC analyst roles. Basic scripting skills in Python or Bash help automate log parsing, but understanding networking, security frameworks, and log analysis tools is far more critical when starting out.',
    },
    {
      q: 'How long does it take to become job-ready as a Cybersecurity Analyst?',
      a: 'With 10–15 hours of consistent weekly study, most dedicated beginners can achieve entry-level job readiness in 6 to 12 months.',
    },
    {
      q: 'What is the difference between Ethical Hacking (Penetration Testing) and Cybersecurity Analysis?',
      a: 'Ethical Hackers (Red Team) proactively attempt to breach systems to find vulnerabilities. Cybersecurity Analysts (Blue Team) focus on defending networks, monitoring SIEM logs, auditing compliance, and responding to active security incidents.',
    },
  ],
  firstNinetyDays: [
    'Spend your first 30 days learning the organization\'s network topology, active firewalls, IAM roles, and key software assets',
    'Shadow senior SOC analysts to review daily alert queues, triage false positives, and understand logging priorities',
    'By month two, take ownership of routine vulnerability scans, patch management compliance, and weekly incident logs',
    'By month three, assist in updating security incident response playbooks and presenting basic risk metrics to your manager',
  ],
  commonMistakes: [
    {
      mistake: 'Focusing exclusively on ethical hacking tools without knowing basic networking',
      fix: 'Learn TCP/IP, subnetting, and DNS inside out first. You cannot defend or analyze traffic you do not understand.',
    },
    {
      mistake: 'Ignoring regulatory compliance (DORA, GDPR, POPIA)',
      fix: 'Corporate security teams spend massive time on compliance. Understanding regulatory risk makes you far more hireable.',
    },
    {
      mistake: 'Failing to document portfolio projects with clear incident reports',
      fix: 'Publishing a Wireshark or SIEM report with a professional executive summary proves you possess critical written communication skills.',
    },
  ],
};
