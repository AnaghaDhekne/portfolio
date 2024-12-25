"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
    id: number;
    content: React.ReactNode;
    image: string;
};

export const CardStack = ({
    items,
    offset,
    scaleFactor,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();
        return () => clearInterval(interval);
    }, []);

    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards];
                newArray.unshift(newArray.pop()!);
                return newArray;
            });
        }, 8000);
    };

    return (
        <div className="relative h-[32rem] w-full max-w-[900px] mx-auto">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute w-full h-full rounded-3xl shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] dark:bg-black bg-white"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: cards.length - index,
                        }}
                    >
                        <div className="flex flex-col sm:flex-row h-full">
                            {/* Image container */}
                            <div className="relative w-full h-[45%] sm:h-full sm:w-1/2 overflow-hidden rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none">
                                <img
                                    src={card.image}
                                    alt="Card image"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-white/10 to-transparent/60 dark:to-transparent/60" />
                            </div>

                            {/* Content container */}
                            <div className="flex-1 sm:w-1/2 p-6 flex items-center">
                                <div className="w-full">
                                    <div className="font-normal text-neutral-700 dark:text-neutral-200 text-sm sm:text-base md:text-lg leading-relaxed italic">
                                        {card.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
