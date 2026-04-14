import type { Course } from '@/types';

export const dataAnalyticsCourses: Course[] = [
    {
        id: "microsoft-excel-data-analysis",
        title: "Microsoft Excel for Data Analysis",
        tag: "Certificate",
        category: "Data Analytics",
        subCategory: "Spreadsheets & Reporting",
        duration: "8-12 Hours",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
        affiliateLink: "https://alison.com/course/microsoft-excel-2010-revised-2017?utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205",
        description: "Master Microsoft Excel from the ground up, formulas, pivot tables, VLOOKUP, charts, and macros used daily by analysts worldwide.",
        longDescription: "Microsoft Excel remains the single most widely used tool in a data analyst's daily workflow, from entry-level reporting to complex financial modelling. This comprehensive Excel certificate takes you from navigating menus and basic spreadsheet tasks all the way through to the intermediate-to-advanced features that professional analysts rely on every day. You will work with real practical exercises and sample spreadsheets to understand how Excel handles mathematical operations, column and row management, and worksheet formatting for print-ready reports. The course then moves into the analytical capabilities that make Excel indispensable: building charts and graphs to visualise data trends, writing formulas and functions to automate calculations, using VLOOKUP to search and cross-reference data across multiple sheets, and creating IF conditional logic to flag anomalies. You will also learn how to record and run macros to automate repetitive tasks, a significant time-saver in any reporting role. Whether you are preparing monthly reports, cleaning raw data exports, or building dashboards for management review, the skills in this course are immediately applicable from day one.",
        outcomes: [
            "Navigate Excel's menus and perform core spreadsheet tasks including column and row management.",
            "Create charts and tables to visualise data trends and patterns for stakeholder presentations.",
            "Write formulas and functions to automate calculations in financial reports and budgets.",
            "Use VLOOKUP to search and retrieve data across large, multi-sheet spreadsheets.",
            "Build IF conditional statements and record macros to automate repetitive analytical tasks."
        ],
        careerPath: "Excel proficiency is listed as a requirement on the majority of entry-level data analyst, reporting analyst, and finance assistant job postings globally. This certificate provides the core spreadsheet skills that allow you to step into roles such as Data Assistant, Junior Analyst, Business Reporting Coordinator, or Administrative Data Analyst. It is also an ideal complement to SQL and Python skills as you build a more advanced data toolkit.",
        targetAudience: "Designed for absolute beginners to data analysis, anyone starting in a reporting or administrative role, career switchers entering the data field, and business professionals who want to use Excel more effectively. No prior experience with spreadsheets or data is required.",
        editorsTake: "If you only take one course on this page, make it this one. Excel is present in virtually every office environment on earth, and the skills taught here, VLOOKUP, IF functions, pivot tables, and macros, are what employers mean when they say 'strong Excel skills' in a job description. This course is practical, well-structured, and covers exactly the right level of depth for someone just entering data analysis."
    },
    {
        id: "intro-power-bi",
        title: "Introduction to Power BI",
        tag: "Certificate",
        category: "Data Analytics",
        subCategory: "Data Visualisation",
        duration: "3-5 Hours",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        affiliateLink: "https://alison.com/course/introduction-to-power-bi?utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205",
        description: "Learn Microsoft Power BI from scratch, connect data sources, build dashboards, and create visual reports that turn raw numbers into insights.",
        longDescription: "Power BI has rapidly become the most in-demand business intelligence tool in the corporate world. This beginner-friendly certificate course teaches you how to acquire, organise, and visualise data using Microsoft's industry-leading BI platform, with no prior experience required. The course begins with installation and an orientation of the Power BI interface, walking you through its dashboard, data model view, and report canvas. You will then learn how to connect Power BI to a wide variety of data sources: spreadsheets, cloud services, databases, and live internet feeds. A significant focus is placed on data preparation, sorting, filtering, and transforming your data into a valid, clean format before analysis. From there, you will build interactive dashboards and visual reports that surface trends, outliers, and patterns in your data. The course also covers how to share and publish your reports so that business stakeholders can access insights in real time. This is the tool that bridges the gap between raw data and boardroom-ready presentations, and it is increasingly listed as a required skill across finance, marketing, operations, and HR analyst roles.",
        outcomes: [
            "Install Power BI Desktop and confidently navigate its interface, canvas, and data model view.",
            "Connect Power BI to diverse data sources including spreadsheets, databases, and cloud services.",
            "Clean, sort, and transform raw data into a structured, analysis-ready format.",
            "Design interactive dashboards and visual reports that communicate data insights clearly.",
            "Share and publish Power BI reports for real-time access by business stakeholders."
        ],
        careerPath: "Power BI expertise is one of the fastest-growing requirements in analyst job descriptions. This certificate directly prepares you for roles such as Business Intelligence Analyst, Reporting Analyst, Data Visualisation Specialist, or Junior Data Analyst. Combined with SQL or Excel skills, a Power BI certificate makes you a strong candidate for entry-level roles across finance, operations, and marketing analytics teams.",
        targetAudience: "Perfect for data analysts, business analysts, managers, and anyone who needs to present data visually. No technical background or coding knowledge is required, Power BI is designed to be accessible to non-developers, making it an ideal starting point for career changers and non-technical professionals.",
        editorsTake: "Power BI is one of the few tools where the gap between beginner and job-ready is surprisingly small. After this course, you will be capable of building the kind of dashboards that companies genuinely use in board meetings. It is also free to download and use, which means you can practice immediately after completing each module. We recommend pairing this course with the Excel certificate, together they cover most of what entry-level analyst roles require on day one."
    },
    {
        id: "intro-database-concepts",
        title: "Introduction to Database Concepts",
        tag: "Certificate",
        category: "Data Analytics",
        subCategory: "SQL & Databases",
        duration: "2-4 Hours",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80",
        affiliateLink: "https://alison.com/course/introduction-to-database-concepts-revised?utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205",
        description: "Understand how databases work, from SQL fundamentals and DBMS concepts to data normalisation and relational database design.",
        longDescription: "Every data analyst eventually needs to retrieve data directly from a database, and to do that, you need to understand how databases are structured and how to communicate with them using SQL. This foundational certificate provides a clear, beginner-accessible introduction to the concepts that underpin virtually every modern data system. The course starts with why databases exist, explaining how they outperform spreadsheets for storing, managing, and retrieving large volumes of information across organisations. You will learn the core vocabulary of the field: what a Database Management System (DBMS) and Relational Database Management System (RDBMS) are, how tables relate to one another, and how SQL Server Management Studio (SSMS) provides a graphical interface for interacting with SQL databases. The curriculum then moves into the technical foundations: how data is normalised to eliminate redundancy, how referential integrity keeps related data consistent, and how constraints and data types ensure data quality. DDL (Data Definition Language) statements, the commands used to create and modify database structures, are introduced with practical examples. By the end of this course, you will have the vocabulary and conceptual framework needed to begin writing SQL queries, reading database documentation, and working confidently alongside developers and database administrators in an analytical role.",
        outcomes: [
            "Explain what a database is and why organisations use DBMS and RDBMS systems instead of spreadsheets.",
            "Navigate SQL Server Management Studio (SSMS) to interact with databases using a graphical interface.",
            "Understand how relational database concepts, tables, keys, and joins, organise related data.",
            "Apply data normalisation principles to design clean, efficient, and non-redundant database structures.",
            "Interpret DDL statements and understand how constraints and data types enforce data quality."
        ],
        careerPath: "This certificate is the ideal first step before tackling SQL querying, database administration, or data engineering courses. The concepts learned here are directly applicable to roles such as Junior Data Analyst, Business Intelligence Analyst, Database Assistant, and IT Support Specialist. Understanding database structure makes you significantly more effective in any analytical role where you retrieve or interpret data from live systems.",
        targetAudience: "Perfect for complete beginners to databases and data analysis. Especially valuable for those who have started working with spreadsheets and want to understand the larger data infrastructure behind the tools they use. No prior coding or technical experience is required.",
        editorsTake: "Many beginners skip the conceptual foundations and jump straight into writing SQL, and then struggle to understand why their queries behave unexpectedly. This course prevents that. Understanding how relational databases are designed (and why) makes every subsequent SQL or data analysis course dramatically more productive. Take this before the Diploma in Databases and T-SQL for the best learning experience."
    },
    {
        id: "diploma-databases-t-sql",
        title: "Diploma in Databases and T-SQL",
        tag: "Diploma",
        category: "Data Analytics",
        subCategory: "SQL & Databases",
        duration: "8-12 Hours",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        affiliateLink: "https://alison.com/course/diploma-in-databases-and-t-sql-revised?utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205",
        description: "Go deep into SQL and T-SQL, learn to write queries, manage databases, handle transactions, and extract insight from structured data.",
        longDescription: "SQL is the most important technical skill a data analyst can have. Without it, your access to data is limited to whatever has already been exported into a spreadsheet, with it, you can query millions of records, combine data from multiple tables, and retrieve precisely the information you need, directly from a live database. This comprehensive diploma teaches both standard SQL and Microsoft's powerful Transact-SQL (T-SQL) variant, giving you skills that are directly applicable in SQL Server environments used across enterprise organisations worldwide. The course begins with the core concepts of database structure, then rapidly builds your querying ability: SELECT statements to retrieve data, WHERE clauses to filter it, GROUP BY to aggregate it, and JOIN operations to combine data from multiple related tables. You will learn T-SQL's extended capabilities including built-in functions, aggregate operations, and subqueries, the building blocks of complex analytical reports. The diploma also covers the administrative side of SQL Server: managing security, handling errors gracefully, and controlling transactions to ensure data integrity in multi-user environments. By completing this diploma, you will have the technical foundation to query real-world databases, write reports that pull live data, and communicate confidently with database administrators and data engineers on the technical requirements of your analysis.",
        outcomes: [
            "Write SQL SELECT statements with filtering, sorting, and aggregation to extract meaningful data from databases.",
            "Combine data from multiple related tables using JOIN operations to create comprehensive analytical datasets.",
            "Use T-SQL functions, subqueries, and aggregate operations to perform complex data transformations.",
            "Manage SQL Server databases including security configuration and user access control.",
            "Implement error handling and transaction management to ensure data integrity in production environments."
        ],
        careerPath: "SQL is listed as a required skill on more analyst job postings than any other technical tool. This diploma prepares you directly for roles such as Data Analyst, Business Intelligence Analyst, Database Analyst, SQL Developer, and Reporting Specialist. With this diploma on your CV, you move from being a spreadsheet-only analyst to someone who can access, query, and manipulate data at source, a significant career differentiator.",
        targetAudience: "Aimed at those who have completed a basic introduction to databases or have some familiarity with spreadsheets and want to progress to professional-level data querying. Also excellent for IT professionals who want to formalise their SQL knowledge and developers who want to understand the data layer of applications they work on.",
        editorsTake: "If Excel is the tool that gets you the job, SQL is the skill that gets you promoted. This diploma covers the level of SQL depth that data analyst interview technical assessments actually test, SELECT queries, JOINs, aggregations, and subqueries. The T-SQL component is a strong bonus since SQL Server is the database platform used in the majority of medium and large enterprise environments. Complete this alongside the Power BI course and you have a genuinely competitive data analytics skill set."
    },
    {
        id: "python-for-beginners-data",
        title: "Python for Beginners",
        tag: "Certificate",
        category: "Data Analytics",
        subCategory: "Python & Programming",
        duration: "4-6 Hours",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=600&q=80",
        affiliateLink: "https://alison.com/course/python-for-beginners?utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205",
        description: "Learn Python from scratch, variables, loops, functions, and file handling, the essential foundation for data analysis and automation.",
        longDescription: "Python has become the most widely used programming language in data analytics, data science, and machine learning. Its readable syntax, powerful libraries, and massive community make it the go-to choice for analysts who need to go beyond what Excel and SQL can handle alone. This beginner course introduces you to Python from the very first line of code, requiring no prior programming experience whatsoever. You will start by understanding what programming is and why Python is particularly suited to data work, then move through the essential building blocks: data types, variables, conditions, loops, lists, and functions. The course builds progressively, once you have core programming concepts down, you will tackle more advanced but practical topics including working with files (reading and writing data to and from CSV files, which is essential for data processing), modules and packages (which let you use Python's extensive library ecosystem), and object-oriented programming concepts. A memorable final project puts your skills to work building a voice assistant using Google APIs, demonstrating that Python skills are creative, practical, and genuinely powerful even at a beginner level. For data analysts specifically, this certificate gives you the foundation to start working with Python libraries like Pandas for data manipulation and Matplotlib for visualisation, which are covered in more advanced courses.",
        outcomes: [
            "Set up a Python development environment and write, run, and debug your first Python programs.",
            "Use variables, data types, conditions, and loops to control program logic and process information.",
            "Write functions and apply object-oriented programming concepts including classes and inheritance.",
            "Read from and write to files including CSV data, essential for importing and exporting datasets.",
            "Use modules and packages to extend Python with libraries relevant to data analysis and automation."
        ],
        careerPath: "Python is the most requested programming language in data analyst and data scientist job descriptions globally. This certificate gives you the foundation to pursue roles such as Junior Data Analyst, Data Science Trainee, Business Intelligence Analyst, and Automation Specialist. With a Python foundation, the door to Pandas, NumPy, and Machine Learning libraries opens, dramatically increasing the complexity and value of the data work you can perform.",
        targetAudience: "Designed for complete beginners to programming, no coding experience is required or assumed. Particularly valuable for data professionals who are comfortable with Excel or SQL but want to add programming capability to their toolkit, and for career changers who want to enter the data field from a non-technical background.",
        editorsTake: "Python is the skill that transforms a good analyst into a great one. This course teaches it the right way, starting with concepts rather than dumping syntax, and building up gradually to practical file handling and packages. The voice assistant project at the end is genuinely fun and demonstrates how quickly Python can become creative and powerful. After this certificate, progress to the Diploma in Python Programming to build the intermediate skills employers actually test for."
    },
    {
        id: "diploma-python-programming",
        title: "Diploma in Python Programming",
        tag: "Diploma",
        category: "Data Analytics",
        subCategory: "Python & Programming",
        duration: "12-16 Hours",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
        affiliateLink: "https://alison.com/course/diploma-in-python-programming?utm_source=alison_user&utm_medium=affiliates&utm_campaign=43098205",
        description: "Build a solid Python programming foundation, variables, data structures, file handling, and error management, ready for data analysis and automation.",
        longDescription: "This comprehensive diploma takes your Python skills from basic concepts through to the intermediate-level programming ability that employers expect from junior data analysts and data scientists. Where the beginner certificate gives you your first taste of Python, this diploma builds the depth and confidence to write real, functional programs that handle data reliably. The course starts by revisiting the fundamentals of Python with Visual Studio as your development environment, then moves quickly into the practical programming patterns that matter for data work. You will gain thorough experience creating and managing variables across different data types, crucial for structuring the information your programs process. The course places particular emphasis on decision-making in code (IF/ELIF conditional statements) and iteration (loops), which are the core logic patterns behind any data processing script. File operations receive substantial attention: you will learn to read raw data from files, write processed results, work with CSV files (the universal format for data exchange), and handle the errors that inevitably arise when processing real-world, messy data. The error handling module is particularly valuable, it teaches you how to write robust programs that fail gracefully rather than crashing unexpectedly when encountering unexpected input. This diploma positions you to begin working with Python's data ecosystem, including libraries like Pandas for data manipulation and NumPy for numerical computing.",
        outcomes: [
            "Write Python programs using variables, conditional logic, and loops to process and transform data reliably.",
            "Create and call functions to write modular, reusable code that can be applied to data pipelines.",
            "Read data from and write results to files including structured CSV format used in data analysis workflows.",
            "Use the CSV library to process tabular data programmatically, essential for automating data tasks.",
            "Implement exception handling to write robust programs that process real-world, imperfect data gracefully."
        ],
        careerPath: "Python at this diploma level is sufficient to begin contributing to data analysis workflows professionally. Graduates are positioned for roles such as Junior Data Analyst, Python Developer, Data Processing Specialist, or Junior Data Engineer. This diploma is also the direct prerequisite for moving into Python-based data science libraries, Pandas, NumPy, and Matplotlib, which form the core of a professional data science toolkit.",
        targetAudience: "Aimed at those who have some basic exposure to Python or programming and want to build comprehensive, employable skills. Also excellent for experienced Excel or SQL analysts who want to add Python to their toolkit and for career switchers who want to enter the data field with a combination of tools. Completing the Python for Beginners certificate first is recommended.",
        editorsTake: "This is the diploma that gets you Python-capable at the level entry-level data roles actually require. The focus on file handling, CSV processing, and error management is exactly what separates useful Python knowledge from theoretical knowledge, these are the patterns that come up in every real data processing job. Combined with the SQL diploma and Power BI certificate, this creates a data analytics toolkit that is genuinely competitive in today's job market."
    }
];
