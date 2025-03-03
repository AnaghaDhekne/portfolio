import type { Metadata } from 'next';
import { FaChartLine, FaSync, FaFacebook, FaTwitter, FaGithub, FaCogs, FaTasks } from "react-icons/fa";
import { FaJava } from 'react-icons/fa6';
import { GrResources } from 'react-icons/gr';
import { TbPackages } from 'react-icons/tb';
import { GiAtomicSlashes, GiProcessor } from 'react-icons/gi';
import { FcParallelTasks } from 'react-icons/fc';
import { SiTensorflow, SiKeras, SiPytorch, SiFuturelearn, SiJunit5, SiSwagger, SiPython, SiGradle, SiApachemaven, SiJupyter, SiApacheairflow, SiScikitlearn, SiOpencv, SiNumpy, SiPandas, SiHtml5, SiCss3, SiJavascript, SiFlask, SiSpringboot, SiMysql, SiPostman} from "react-icons/si";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteMetadata = {
    title: 'Anagha Dhekne - Portfolio',
    description: 'Professional portfolio showcasing full-stack development projects and skills',
    author: 'Anagha Dhekne',
    siteUrl: 'https://AnaghaDhekne.github.io/portfolio/',
};

export const generateMetadata = (path: string): Metadata => {
    const currentUrl = `${siteMetadata.siteUrl}${basePath}${path}`;

    return {
        title: siteMetadata.title,
        description: siteMetadata.description,
        authors: [{ name: siteMetadata.author }],
        openGraph: {
            title: siteMetadata.title,
            description: siteMetadata.description,
            url: currentUrl,
            siteName: siteMetadata.title,
            type: 'website',
            images: [
                {
                    url: `${currentUrl}/images/anagha.jpg`,
                    width: 1200,
                    height: 630,
                    alt: siteMetadata.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: siteMetadata.title,
            description: siteMetadata.description,
            images: [`${currentUrl}/images/anagha.jpg`],
        },
        robots: {
            index: true,
            follow: true,
        },
        metadataBase: new URL(siteMetadata.siteUrl),
    };
};

export const experiences = [
    {
        title: "Research Intern",
        company: "Syracuse University",
        location: "Syracuse, NY",
        type: "Internship",
        date: "June 2024 - Present",
        description: "Developed a scalable ETL pipeline to scrape and extract 100K+ social media posts using Python, Apache Airflow, and Beautiful Soup, ensuring efficient data ingestion. Designed a robust NLP preprocessing pipeline with NLTK and TextBlob for tokenization, lemmatization, and stemming. Engineered feature extraction with TF-IDF and Doc2Vec, enhancing logistic regression model accuracy by 3%. Built hate speech detection models, achieving 80% precision with logistic regression, surpassing SVM (77%) and Naive Bayes (65%), validated through cross-validation and classification reports. Created interactive data visualizations with Matplotlib and Seaborn to analyze hate speech trends, including class distributions, word clouds, top n-grams, and sentiment polarity distributions.",
        skills: ["Python", "ETL", "Web Scraping", "NLP", "NLTK", "TextBlob", "TF-IDF", "Doc2Vec", "Logistic Regression", "SVM", "Naive Bayes", "Cross-validation", "Matplotlib", "Seaborn", "Data Visualization", "Feature Engineering", "Classification Reports"],
    },
    {
        title: "System Test Intern",
        company: "New York Air Brake",
        location: "Watertown, NY",
        type: "Internship",
        date: "June 2023 - August 2023",
        description: "Developed a RESTful microservice with Python Flask to process brake sensor data, ensuring 90% uptime through robust API design. Improved data reliability by reducing sensor inconsistencies from 15% to below 2% with validation, error handling, and logging. Optimized PostgreSQL with indexing and tuning, enhancing read performance for real-time Tableau dashboard monitoring.",
        skills: ["Python", "Flask", "RESTful APIs", "PostgreSQL", "Indexing", "Tableau", "Data Validation", "Error Handling", "Logging", "Database Tuning", "Query Optimization"],
    },
    {
        title: "Software Developer",
        company: "Citi Bank",
        location: "Pune, IN",
        type: "Full-time",
        date: "October 2021 - July 2022",
        description: "As a Backend Developer, I designed and developed Spring Boot REST APIs for Audit and Portfolio services in Mutual Funds, ensuring seamless integration with the front-end. I implemented an event-driven architecture using Kafka consumers to manage high-throughput financial transactions efficiently. To improve system reliability and availability, I configured the ELK Stack (Elasticsearch and Kibana) for centralized log aggregation and faster issue resolution. API security was enhanced using OAuth 2.0 and JWT authentication with Spring Security, ensuring data protection and compliance. I utilized Swagger for API versioning, fostering better collaboration between frontend and backend teams through up-to-date API specifications. Additionally, I contributed to UI development using JavaScript and Angular, aligning UI designs with system architecture and data models. Automated unit testing with JUnit and Mockito resulted in over 90% test coverage, ensuring robust code quality. Throughout the process, I collaborated with SMEs to align backend services with business needs, optimizing data workflows and system integration.",
        skills: ["Java", "Spring Boot", "React", "AWS", "MySQL", "MongoDB", "Docker", "Jenkins", "Kafka", "JUnit", "Mockito", "Swagger", "OAuth 2.0", "JWT"]
    },
    {
        title: "Software Engineer",
        company: "Eaton",
        location: "Pune, IN",
        type: "Full-time",
        date: "October 2020 - October 2021",
        description: "Developed a robust Automation Test Framework and core libraries for Advanced Metering Infrastructure (AMI) using C#, adhering to test-driven development (TDD) methodologies to achieve 100% test coverage compliance and reduce test execution time by 95%. Additionally, built a Python-based continuous deployment tool for AMI firmware, enhancing deployment efficiency by 40% and integrating seamlessly into the DevOps pipeline. Led scrum events, facilitated sprint demos for stakeholders, and actively gathered feedback to drive continuous improvements, ensuring project alignment with business goals and technical excellence.",
        skills: ["C#", "TDD", "Automation Testing", "Python", "Continuous Deployment", "DevOps", "Scrum", "Agile", "Regression Testing", "AMI", "CI/CD"]
    },
    {
        title: "Machine Learning Intern",
        company: "OneGo",
        location: "Pune, IN",
        type: "Internship",
        date: "August 2019 - April 2020",
        description: "Developed and optimized end-to-end pipelines for real-time video emotion detection. Built an ETL pipeline using Apache Airflow for workflow orchestration, achieving 65% accuracy in emotion detection through machine learning on video data. Designed an image preprocessing pipeline leveraging OpenCV and Python, implementing frame separation, brightness adjustment, and 48x48 grayscale standardization, reaching 95% accuracy while effectively handling corrupted files and noise reduction. Improved processing efficiency by 40% through optimized feature extraction pipelines utilizing CNNs, and libraries such as PyTorch, TensorFlow, Keras, and scikit-learn, employing vectorized operations in NumPy. Additionally, developed a web application with Flask, HTML, CSS, and JavaScript, enabling users to upload video files for real-time emotion detection, seamlessly integrating backend processing with machine learning to deliver an interactive and user-friendly experience.",
        skills: ["ETL Pipeline", "Python", "OpenCV", "Machine Learning", "CNNs", "PyTorch", "TensorFlow", "Keras", "scikit-learn", "NumPy", "Data Preprocessing", "Feature Extraction", "Flask", "HTML", "CSS", "JavaScript"]
    },
    {
        title: "Software Engineer Intern",
        company: "Eaton",
        location: "Pune, IN",
        type: "Internship",
        date: "June 2019 - August 2019",
        description: "Designed and developed an enterprise-grade IoT monitoring platform capable of managing over 500 devices, achieving 85% uptime and enhanced scalability. The platform integrated QR code scanning and geolocation services using React Native Camera and Google Maps API for seamless device management. Engineered a real-time data visualization system leveraging React Native, D3.js, and Chart.js, enabling advanced data aggregation and actionable user insights. Implemented secure authentication with OAuth 2.0 while utilizing Redux for efficient state management and Async Storage for persistent offline storage. Optimized React components through memoization techniques to enhance performance, security, and offline usability. Additionally, developed an Express.js proxy server to enable frontend testing, reducing dependency on backend services and streamlining development workflows.",
        skills: ["React Native", "JavaScript", "OAuth 2.0", "Redux", "Async Storage", "Node.js", "Express.js", "Data Visualization", "State Management", "Frontend Testing"]
    },
    {
        title: "Software Engineer Intern",
        company: "Tech Mahindra",
        location: "Pune, IN",
        type: "Internship",
        date: "June 2018 - July 2018",
        description: "Developed a Virtual Reality Android application focused on customizable home and interior design to enhance user experience. The application allows users to create virtual 3D floorplans, design interiors, and navigate through a virtual home with immersive walk-through functionality. Users can also capture desired angles and visualize their designs in detail. By enabling virtual staging, the application simplifies complex situations such as design changes, saving both time and costs associated with traditional staging methods. This solution provides a powerful, interactive tool for interior design planning and visualization.",
        skills: ["Unity", "C#", "Virtual Reality (VR)", "3D Modeling", "Android Development", "User Experience (UX)", "Simulation"]
    },
];

export const education = [
    {
        title: "Master of Science in Computer Science",
        institution: "Syracuse University",
        location: "Syracuse, NY",
        gpa: "GPA - 3.67",
        date: "2022 - 2024",
    },
    {
        title: "Bachelor of Technology in Computer Engineering",
        institution: "MKSSS's Cummins College of Engineering for Women",
        location: "Pune, IN",
        gpa: "GPA - 3.89",
        date: "2017 - 2020",
    },
    {
        title: "Diploma in Computer Engineering",
        institution: "Maharashtra State Board of Technical Education",
        location: "Pune, IN",
        gpa: "GPA - 3.97",
        date: "2014 - 2017",
    }
];

export const cards = [
    {
        id: 0,
        content: "Performance oriented Computer Science graduate with 3+ years of diverse experience in full-stack development, testing strategies, system architecture and database management. Proficient in agile methodologies, delivering high-quality, scalable applications. Demonstrated expertise in designing and implementing innovative solutions that align with business goals.",
        image: "images/anagha1.jpg"
    },
    {
        id: 1,
        content: "As a passionate Software Development Engineer, I build scalable, efficient software solutions through collaboration and innovation. My expertise spans designing back-end systems, creating seamless front-ends, and using frameworks like Spring Boot, React.js, and Node.js. I develop microservices, secure APIs, and optimize performance, working closely with cross-functional teams to exceed user expectations.",
        image: "images/anagha.jpg"
    },
    {
        id: 2,
        content:"Passionate about solving complex problems through data, with expertise in Python, SQL, and machine learning frameworks like TensorFlow and Scikit-learn. Experienced in developing predictive models, ETL pipelines, and NLP solutions to turn raw data into actionable insights. Skilled at blending analytical thinking with creativity to deliver impactful, data-driven solutions that drive smarter decisions and create measurable value.",
        image: "images/anagha2.jpg"
    },
]

export const projects = [
    {
        id: 1,
        tech: "HTML • CSS • JS • Flask • Pandas • MySQL • TensorFlow • Keras • PyTorch • CNN",
        title: "Automatic Depression detection through Visual Inputs",
        desc: "Automatic Depression Detection through Visual Inputs uses computer vision and machine learning to analyze facial expressions and emotional cues with co-relation to BDI score to accurately identify signs of depression.",
        img: "images/depression.png",
        icons: [
            { icon: SiPython, color: "#3776AB" },  // Python
            { icon: SiTensorflow, color: "#FF6F00" },  // TensorFlow
            { icon: SiKeras, color: "#D00000" },  // Keras
            { icon: SiPytorch, color: "#EE4C2C" },  // PyTorch
            { icon: SiScikitlearn, color: "#F7931E" },  // Scikit-learn
            { icon: SiOpencv, color: "#5C3EE8" },  // OpenCV
            { icon: SiPandas, color: "#150458" },  // Pandas
            { icon: SiFlask, color: "#000000" },  // Flask
            { icon: SiMysql, color: "#4479A1" },  // MySQL
        ],
        link: "https://github.com/AnaghaDhekne/Automatic-Depression-Detection",
        publication: "https://ieeexplore.ieee.org/document/9210301",
    },
    {
        id: 2,
        tech: "NLTK • TF-IDF • Doc2Vec • Logistic Regression • Naive Bayes • SVM • Matplotlib",
        title: "Hate Speech Detection",
        desc: "This project analyzes tweets to detect hate speech and offensive language using machine learning techniques. The primary goal is to preprocess the data, perform exploratory data analysis (EDA), build models, and evaluate their performance.",
        img: "images/hatespeech.png",
        icons: [
            { icon: SiPython, color: "#306998" },  // Python
            { icon: SiApacheairflow, color: "#FF6600" },  // Apache Airflow
            { icon: SiScikitlearn, color: "#F7931E" },  // Scikit-learn
            { icon: FaGithub, color: "#181717" },  // GitHub (for version control)
            { icon: SiJupyter, color: "#F37626" },  // Jupyter (for notebooks)
            { icon: FaCogs, color: "#1D1D1D" },  // Support Vector Machines (SVM) (using gears as a symbolic representation)
            { icon: FaChartLine, color: "#28B5B5" },  // Data Visualization (Matplotlib/Seaborn)
            { icon: FaTwitter, color: "#1DA1F2" },  // Twitter
        ],
        link: "https://github.com/AnaghaDhekne/Hate-Speech-Detection",
        publication: "",
    },
    {
        id: 3,
        tech: "Data Visualization • Linear Regression • Recursive Feature Elimination • Modeling",
        title: "Facebook Ad Campaign Analysis",
        desc: " The Facebook-AdCampaign-Analysis project focuses on performing Exploratory Data Analysis (EDA) on ad campaign data and selecting the best machine learning algorithm for predicting campaign success.",
        img: "images/facebook.png",
        icons: [
            { icon: SiPython, color: "#3776AB" },  // Python
            { icon: SiPandas, color: "#150458" },  // Pandas
            { icon: SiNumpy, color: "#013243" },  // NumPy
            { icon: SiScikitlearn, color: "#F7931E" },  // Scikit-learn
            { icon: FaChartLine, color: "#4CAF50" },  // Linear Regression (used in model training)
            { icon: FaFacebook, color: "#1877F2" },  // Facebook
        ],
        link: "https://github.com/AnaghaDhekne/Facebook-AdCampaign-Analysis",
        publication: "",
    },
    {
        id: 4,
        tech: "Feature Engineering • Random Forest • Gradient Boosting • Voting Classifiers",
        title: "Telco Customer Churn Prediction: Ensemble Learning",
        desc: "Developed an ensemble system using Random Forest, Gradient Boosting, and Voting Classifiers, achieving 89.92% accuracy in predicting churn based on demographics, service usage patterns, payment methods, and customer support.",
        img: "images/telco.png",
        icons: [
            { icon: SiPython, color: "#3776AB" },  // Python
            { icon: SiNumpy, color: "#013243" },  // NumPy
            { icon: SiPandas, color: "#150458" },  // Pandas
            { icon: SiFlask, color: "#000000" },  // Flask
            { icon: SiMysql, color: "#4479A1" },  // MySQL
            { icon: SiHtml5, color: "#E34F26" },  // HTML
            { icon: SiJavascript, color: "#F7DF1E" },  // JavaScript
            { icon: FaChartLine, color: "#4CAF50" },  // Linear Regression (used in model training)
            { icon: SiScikitlearn, color: "#F7931E" },  // Scikit-learn
        ],

        link: "https://github.com/AnaghaDhekne/Ensemble-Methods-TelcoCustomerChurnPrediction",
        publication: "",
    },
    {
        id: 5,
        tech: "Java • SpringBoot • Maven • SQL • Junit • Postman • Swagger • Agile • Scrum",
        title: "Shift Management",
        desc: "A web application that enables streamlined scheduling, real-time adjustments, and enhanced visibility into workforce allocation, thereby boosting overall operational efficiency and reducing labor costs.",
        img: "images/shift.png",
        icons: [
            { icon: FaJava, color: "#007396" },  // Java
            { icon: SiMysql, color: "#00758F" },  // MySQL
            { icon: SiPostman, color: "#FF6C37" },  // Postman
            { icon: SiSpringboot, color: "#6DB33F" },  // Spring Boot
            { icon: SiApachemaven, color: "#C71A36" },  // Maven
            { icon: SiGradle, color: "#02303A" },  // Gradle
            { icon: SiJunit5, color: "#F05138" },  // Junit  
            { icon: FaTasks, color: "#0074D9" },  // Kanban (Using a tasks icon in a blue shade as a symbolic representation)
            { icon: SiSwagger, color: "#85EA2D" },
        ],
        link: "https://github.com/AnaghaDhekne/Shift-management-",
        publication: "",
    },
    {
        id: 6,
        tech: "C++ • Threading • Mutex • Future • Locks • Async • Condition Variables",
        title: "Parallel Programming for Sudoku",
        desc: "Developed a high-performance Sudoku solver using C++17 features like threads, mutex, condition variables, locks, and async, reducing computation time by 98% - from 374s to 6ms.",
        img: "images/Sudoku.jpg",
        icons: [
            { icon: FcParallelTasks, color: "#F05138" },
            { icon: FaSync, color: "#FFCA28" },
            { icon: GrResources, color: "#147EFB" },
            { icon: GiProcessor, color: "#6DB33F" },
            { icon: GiAtomicSlashes, color: "#02303A" },
            { icon: SiFuturelearn, color: "#007ACC" },
            { icon: TbPackages, color: "#85EA2D" },
        ],
        link: "https://github.com/AnaghaDhekne/Parallel-Programming-Sudoku",
        publication: "",
    },
];
