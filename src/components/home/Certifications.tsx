'use client';

import { motion } from 'framer-motion';
import MagicButton from '../ui/MagicButton';
import { CardHoverEffect } from '../ui/card-hover-effect';
import { useTheme } from 'next-themes';

const certifications = [
    {
        title: "AWS Cloud Practitioner",
        subtitle: "AWS",
        date: "January 2025",
        link: "https://www.credly.com/badges/345309cc-af64-4e00-9f8e-de7066c5d008/linked_in_profile"
    },
    {
        title: "Python Certification",
        subtitle: "HackerRank",
        date: "June 2020",
        link: "https://www.hackerrank.com/certificates/3a72d5bda57e"
    },
    {
        title: "Java Basics",
        subtitle: "HackerRank",
        date: "June 2020",
        link: "https://www.hackerrank.com/certificates/3a72d5bda57e"
    }
];

export default function Certifications() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section id="certifications" className="py-16 relative bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                        Certifications
                    </h2>

                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <CardHoverEffect className={`${isDark
                                ? '!bg-gradient-to-br !from-neutral-900/50 !to-neutral-800/50 !border-0'
                                : '!bg-gradient-to-br !from-white/5 !to-white/10 !border-0'
                                } backdrop-blur-sm shadow-lg`}>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg  text-gray-800 dark:text-white bg-clip-text">
                                            {cert.title}
                                        </h3>
                                        <span className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap ml-4">
                                            {cert.date}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-neutral-600 dark:text-neutral-300">
                                            {cert.subtitle}
                                        </p>
                                        <MagicButton
                                            title="View Credentials"
                                            icon={
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                                    />
                                                </svg>
                                            }
                                            position="right"
                                            handleClick={() => window.open(cert.link, '_blank')}
                                            otherClasses={`h-8 text-xs ${isDark ? 'dark-magic-button' : ''}`}
                                        />
                                    </div>
                                </div>
                            </CardHoverEffect>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
