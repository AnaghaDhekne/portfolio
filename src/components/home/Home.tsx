"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { motion } from "framer-motion";
import { Playfair_Display, Space_Grotesk } from 'next/font/google';
import { ContinuousTypewriter } from "../ui/continuous-typewriter";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const playfair = Playfair_Display({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function BackgroundBoxesDemo() {

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />

            <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center space-y-4"
                >
                    <h1 className={`${playfair.className} relative text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-6 tracking-wider`}>
                        Anagha Dhekne
                    </h1>
                </motion.div>

                <div
                    aria-live="polite"
                    className={`${playfair.className} relative text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white/90 font-light tracking-widest relative h-[1.5em] flex items-center justify-center gap-2`}
                >
                    <ContinuousTypewriter
                        words={[
                            "Software Developer",
                            "Full Stack Developer",
                            "Backend Developer",
                            "Frontend Developer",
                            "Java Developer",
                        ]}
                        className="text-white/90 min-w-[12ch]"
                    />
                </div>

                <p className={`${spaceGrotesk.className} relative text-[10px] xs:text-xs sm:text-sm md:text-lg text-white/80 tracking-wide font-light`}>
                    In the World of Infinite Loops, I find the Way Out!
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex gap-6 item-center relative justify-center flex-wrap"
                >
                    {[
                        { Icon: FaGithub, href: "https://github.com/AnaghaDhekne", label: "GitHub" },
                        { Icon: FaLinkedin, href: "https://www.linkedin.com/in/anagha-dhekne/", label: "LinkedIn" },
                        { Icon: Mail, href: "#contact", label: "Email" },
                    ].map(({ Icon, href, label }) => (
                        <motion.a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-white/80 hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>

                <a
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/resume.pdf`}
                    download="Anagha_Dhekne_Resume.pdf"
                    className="relative px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mt-4 sm:mt-6"
                >
                    Download Resume
                </a>

                <motion.div
                    className="absolute bottom-10 justify-center cursor-pointer"
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    onClick={() => {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <ArrowDown className="text-white w-8 h-8" />
                </motion.div>
            </div>
        </div>
    );
}
