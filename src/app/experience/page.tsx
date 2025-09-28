"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { GiSevenPointedStar } from "react-icons/gi";
import Link from "next/link";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/Common/CustomCursor";
import ScrollProgress from "@/components/Common/ScrollProgress";
import { Timeline } from "@/components/ui/layouts/timeline";
import { FaStarOfLife } from "react-icons/fa";

/**
 * Notes:
 * - Animations use `whileInView` so they fire only when sections enter viewport.
 * - All `ease` values are cubic-bezier arrays (TS-friendly).
 * - Ribbon returned and animated with a typed `ease` array.
 */

/* Easing helpers (cubic bezier arrays) */
const easeInOut = [0.42, 0, 0.58, 1] as const;
const easeOut = [0, 0, 0.2, 1] as const;
const linear = [0, 0, 1, 1] as const;

/* Variants */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14 },
  },
};

export default function ExperiencePage() {
  const experienceData = [
    {
      title: "2025",
      content: (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300"
        >
          Leading multiple full-stack projects and scaling my startups. Focused
          on building impactful products with React, Next.js, Node.js, and
          TailwindCSS while mentoring junior developers.
        </motion.p>
      ),
    },
    {
      title: "2024",
      content: (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300 mb-4"
          >
            Key achievements this year:
          </motion.p>

          <ul className="space-y-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
            {[
              "Launched Fashion Friday — streetwear e-comm",
              "Built portfolio apps (Smart Wristy, etc.)",
              "Completed 250+ LeetCode problems",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                variants={fadeInUp}
                className="flex items-center gap-2"
              >
                <GiSevenPointedStar className="text-blue-600" />{" "}
                <span className="font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300"
        >
          Started deep-diving into full-stack development. Focused on React,
          Node.js, TailwindCSS, and MongoDB. Worked on freelance projects and
          small startup MVPs to understand product-market fit.
        </motion.p>
      ),
    },
    {
      title: "2022",
      content: (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Began my coding journey:
          </motion.p>

          <ul className="space-y-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
            {[
              "Learned HTML, CSS, JavaScript",
              "Built small web apps & landing pages",
              "Started exploring entrepreneurship",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                variants={fadeInUp}
                className="flex items-center gap-2"
              >
                <GiSevenPointedStar className="text-blue-600" /> {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip bg-black">
      <ScrollProgress />
      <CustomCursor />

      {/* Background sparkles (lazy if your component already lazy-loads internally) */}
      <div className="absolute inset-0 pointer-events-none">
        <SparklesCore
          id="tsparticles-experience"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#2563eb"
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto text-center h-screen flex justify-center flex-col items-center"
      >
        <span className="absolute top-30 text-sm text-blue-600 tracking-widest border border-blue-700/50 p-2 px-4 mb-10 flex items-center gap-2">
          <FaStarOfLife /> Experience
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -right-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -right-1.5"></span>
        </span>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 z-10">
          <motion.div
            variants={fadeInUp}
            className="text-center sm:text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              <span className="text-white">My</span> Experience
            </h1>

            <p className="mt-4 text-base md:text-lg text-neutral-300 leading-relaxed max-w-xl px-4">
              A timeline of my journey as a software engineer, entrepreneur, and
              problem solver — showcasing milestones, projects, and skills
              gained along the way.
            </p>
          </motion.div>
        </div>

        {/* Ribbon (restored) */}
        <div className="w-full overflow-hidden bg-blue-600 py-2 bottom-20 sm:bottom-10 absolute left-0">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: linear,
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
              ])
              .map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 whitespace-nowrap text-sm md:text-base font-semibold text-black px-3"
                >
                  {item} <BiSolidQuoteSingleRight />
                </div>
              ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-4">
        {/* If Timeline internally animates, these items will play nicely.
            We pass prebuilt content that already contains motion children. */}
        <Timeline data={experienceData} />
      </div>

      {/* Skills & Achievements */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="p-8 border border-blue-600 rounded-3xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-2 gap-3 text-sm md:text-base text-neutral-300"
          >
            {[
              "React & Next.js",
              "Node.js & MongoDB",
              "Tailwind & Framer Motion",
              "UI/UX Design",
              "DSA & System Design",
              "Startup Management",
            ].map((skill, idx) => (
              <motion.span key={idx} variants={fadeInUp}>
                ⚡ {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="p-8 border border-blue-600 rounded-3xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Beyond Coding</h2>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
            Building ventures like{" "}
            <span className="font-semibold">Fashion Friday</span> and{" "}
            <span className="font-semibold">Dalci</span>, experimenting with
            design, or brainstorming the next big product idea.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-6xl mx-auto px-4 py-24 text-center relative z-10"
      >
        <p className="text-sm text-blue-600">Contact Me</p>
        <h2 className="text-3xl font-bold">
          Let’s Build an{" "}
          <span className="text-blue-600">Amazing Project Together!</span>
        </h2>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
          Have an idea or project? I’ll help you design, build, and ship it
          faster with less risk.
        </p>
        <Link href="/contact" className="mt-8 inline-block">
          <button className="inline-block px-10 py-3 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-600 hover:text-black transition-all">
            Contact Me
          </button>
        </Link>
      </motion.section>

      <Footer />
    </div>
  );
}
