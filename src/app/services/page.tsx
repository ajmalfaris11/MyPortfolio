"use client";

import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaTools,
  FaPaintBrush,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import CustomCursor from "@/components/Common/CustomCursor";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { TbIcons } from "react-icons/tb";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

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

export default function ServicesPage() {
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
      {/* Top bar (nav-ish visual) */}
      <Navbar />

      {/* Neon ribbon */}
      <div className="w-full bg-blue-600/5 mt-[60px]">
        <div className="max-w-6xl mx-auto py-3 overflow-hidden">
          <div className="w-full bg-blue-600 text-black font-semibold py-2 inline-flex gap-8 justify-center items-center overflow-hidden">
            <span>Frontend</span>
            <TbIcons />
            <span>Backend</span> <TbIcons />
            <span>APIs</span> <TbIcons />
            <span>Design Systems</span> <TbIcons />
            <span>DevOps</span> <TbIcons />
            <span>DevOps</span> <TbIcons />
            <span>UI & UX</span> <TbIcons />
            <span>CI & CD</span> <TbIcons />
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="relative text-sm text-blue-600 tracking-widest border border-blue-700/50 p-2 px-4">
          My Specialization
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -right-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -right-1.5"></span>
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold">
          <span className="text-blue-600">Services</span> | Provide
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          I build robust, maintainable, and scalable web applications. I turn
          product goals into technical reality.
        </p>
      </section>

      {/* Services grid (cards) */}
      <section className="max-w-6xl mx-auto px-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center w-full">
          {services.map((s, idx) => (
            <article
              key={idx}
              className="relative bg-gradient-to-br from-slate-950 to-blue-950  rounded-2xl p-6 shadow-[0_6px_18px_rgba(2,6,23,0.6)] border border-[#172733]/30"
            >
              {/* left neon strip */}
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
            </article>
          ))}
        </div>
      </section>

      {/* Neon ribbon */}
      <div className="w-full bg-blue-600/5 mt-[60px]">
        <div className="max-w-6xl mx-auto py-3 overflow-hidden">
          <div className="w-full bg-blue-600 text-black font-semibold py-2 inline-flex gap-8 justify-center items-center overflow-hidden">
            <span>Frontend</span>
            <TbIcons />
            <span>Backend</span> <TbIcons />
            <span>APIs</span> <TbIcons />
            <span>Design Systems</span> <TbIcons />
            <span>DevOps</span> <TbIcons />
            <span>DevOps</span> <TbIcons />
            <span>UI & UX</span> <TbIcons />
            <span>CI & CD</span> <TbIcons />
          </div>
        </div>
      </div>

      {/* Unified Contact + CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-sm text-blue-600">Contact Me</p>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
          Let’s Talk for{" "}
          <span className="text-blue-600">Your Next Projects</span>
        </h2>

        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
          If you have an idea or product problem, I’ll help you ship it faster
          with less risk.
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
    </main>
  );
}
