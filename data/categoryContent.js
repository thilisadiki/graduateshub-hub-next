// This file contains SEO-optimized content for each course category.
// It is used to render rich text on the CategoryPage to improve organic search rankings.

export const categoryContent = {
    // 1. IT Courses
    it: {
        showStats: true,
        heroIntro: "Fifty-nine free IT courses across seven specialist tracks. Every course is reviewed for 2026 relevance, leads to a CPD-accredited certificate or diploma, and can be completed at your own pace with no prior experience required.",
        aboutSection: "These courses span seven distinct tracks: Software Engineering, Networking and Infrastructure, Artificial Intelligence, Cybersecurity and Compliance, Database and Software Development, Engineering and Hardware, and IT Management. Each track is self-contained. You can begin in Networking without touching Software Engineering, or combine tracks as your career demands. All courses are delivered by Alison, a CPD-accredited provider with over 6 million graduates worldwide.",
        careerOpportunities: "IT qualifications open doors across finance, healthcare, retail, government, and tech. The seven tracks on this page map directly to seven distinct job families, each with consistent hiring demand in South Africa and internationally.",
        skillsFocus: [
            "Network administration, LAN architecture, and ITIL service management",
            "Secure software design, testing methodologies, and DevOps practices",
            "SQL Server administration and database management principles",
            "AI fundamentals and machine learning concepts for practical application",
            "Cybersecurity compliance, CISSP preparation, and digital risk management"
        ],
        tracks: [
            {
                label: "Software Engineering",
                subCategory: "Software Engineering",
                count: 44,
                goal: "Build, test, and ship software",
                detail: "44 courses covering software testing, secure development, DevOps, project management, and the full software development life cycle.",
            },
            {
                label: "Networking & Infrastructure",
                subCategory: "Networking & Infrastructure",
                count: 4,
                goal: "Manage networks and support IT systems",
                detail: "Computer networking, LAN architecture, the OSI model, and IT service management using ITIL 4.",
            },
            {
                label: "Artificial Intelligence",
                subCategory: "Artificial Intelligence",
                count: 4,
                goal: "Work with AI tools and data-driven systems",
                detail: "AI fundamentals, machine learning concepts, and practical applications for both technical and non-technical learners.",
            },
            {
                label: "Cybersecurity & Compliance",
                subCategory: "Cybersecurity & Compliance",
                count: 2,
                goal: "Protect systems and meet regulatory standards",
                detail: "CISSP certification preparation and digital operational resilience, including DORA compliance fundamentals.",
            },
            {
                label: "Database & Dev",
                subCategory: "Database & Software Development",
                count: 2,
                goal: "Work with data and understand software systems",
                detail: "SQL Server administration, DML statements, and the intersection of information systems with business operations.",
            },
            {
                label: "Engineering & Hardware",
                subCategory: "Engineering & Hardware",
                count: 2,
                goal: "Understand hardware and physical infrastructure",
                detail: "Practical courses covering physical computing systems and the engineering principles that underpin digital infrastructure.",
            },
            {
                label: "IT Management",
                subCategory: "IT Management",
                count: 1,
                goal: "Lead technology teams and align IT with business goals",
                detail: "The Diploma in IT Management covers governance, strategy, and the operational responsibilities of technology leadership.",
            },
        ],
        roles: [
            { title: "Software Developer", track: "Software Engineering", signal: "The most in-demand IT role globally. Every organisation building a product needs one." },
            { title: "Network Engineer", track: "Networking & Infrastructure", signal: "Core infrastructure role. Banks, telecoms, and government departments hire continuously." },
            { title: "Cybersecurity Analyst", track: "Cybersecurity & Compliance", signal: "Critical shortage worldwide. CISSP-trained professionals command senior salaries." },
            { title: "AI / Data Analyst", track: "Artificial Intelligence", signal: "The fastest growing IT specialisation. Applies across finance, healthcare, and logistics." },
            { title: "Database Administrator", track: "Database & Dev", signal: "Every company with customer records needs a DBA. Stable, well-paid, and evergreen." },
            { title: "IT Manager", track: "IT Management", signal: "Senior role overseeing infrastructure, vendors, and IT strategy. Requires broad technical knowledge." },
        ],
        faq: [
            {
                q: "Do I need prior IT experience to start?",
                a: "No. Most courses on this page are designed for beginners. The Software Engineering and Networking tracks both start from foundational concepts. If you are completely new, start with Computer Networking or Introduction to Software Testing before moving to more advanced certificates."
            },
            {
                q: "Are these certificates recognised by employers?",
                a: "All courses are delivered by Alison, a CPD-accredited provider with over 6 million graduates worldwide. CPD certification is accepted by professional bodies in South Africa, the UK, Ireland, and beyond. While these are not equivalent to a university degree, they are widely accepted as proof of skill for entry-level and mid-level IT roles."
            },
            {
                q: "Which course should I start with if I am completely new to IT?",
                a: "Start with Computer Networking or Foundations of ITIL 4 for Service Management if infrastructure interests you. Start with Introduction to Software Testing or Understanding Software Project Management if software is your goal. Both are beginner-friendly and provide a strong foundation before progressing to diplomas."
            },
            {
                q: "What is the difference between a Certificate and a Diploma?",
                a: "Certificates are focused, practical programs typically completed in 2 to 6 hours. They cover a single skill or topic in depth. Diplomas are comprehensive programs covering a full subject area, typically 10 to 30 hours. Start with a certificate to test your interest. Move to a diploma when you want to qualify for a specific role."
            },
            {
                q: "Can I complete these courses on a phone or tablet?",
                a: "Yes. All Alison courses are fully mobile-compatible. You can study at your own pace, save your progress, and complete assessments on any device. There is no deadline or fixed schedule."
            }
        ],
        guideLinks: [
            {
                title: "Free AI Courses for Beginners",
                desc: "No coding background required. The best starting points for machine learning and AI fundamentals.",
                href: "/free-ai-courses-for-beginners",
                badge: "AI",
            },
            {
                title: "Free Courses for Data Analysts",
                desc: "Excel, SQL, Python, and Power BI in one structured learning path.",
                href: "/free-courses-for-data-analysts",
                badge: "Data",
            },
        ],
    },

    // 2. Software Engineering
    'software-engineering': {
        heroIntro: "Learn to build robust applications and dynamic websites with our free online software engineering courses. Dive into popular programming languages, frameworks, and software development methodologies.",
        aboutSection: "Software engineering is the creative backbone of the modern world. Our free courses are designed to take you from understanding basic programming logic to building complex, scalable software solutions. You'll learn essential coding languages, software testing, version control, and the software development life cycle (SDLC). Whether you want to build mobile apps, enterprise software, or stunning front-end interfaces, these courses provide the practical coding experience required by tech recruiters.",
        careerOpportunities: "The demand for skilled software engineers continues to outpace supply globally. Graduates can pursue roles such as Front-End Developer, Back-End Developer, Full-Stack Engineer, QA Tester, or Mobile App Developer. The ability to write clean, efficient code is a highly transferable skill that offers excellent remote work opportunities and high earning potential.",
        skillsFocus: [
            "Programming Languages (Python, JavaScript, Java, C++)",
            "Web Development (HTML, CSS, React, Node.js)",
            "Software Development Life Cycle (Agile, Scrum)",
            "Version Control (Git & GitHub)",
            "Algorithms & Data Structures"
        ]
    },

    // 3. Business Courses
    business: {
        showStats: true,
        heroIntro: "Twelve free business courses across project management, process improvement, regulatory compliance, and economic strategy. Each course leads to a CPD-accredited certificate or diploma and covers frameworks that appear directly in corporate job requirements.",
        aboutSection: "The four tracks here represent the core operational disciplines of modern organisations. Project Management covers the complete project life cycle through a comprehensive diploma and Agile methodology for iterative delivery environments. Process and Quality covers Lean Six Sigma at White Belt and Yellow Belt levels, plus ISO lead auditing and ISO 9001 internal auditing practices used in manufacturing, pharma, and corporate services. Compliance and Regulation covers GDPR data protection obligations and anti-money laundering frameworks, both mandatory knowledge in any regulated industry. Economics and Innovation covers macroeconomic growth theory, sustainable development strategy, and the practical application of AI in business operations.",
        careerOpportunities: "Business qualifications transfer across every industry and organisation size. These courses build the cross-functional knowledge that separates specialists from managers, and managers from leaders.",
        skillsFocus: [
            "Project life cycle management using Gantt charts, CPM, and Scrum",
            "Process improvement through Lean Six Sigma DMAIC methodology",
            "ISO auditing: ISO 9001 quality management and ISO 19011 lead auditing",
            "Regulatory compliance: GDPR data protection and AML frameworks",
            "Macroeconomic analysis, ESG reporting, and AI strategy in business"
        ],
        tracks: [
            {
                label: "Project Management",
                subCategory: "Project Management",
                count: 2,
                goal: "Plan, execute, and close projects effectively",
                detail: "The Diploma in Project Management covers the full project life cycle. Agile PM covers Scrum, sprints, and iterative delivery for tech and product teams.",
            },
            {
                label: "Process & Quality",
                subCategory: "Process & Quality",
                count: 4,
                goal: "Improve processes and lead organisational audits",
                detail: "Lean Six Sigma at White and Yellow Belt levels, ISO 19011 Lead Auditor, and ISO 9001 internal auditing. Directly applicable to manufacturing, logistics, and corporate operations.",
            },
            {
                label: "Compliance & Regulation",
                subCategory: "Compliance & Regulation",
                count: 2,
                goal: "Meet legal obligations in data and financial regulation",
                detail: "GDPR compliance for organisations handling personal data and AML frameworks for those working in or alongside financial services.",
            },
            {
                label: "Economics & Innovation",
                subCategory: "Economics & Innovation",
                count: 4,
                goal: "Understand macro strategy, sustainability, and AI",
                detail: "Economic growth theory at certificate and diploma level, sustainable development and ESG strategy, and a non-technical introduction to AI in business.",
            },
        ],
        roles: [
            { title: "Project Manager", track: "Project Management", signal: "One of the most in-demand corporate roles globally. Relevant across construction, tech, consulting, and government." },
            { title: "Scrum Master", track: "Project Management", signal: "Specialist Agile role in high demand at software companies and digital product teams. Often commands above-average salaries." },
            { title: "Quality Assurance Specialist", track: "Process & Quality", signal: "Present wherever ISO certification is required: manufacturing, pharma, food production, and corporate services." },
            { title: "Compliance Officer", track: "Compliance & Regulation", signal: "Growing across banking, insurance, fintech, and any business subject to data protection or financial crime regulation." },
            { title: "Operations Manager", track: "Process & Quality", signal: "Senior role overseeing processes, efficiency, and output quality. Lean Six Sigma is frequently listed as a preferred qualification." },
            { title: "Business Analyst", track: "Economics & Innovation", signal: "Cross-functional role bridging operations, data, and strategy. Strong demand at corporates, consultancies, and public sector organisations." },
        ],
        faq: [
            {
                q: "Do I need business experience to start these courses?",
                a: "No. The Lean Six Sigma White Belt and Introduction to Economic Growth and Development are both designed for complete beginners. The Project Management diploma and Agile certificate assume no prior project management knowledge. Start with whichever track matches your immediate career goal."
            },
            {
                q: "What is the difference between the Lean Six Sigma White Belt and Yellow Belt?",
                a: "The White Belt is a short introduction to Lean Six Sigma vocabulary and philosophy, designed so that any employee can participate intelligently in company-wide improvement initiatives. The Yellow Belt goes deeper: it covers the DMAIC framework in detail, process mapping, and data collection methods. If you want to actively lead or contribute to improvement projects, the Yellow Belt is the one employers look for."
            },
            {
                q: "Is GDPR relevant if I am based in South Africa?",
                a: "Yes. Any organisation that processes data belonging to EU citizens must comply with GDPR regardless of where it is based. Beyond the EU, GDPR has directly influenced South Africa's own POPIA legislation. Understanding GDPR gives you a working knowledge of both frameworks and makes you more valuable in any compliance or data-handling role."
            },
            {
                q: "Which business course gives the best return for career progression?",
                a: "The Diploma in Project Management has the broadest applicability. Project management is a recognised profession across almost every industry, and a formal diploma signals that you can take ownership of deliverables and manage stakeholders. If you are already in a tech environment, the Agile Project Management certificate is the faster, more targeted option."
            },
            {
                q: "Are these courses useful for running my own business?",
                a: "Yes, particularly the Project Management, Economics, and Compliance tracks. Understanding how to plan and execute projects, read macroeconomic signals, and stay compliant with data and financial regulations are practical skills for any business owner. The Diploma in Sustainable Development is also increasingly relevant as clients and investors ask for ESG evidence."
            },
        ],
        guideLinks: [
            {
                title: "Free AI Courses for Beginners",
                desc: "No coding background required. Start with the AI fundamentals that apply directly to business strategy and operations.",
                href: "/free-ai-courses-for-beginners",
                badge: "AI",
            },
        ],
    },

    // 5. Accounting
    accounting: {
        showStats: true,
        heroIntro: "Seventeen free accounting and finance courses across bookkeeping, financial reporting, financial management, and compliance. Curated by Ndulamiso Mamburu, a practising tax professional at SARS, every course reflects what is actually used in South African and international finance roles.",
        aboutSection: "The four tracks here cover distinct areas of the accounting profession. Bookkeeping and Payroll covers the day-to-day recording of transactions, payroll processing, and accounting software including Xero. Financial Accounting covers the construction and analysis of financial statements, inventory valuation, and the full accounting cycle. Financial Management moves beyond recording into strategy: budgeting, capital allocation, variance analysis, and company valuation. Compliance and Auditing covers anti-money laundering procedures, KYC frameworks, and internal audit principles. Each track is self-contained. You can start in Bookkeeping without touching Financial Management, or use multiple tracks to build a complete finance skill set.",
        careerOpportunities: "Accounting skills are required in every sector and at every company size. From SARS to startup finance teams, the demand for people who can record, report, and analyse financial data is consistent and largely recession-resistant.",
        skillsFocus: [
            "Double-entry bookkeeping, ledger management, and payroll processing",
            "Financial statement construction and ratio-based performance analysis",
            "Budgeting, variance analysis, and capital investment evaluation (NPV, IRR)",
            "Inventory valuation methods: FIFO, LIFO, and weighted average",
            "AML compliance, KYC procedures, and internal audit frameworks"
        ],
        tracks: [
            {
                label: "Bookkeeping & Payroll",
                subCategory: "Bookkeeping & Payroll",
                count: 6,
                goal: "Record transactions, process payroll, and use accounting software",
                detail: "Six courses from introductory bookkeeping through to the Diploma in Effective Bookkeeping and Payroll, including a practical Xero certificate.",
            },
            {
                label: "Financial Accounting",
                subCategory: "Financial Accounting",
                count: 5,
                goal: "Prepare and analyse financial statements",
                detail: "Fundamentals through to advanced financial statement analysis and inventory accounting. Includes the Diploma in Financial Accounting.",
            },
            {
                label: "Financial Management",
                subCategory: "Financial Management",
                count: 4,
                goal: "Make strategic financial decisions and value businesses",
                detail: "Corporate budgeting, company valuation, accounts payable, and purchase ledger management. Includes the Diploma in Financial Management for Managers.",
            },
            {
                label: "Compliance & Auditing",
                subCategory: "Compliance & Auditing",
                count: 2,
                goal: "Meet regulatory obligations and conduct internal audits",
                detail: "Anti-money laundering (AML), KYC procedures, and internal auditing principles. Critical for finance roles in banking, insurance, and regulated industries.",
            },
        ],
        roles: [
            { title: "Bookkeeper", track: "Bookkeeping & Payroll", signal: "High demand across SMEs and accounting firms. The Diploma in Bookkeeping and Payroll is directly cited in South African job listings." },
            { title: "Payroll Administrator", track: "Bookkeeping & Payroll", signal: "Every employer with staff needs one. Stable, entry-accessible, and consistently advertised across all industries." },
            { title: "Junior Accountant", track: "Financial Accounting", signal: "The most common entry point into the accounting profession. Strong demand at audit firms, corporates, and government entities." },
            { title: "Financial Analyst", track: "Financial Management", signal: "Analytical role using financial statements and models to support business decisions. Growing demand in banking, consulting, and corporate finance." },
            { title: "AML Compliance Officer", track: "Compliance & Auditing", signal: "One of the fastest-growing specialisations in finance. Banks, FinTechs, and insurers are under increasing regulatory pressure to staff this role." },
            { title: "Internal Auditor", track: "Compliance & Auditing", signal: "Present in every large organisation. Provides a clear progression path to senior audit and risk management positions." },
        ],
        faq: [
            {
                q: "Do I need prior accounting knowledge to start?",
                a: "No. Start with Fundamentals of Accounting or Introduction to Bookkeeping and Accounting Methods. Both are designed for absolute beginners and require no prior financial knowledge. Once you are comfortable with debits and credits, you can move into any of the other tracks."
            },
            {
                q: "Are these certificates recognised by South African employers?",
                a: "Yes. All courses are delivered by Alison, a CPD-accredited provider. CPD certification is accepted by professional bodies in South Africa and internationally. These certificates will not replace a formal SAIPA or CIMA qualification, but they are widely accepted as proof of skill for entry-level and bookkeeping roles, and are regularly listed on CVs in the accounting sector."
            },
            {
                q: "Which course should I start with if I want to become a bookkeeper?",
                a: "Start with Introduction to Bookkeeping and Accounting Methods for the foundational concepts, then move to Payroll Computation and Bookkeeping. After those, the Diploma in Effective Bookkeeping and Payroll brings everything together into a comprehensive qualification. Add Accounts Management Using Xero at the end to get practical software experience."
            },
            {
                q: "What is the difference between bookkeeping and accounting?",
                a: "Bookkeeping is the systematic recording of financial transactions: sales, purchases, payroll, and expenses. Accounting builds on those records to produce financial statements, perform analysis, and inform business decisions. Bookkeepers typically work within defined processes. Accountants interpret the data and provide strategic input. Both are in demand, and the Bookkeeping track here leads directly into the Financial Accounting track."
            },
            {
                q: "Who curates the accounting courses on Graduates Hub?",
                a: "The accounting content is curated by Ndulamiso Mamburu, an Accounting Science graduate currently pursuing a degree in Taxation at SARS. Every course recommendation reflects what is practically relevant to the South African finance sector, not just what looks good in a course catalogue."
            },
        ],
        guideLinks: [
            {
                title: "Free Courses for Accounting & Finance",
                desc: "A structured learning path from bookkeeping basics to financial statement analysis, curated by a SARS tax professional.",
                href: "/free-courses-for-accounting-and-finance",
                badge: "Finance",
            },
        ],
    },

    // 6. Marketing
    marketing: {
        showStats: true,
        heroIntro: "Eleven free marketing courses across digital fundamentals, social media strategy, and content creation. Every course is CPD-accredited, beginner-friendly, and built around the tools and tactics that employers actually ask for.",
        aboutSection: "The three tracks here cover the most in-demand marketing disciplines. Digital Marketing covers campaign structure, ad targeting, conversion tactics, and growth hacking. Social Media covers platform-specific strategy for Facebook and Instagram, culminating in a full Diploma in Social Media Strategy. Content and SEO covers YouTube marketing and value-based content creation. These are not theory-heavy programs. Each course is built around practical frameworks you can apply to a real brand, campaign, or client immediately after completing it.",
        careerOpportunities: "Marketing sits at the intersection of creativity and data. Every business with an online presence needs someone who understands digital channels, and most entry-level roles do not require a formal degree. These courses map directly to the skills listed in entry-level and mid-level marketing job postings.",
        skillsFocus: [
            "Digital campaign planning, ad targeting, and conversion tracking",
            "Social media strategy across Facebook, Instagram, and YouTube",
            "Content creation frameworks and value-based copywriting",
            "SEO fundamentals, keyword targeting, and YouTube search optimisation",
            "Growth hacking and customer acquisition techniques"
        ],
        tracks: [
            {
                label: "Digital Marketing",
                subCategory: "General",
                count: 5,
                goal: "Understand how digital marketing works end to end",
                detail: "Five courses covering campaign structure, conversion tactics, customer journey mapping, and growth hacking for online brands.",
            },
            {
                label: "Social Media",
                subCategory: "Social Media",
                count: 4,
                goal: "Build and manage audiences on social platforms",
                detail: "Facebook, Instagram, and social commerce strategy. Includes a full Diploma in Social Media Strategy for those targeting a dedicated social media role.",
            },
            {
                label: "Content & SEO",
                subCategory: "Content & SEO",
                count: 2,
                goal: "Create content that ranks and converts",
                detail: "YouTube SEO, value-based content creation, and the principles behind organic traffic growth across video and written formats.",
            },
        ],
        roles: [
            { title: "Digital Marketing Specialist", track: "Digital Marketing", signal: "The most requested marketing hire across e-commerce, agencies, and in-house brands. Entry points are accessible with a certificate." },
            { title: "Social Media Manager", track: "Social Media", signal: "Every brand with an online presence needs one. Strong demand at agencies, retailers, and startups." },
            { title: "Content Strategist", track: "Content & SEO", signal: "Combines writing, SEO, and analytics. High demand in agencies, publishers, and SaaS businesses." },
            { title: "SEO Analyst", track: "Content & SEO", signal: "Analytical marketing role. Organic search is the highest-ROI channel for most online businesses." },
            { title: "Growth Marketer", track: "Digital Marketing", signal: "Data-driven role combining paid media, conversion testing, and acquisition strategy. Growing fast in tech and fintech." },
            { title: "Brand Manager", track: "Digital Marketing", signal: "Senior marketing role requiring strong campaign knowledge, audience insight, and cross-channel coordination." },
        ],
        faq: [
            {
                q: "Do I need a marketing background to start these courses?",
                a: "No. Every course on this page is designed for beginners. The Digital Marketing track starts from foundational concepts like what a campaign is and how online advertising works. No prior experience in marketing, business, or technology is required."
            },
            {
                q: "Are free marketing certificates taken seriously by employers?",
                a: "Yes, particularly for entry-level roles. Alison is a CPD-accredited provider and its certificates are recognised by professional bodies in South Africa, the UK, and internationally. A certificate alone will not land a senior role, but combined with a portfolio or practical project, it is a credible first qualification."
            },
            {
                q: "Which course should I start with if I am completely new to digital marketing?",
                a: "Start with Digital Marketing or Basic Concepts of Digital Marketing. Both are short, beginner-level certificates that give you a solid overview of how online marketing works before you move into specialised tracks like Social Media or Content and SEO."
            },
            {
                q: "What is the difference between digital marketing and social media marketing?",
                a: "Digital marketing is the broader discipline. It covers paid advertising, email, SEO, content, and social media as a whole. Social media marketing is one channel within it, focused specifically on building audiences and running campaigns on platforms like Facebook, Instagram, and YouTube. Most roles require both, but social media specialists go deeper on platform mechanics and community management."
            },
            {
                q: "Can these courses help me get freelance clients?",
                a: "Yes. The Digital Marketing and Content tracks are particularly useful for freelancers. Understanding campaign structure, conversion tactics, and content strategy lets you offer measurable services to small businesses. Many successful freelance marketers started with exactly these foundations."
            },
        ],
        guideLinks: [
            {
                title: "Free Digital Marketing Courses",
                desc: "SEO, content strategy, and growth marketing structured into a clear learning path.",
                href: "/free-digital-marketing-courses",
                badge: "Marketing",
            },
        ],
    },

};
