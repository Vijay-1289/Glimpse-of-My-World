import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

import searchEngineImage from "@/assets/images/search engine.png";
import quantumImage from "@/assets/images/quantumwarrior.png";
import dsarenaImage from "@/assets/images/dsarena.png";

const portfolioProjects = [
  {
    company: "Web Development",
    year: "2024",
    title: "Search Engine",
    results: [
      { title: "Custom search algorithm implementation" },
      { title: "Clean and intuitive UI with HTML" },
      { title: "Fast and efficient search results" },
    ],
    link: "https://mytoolengine.netlify.app/",
    image: searchEngineImage,
  },
  {
    company: "Game Development",
    year: "2025",
    title: "Quantum Warrior",
    results: [
      { title: "A typical Story board game" },
      { title: "Progressive games to learn Quantum Computing" },
      { title: "Easy way to learn topics" },
    ],
    link: "https://quantumwarrior.netlify.app/",
    image: quantumImage,
  },
  {
    company: "Full Stack Development",
    year: "2025",
    title: "DSArena",
    results: [
      { title: "Competitive DSA learning platform" },
      { title: "Real-time battles with lives system" },
      { title: "Leaderboards and progress tracking" },
    ],
    link: "https://www.dsarena.in",
    image: dsarenaImage,
  }
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Maker's Magic"
          title="My Latest Projects"
          description="A collection of my recent work in web development, game development, and AI."
        />
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, i) => (
            <Card
              key={project.title}
              className="sticky px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              style={{
                top: `calc(64px + ${i * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="mt-4 border-t-2 border-white/5" />
                  <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                    {project.results.map((results) => (
                      <li
                        key={results.title}
                        className="flex gap-2 text-sm text-white/60 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 text-emerald-400" />
                        <span>{results.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-gray-950 font-semibold hover:from-emerald-500 hover:to-cyan-500 transition-colors duration-300 whitespace-nowrap"
                  >
                    <span className="text-base md:text-lg leading-none">
                      View Project
                    </span>
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
