'use client';

import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const contactData = {
    name: "Anagha Dhekne",
    phone: "+1 315 403 4481",
    email: "anaghagdhekne7@gmail.com"
};

const ContactCard: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const ContactItem = ({
        icon: Icon,
        href,
        label,
        value,
        id
    }: {
        icon: React.ElementType;
        href?: string;
        label: string;
        value: string;
        id: string;
    }) => (
        <div
            className="group relative overflow-hidden rounded-lg bg-white/80 backdrop-blur-sm p-4 transition-all duration-300 hover:bg-white/90"
            onMouseEnter={() => setHoveredItem(id)}
            onMouseLeave={() => setHoveredItem(null)}
        >
            <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-blue-100">
                    <Icon
                        className={`h-6 w-6 transition-all duration-300 ${hoveredItem === id ? 'text-blue-600 scale-110' : 'text-blue-500'}`}
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 transition-all duration-300 group-hover:text-blue-500">
                        {label}
                    </span>
                    {href ? (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener,noreferrer"
                            className="text-gray-700 transition-all duration-300 group-hover:text-blue-600"
                        >
                            {value}
                        </a>
                    ) : (
                        <span className="text-gray-700 transition-all duration-300 group-hover:text-blue-600">
                            {value}
                        </span>
                    )}
                </div>
            </div>
            <div
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${hoveredItem === id ? 'w-full' : 'w-0'}`}
            />
        </div>
    );

    return (
        <section id="contact">
            <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 bg-white dark:bg-black">
                <div className="relative w-full max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg">
                            Feel free to reach out for collaborations or just a friendly hello
                        </p>
                    </motion.div>


                    {/* Card content */}
                    <div className="relative w-full max-w-md mx-auto transform space-y-4 rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] dark:bg-gray-800/80">
                        <div className="mb-6 text-center">
                            <h2 className="mb-1 text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">{contactData.name}</h2>
                        </div>

                        <div className="space-y-3">
                            <ContactItem
                                icon={Phone}
                                label="Phone"
                                value={contactData.phone}
                                id="phone"
                            />
                            <ContactItem
                                icon={Mail}
                                label="Email"
                                value={contactData.email}
                                id="email"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCard;