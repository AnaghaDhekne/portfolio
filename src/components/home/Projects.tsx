"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { IconType } from "react-icons";
import { useTheme } from 'next-themes';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import { projects } from "../../lib/metadata";

export const CardContainer = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            className={cn("relative group/card", containerClassName)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className={cn("relative", className)}>
                <div className="absolute -inset-px rounded-xl opacity-0 group-hover/card:opacity-100 bg-gradient-to-r from-blue-500 to-purple-500 blur transition duration-500" />
                {children}
            </div>
        </div>
    );
};

export const CardBody = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("relative bg-gray-50 rounded-xl p-3 sm:p-6", className)}>
            {children}
        </div>
    );
};

export const CardItem = ({
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotate = 0,
    as: Component = "div",
}: {
    children: React.ReactNode;
    className?: string;
    translateX?: number | string;
    translateY?: number | string;
    translateZ?: number | string;
    rotateX?: number | string;
    rotateY?: number | string;
    rotate?: number | string;
    as?: any;
}) => {
    return (
        <Component
            className={cn("w-fit transition duration-200 ease-linear", className)}
            style={{
                transform: `perspective(1000px) translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(${rotate}deg)`,
            }}
        >
            {children}
        </Component>
    );
};

interface ProjectIcon {
    icon: IconType;
    color: string;
}

interface Project {
    tech: string;
    id: number;
    title: string;
    desc: string;
    img: string;
    icons: ProjectIcon[];
    link: string;
    publication: string;
}

export function Projects(): JSX.Element {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    useEffect(() => {
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
        }
    };

    const handleProjectClick = (link: string): void => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    const handlePublishClick = (pub: string): void => {
        window.open(pub, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="bg-white dark:bg-black py-12 sm:py-24" id="projects">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-4 sm:mb-6"
                >
                    <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 dark:text-white">
                        Featured Projects
                    </h2>
                </motion.div>

                <div className="flex justify-end gap-2 mb-4">
                    <button
                        className="relative z-40 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                    >
                        <IconArrowNarrowLeft className="h-4 w-4 sm:h-6 sm:w-6 text-black dark:text-gray-300" />
                    </button>
                    <button
                        className="relative z-40 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                    >
                        <IconArrowNarrowRight className="h-4 w-4 sm:h-6 sm:w-6 text-black dark:text-gray-300" />
                    </button>
                </div>

                <div className="relative w-full">
                    <div
                        ref={carouselRef}
                        onScroll={checkScrollability}
                        className="flex w-full overflow-x-scroll overscroll-x-auto py-2 sm:py-10 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    >
                        <div className="flex flex-row gap-3 sm:gap-6 pl-2 sm:pl-4">
                            {projects.map((project: Project, index: number) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.1 * index
                                        }
                                    }}
                                    // Increased width values for all breakpoints
                                    className="w-[320px] md:w-[380px] lg:w-[440px] flex-shrink-0 cursor-pointer"
                                    onClick={() => handleProjectClick(project.link)}
                                >
                                    <CardContainer>
                                        <CardBody className="relative w-full bg-white dark:bg-neutral-900 rounded-xl p-4 sm:p-6 border border-zinc-200 dark:border-zinc-800 group/card hover:border-blue-500/50 transition-colors">
                                            <div className="flex flex-col h-full">
                                                {/* Title Section - Fixed height */}
                                                <div className="h-12 sm:h-14 mb-2">
                                                    <h3 className="text-sm sm:text-lg font-semibold text-neutral-900 dark:text-white line-clamp-2">
                                                        {project.title}
                                                    </h3>
                                                </div>

                                                {/* Description Section - Fixed height */}
                                                <div className="h-20 sm:h-24 mb-4">
                                                    <p className="text-neutral-500 text-justify dark:text-neutral-400 text-xs sm:text-sm leading-relaxed line-clamp-4">
                                                        {project.desc}
                                                    </p>
                                                </div>


                                                {/* Icons Section - Fixed height */}
                                                <div className="h-12 sm:h-14 mb-4">
                                                    <div className="flex flex-wrap justify-center gap-1">
                                                        {project.icons.map((icon: ProjectIcon, iconIndex: number) => (
                                                            <div
                                                                key={iconIndex}
                                                                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-200 relative group/item"
                                                            >
                                                                {React.createElement(icon.icon, {
                                                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                                                    style: { color: icon.color }
                                                                })}
                                                                <div
                                                                    className="absolute inset-0 rounded-full blur-lg opacity-20 transition-opacity duration-300 group-hover/item:opacity-40"
                                                                    style={{ backgroundColor: icon.color }}
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Image Section - Fixed height and adjusted for wider cards */}
                                                <div className="h-44 sm:h-52 mb-4">
                                                    <CardItem
                                                        translateZ="50"
                                                        className="w-full h-full"
                                                    >
                                                        <div className="relative w-full h-full rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                                            <Image
                                                                src={project.img}
                                                                alt={project.title}
                                                                fill
                                                                sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, 440px"
                                                                className="object-cover transform transition-all duration-500 group-hover/card:scale-105"
                                                            />
                                                        </div>
                                                    </CardItem>
                                                </div>

                                                {/* Publication and Tech Stack Section - Fixed height */}
                                                <div className="h-16 sm:h-20">
                                                    {!project.publication ? (
                                                        <CardItem
                                                            translateZ="30"
                                                            className="mb-4 h-3 border-b border-neutral-300 dark:border-neutral-600"
                                                        >  <></>
                                                        </CardItem>
                                                    ) : (
                                                        <motion.div
                                                            className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm font-semibold text-center mb-2"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handlePublishClick(project.publication);
                                                            }}
                                                        >
                                                            IEEE Paper
                                                        </motion.div>
                                                    )}


                                                    <p className="text-xs font-semibold text-neutral-900 dark:text-white text-center line-clamp-2">
                                                        {project.tech}
                                                    </p>
                                                </div>



                                                {/* Bottom Border */}
                                                <div className="h-1">
                                                    <div className={`w-full h-0.5 rounded-full ${isDark ? 'bg-slate-100' : 'bg-slate-100'}`} />
                                                </div>
                                            </div>
                                        </CardBody>
                                    </CardContainer>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-4 sm:mt-8">
                    <motion.a
                        href="https://github.com/AnaghaDhekne"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex justify-center inline-flex gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 sm:px-5 py-2 rounded-full text-sm sm:text-md font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        View More Projects
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </div>
            </div>
        </div>
    );
}