import type { InterviewPrep } from '@/types';

export const itSupportSpecialistPrep: InterviewPrep = {
  id: 'it-support-specialist',
  role: 'IT Support Specialist',
  category: 'it',
  curator: 'jason',
  lastUpdated: 'Apr 2026',
  description: 'CV tips and the most common interview questions for IT support and helpdesk roles in South Africa. Covers hardware, networking, ITIL, and the soft skills SA employers actually test for.',
  salaryRange: 'R120,000 – R220,000 per year (entry level, South Africa)',

  cvMustInclude: [
    'A clear summary line stating your IT support focus and experience level (e.g. "Entry-level IT Support Specialist with CompTIA A+ certification and hands-on networking coursework")',
    'Any certifications, even free ones: Alison Diploma in Computer Networking, CompTIA A+, Microsoft certifications',
    'Home lab or self-study projects, employers respect initiative in entry-level candidates',
    'Operating systems you have worked with (Windows 10/11, Linux basics)',
    'Ticketing systems you have used or studied (even ITIL-based systems from coursework)',
    'Contact details including a professional email address and LinkedIn profile URL',
  ],

  cvAvoid: [
    'A photo on your CV (not standard for SA tech roles and introduces bias risk)',
    'Generic objective statements like "seeking a challenging role" with no specifics',
    'Listing every piece of software you have ever touched without context',
    'Putting references on the CV itself ("available on request" is sufficient)',
    'Unexplained gaps without a brief note (a short course line fills the gap professionally)',
  ],

  cvTips: [
    {
      heading: 'Lead with a targeted summary',
      body: 'Your top three lines should tell a hiring manager exactly what you do and what level you are at. "Entry-level IT Support Specialist with a Diploma in Computer Networking, ITIL 4 Foundations training, and experience configuring LANs in a home lab environment" is far stronger than a vague objective statement.',
    },
    {
      heading: 'Quantify where you can',
      body: 'Even without formal work experience, you can quantify: "Configured a 4-device home network with documented IP scheme and fault simulation." Numbers and specifics show a hiring manager you think like a practitioner, not a student.',
    },
    {
      heading: 'Mirror the job description language',
      body: 'South African IT job postings often list specific tools and acronyms (ITIL, Active Directory, VPN, DNS, DHCP). If you know them, use those exact terms in your CV. Many companies use applicant tracking systems that scan for keywords before a human ever reads your application.',
    },
    {
      heading: 'Keep it to one page for entry-level',
      body: 'South African hiring managers in IT expect a one-page CV for candidates with less than two years of experience. A two-page CV with padding signals poor judgement more than it signals thoroughness.',
    },
  ],

  keySkills: [
    'Hardware troubleshooting and diagnostics',
    'Networking fundamentals (TCP/IP, DNS, DHCP, OSI model)',
    'Windows desktop support',
    'ITIL 4 service management concepts',
    'Remote desktop and remote support tools',
    'Clear communication with non-technical users',
    'Ticket documentation and escalation',
  ],

  questions: [
    {
      question: 'Walk me through how you would troubleshoot a user who says they have no internet connection.',
      why: 'This is the single most common IT support interview question. Interviewers use it to test whether you think systematically or randomly.',
      sampleAnswer: 'I would start at the physical layer and work up. First I would check whether the device has a network cable plugged in or is connected to the correct Wi-Fi network. Then I would check whether other devices on the same network are affected, which tells me whether the issue is device-specific or network-wide. If it is device-specific, I would release and renew the IP address using ipconfig /release and /renew, then flush the DNS cache with ipconfig /flushdns. If the issue is network-wide, I would check the router and modem, and contact the ISP if necessary. I document each step in the ticket so the resolution is repeatable.',
      redFlag: 'Jumping straight to "I would restart the computer" without a structured approach suggests no systematic thinking. Good candidates work through OSI layers logically.',
    },
    {
      question: 'What is the difference between a router and a switch?',
      why: 'A baseline networking knowledge check. Asked in almost every SA IT support interview at entry level.',
      sampleAnswer: 'A switch operates at Layer 2 of the OSI model and connects devices within the same network, forwarding data based on MAC addresses. A router operates at Layer 3 and connects different networks together, forwarding data based on IP addresses. In a typical office, the switch connects all the computers and printers on the LAN, while the router connects that LAN to the internet.',
      redFlag: 'Confusing the two or being unable to explain in plain terms. If you know the theory, you should be able to explain it simply.',
    },
    {
      question: 'Describe the ITIL 4 incident management process.',
      why: 'Corporate IT environments in South Africa run on ITIL. Even entry-level candidates are expected to know the framework.',
      sampleAnswer: 'In ITIL 4, an incident is an unplanned interruption to a service. When an incident is reported, it is logged and categorised by severity. The service desk attempts first-line resolution. If they cannot resolve it within the defined SLA, it is escalated to second or third line. Throughout the process, the user is kept informed of progress. Once resolved, the incident is closed and a record is kept. Major incidents trigger a post-incident review to identify root causes and prevent recurrence.',
    },
    {
      question: 'A user is frustrated and angry about a recurring technical problem. How do you handle it?',
      why: 'IT support is a customer-facing role. SA hiring managers specifically test for patience and communication under pressure.',
      sampleAnswer: 'I would let the user finish speaking without interrupting. I would acknowledge their frustration directly: "I understand this has been happening repeatedly and that is unacceptable, I am going to make sure it is resolved properly this time." Then I would focus on the problem, not the emotion. I would ask targeted questions to understand the full history of the issue, check the previous ticket notes, and escalate if needed rather than applying another temporary fix. The goal is to close the loop properly, not just get through the call.',
      redFlag: 'Saying "I would stay calm" without demonstrating empathy or a concrete resolution approach. Emotional intelligence matters as much as technical skill in support roles.',
    },
    {
      question: 'What is Active Directory and what is it used for?',
      why: 'Almost every corporate SA environment uses Active Directory. Being unable to describe it is a red flag for IT support candidates.',
      sampleAnswer: 'Active Directory is Microsoft\'s directory service used to manage users, computers, and resources across a corporate network. It allows administrators to create user accounts, apply group policies, control access to resources, and enforce security settings centrally. When a user logs into their work computer, Active Directory authenticates them and grants access based on their group memberships and permissions.',
    },
    {
      question: 'Where do you see yourself in two to three years in IT?',
      why: 'Interviewers want to know you are serious about a career in IT, not just looking for any job. SA IT employers invest in training and want candidates who will stay.',
      sampleAnswer: 'I want to build a strong foundation in IT support over the next year, then pursue my CompTIA Network+ and work towards a network administration or systems administrator role. I am particularly interested in cloud infrastructure. I am committed to continuous learning and I am already studying towards further certifications on my own time.',
    },
  ],

  relatedRoadmapId: 'it-support-specialist',
  relatedPrepIds: ['data-analyst', 'web-developer', 'business-analyst'],
};
