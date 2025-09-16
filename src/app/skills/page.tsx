"use client";

import CustomCursor from "@/components/Common/CustomCursor";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import Navbar from "@/components/Navbar/Navbar";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiSass,
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiPhp,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

type Skill = { icon: React.ReactNode; label: string };
type Section = { id: string; title: string; skills: Skill[] };

const sectionData: Section[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
      { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
      { icon: <SiSass className="text-pink-500" />, label: "SASS" },
      {
        icon: <SiJavascript className="text-yellow-400" />,
        label: "JavaScript",
      },
      { icon: <FaReact className="text-blue-400" />, label: "React.js" },
      {
        icon: <SiTailwindcss className="text-cyan-400" />,
        label: "TailwindCSS",
      },
      { icon: <SiTypescript className="text-blue-500" />, label: "TypeScript" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
      { icon: <SiFirebase className="text-yellow-500" />, label: "Firebase" },
      { icon: <SiMongodb className="text-green-400" />, label: "MongoDB" },
      { icon: <SiPostgresql className="text-sky-500" />, label: "PostgreSQL" },
      { icon: <FaDocker className="text-blue-500" />, label: "Docker" },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    skills: [
      { icon: <SiTypescript className="text-blue-500" />, label: "TypeScript" },
      { icon: <SiPython className="text-yellow-300" />, label: "Python" },
      { icon: <SiCplusplus className="text-blue-400" />, label: "C++" },
      { icon: <SiPhp className="text-indigo-400" />, label: "PHP" },
    ],
  },
  {
    id: "speaking",
    title: "Speaking Languages",
    skills: [
      { icon: <span className="text-2xl">🇬🇧</span>, label: "English" },
      { icon: <span className="text-2xl">🇮🇳</span>, label: "Hindi" },
      { icon: <span className="text-2xl">🇵🇰</span>, label: "Urdu" },
    ],
  },
  {
    id: "skills",
    title: "Other Tools",
    skills: [{ icon: <FaGithub className="text-gray-300" />, label: "GitHub" }],
  },
];

export default function SkillsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleClick = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (const section of sectionData) {
        const el = sectionRefs.current[section.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section.id);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("hero"); // default to hero when no section is active
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md scroll-smooth">
      <CustomCursor />
      <div className="w-full h-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#2563eb"
        />
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="w-full flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-b from-black via-blue-900/40 to-black"
      >
        <Navbar />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-blue-500 drop-shadow-lg"
        >
          My Skillset
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300"
        >
          A showcase of my abilities across frontend, backend, programming
          languages, and more.
        </motion.p>
      </section>

      {/* Sticky Left Section Title (hidden in hero) */}
      {activeSection !== "hero" && (
        <div className="fixed left-0 top-0 z-20 h-[100vh] w-[10%] flex justify-center items-center">
          <h2 className="text-3xl font-bold text-blue-400 tracking-wide rotate-[-90deg] text-nowrap transition-opacity duration-500">
            {sectionData.find((s) => s.id === activeSection)?.title}
          </h2>
        </div>
      )}

      {/* Side Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {sectionData.map((s, idx) => (
          <span
            key={s.id}
            className={`relative w-1 h-10 rounded-full cursor-pointer transition-transform ${
              activeSection === s.id
                ? "bg-blue-500 scale-125"
                : "bg-blue-600 hover:scale-110"
            }`}
            onClick={() => handleClick(s.id)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              className={`absolute right-6 bg-black text-white text-sm p-1 rounded-full border border-blue-600 px-4 whitespace-nowrap transition-all ${
                hoveredIndex === idx
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {s.title}
            </span>
          </span>
        ))}
      </div>

      {/* Skills Sections */}
      <section className="px-8 max-w-6xl mx-auto z-10 relative">
        {sectionData.map((section) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            className="flex justify-start items-center h-[100vh]"
          >
            <div className="flex justify-center items-center w-[90%] mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {section.skills.map((skill) => (
                  <SkillCard
                    key={skill.label}
                    icon={skill.icon}
                    label={skill.label}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

// Skill Card Component
function SkillCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/30 to-blue-600/10 p-6 rounded-2xl shadow-lg border border-blue-800 hover:border-blue-500 transition-all duration-300"
    >
      <div className="text-5xl mb-3">{icon}</div>
      <p className="text-lg font-medium text-gray-200">{label}</p>
    </motion.div>
  );
}
