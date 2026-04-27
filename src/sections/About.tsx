"use client";

import CSSIcon from "@/assets/icons/css3.svg";
import GitIcon from "@/assets/icons/git.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import JavaIcon from "@/assets/icons/java.svg";
import NodeJsIcon from "@/assets/icons/node.svg";
import ReactIcon from "@/assets/icons/react.svg";
import RustIcon from "@/assets/icons/rust.svg";
import SQLIcon from "@/assets/icons/sql.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import SmileEmoji from "@/assets/images/memoji-smile.png";
import MapImage from "@/assets/images/new_map_india.png";
import PythonIcon from "@/assets/icons/python.svg";
import MLIcon from "@/assets/icons/machine-learning.svg";
import DataIcon from "@/assets/icons/data-analytics.svg";

import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import ToolboxItems from "@/components/ToolboxItems";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import "@/app/about.css";

const toolboxItems = [
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Data Analysis",
    iconType: DataIcon,
  },
  {
    title: "Machine Learning",
    iconType: MLIcon,
  },
  {
    title: "SQL",
    iconType: SQLIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
];

const hobbies = [
  {
    title: "AI Research",
    emoji: "🤖",
    left: "5%",
    top: "10%",
  },
  {
    title: "Coding",
    emoji: "💻",
    left: "70%",
    top: "15%",
  },
  {
    title: "Data Analysis",
    emoji: "📊",
    left: "20%",
    top: "40%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "50%",
    top: "10%",
  },
  {
    title: "Problem Solving",
    emoji: "🧩",
    left: "35%",
    top: "50%",
  },
  {
    title: "Learning",
    emoji: "🎯",
    left: "10%",
    top: "75%",
  },
  {
    title: "Tech News",
    emoji: "📱",
    left: "60%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Behind the Scenes"
          title="Exploring Data Science & Technology"
          description="Passionate about transforming data into meaningful insights and building innovative solutions."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Current Position"
                description="What I am doing currently"
              />
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <p className="text-emerald-400 font-medium mb-4">Founder of DSArena</p>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Technical Skills"
                description="Tools and technologies I use to analyze data and build solutions."
              />
              <ToolboxItems
                items={toolboxItems}
                className="animate-move-left [animation-duration:20s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="col-span-3 flex h-[320px] flex-col p-0 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Interests & Expertise"
                description="Areas where I focus my learning and development."
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    drag
                    dragConstraints={constrainRef}
                    key={hobby.title}
                    className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-1.5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="col-span-3 h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Let's Connect"
                description="Find me on professional networks"
              />
              <div className="flex flex-col gap-4 p-6">
                <a
                  href="https://linkedin.com/in/vijay1289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-emerald-500/30 p-3 hover:bg-emerald-500/10 transition-colors duration-300"
                >
                  <span className="text-2xl">👨‍💼</span>
                  <span className="text-white/80">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Vijay-1289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-emerald-500/30 p-3 hover:bg-emerald-500/10 transition-colors duration-300"
                >
                  <span className="text-2xl">👨‍💻</span>
                  <span className="text-white/80">GitHub</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
