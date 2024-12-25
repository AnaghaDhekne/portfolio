'use client';
import { motion } from 'framer-motion';
import { CardStack } from "../ui/card-stack";
import { cards } from "../../lib/metadata";

export default function About() {
    return (
        <section id="about" className="item-center py-12 sm:py-16 md:py-20 lg:py-24 relative bg-white dark:bg-black overflow-hidden">
            <div className="text-center max-w-7xl relative mx-auto px-4 mb-8 sm:mb-12 md:mb-16">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 dark:text-white">
                    Actively seeking Software Developer roles
                </h1>
            </div>

            <div className="flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4">
                <CardStack items={cards} />
            </div>

            <div className="flex items-center justify-center mt-1 sm:mt-2 md:mt-4">
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex justify-center inline-flex gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 sm:px-10 py-2 sm:py-3 rounded-full text-sm sm:text-md font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
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