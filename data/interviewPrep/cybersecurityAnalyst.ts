import type { InterviewPrep } from '@/types';

export const cybersecurityAnalystPrep: InterviewPrep = {
  id: 'cybersecurity-analyst',
  role: 'Cybersecurity Analyst',
  category: 'it',
  curator: 'jason',
  description:
    'CV formatting rules and interview questions for junior cybersecurity analyst roles. Covers computer networking, CIA triad, DORA/GDPR compliance, SIEM log analysis, OWASP web vulnerabilities, and incident response.',
  salaryBenchmarks: [
    { region: 'United States', range: '$60,000 – $90,000/year' },
    { region: 'United Kingdom', range: '£30,000 – £50,000/year' },
    { region: 'Canada', range: 'CA$58,000 – CA$85,000/year' },
    { region: 'Australia', range: 'A$70,000 – A$105,000/year' },
    { region: 'South Africa', range: 'R220,000 – R420,000/year' },
  ],
  cvMustInclude: [
    'CompTIA Security+, Google Cybersecurity, or IBM Cybersecurity digital badges',
    'Specific networking tools: Wireshark, Nmap, Splunk, Elastic SIEM, Snort',
    'Understanding of security frameworks: NIST, ISO 27001, CISSP 8 domains',
    'Compliance awareness: DORA (EU operational resilience), GDPR, or POPIA',
    'GitHub or portfolio link to a mock Security Audit or Incident Response report',
  ],
  cvAvoid: [
    'Claiming to be an "Ethical Hacker" without verified certifications or CTF competition history',
    'Listing security tools without specifying what you used them for (e.g. "Wireshark for packet capture analysis")',
    'Ignoring written communication and incident report writing skills',
  ],
  cvTips: [
    {
      heading: 'Include a concrete lab project',
      body: 'Entry-level security candidates stand out by documenting hands-on home lab projects: e.g. "Configured a home lab with a PfSense firewall and Elastic SIEM to analyze mock brute-force SSH attacks."',
    },
    {
      heading: 'Highlight compliance knowledge',
      body: 'Corporate security teams spend massive time on compliance. Mentioning DORA, GDPR, or POPIA data protection guidelines immediately elevates your CV over candidates who only focus on hacking.',
    },
  ],
  keySkills: [
    'Computer Networking (TCP/IP, DNS, Subnetting, Firewalls)',
    'SIEM & Log Monitoring (Splunk, Elastic, Wireshark)',
    'Vulnerability Assessment & Threat Modeling',
    'Compliance & Risk (DORA, GDPR, POPIA)',
    'Incident Response & Report Writing',
  ],
  questions: [
    {
      question: 'Can you explain the CIA Triad and give a real-world example of each component?',
      why: 'Assesses fundamental cybersecurity theory and whether you understand how security controls protect assets.',
      sampleAnswer: 'The CIA Triad stands for Confidentiality, Integrity, and Availability. Confidentiality ensures data is accessible only to authorized users (e.g. AES encryption and IAM permissions). Integrity ensures data has not been tampered with in transit (e.g. cryptographic SHA-256 hashes). Availability ensures systems remain operational (e.g. redundant load balancers and DDoS mitigation).',
      redFlag: 'Failing to give concrete technical examples of how each component is enforced in a corporate network.',
    },
    {
      question: 'Walk me through how you would investigate a suspicious spike in failed login attempts in a SIEM log.',
      why: 'Evaluates your practical investigative workflow as a Security Operations Center (SOC) analyst.',
      sampleAnswer: 'First, I filter SIEM logs by timestamp and target user accounts to determine scope. Next, I correlate source IP addresses to check for distributed brute-force or credential stuffing. If suspicious, I temporarily block source IPs at the firewall, enforce password resets for impacted accounts, and document the incident timeline for management.',
      redFlag: 'Jumping to full server shutdowns without analyzing logs or assessing business impact.',
    },
    {
      question: 'What is the difference between asymmetric and symmetric encryption?',
      why: 'Tests cryptography fundamentals essential for web security and network protocols.',
      sampleAnswer: 'Symmetric encryption uses a single shared secret key for encryption and decryption (e.g. AES), making it fast for bulk data. Asymmetric encryption uses a public key to encrypt and a private key to decrypt (e.g. RSA, ECC). HTTPS uses asymmetric encryption to exchange session keys, then switches to symmetric encryption for speed.',
    },
    {
      question: 'Tell me about a time you identified a security vulnerability or misconfiguration.',
      why: 'Tests practical threat identification and structured reporting skills.',
      sampleAnswer: 'In a lab project, I conducted an Nmap port scan on an isolated server and noticed SSH running on port 22 with root password login enabled. I updated the SSH configuration to disable root login, enforced SSH key authentication, and implemented Fail2Ban to block repeat failed attempts.',
    },
  ],
  relatedRoadmapId: 'cybersecurity-analyst',
  relatedPrepIds: ['it-support-specialist', 'web-developer'],
};
