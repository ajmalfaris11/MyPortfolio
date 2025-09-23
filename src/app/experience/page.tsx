"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { GiSevenPointedStar } from "react-icons/gi";
import Link from "next/link";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/Common/CustomCursor";
import ScrollProgress from "@/components/Common/ScrollProgress";
import { Timeline } from "@/components/ui/layouts/timeline";

export default function ExperiencePage() {
  const experienceData = [
    {
      title: "2025",
      content: (
        <p className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300">
          Leading multiple full-stack projects and scaling my startups. Focused
          on building impactful products with React, Next.js, Node.js, and
          TailwindCSS while mentoring junior developers.
        </p>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300 mb-4">
            Key achievements this year:
          </p>
          <ul className="space-y-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-center gap-2">
              <GiSevenPointedStar className="text-blue-600" /> Launched{" "}
              <span className="font-semibold">Fashion Friday</span>, a
              streetwear e-commerce brand
            </li>
            <li className="flex items-center gap-2">
              <GiSevenPointedStar className="text-blue-600" /> Built multiple
              React & Node.js portfolio apps, including{" "}
              <span className="font-semibold">Smart Wristy</span>
            </li>
            <li className="flex items-center gap-2">
              <GiSevenPointedStar className="text-blue-600" /> Completed 250+
              problems on <span className="font-semibold">LeetCode</span>,
              enhancing DSA and system design skills
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <p className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300">
          Started deep-diving into full-stack development. Focused on React,
          Node.js, TailwindCSS, and MongoDB. Worked on freelance projects and
          small startup MVPs to understand product-market fit.
        </p>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Began my coding journey:
          </p>
          <ul className="space-y-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-center gap-2">
              <GiSevenPointedStar className="text-blue-600" /> Learned front-end
              development: HTML, CSS, JavaScript
            </li>
            <li className="flex items-center gap-2">
              <GiSevenPointedStar className="text-blue-600" /> Built small web
              apps and landing pages
            </li>
            <li className="flex items-center gap-2">
              <GiSevenPointedStar className="text-blue-600" /> Started exploring
              entrepreneurship and product development
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip bg-black">
      <ScrollProgress />
      <CustomCursor />

      {/* Background sparkles */}
      <div className="absolute inset-0">
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

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 text-center pt-28 pb-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent">
          My <span className="text-white">Experience</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
          A timeline of my journey as a software engineer, entrepreneur, and
          problem solver — showcasing milestones, projects, and skills gained
          along the way.
        </p>
      </motion.div>

      {/* Skills Ribbon */}
      <div className="w-full bg-blue-600 text-black font-semibold py-3 flex gap-6 justify-center items-center overflow-x-auto">
        <span>Web Development</span> <BiSolidQuoteSingleRight />
        <span>Full-Stack Apps</span> <BiSolidQuoteSingleRight />
        <span>React & Next.js</span> <BiSolidQuoteSingleRight />
        <span>UI/UX Design</span> <BiSolidQuoteSingleRight />
        <span>Startups</span>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto py-20">
        <Timeline data={experienceData} />
      </div>

      {/* Skills & Achievements */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 border border-blue-600 rounded-3xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-2 gap-3 text-sm md:text-base text-neutral-300">
            <span>⚡ React & Next.js</span>
            <span>⚡ Node.js & MongoDB</span>
            <span>⚡ Tailwind & Framer Motion</span>
            <span>⚡ UI/UX Design</span>
            <span>⚡ DSA & System Design</span>
            <span>⚡ Startup Management</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
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
      <section className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
        <p className="text-sm text-blue-600">Contact Me</p>
        <h2 className="text-3xl font-bold">
          Let’s Build an{" "}
          <span className="text-blue-600">Amazing Project Together!</span>
        </h2>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
          Have an idea or project? I’ll help you design, build, and ship it
          faster with less risk.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <span className="inline-block px-6 py-3 bg-blue-600 text-black font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all">
              Go to Contact Page
            </span>
          </Link>
          <button className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-600 hover:text-black transition-all">
            Contact Me
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
