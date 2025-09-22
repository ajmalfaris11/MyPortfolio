"use client";

import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/layouts/timeline";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { GiSevenPointedStar } from "react-icons/gi";
import Link from "next/link";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/Common/CustomCursor";
import ScrollProgress from "@/components/Common/ScrollProgress";

export default function AboutPage() {
  const data = [
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
            Built and launched projects like <span className="text-blue-500 font-semibold">Fashion Friday</span> (E-commerce brand) and full-stack portfolio projects using React, Tailwind, Node, and MongoDB.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/projects/fashion-friday.webp" alt="Fashion Friday" className="rounded-xl shadow-lg h-24 md:h-40 object-cover" />
            <img src="/images/projects/smart-wristy.webp" alt="Smart Wristy" className="rounded-xl shadow-lg h-24 md:h-40 object-cover" />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <p className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300">
          Started diving deep into full-stack development. Solved 250+ problems on <span className="text-blue-600 font-semibold">LeetCode</span>, sharpening DSA and system design skills.
        </p>
      ),
    },
    {
      title: "Changelog",
      content: (
        <ul className="space-y-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
          <li className="flex items-center gap-2"><GiSevenPointedStar className="text-blue-600" /> Completed 200+ days of LeetCode streak</li>
          <li className="flex items-center gap-2"><GiSevenPointedStar className="text-blue-600" /> Built multiple React apps with animations</li>
          <li className="flex items-center gap-2"><GiSevenPointedStar className="text-blue-600" /> Started "Dalci" clothing brand venture</li>
          <li className="flex items-center gap-2"><GiSevenPointedStar className="text-blue-600" /> Launched Ecodrops (Water purification startup)</li>
        </ul>
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
          id="tsparticles-about"
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
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/images/hero_img.webp"
            alt="Profile"
            className="w-40 h-40 md:w-62 md:h-62  shadow-lg"
          />
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              Ajmal Faris
            </h1>
            <p className="mt-4 text-base md:text-lg text-neutral-300 leading-relaxed">
              Software Engineer & Entrepreneur passionate about building scalable, impactful products blending <span className="text-blue-500 font-semibold">aesthetic design</span> and <span className="text-blue-500 font-semibold">efficient engineering</span>.
            </p>
            <p className="mt-2 text-sm text-neutral-400">Software Engineer | Full-Stack Developer | Startup Builder</p>
          </div>
        </div>
      </motion.div>

      {/* Ribbon */}
      <div className="w-full bg-blue-600 text-black font-semibold py-3 flex gap-6 justify-center items-center overflow-x-auto">
        <span>Web Design</span> <BiSolidQuoteSingleRight />
        <span>App Development</span> <BiSolidQuoteSingleRight />
        <span>Dashboards</span> <BiSolidQuoteSingleRight />
        <span>UI/UX</span> <BiSolidQuoteSingleRight />
        <span>APIs</span>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto py-20">
        <Timeline data={data} />
      </div>

      {/* Skills Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="p-8 border border-blue-600 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-2 gap-3 text-sm md:text-base text-neutral-300">
            <span>⚡ React & Next.js</span>
            <span>⚡ Node.js & MongoDB</span>
            <span>⚡ Tailwind & Framer Motion</span>
            <span>⚡ UI/UX Design</span>
            <span>⚡ Data Structures</span>
            <span>⚡ Business Development</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="p-8 border border-blue-600 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Beyond Coding</h2>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
            When I’m not coding, I’m running ventures like <span className="font-semibold">Fashion Friday</span> and <span className="font-semibold">Dalci</span>, experimenting with design, or brainstorming the next big idea 🌍.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-6 text-center">
        {["Innovation 🚀", "Creativity 🎨", "Collaboration 🤝", "Growth 🌱"].map((val, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="p-4 border border-blue-600 rounded-2xl shadow-lg">
            <p className="font-semibold text-neutral-200">{val}</p>
          </motion.div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">What People Say</h2>
        <div className="space-y-6">
          <blockquote className="italic text-neutral-300">“Ajmal’s code is clean and impactful. Truly a problem-solver.”</blockquote>
          <blockquote className="italic text-neutral-300">“He blends creativity with technical depth like no one else I’ve worked with.”</blockquote>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-4 border border-blue-600 rounded-2xl shadow-lg">☕ Addicted to coffee</div>
        <div className="p-4 border border-blue-600 rounded-2xl shadow-lg">🎮 Gamer at heart</div>
        <div className="p-4 border border-blue-600 rounded-2xl shadow-lg">✈️ Loves traveling</div>
      </section>

      

       {/* CTA */}
            <section className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
              <p className="text-sm text-blue-600">Contact Me</p>
              <h2 className="text-3xl font-bold">
                Let’s Create an{" "}
                <span className="text-blue-600">Amazing Project Together!</span>
              </h2>
              <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                Have an idea or product problem? I’ll help you design, build, and ship
                it faster with less risk.
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

