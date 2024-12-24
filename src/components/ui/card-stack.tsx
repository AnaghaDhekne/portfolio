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
        <div className="relative h-96 w-full md:h-[400px] md:w-[900px]">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="gap-12 absolute dark:bg-black bg-white h-96 w-full md:h-[400px] md:w-[900px] rounded-3xl shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex overflow-hidden"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: cards.length - index,
                        }}
                    >
                        <div className="relative w-[300px] h-full flex justify-center items-center">
                            <div
                                className="absolute w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${card.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent/60 dark:to-transparent/60"
                            />

                        </div>
                        <div className="relative w-1/2 h-full flex justify-center items-center">
                            <div className="font-normal text-justify text-neutral-700 dark:text-neutral-200 text-left italic text-lg leading-relaxed">
                                {card.content}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
