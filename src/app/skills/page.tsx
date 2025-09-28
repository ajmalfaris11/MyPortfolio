"use client";

import CustomCursor from "@/components/Common/CustomCursor";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import Navbar from "@/components/Navbar/Navbar";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import SkillCard from "@/components/Skills/SkillCard";
import Footer from "@/components/Footer/Footer";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";

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
import ScrollProgress from "@/components/Common/ScrollProgress";

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
    title: "Programming Languages",
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function SkillsPage() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

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
      if (!found) setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden scroll-smooth">
      <CustomCursor />
      <ScrollProgress />
      {/* Full-page background sparkles */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0">
        <SparklesCore
          id="tsparticles-fullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#2563eb"
        />
      </div>
      <Navbar />

      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        ref={(el) => {
          sectionRefs.current["hero"] = el;
        }}
        className="relative w-full text-center h-screen flex justify-center flex-col items-center"
      >
        <span className="absolute top-30 sm:top-24 text-sm text-blue-600 tracking-widest border border-blue-700/50 p-2 px-4 mb-10 flex items-center gap-2">
          <GrTechnology /> tech & non-tech Skills
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -right-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -right-1.5"></span>
        </span>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="text-center sm:text-center">
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              <span className="text-white">Explore My</span> Skills
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto bg-gradient-to-r from-gray-600 via-white to-gray-600 text-transparent bg-clip-text">
              A showcase of my abilities across frontend, backend, programming
              languages, and essential tools. Each skill is animated when it
              comes into view for a sleek and interactive experience.
            </p>
          </div>
        </div>

        {/* Ribbon */}
        <div className="w-full overflow-hidden bg-blue-600 py-2 bottom-20 sm:bottom-10 absolute left-0">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
            }}
          >
            {[
              "Web Design",
              "App Development",
              "Dashboards",
              "UI/UX",
              "APIs",
              "Web Design",
            ]
              .concat([
                "Web Design",
                "App Development",
                "Dashboards",
                "UI/UX",
                "APIs",
                "Web Design",
                "App Development",
                "Dashboards",
                "UI/UX",
                "APIs",
              ]) // duplicate for seamless loop
              .map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 whitespace-nowrap text-sm md:text-base font-semibold text-black"
                >
                  {item} <BiSolidQuoteSingleRight />
                </div>
              ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Bottom Nav */}
      {activeSection !== "hero" && (
        <div className="fixed left-0 bottom-5 w-full sm:hidden bg-black/80 flex items-center z-50 px-2">
          {/* Up = previous */}
          <button
            onClick={() => {
              const currentIndex = sectionData.findIndex(
                (s) => s.id === activeSection
              );
              if (currentIndex > 0) {
                const prevSection = sectionData[currentIndex - 1];
                sectionRefs.current[prevSection.id]?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="w-12 h-12 flex justify-center items-center rounded-full border border-blue-600 text-blue-600"
          >
            <IoIosArrowUp size={22} />
          </button>

          {/* Title */}
          <div className="flex-1 h-12 text-center border-2 border-blue-600 rounded-full flex justify-center items-center mx-2">
            <h2 className="text-lg font-bold text-blue-600 tracking-wide truncate">
              {sectionData.find((s) => s.id === activeSection)?.title}
            </h2>
          </div>

          {/* Down = next */}
          <button
            onClick={() => {
              const currentIndex = sectionData.findIndex(
                (s) => s.id === activeSection
              );
              if (currentIndex < sectionData.length - 1) {
                const nextSection = sectionData[currentIndex + 1];
                sectionRefs.current[nextSection.id]?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="w-12 h-12 flex justify-center items-center rounded-full border border-blue-600 text-blue-600"
          >
            <IoIosArrowDown size={22} />
          </button>
        </div>
      )}

      {/* Left Section Title (desktop) */}
      {activeSection !== "hero" && (
        <div className="hidden fixed left-0 top-0 z-20 h-[100vh] w-[10%] sm:flex justify-center items-center">
          <h2 className="text-3xl font-bold text-blue-600 tracking-wide rotate-[-90deg] text-nowrap transition-opacity duration-500">
            {sectionData.find((s) => s.id === activeSection)?.title}
          </h2>
        </div>
      )}

      {/* Right Dot Nav (desktop) */}
      {activeSection !== "hero" && (
        <div className="fixed right-0 flex-col gap-4 top-0 z-20 h-[100vh] w-[10%] hidden sm:flex justify-center items-center">
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
                className={`absolute right-6 bg-black text-white text-sm p-1 rounded-full border-2 border-blue-600 px-4 whitespace-nowrap transition-all ${
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
      )}

      {/* Skills Sections */}
      <section className="px-4 md:px-8 max-w-6xl mx-auto z-10 relative flex flex-col">
        {sectionData.map((section) => {
          const ref = useRef<HTMLDivElement | null>(null);
          const inView = useInView(ref, { once: true, margin: "-100px" });
          const controls = useAnimation();

          useEffect(() => {
            if (inView) controls.start("show");
          }, [inView, controls]);

          return (
            <motion.div
              key={section.id}
              id={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
                ref.current = el;
              }}
              initial="hidden"
              animate={controls}
              variants={fadeUp}
              className="flex flex-col gap-10 h-screen py-10 justify-center"
            >
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10">
                {section.skills.map((skill, i) => (
                  <motion.div
                    key={skill.label}
                    custom={i}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariants}
                  >
                    <SkillCard
                      key={skill.label}
                      icon={skill.icon}
                      label={skill.label}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>

      <Footer />
    </main>
  );
}
