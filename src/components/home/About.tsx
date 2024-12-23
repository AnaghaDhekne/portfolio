'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import imageLoader from '../../lib/imageLoader';
import { Playfair_Display } from 'next/font/google';
import { CardStack } from "../ui/card-stack";
import { useTheme } from 'next-themes';
import { cn } from '../../lib/utils';
const playfair = Playfair_Display({ subsets: ['latin'] });

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    {
        id: 0,
        content: (
            <p>
                Performance oriented Computer Science graduate with <Highlight>3.5+ years</Highlight> of diverse experience in full-stack development,
                system architecture, testing strategies, and database management. Proficient in agile methodologies, delivering high-quality,
                scalable applications. Demonstrated expertise in designing and implementing innovative solutions that align with business goals.

            </p>
        ),
    },
    {
        id: 1,
        content: (
            <p>
                I dont like this Twitter thing,{" "}
                <Highlight>deleting it right away</Highlight> because yolo. Instead, I
                would like to call it <Highlight>X.com</Highlight> so that it can easily
                be confused with adult sites.
            </p>
        ),
    },
    {
        id: 2,
        content: (
            <p>
                The first rule of
                <Highlight>Fight Club</Highlight> is that you do not talk about fight
                club. The second rule of
                <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
                club.
            </p>
        ),
    },
];

export default function About() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section id="about" className="item-center py-24 relative bg-white dark:bg-black overflow-hidden">
            <div className="text-center max-w-7xl relative mx-auto">
                <h1 className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white`}>
                    Actively seeking Software Developer roles
                </h1>
            </div>
            <div className="flex items-center justify-center py-20">
                <CardStack items={CARDS} />
            </div>

            <div className="flex items-center justify-center">
            <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="justify-center items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
                Get in Touch
                <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    →
                </motion.span>
                </motion.a>
            </div>
        </section>
    );
}