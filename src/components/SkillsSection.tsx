"use client";

import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import { createRoot } from "react-dom/client";
import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AnimatedDiv } from "./ui/3DanimateDiv";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// --- Skill Type ---
interface Skill {
  icon: IconType;
  name: string;
  size?: number;
}

// --- Skill List ---
const skills: Skill[] = [
  { icon: FaReact, name: "React", size: 36 },
  { icon: FaNodeJs, name: "Node.js", size: 28 },
  { icon: FaDatabase, name: "MongoDB", size: 20 },
  { icon: FaJs, name: "JavaScript", size: 32 },
  { icon: FaGitAlt, name: "Git", size: 30 },
  { icon: SiTypescript, name: "TypeScript", size: 35 },
  { icon: SiNextdotjs, name: "Next.js", size: 40 },
  { icon: SiTailwindcss, name: "TailwindCSS", size: 32 },
  { icon: FaCss3Alt, name: "CSS3", size: 32 },
  { icon: FaHtml5, name: "HTML5", size: 25 },
  { icon: FaPython, name: "Python", size: 34 },
  { icon: FaDocker, name: "Docker", size: 28 },
  { icon: FaAws, name: "AWS", size: 32 },

  { icon: FaReact, name: "React", size: 36 },
  { icon: FaNodeJs, name: "Node.js", size: 28 },
  { icon: FaDatabase, name: "MongoDB", size: 20 },
  { icon: FaJs, name: "JavaScript", size: 32 },
  { icon: FaGitAlt, name: "Git", size: 30 },
  { icon: SiTypescript, name: "TypeScript", size: 35 },
  { icon: SiNextdotjs, name: "Next.js", size: 40 },
  { icon: SiTailwindcss, name: "TailwindCSS", size: 32 },
  { icon: FaCss3Alt, name: "CSS3", size: 32 },
  { icon: FaHtml5, name: "HTML5", size: 25 },
  { icon: FaPython, name: "Python", size: 34 },
  { icon: FaDocker, name: "Docker", size: 28 },
  { icon: FaAws, name: "AWS", size: 32 },
];

export default function SkillsSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const texts = skills.map((_, i) => i.toString()); // placeholders
    const tagCloud = TagCloud(containerRef.current, texts, {
      radius: 250,
      maxSpeed: "fast",
      initSpeed: "fast",
      keep: true,
    });

    // Replace text spans with icons
    const spans = containerRef.current.querySelectorAll("span");
    spans.forEach((span, i) => {
      const root = createRoot(span);
      const IconComponent = skills[i % skills.length].icon;
      root.render(<IconComponent />);
    });

    return () => {
      tagCloud.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-[100vh] flex flex-col justify-center items-center text-white overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full px-10 justify-between items-center">
        {/* Left-side content */}
        <div className="flex-1 flex flex-col justify-center items-start space-y-6">
          <AnimatedDiv rotateDepth={10} translateDepth={10}>
            <h1 className="text-5xl md:text-6xl font-bold">
              Explore My{" "}
              <span className="text-purple animate-shine">Tech Skills</span>
            </h1>
          </AnimatedDiv>
          <p className="text-lg md:text-xl text-gray-300 max-w-md">
            Here you can see the technologies I work with. Click the button
            below to explore detailed information about each skill.
          </p>
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 
            hover:bg-blue-600 text-black font-semibold py-3 px-6 
            rounded-full flex justify-center items-center 
            gap-0 hover:gap-2 transition-all duration-300"
          >
            View Skills
            <MdKeyboardDoubleArrowRight className="text-2xl" />
          </motion.button>
        </div>

        {/* Right-side TagCloud Globe */}
        <div className="flex-1 flex justify-center items-center w-full h-full">
          <div
            ref={containerRef}
            className="tagcloud flex justify-center items-center text-3xl text-blue-700"
          />
        </div>
      </div>
    </div>
  );
}
