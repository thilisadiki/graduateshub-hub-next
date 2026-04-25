import type { CareerRoadmap } from '@/types';

export const itSupportSpecialistRoadmap: CareerRoadmap = {
  id: 'it-support-specialist',
  title: 'How to Become an IT Support Specialist',
  tagline: 'The entry point into tech. No degree, no prior experience required.',
  category: 'it',
  curator: 'jason',
  lastUpdated: 'Apr 2026',
  timeToJobReady: '3–6 months',
  demandLevel: 'High',
  entryLevel: true,
  description:
    'A practical roadmap for breaking into IT support. Covers hardware fundamentals, networking, service management (ITIL 4), and the compliance frameworks every corporate IT team uses.',
  overview:
    'IT support is the most accessible entry point into a technology career. Companies of every size (banks, hospitals, retailers, government departments) employ IT support staff to keep systems running, troubleshoot user problems, and manage hardware and software infrastructure. The role does not require a degree, and the skills are entirely learnable through structured self-study.\n\nMore importantly, IT support is a launchpad. Most network engineers, systems administrators, and IT managers started in a support or helpdesk role. The knowledge you build here (how hardware works, how networks route traffic, how ITIL frameworks govern service delivery) applies directly to more advanced roles you will grow into.',
  jobTitles: [
    'IT Support Specialist',
    'Helpdesk Technician',
    'Junior IT Administrator',
    'Desktop Support Analyst',
    'Systems Support Technician',
    'Network Support Technician',
  ],
  technicalSkills: [
    'Computer hardware & operating systems',
    'Network fundamentals (TCP/IP, OSI model)',
    'LAN configuration & troubleshooting',
    'ITIL 4 service management framework',
    'IT security & compliance basics (DORA)',
    'Management information systems',
  ],
  softSkills: [
    'Patient, clear communication with non-technical users',
    'Systematic troubleshooting under pressure',
    'Documentation and ticket management',
    'Escalation judgement',
  ],
  stages: [
    {
      number: 1,
      title: 'Understand How Computers Actually Work',
      duration: '2–3 weeks',
      description:
        'Before you can support users, you need a solid mental model of what you are supporting. This stage covers the physical and logical components of a computer: CPU, RAM, storage, operating systems, and how software interacts with hardware. This is the knowledge that lets you diagnose whether a problem is hardware, OS, network, or application-level.',
      courseIds: ['intro-computer-hardware-software'],
      milestone:
        'You can explain the function of core hardware components and describe how an operating system manages resources.',
    },
    {
      number: 2,
      title: 'Learn Networking: How Computers Talk to Each Other',
      duration: '6–8 weeks',
      description:
        'Networking is the backbone of IT support. The majority of support tickets in a corporate environment are network-related: a device that cannot connect, a VPN that will not authenticate, a printer that is offline. This stage covers the OSI model, TCP/IP, IP addressing, routers, switches, and LAN configuration. You will study two complementary courses: one covering core networking theory and one diving into LAN and OSI specifics.',
      courseIds: ['computer-networking', 'computer-networking-lan-osi'],
      milestone:
        'You can configure a basic LAN, explain how IP addressing works, and diagnose common connectivity failures.',
    },
    {
      number: 3,
      title: 'Learn the ITIL 4 Service Management Framework',
      duration: '3–4 weeks',
      description:
        'ITIL 4 is the global standard for how IT departments operate. In any medium-to-large organisation, your work as an IT support specialist will be governed by ITIL principles: how incidents are logged, how changes are approved, how service requests are fulfilled. Without this knowledge, you will be operating blind in a corporate IT environment. With it, you speak the language your managers and clients use every day.',
      courseIds: ['foundations-of-itil-4'],
      milestone:
        'You can explain the ITIL 4 Service Value System, the guiding principles, and the key management practices including incident and change management.',
    },
    {
      number: 4,
      title: 'Add IT Management and Compliance Awareness',
      duration: '4–5 weeks',
      description:
        'Modern IT support roles increasingly require awareness of how technology serves business strategy and how compliance frameworks like DORA govern digital operations. This stage rounds out your knowledge so you can have informed conversations with management and understand the broader context of the work you do. It also positions you for promotion into IT management tracks.',
      courseIds: ['management-information-systems', 'fundamentals-of-dora', 'diploma-in-it-management'],
      milestone:
        'You understand how IT decisions align with business objectives and can describe the compliance obligations facing corporate IT teams.',
    },
  ],
  certifications: [
    {
      name: 'CompTIA A+',
      provider: 'CompTIA',
      free: false,
      why: 'The most recognised entry-level IT support certification globally. Covers hardware, networking, and troubleshooting. Exam costs roughly R4,000 but is almost universally listed in job postings.',
    },
    {
      name: 'CompTIA Network+',
      provider: 'CompTIA',
      free: false,
      why: 'The natural next step after A+. Validates networking skills and opens doors to network administration roles.',
    },
    {
      name: 'Alison Diploma in Computer Networking',
      provider: 'Alison',
      free: true,
      why: 'Free CPD-accredited diploma. Use it as a visible credential on your CV while saving for CompTIA exams.',
    },
  ],
  portfolioProjects: [
    'Home lab setup: configure a small LAN with a router, switch, and two devices. Document the IP scheme and troubleshoot a simulated failure',
    'Network diagram: produce a documented topology diagram for a fictional 20-person office',
    'Incident log: create a sample ITIL-compliant incident management log with 10 realistic support tickets',
    'Troubleshooting guide: write a step-by-step guide for resolving the 5 most common user issues (no internet, printer offline, password reset, slow PC, email not syncing)',
    'IT policy document: draft a one-page acceptable use policy for a fictional SME',
  ],
  relatedRoadmapIds: ['data-analyst', 'web-developer', 'business-analyst'],
  salaryRange: 'R120,000 – R220,000 per year (entry level, SA)',
  remoteFriendly: 'On-site',
  difficulty: 'Beginner',
  faqs: [
    {
      q: 'Is IT support a real career or just a stepping stone?',
      a: 'Both. It is a fully viable long-term career (senior support, infrastructure manager, IT director) and the most common launchpad into network engineering, systems administration, and cybersecurity. Most senior IT people in SA started in support.',
    },
    {
      q: 'Why is this role mostly on-site?',
      a: 'Helpdesk and desktop support involve physical hardware, badge access, and end-user interaction that does not translate well to remote work. As you grow into network or systems administration, hybrid and remote options open up significantly.',
    },
    {
      q: 'Do I need CompTIA A+ to get hired?',
      a: 'Not strictly, but it is the most recognised entry-level IT cert in SA and removes objections in screening. Expect to pay roughly R5,000 per exam (two exams required). Many employers will reimburse you once hired.',
    },
    {
      q: 'How important is ITIL?',
      a: 'In any corporate environment, very. Banks, retailers, and government departments run their IT services on ITIL processes. Knowing incident, problem, and change management vocabulary is often the difference between a callback and a rejection at a corporate.',
    },
    {
      q: 'Is IT support being replaced by AI?',
      a: 'Tier 1 password resets and FAQ lookups are increasingly automated, but the bulk of support work (hardware troubleshooting, network issues, software conflicts, user training) still requires a human on the ground. The role is shifting toward higher-skill problem solving, not disappearing.',
    },
    {
      q: 'What is the fastest entry path with no experience?',
      a: 'Build a home lab, document it publicly, and target large support contractors (Adapt IT, EOH, Datacentrix, Dimension Data) before chasing in-house roles at corporates. Contractors hire in volume, expect to train, and provide rapid exposure to varied environments.',
    },
  ],
  firstNinetyDays: [
    'Your first two weeks are dominated by ticket triage: password resets, printer issues, software install requests, and basic hardware swaps. Get fast at these and you free up senior staff for harder problems',
    'Learn the asset register and the ticketing system (typically ServiceNow, Freshservice, or Jira Service Management) thoroughly. Knowing where everything is documented makes you immediately more useful',
    'By month two you should be handling intermediate tickets independently: network connectivity issues, group policy questions, mailbox restores, and basic Active Directory tasks',
    'By month three expect to be the go-to for at least one specific area (a particular application, a site, or a team) and to have shadowed at least one change implementation',
    'Build a personal knowledge base from day one: every problem you solve gets a one-paragraph note. After three months you have a reference library that makes you noticeably faster than peers',
  ],
  commonMistakes: [
    {
      mistake: 'Memorising hardware components instead of practising troubleshooting flows',
      fix: 'A hiring manager does not test which pin is which on a SATA cable. They test whether you can methodically diagnose "user cannot print." Practise the troubleshooting flowchart on real or simulated faults.',
    },
    {
      mistake: 'Skipping ITIL because it sounds bureaucratic',
      fix: 'Every corporate IT department in SA runs on ITIL processes. Knowing the difference between an incident, a problem, and a change request is the price of admission. Take the free Foundations course early.',
    },
    {
      mistake: 'Overinvesting in CompTIA before any practical experience',
      fix: 'A+ is valuable but not a substitute for a documented home lab and a few volunteer support engagements. Build the lab in parallel with study, not after.',
    },
    {
      mistake: 'Communicating in jargon to non-technical users in interviews',
      fix: 'A core skill of IT support is translating technical concepts plainly. In interviews, deliberately explain things in non-technical language, even if asked technical questions. Many entry-level candidates fail this implicit test.',
    },
    {
      mistake: 'Treating support as just a stepping stone to development',
      fix: 'If you signal during interviews that you are using support to bridge into another field, you will be passed over for candidates who actually want the role. Even if support is a step, sound committed to doing it well.',
    },
  ],
};
