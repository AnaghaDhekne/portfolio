'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { CardStack } from "../ui/card-stack";

import { cards } from "../../lib/metadata";
const playfair = Playfair_Display({ subsets: ['latin'] });



export default function About() {

    return (
        <section id="about" className="item-center py-24 relative bg-white dark:bg-black overflow-hidden">
            <div className="text-center max-w-7xl relative mx-auto">
                <h1 className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white`}>
                    Actively seeking Software Developer roles
                </h1>
            </div>
            <div className="flex items-center justify-center py-20">
                <CardStack items={cards} />
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