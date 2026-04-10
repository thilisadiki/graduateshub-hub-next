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
};
