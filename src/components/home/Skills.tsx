"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaJava, FaJs, FaPython, FaHtml5, FaCss3Alt, FaComments, FaReact, FaNodeJs, FaAngular, FaAws, FaGitAlt, FaDocker, FaJira, FaConfluence, FaBrain } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiSpringboot, SiNextdotjs, SiExpress, SiTailwindcss, SiMysql, SiMongodb, SiPostgresql, SiJenkins, SiPostman, SiTensorflow, SiPandas, SiNumpy, SiScikitlearn, SiSpacy, SiApachekafka, SiMicrosoftsqlserver, SiElasticsearch } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { useTheme } from "next-themes";

const skills = {
    row1: [
        { title: "HTML", icon: FaHtml5, color: "#E34F26" },
        { title: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { title: "Python", icon: FaPython, color: "#3776AB" },
        { title: "C++", icon: SiCplusplus, color: "#00599C" },
        { title: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { title: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { title: "Java", icon: FaJava, color: "#007396" },
    ],
    row2: [
        { title: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
        { title: "React", icon: FaReact, color: "#61DAFB" },
        { title: "Node.js", icon: FaNodeJs, color: "#339933" },
        { title: "Next.js", icon: SiNextdotjs, color: "#000000", darkColor: "#FFFFFF" },
        { title: "Express", icon: SiExpress, color: "#000000", darkColor: "#FFFFFF" },
        { title: "Angular", icon: FaAngular, color: "#DD0031" },
        { title: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    ],
    row3: [
        { title: "Machine Learning", icon: FaBrain, color: "#FF7043" },
        { title: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { title: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        { title: "Pandas", icon: SiPandas, color: "#150458" },
        { title: "NumPy", icon: SiNumpy, color: "#333333" },
        { title: "NLTK", icon: FaComments, color: "#569E4A" },  // Added NLTK
        { title: "spaCy", icon: SiSpacy, color: "#003D57" }
    ],
    row4: [
        { title: "AWS", icon: FaAws, color: "#FF9900" },
        { title: "MySQL", icon: SiMysql, color: "#4479A1" },
        { title: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { title: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { title: "Apache Kafka", icon: SiApachekafka, color: "#F7B93E" },  // Added Apache Kafka
        { title: "Microsoft SQL Server", icon: SiMicrosoftsqlserver, color: "#CC2927" },  // Added Microsoft SQL Server
        { title: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },  // Added Elasticsearch
    ],
    row5: [
        { title: "Confluence", icon: FaConfluence, color: "#172B4D" },
        { title: "REST API", icon: TbApi, color: "#009688" },
        { title: "JIRA", icon: FaJira, color: "#0052CC" },
        { title: "Postman", icon: SiPostman, color: "#FF6C37" },
        { title: "Docker", icon: FaDocker, color: "#2496ED" },
        { title: "Jenkins", icon: SiJenkins, color: "#D24939" },
        { title: "Git", icon: FaGitAlt, color: "#F05032" }
    ],
};

export const SkillsParallax = () => {
    const ref = React.useRef(null);
    const [isMobile, setIsMobile] = React.useState(false);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const translateXValue = isMobile ? 200 : 400;
    const translateX = useTransform(scrollYProgress, [0, 1], [0, translateXValue]);
    const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, -translateXValue]);

    return (
        <div id="skills"
            ref={ref}
            className="min-h-[80vh] bg-white dark:bg-black sm:min-h-[80vh] md:min-h-[80vh] xl:min-h-[120vh] 2xl:min-h-[100vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"

        >
            <Header />

            <div className="skills-content w-full overflow-hidden mt-8 sm:mt-12">
                <div className="overflow-x-hidden px-2 sm:px-4 md:px-6 lg:px-8">
                    {Object.entries(skills).map(([rowKey, rowSkills], index) => (
                        <motion.div
                            key={rowKey}
                            className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} 
                                gap-2 xs:gap-3 sm:gap-4 md:gap-6 
                                mb-4 sm:mb-6 md:mb-8 
                                ${isMobile ? 'ml-2' : 'justify-center'}`} // Added margin for mobile alignment
                        >
                            {rowSkills.map((skill) => (
                                <SkillCard
                                    key={skill.title}
                                    {...skill}
                                    translate={index % 2 === 0 ? translateX : translateXReverse}
                                />
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div className="text-center max-w-7xl z-20 relative mx-auto pt-28 sm:pt-28 md:pt-20 lg:pt-28 xl:pt-44 pb-4 px-4 w-full left-0 top-0">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 dark:text-white">
                Technologies I&apos;ve Worked With
            </h1>
        </div>

    );
};

const SkillCard = ({
    title,
    icon: Icon,
    color,
    darkColor,
    translate,
}: {
    title: string;
    icon: React.ElementType;
    color: string;
    darkColor?: string;
    translate: any;
}) => {
    const { theme } = useTheme();

    return (
        <motion.div
            style={{ x: translate }}
            className="group/skill relative h-14 w-14 xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 
                rounded-lg sm:rounded-xl bg-white/5 dark:bg-white/[0.02] 
                border border-neutral-200 dark:border-white/[0.08] hover:border-neutral-300 dark:hover:border-white/[0.15] 
                transition-colors duration-500 flex-shrink-0"
        >
            <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-neutral-50 dark:from-neutral-900/50 to-neutral-100/50 dark:to-neutral-800/50" />

            <div className="relative h-full w-full p-1 xs:p-1.5 sm:p-2 md:p-3 flex flex-col items-center justify-center">
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, -5, 0],
                        transition: { duration: 0.5 }
                    }}
                    className="relative"
                >
                    <Icon
                        className="w-4 h-4 xs:w-5 xs:h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-transform duration-300"
                        style={{ color: darkColor && theme === 'dark' ? darkColor : color }}
                    />
                    <div
                        className="absolute inset-0 blur-lg opacity-25 transition-opacity duration-300 group-hover/skill:opacity-40"
                        style={{ backgroundColor: color }}
                    />
                </motion.div>

                <div className="mt-1 sm:mt-2">
                    <h2 className="text-[6px] xs:text-[8px] sm:text-xs md:text-sm font-medium text-neutral-700 dark:text-neutral-300 text-center transition-colors duration-300 group-hover/skill:text-neutral-900 dark:group-hover/skill:text-white">
                        {title}
                    </h2>
                </div>
            </div>
        </motion.div>
    );
};

export default SkillsParallax;
