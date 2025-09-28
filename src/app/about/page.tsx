"use client";

import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { Timeline } from "@/components/ui/layouts/timeline";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { GiSevenPointedStar } from "react-icons/gi";
import Link from "next/link";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/Common/CustomCursor";
import ScrollProgress from "@/components/Common/ScrollProgress";

/**
 * Animation tuning
 * - baseDuration: global base duration (0.5 = 500ms)
 * - staggerChildren: nicer cascade
 * Change these values to make everything snappier or dreamier.
 */
const baseDuration = 0.55;

const containerVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: baseDuration } },
};

const heroImageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: baseDuration + 0.15, ease: "easeOut" },
  },
};

const ribbonItemVariant: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

/**
 * Utility: responsive sparkles — only on large viewports to save battery.
 * If you want to toggle at runtime, use a state + resize listener. This is simple.
 */

export default function AboutPage() {
  const prefersReduced = useReducedMotion();

  // Data moved here for clarity; content remains rich.
  const data = useMemo(
    () => [
      {
        title: "2025",
        content: (
          <p className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300">
            Currently building projects that merge creativity and engineering —
            scaling my portfolio and sharpening my React + Fullstack skills 🚀
          </p>
        ),
      },
      {
        title: "2024",
        content: (
          <div>
            <p className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300 mb-4">
              Built and launched projects like{" "}
              <span className="text-blue-500 font-semibold">
                Fashion Friday
              </span>{" "}
              and full-stack portfolio projects using React, Tailwind, Node, and
              MongoDB.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg h-24 md:h-40">
                <Image
                  src="/images/projects/fashion-friday.webp"
                  alt="Fashion Friday screenshot"
                  width={640}
                  height={400}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  priority={false}
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-24 md:h-40">
                <Image
                  src="/images/projects/smart-wristy.webp"
                  alt="Smart Wristy screenshot"
                  width={640}
                  height={400}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  priority={false}
                />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Early 2023",
        content: (
          <p className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300">
            Started diving deep into full-stack development. Solved 250+
            problems on{" "}
            <span className="text-blue-600 font-semibold">LeetCode</span>,
            sharpening DSA and system design skills.
          </p>
        ),
      },
      {
        title: "Changelog",
        content: (
          <ul className="space-y-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-center gap-2">
              <GiSevenPointedStar className="text-blue-600" />
              Completed 200+ days of LeetCode streak
            </li>
            <li className="flex items-center gap-2">
              <GiSevenPointedStar className="text-blue-600" />
              Built multiple React apps with animations
            </li>
            <li className="flex items-center gap-2">
              <GiSevenPointedStar className="text-blue-600" />
              Started "Dalci" clothing brand venture
            </li>
            <li className="flex items-center gap-2">
              <GiSevenPointedStar className="text-blue-600" />
              Launched Ecodrops (Water purification startup)
            </li>
          </ul>
        ),
      },
    ],
    []
  );

  // Respect prefers-reduced-motion: disable complex animations if user opted out
  useEffect(() => {
    if (prefersReduced) {
      // Optional side-effects or analytics flagged for reduced motion
    }
  }, [prefersReduced]);

  return (
    <div className="relative w-full overflow-clip bg-black text-neutral-50">
      <ScrollProgress />
      <CustomCursor />

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

      {/* HERO */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="max-w-5xl mx-auto px-6 text-center pt-10 sm:pt-28 pb-10 sm:pb-20"
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/images/hero_img.webp"
            alt="Profile"
            className="w-72 shadow-lg"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent text-nowrap">
              Ajmal Faris
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto bg-gradient-to-r from-gray-600 via-white to-gray-600 text-transparent bg-clip-text">
              Software Engineer & Entrepreneur passionate about building
              scalable, impactful products blending{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                aesthetic design
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                efficient engineering
              </span>
              .
            </p>
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto bg-gradient-to-r from-gray-600 via-white to-gray-600 text-transparent bg-clip-text">
              Software Engineer | Full-Stack Developer | Startup Builder
            </p>
          </div>
        </div>
      </motion.div>

      {/* Ribbon */}
      <div className="w-full overflow-hidden bg-blue-600 py-2">
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

      {/* TIMELINE */}
      <section
        className="max-w-6xl mx-auto py-10 sm:py-20 px-6"
        aria-labelledby="timeline-heading"
      >
        <motion.h2
          id="timeline-heading"
          className="text-4xl md:text-5xl font-bold text-center"
          variants={fadeUp}
          initial={prefersReduced ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true }}
        >
          Career Timeline
        </motion.h2>

        <motion.div
          className="space-y-8"
          initial={prefersReduced ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariant}
        >
          <Timeline data={data} />
        </motion.div>
      </section>

      {/* SKILLS & BEYOND */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariant}
        className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <motion.article
          variants={fadeUp}
          className="p-6 border border-blue-600 rounded-3xl shadow-lg bg-neutral-900/40"
        >
          <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
          <div className="grid grid-cols-2 gap-3 text-sm md:text-base text-neutral-300">
            <span>⚡ React & Next.js</span>
            <span>⚡ Node.js & MongoDB</span>
            <span>⚡ Tailwind & Framer Motion</span>
            <span>⚡ UI/UX Design</span>
            <span>⚡ Data Structures</span>
            <span>⚡ Business Development</span>
          </div>
        </motion.article>

        <motion.article
          variants={fadeUp}
          className="p-6 border border-blue-600 rounded-3xl shadow-lg bg-neutral-900/40"
        >
          <h3 className="text-2xl font-bold mb-4">Beyond Coding</h3>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
            When I’m not coding, I’m running ventures like{" "}
            <span className="font-semibold">Fashion Friday</span> and{" "}
            <span className="font-semibold">Dalci</span>, experimenting with
            design, or brainstorming the next big idea 🌍.
          </p>
        </motion.article>
      </motion.section>

      {/* VALUES GRID */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariant}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Innovation 🚀",
            "Creativity 🎨",
            "Collaboration 🤝",
            "Growth 🌱",
          ].map((val, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-4 border border-blue-600 rounded-2xl shadow-lg bg-neutral-900/40"
            >
              <p className="font-semibold text-neutral-200">{val}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* FUN FACTS */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariant}
        className="max-w-5xl mx-auto px-6 py-12"
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            "☕ Addicted to coffee",
            "🎮 Gamer at heart",
            "✈️ Loves traveling",
          ].map((fact, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="p-4 border border-blue-600 rounded-2xl shadow-lg"
            >
              {fact}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10"
      >
        <p className="text-sm text-blue-600">Contact Me</p>
        <h2 className="text-3xl md:text-4xl font-bold my-2">
          Let’s Create an{" "}
          <span className="text-blue-600">Amazing Project Together!</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Have an idea or product problem? I’ll help you design, build, and ship
          it faster with less risk.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" aria-label="Go to contact page">
            <button className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-600 hover:text-black transition-all">
              Go To Contact Page
            </button>
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
