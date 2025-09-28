"use client";

import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaTools,
  FaPaintBrush,
  FaStarOfLife,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { TbIcons } from "react-icons/tb";
import { motion, Variants } from "framer-motion";
import CustomCursor from "@/components/Common/CustomCursor";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";
import Link from "next/link";

// Service type
type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

// Services data
const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Modern, accessible, and performant UI using React, Next.js and TypeScript.",
    icon: <FaCode />,
  },
  {
    title: "Backend & APIs",
    description:
      "Robust REST & GraphQL APIs, authentication, rate limiting and monitoring.",
    icon: <FaServer />,
  },
  {
    title: "Database Design",
    description:
      "SQL and NoSQL schemas optimized for scale, migrations and backups.",
    icon: <FaDatabase />,
  },
  {
    title: "Mobile & PWAs",
    description:
      "Responsive web apps and progressive mobile experiences that behave like native apps.",
    icon: <FaMobileAlt />,
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Automated pipelines, infra as code, containerization and observability.",
    icon: <FaTools />,
  },
  {
    title: "Design Systems",
    description:
      "Consistent component libraries, tokens, and accessible patterns for scale.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Testing & QA",
    description:
      "Unit, integration and E2E strategies to keep production calm and predictable.",
    icon: <FaTools />,
  },
  {
    title: "Performance Audits",
    description:
      "Page weight, render metrics and actionable fixes to speed up your product.",
    icon: <FaCode />,
  },
  {
    title: "Architecture Review",
    description:
      "Guidance on microservices, monoliths and fault-tolerant system design.",
    icon: <FaServer />,
  },
];

// Motion Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function ServicesPage() {
  return (
    <main className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md scroll-smooth">
      <CustomCursor />
      <ScrollProgress />
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

      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full mx-auto text-center h-screen flex justify-center flex-col items-center"
      >
        <span className="absolute top-30 text-sm text-blue-600 tracking-widest border border-blue-700/50 p-2 px-4 mb-10 flex items-center gap-2">
          <FaStarOfLife /> My Specialization
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -right-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -right-1.5"></span>
        </span>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-20 z-10"
        >
          <div className="text-center sm:text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              <span className="text-blue-600">Services</span> | Provide
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto bg-gradient-to-r from-gray-600 via-white to-gray-600 text-transparent bg-clip-text">
              I build robust, maintainable, and scalable web applications. I
              turn product goals into technical reality.
            </p>
          </div>
        </motion.div>

        {/* Ribbon Section */}
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
              "Web Design",
              "App Development",
              "Dashboards",
              "UI/UX",
              "APIs",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 whitespace-nowrap text-sm md:text-base font-semibold text-black px-3"
              >
                {item} <TbIcons />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-10 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center w-full"
      >
        {services.map((s, idx) => (
          <motion.article
            key={idx}
            variants={fadeInUp}
            className="relative bg-gradient-to-br from-slate-950 to-blue-950 rounded-2xl p-6 shadow-[0_6px_18px_rgba(2,6,23,0.6)] border border-[#172733]/30"
          >
            <div className="absolute -left-1.5 top-6 h-16 w-1.5 rounded-l-xl bg-blue-600" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-900/20 shadow-lg shadow-black flex items-center justify-center text-blue-600 text-xl">
                {s.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{s.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                  Learn more
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600/20">
                    <GoArrowUpRight />
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.section>

      {/* Contact + CTA */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 py-24 text-center"
      >
        <p className="text-sm text-blue-600">Contact Me</p>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
          Let’s Talk for{" "}
          <span className="text-blue-600">Your Next Projects</span>
        </h2>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
          If you have an idea or product problem, I’ll help you ship it faster
          with less risk.
        </p>
        <Link href="/contact" className="mt-8 inline-block">
          <button className="inline-block px-10 py-3 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-600 hover:text-black transition-all">
            Contact Me
          </button>
        </Link>
      </motion.section>

      <Footer />
    </main>
  );
}
