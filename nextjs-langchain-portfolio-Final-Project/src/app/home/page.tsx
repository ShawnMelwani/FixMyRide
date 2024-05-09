"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
export default function Home() {
  return (
    <div className="w-full">
        <div className="w-full rounded-md h-[30rem] overflow-hidden">
            <HeroHighlight className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                >
                    In the world of auto repair, precision isn't just a goal, it's a necessity. <Highlight className="text-black dark:text-white">FixMyRide</Highlight>
                </motion.h1>

                <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                    
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-1">
                    <Link href="/cars">
                        <div className="m-10 flex justify-center text-center">
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-4 py-3 px-6 text-lg"
                            >
                                <AceternityLogo />
                                <span>Try Now</span>
                            </HoverBorderGradient>
                        </div>
                    </Link>
                    <Link href="/forum">
                        <div className="m-10 flex justify-center text-center">
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-4 py-3 px-6 text-xl"
                            >
                                <AceternityLogo />
                                <span>Forum</span>
                            </HoverBorderGradient>
                        </div>
                    </Link>
                </div>
            </HeroHighlight>
        </div>        
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    </div>
);

}

const testimonials = [
  {
    quote: "I was skeptical about using an AI to diagnose my car's engine issue, but FixMyRide was incredibly accurate. It saved me time and money, and I was back on the road faster than after a traditional garage visit!",
    name: "Esteban Tinajero",
    title: "Daily Commuter",
  },
  {
    quote: "FixMyRide's AI mechanic is a game-changer. It detected a transmission problem that even my local mechanic had missed. Highly recommended for peace of mind!",
    name: "Mario Campos",
    title: "Car Enthusiast",
  },
  {
    quote: "Using FixMyRide has made car maintenance so much easier. The AI not only diagnosed my issue but also guided me through the fixing process step-by-step. Brilliant tool for DIYers!",
    name: "Moi Cerda",
    title: "DIY Mechanic",
  },
  {
    quote: "Never thought I'd trust a machine with my vintage car, but FixMyRide handled it with care and precision. The diagnostics are spot-on, saving me from costly misdiagnoses.",
    name: "Grace Tan",
    title: "Vintage Car Collector",
  },
  {
    quote: "The future of car repair is here! FixMyRide's AI identified an elusive electrical problem that had been bugging me for months. Thanks to this platform, I avoided a major breakdown.",
    name: "Shawn Melwani",
    title: "Professional Driver",
  },
];


    const AceternityLogo = () => {
      return (
        <svg
          width="66"
          height="65"
          viewBox="0 0 66 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-white"
        >
          <path
            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
            stroke="currentColor"
            strokeWidth="15"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
          />
        </svg>
      );
    };

  