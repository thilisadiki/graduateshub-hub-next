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
        heroIntro: "Equip yourself with the essential skills to thrive in the corporate world or launch your own venture. Explore our free business courses covering strategy, operations, finance, and entrepreneurship.",
        aboutSection: "A strong foundation in business principles is essential for success in any industry. Our free online business courses are designed to demystify corporate strategy, financial planning, project management, and business communication. Whether you are an aspiring entrepreneur drafting your first business plan, or a mid-level manager looking to optimize your team's operational efficiency, these diplomas and certificates provide actionable insights that you can apply immediately to the workplace.",
        careerOpportunities: "Business skills are universally applicable. Completing these courses prepares you for roles such as Operations Manager, Business Analyst, Project Coordinator, Corporate Strategist, or HR Specialist. They also provide the crucial operational knowledge needed to successfully launch and run your own independent startup or freelance business.",
        skillsFocus: [
            "Strategic Planning & Execution",
            "Project Management (PMP, Agile)",
            "Business Communication & Negotiation",
            "Supply Chain & Operations Management",
            "Entrepreneurship & Startup Fundamentals"
        ]
    },

    // 5. Accounting
    accounting: {
        heroIntro: "Master the language of business. Learn how to manage finances, prepare statements, and analyze economic data with our free online accounting and bookkeeping courses.",
        aboutSection: "Accounting is the process of recording, summarizing, and analyzing financial transactions, a critical function for the survival of any business. Our free accounting courses range from the basics of double-entry bookkeeping to advanced corporate finance and tax principles. You'll learn to read balance sheets, manage payroll, understand inventory valuation, and use modern accounting software principles. These courses are perfect for aspiring bookkeepers, business owners, and finance professionals.",
        careerOpportunities: "Every organization, from small local shops to massive multinational corporations, requires skilled finance professionals to ensure compliance and profitability. Career options include Bookkeeper, Financial Analyst, Payroll Clerk, Tax Consultant, and Junior Accountant. These roles offer high job security and clear progression paths to senior financial management.",
        skillsFocus: [
            "Double-Entry Bookkeeping & Ledgers",
            "Financial Statement Preparation (Income, Balance, Cash Flow)",
            "Payroll Management & Tax Compliance",
            "Inventory Valuation (FIFO, LIFO)",
            "Cost Accounting & Budgeting"
        ]
    },

    // 6. Marketing
    marketing: {
        heroIntro: "Learn how to build brands, attract customers, and drive sales in the digital age. Explore our free online marketing courses covering SEO, social media, content strategy, and public relations.",
        aboutSection: "Marketing is the engine that drives business growth. In today's highly competitive digital landscape, understanding how to capture attention and convert audiences is a highly lucrative skill. Our free marketing courses teach the psychology of consumer behavior, the mechanics of digital advertising, SEO (Search Engine Optimization), content marketing, and brand management. You will learn how to craft compelling campaigns that resonate with target audiences and deliver measurable ROI.",
        careerOpportunities: "The marketing industry is dynamic and fast-paced, offering creative and analytical individuals fantastic career trajectories. Graduates can pursue exciting roles as Digital Marketing Specialists, Social Media Managers, SEO Analysts, Content Creators, and Brand Managers. Because marketing directly drives revenue, skilled marketers are in high demand across all sectors.",
        skillsFocus: [
            "Digital Marketing & Social Media Strategy",
            "Search Engine Optimization (SEO & SEM)",
            "Content Marketing & Copywriting",
            "Consumer Behavior & Market Research",
            "Public Relations & Brand Management"
        ]
    },

    // 7. Management
    management: {
        heroIntro: "Develop the leadership skills required to inspire teams, manage resources, and drive organizational success. Start learning today with our free online management and leadership courses.",
        aboutSection: "Effective management is the difference between an organization that struggles and one that excels. Our free management courses are built for current and future leaders. You will explore different leadership styles, conflict resolution techniques, human resource management, and organizational behavior. These courses provide a toolkit for handling difficult conversations, motivating diverse teams, and making strategic decisions under pressure.",
        careerOpportunities: "Strong leadership skills accelerate career progression in any field. These courses prepare you for supervisory and leadership roles including Team Leader, Department Manager, Human Resources Manager, Operations Director, and General Manager. Demonstrating formal management training on your CV shows employers you are ready for increased responsibility.",
        skillsFocus: [
            "Leadership Styles & Team Motivation",
            "Conflict Resolution & Negotiation",
            "Human Resources Management (Hiring, Training)",
            "Strategic Decision Making",
            "Organizational Behavior & Change Management"
        ]
    },

};
