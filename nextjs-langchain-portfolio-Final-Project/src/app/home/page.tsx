"use client";
import me from "@/assets/me.png";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Bot } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";
import { Vortex } from "@/components/ui/vortex";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Home() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          FixMyRide
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        I provide expert solutions and tips to keep your vehicle running smoothly. 
          From diagnostics to maintenance, I got you covered. Let&apos;s troubleshoot together!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
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
      </Vortex>
    </div>
      );
    }

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

  /*
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      { Place VortexDemo at the top }
      <VortexDemo />

      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            FixMyRide Your <br /> Personal AI Mechanic
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            I provide expert solutions and tips to keep your vehicle running smoothly. 
            From diagnostics to maintenance, I got you covered. Let&apos;s troubleshoot together!
          </p>
        </div>
      </div>

      <section className="text-center space-y-3">
        <H1>FixMyRide</H1>
        <p>
          I provide expert solutions and tips to keep your vehicle running smoothly. 
          From diagnostics to maintenance, I got you covered. Let&apos;s troubleshoot together!
        </p>
      </section>

      <section className="space-y-3 text-center">
        <H2>Ask the chatbot anything</H2>
        <p>
          Click the little <Bot className="inline pb-1" /> icon in the top bar
          to activate the AI chat. You can ask the chatbot any question about your car
          and it will find the relevant info on this website. The bot can even
          provide links to pages you&apos;re looking for.
        </p>
      </section>
    </section>
  );
}
*/