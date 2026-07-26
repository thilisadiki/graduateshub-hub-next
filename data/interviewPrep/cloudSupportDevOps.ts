import type { InterviewPrep } from '@/types';

export const cloudSupportDevOpsPrep: InterviewPrep = {
  id: 'cloud-support-devops',
  role: 'Cloud Support & DevOps Engineer',
  category: 'it',
  curator: 'jason',
  description:
    'CV rules and technical interview questions for junior Cloud Support and DevOps roles. Covers Linux CLI, AWS core services, Docker containerization, Terraform IaC, GitHub Actions CI/CD pipelines, and cloud incident troubleshooting.',
  salaryBenchmarks: [
    { region: 'United States', range: '$70,000 – $105,000/year' },
    { region: 'United Kingdom', range: '£35,000 – £58,000/year' },
    { region: 'Canada', range: 'CA$65,000 – CA$95,000/year' },
    { region: 'Australia', range: 'A$78,000 – A$115,000/year' },
    { region: 'South Africa', range: 'R250,000 – R480,000/year' },
  ],
  cvMustInclude: [
    'AWS Certified Cloud Practitioner (CLF-C02) or AWS Skill Builder Cloud Essentials badges',
    'Linux CLI administration (Bash scripting, SSH, systemctl, netstat)',
    'Amazon Web Services: EC2, S3, IAM, CloudFront, VPC subnets, Application Load Balancers',
    'Containerization: Docker, Docker Compose, Amazon ECR',
    'Automation: Terraform Infrastructure as Code (IaC) and GitHub Actions CI/CD pipelines',
  ],
  cvAvoid: [
    'Listing "AWS" as a skill without specifying the specific services managed',
    'Failing to link to a public GitHub repository containing Terraform or Docker scripts',
    'Claiming Kubernetes expertise without mastering Docker containerization fundamentals',
  ],
  cvTips: [
    {
      heading: 'Link to automated GitHub repository scripts',
      body: 'Cloud and DevOps managers care about automation. Including a GitHub repository link with Terraform scripts that deploy an AWS web server automatically sets you apart from 90% of applicants.',
    },
    {
      heading: 'Emphasize Linux CLI speed',
      body: 'Highlight your comfort operating in headless Linux server environments. Mention Bash scripting for log parsing and automated cron jobs.',
    },
  ],
  keySkills: [
    'Linux System Administration & Bash Scripting',
    'Amazon Web Services (EC2, S3, IAM, VPC)',
    'Docker & Docker Compose Containerization',
    'Terraform Infrastructure as Code (IaC)',
    'GitHub Actions CI/CD & Cloud Monitoring',
  ],
  questions: [
    {
      question: 'What is the difference between an AWS Security Group and a Network ACL (NACL)?',
      why: 'Evaluates AWS VPC networking and security architecture fundamentals.',
      sampleAnswer: 'A Security Group operates at the instance level (EC2), is stateful (inbound allowed traffic automatically permits return outbound traffic), and only supports ALLOW rules. A Network ACL (NACL) operates at the subnet level, is stateless (outbound return rules must be explicitly defined), and supports both ALLOW and DENY rules.',
      redFlag: 'Confusing stateful Security Groups with stateless subnets.',
    },
    {
      question: 'Explain the difference between Docker images and Docker containers.',
      why: 'Tests basic containerization knowledge essential for modern DevOps pipelines.',
      sampleAnswer: 'A Docker image is a read-only, static blueprint template containing application code, dependencies, and environment configurations. A Docker container is a runnable, isolated instance of a Docker image executing as a process in memory.',
    },
    {
      question: 'Walk me through how you would troubleshoot a web application returning a 502 Bad Gateway error on AWS.',
      why: 'Tests practical cloud infrastructure troubleshooting and incident response.',
      sampleAnswer: 'First, I check Application Load Balancer target group health checks to verify if EC2 instances are marked Healthy. If unhealthy, I SSH into the EC2 instance, inspect the Linux process status (`systemctl status webapp`), and review Nginx/application error logs (`tail -f /var/log/nginx/error.log`). If the backend process crashed, I inspect memory usage and restart the service.',
    },
  ],
  relatedRoadmapId: 'cloud-support-devops',
  relatedPrepIds: ['cybersecurity-analyst', 'web-developer', 'it-support-specialist'],
};
