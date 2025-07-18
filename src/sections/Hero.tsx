"use client";

import Image from "next/image";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import StarIcon from "@/assets/icons/star.svg";
import grainImage from "@/assets/images/grain.jpg";
import memojiImage from "@/assets/images/memoji-computer.png";
import HeroOrbit from "@/components/HeroOrbit";
import BlurText from "@/components/BlurText";
import StarBorder from "@/components/StarBorder";

export const HeroSection = () => {
  const handleConnect = () => {
    window.location.href =
      "mailto:vijayraju1289@gmail.com?subject=Contact Request";
  };
  const handleMyWork = () => {
    window.location.href = "#project";
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "Vijay Resume.pdf";
    link.download = "My_Resume.pdf";
    link.click();
  };

  const handleAnimationComplete = () => {
    console.log('Name animation completed!');
  };

  return (
    <section id="home" className="relative z-0 py-32 md:py-48 lg:py-60">
      <div className="absolute inset-0 -z-30 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        {/* Ringa Ringa Rings */}
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[830px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>

        {/* Sparkle */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        {/* Sparkle */}
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        {/* Circle */}
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        {/* Sparkle */}
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        {/* Stars orbiting my hero section */}
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        {/* Stars orbiting my hero section */}
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        {/* Circle */}
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        {/* Sparkle */}
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        {/* Circle */}
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        {/* Stars orbiting my hero section */}
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-48 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="group relative mx-auto flex w-fit flex-col items-center justify-center">
          <Image
            onClick={handleResumeDownload}
            className="group size-24 hover:cursor-pointer hover:scale-110 transition-transform duration-300"
            src={memojiImage}
            alt="Vijay's Avatar"
          />

          <span className="absolute top-2 ml-12 hidden translate-x-1/2 transform rounded-3xl rounded-bl-none bg-black/80 px-2 py-1 text-xs font-medium text-emerald-400 group-hover:block backdrop-blur-sm border border-emerald-500/20">
            Download Resume
          </span>

          <div className="inline-flex items-center gap-4 rounded-lg border border-emerald-800/30 bg-gray-950/80 px-4 py-1.5 backdrop-blur-sm">
            <div className="relative size-2.5 rounded-full bg-emerald-500">
              <div className="absolute inset-0 animate-ping-large rounded-full bg-emerald-500"></div>
            </div>
            <div className="text-sm font-medium text-emerald-400">Open to Data Science Opportunities</div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <h1 className="mt-8 gap-4 text-center font-serif text-4xl md:text-6xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm{" "}
            <BlurText
              text="Vijay Rama Raju"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl md:text-6xl"
            />
          </h1>
          <p className="mt-4 text-center text-white/80 md:text-lg font-light">
            Passionate Data Science Enthusiast & Python Developer. Currently pursuing B.Tech in Data Science at NRI Institute of Technology, exploring the realms of AI, ML, and Prompt Engineering. Also familiar with Quantum Computing
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <button
            onClick={handleMyWork}
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-emerald-500/30 px-6 hover:bg-emerald-500/10 transition-colors duration-300 font-semibold"
          >
            <span>View Projects</span>
            <ArrowDown className="size-4" />
          </button>
          <button
            onClick={handleConnect}
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 text-gray-900 hover:from-emerald-600 hover:to-cyan-600 transition-colors duration-300 font-semibold"
          >
            <span>👋</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
