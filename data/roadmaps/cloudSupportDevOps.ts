import type { CareerRoadmap } from '@/types';

export const cloudSupportDevOpsRoadmap: CareerRoadmap = {
  id: 'cloud-support-devops',
  title: 'How to Become a Cloud Support & DevOps Engineer',
  tagline: 'Manage cloud infrastructure, automate deployment pipelines, and scale applications on AWS & Azure. No computer science degree required.',
  category: 'it',
  curator: 'jason',
  timeToJobReady: '6–12 months',
  demandLevel: 'Very High',
  entryLevel: true,
  description:
    'A step-by-step career roadmap for becoming a Cloud Support Associate or Junior DevOps Engineer. Covers Linux CLI, AWS/Azure cloud foundations, Docker containerization, Infrastructure as Code, and CI/CD pipelines.',
  overview:
    'Cloud Support Associates and DevOps Engineers build and maintain the cloud infrastructure that keeps modern web applications fast, secure, and resilient. Rather than managing physical servers in an office basement, Cloud Engineers configure virtual servers, automated databases, serverless functions, and deployment pipelines on Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).\n\nThe cloud and DevOps career path is exceptionally high-paying and in massive demand globally. Companies migrating away from legacy infrastructure actively recruit candidates who can demonstrate hands-on cloud environment provisioning, script automation, and container orchestration over traditional college degrees. Following this roadmap will take you from Linux basics to building automated cloud deployment pipelines.',
  jobTitles: [
    'Junior Cloud Engineer',
    'Cloud Support Associate',
    'Junior DevOps Engineer',
    'AWS Cloud Specialist',
    'Infrastructure Support Analyst',
    'Site Reliability Engineering (SRE) Assistant',
  ],
  technicalSkills: [
    'Linux System Administration & Shell Scripting (Bash)',
    'Amazon Web Services (EC2, S3, IAM, CloudFront, VPC)',
    'Docker Containerization & Kubernetes Foundations',
    'Infrastructure as Code (Terraform basics)',
    'CI/CD Deployment Pipelines (GitHub Actions)',
    'Cloud Monitoring & Logging (AWS CloudWatch)',
  ],
  softSkills: [
    'Structured root-cause troubleshooting',
    'Documentation & architecture diagramming',
    'Collaborative problem solving under pressure',
    'Continuous self-learning mindset',
  ],
  stages: [
    {
      number: 1,
      title: 'Master Linux Administration & Networking',
      duration: '4–6 weeks',
      description:
        'Over 90% of cloud servers run on Linux. In Stage 1, you will learn essential Linux command-line tools, file permissions, process management, SSH access, Bash scripting, and core TCP/IP networking concepts.',
      courseIds: ['diploma-in-certified-information-systems-security-professional-cissp-2024'],
      milestone:
        'You can manage files, inspect system processes, configure firewall ports, and write Bash scripts in a Linux terminal.',
    },
    {
      number: 2,
      title: 'Master Core AWS Cloud Architecture',
      duration: '6–8 weeks',
      description:
        'AWS is the world’s leading cloud platform. In this stage, you will master AWS foundational services: EC2 virtual servers, S3 object storage, VPC networking, IAM security roles, and RDS databases.',
      courseIds: ['diploma-in-certified-information-systems-security-professional-cissp-2024'],
      milestone:
        'You can launch a secure multi-tier web server architecture on AWS behind an Application Load Balancer using IAM least-privilege security.',
    },
    {
      number: 3,
      title: 'Containerization with Docker',
      duration: '4–5 weeks',
      description:
        'Modern applications are packaged into lightweight, isolated containers. Stage 3 covers Dockerfile creation, multi-stage builds, Docker Compose for multi-container apps, and container registry management.',
      courseIds: ['secure-software-design-and-implementation'],
      milestone:
        'You can containerize a full-stack web application with Docker Compose and push images to Amazon ECR or Docker Hub.',
    },
    {
      number: 4,
      title: 'Infrastructure as Code (IaC) & Automation',
      duration: '5–6 weeks',
      description:
        'Cloud engineers do not click buttons in a web browser to launch servers; they write code to provision infrastructure automatically. In Stage 4, you will learn Terraform fundamentals to provision AWS cloud resources programmatically.',
      courseIds: ['secure-software-testing-and-acceptance'],
      milestone:
        'You can write a Terraform script to deploy an AWS VPC, EC2 instance, and S3 bucket automatically.',
    },
    {
      number: 5,
      title: 'CI/CD Pipelines, Monitoring & Portfolio',
      duration: '5–6 weeks',
      description:
        'Stage 5 brings everything together into automated Continuous Integration & Continuous Deployment (CI/CD) pipelines using GitHub Actions. You will automate code testing, image builds, and automated deployments to AWS.',
      courseIds: ['fundamentals-of-dora'],
      milestone:
        'You have published a GitHub portfolio repository with a live automated CI/CD pipeline deploying a Docker app to AWS.',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner (CLF-C02)',
      provider: 'Amazon Web Services',
      free: false,
      why: 'The gold-standard foundational cloud certification recognized by enterprise IT hiring managers worldwide.',
    },
    {
      name: 'AWS Skill Builder Official Cloud Essentials',
      provider: 'AWS',
      free: true,
      why: '100% free digital badge verifying fundamental AWS cloud architecture skills.',
    },
    {
      name: 'Google Cloud Digital Leader',
      provider: 'Google Cloud',
      free: true,
      why: 'Free digital badge covering Google Cloud infrastructure, data storage, and enterprise modernization.',
    },
  ],
  portfolioProjects: [
    'Static Website Hosting on AWS S3 & CloudFront: configure a custom domain with SSL certificates and global CDN caching',
    'Containerized Web App with Docker Compose: package a Node.js API and PostgreSQL database into scalable Docker containers',
    'Terraform AWS Infrastructure Deployment: write IaC scripts to launch a secure AWS VPC, subnet, and EC2 web server',
    'Automated GitHub Actions CI/CD Pipeline: build a pipeline that automatically tests code, builds a Docker image, and deploys to AWS',
  ],
  relatedRoadmapIds: ['cybersecurity-analyst', 'web-developer', 'it-support-specialist'],
  salaryBenchmarks: [
    { region: 'United States', range: '$70,000 – $105,000/year' },
    { region: 'United Kingdom', range: '£35,000 – £58,000/year' },
    { region: 'Canada', range: 'CA$65,000 – CA$95,000/year' },
    { region: 'Australia', range: 'A$78,000 – A$115,000/year' },
    { region: 'South Africa', range: 'R250,000 – R480,000/year' },
  ],
  remoteFriendly: 'Fully',
  difficulty: 'Intermediate',
  faqs: [
    {
      q: 'Do I need a Computer Science degree to work in Cloud / DevOps?',
      a: 'No. Cloud computing and DevOps are heavily skills-based fields. Demonstrating hands-on AWS environment management, Docker containerization, and Terraform IaC scripts on GitHub carries far more weight than an academic transcript.',
    },
    {
      q: 'Should I learn AWS, Azure, or Google Cloud first?',
      a: 'Start with AWS. AWS holds the largest share of the global cloud infrastructure market (over 30%), making AWS skills the most frequently requested across job postings.',
    },
    {
      q: 'Is Cloud Engineer different from DevOps Engineer?',
      a: 'Cloud Engineers focus on building and configuring cloud infrastructure (servers, databases, networks). DevOps Engineers focus on automating the software delivery pipeline (CI/CD, containerization, monitoring, deployment frequency). In junior roles, these terms overlap significantly.',
    },
    {
      q: 'How long does it take to become job-ready for a Cloud Support role?',
      a: 'With 12–15 hours of consistent weekly study, dedicated beginners usually achieve entry-level Cloud Support job readiness in 6 to 12 months.',
    },
  ],
  firstNinetyDays: [
    'Spend your first 30 days understanding the company’s cloud architecture, security roles, VPC subnets, and deployment environments',
    'Shadow senior cloud engineers during server maintenance, IAM role updates, and cloud cost optimization audits',
    'By month two, manage routine deployment tasks, troubleshoot container logs, and assist in monitoring server metrics',
    'By month three, take ownership of automating minor CI/CD build steps and updating Terraform infrastructure scripts',
  ],
  commonMistakes: [
    {
      mistake: 'Clicking around the AWS Web Console instead of learning Infrastructure as Code (Terraform/CloudFormation)',
      fix: 'Enterprise cloud teams manage infrastructure using code. Learn Terraform early so your project deployments are reproducible.',
    },
    {
      mistake: 'Ignoring cost controls and leaving expensive AWS resources running',
      fix: 'Always set up AWS Billing Alerts and destroy experimental Terraform infrastructure when finished studying to avoid unexpected credit card charges.',
    },
    {
      mistake: 'Skipping Linux fundamentals to jump directly into Kubernetes',
      fix: 'Kubernetes and Docker run on Linux. Master Linux file systems, process handling, and Bash scripting before touching orchestration tools.',
    },
  ],
};
