"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/Common/CustomCursor";
import ScrollProgress from "@/components/Common/ScrollProgress";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { IoBusiness } from "react-icons/io5";
import Link from "next/link";
import { startups } from "@/data/sections/startups";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};



export default function StartupPage() {
  return (
    <main className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden scroll-smooth">
      {/* Background Sparkles */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={55}
          className="w-full h-full"
          particleColor="#2563eb"
        />
      </div>

      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="relative w-full text-center h-screen flex flex-col justify-center items-center px-4"
      >
        <motion.span
          variants={fadeInUp}
          className="absolute top-30 text-sm text-blue-600 tracking-widest border border-blue-700/50 p-2 px-4 mb-10 flex items-center gap-2"
        >
          <IoBusiness /> My Business World
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -right-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -right-1.5"></span>
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-[clamp(2rem,6vw,4rem)] font-bold text-white"
        >
          My <span className="text-blue-500">Startups</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-sm md:text-lg max-w-xl mx-auto bg-gradient-to-r from-gray-400 via-white to-gray-400 text-transparent bg-clip-text"
        >
          A collection of ventures I’m building — each tackling unique problems
          with creative solutions.
        </motion.p>

        {/* Scrolling Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-0 w-full overflow-hidden bg-blue-600/80 backdrop-blur-md py-2 hidden sm:block"
        >
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 14,
              ease: "linear",
            }}
          >
            {["Web Design", "App Development", "Dashboards", "UI/UX", "APIs"]
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
                  className="flex items-center gap-2 whitespace-nowrap text-xs md:text-base font-medium text-black"
                >
                  {item} <IoBusiness />
                </div>
              ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Startup Showcase Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-4 pb-16 relative z-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {startups.map((s, idx) => (
            <motion.article
              key={idx}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative bg-gradient-to-br from-slate-950 to-blue-950 rounded-2xl p-6 shadow-[0_6px_18px_rgba(2,6,23,0.6)] border border-[#172733]/30 transition-transform"
            >
              {/* Neon strip */}
              <div className="absolute -left-1.5 top-6 h-16 w-1.5 rounded-l-xl bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />

              {/* Logo + Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-white">{s.name}</h3>
                  <p className="text-xs text-gray-400">{s.stage}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                <span className="font-medium text-blue-400">
                  {s.tagline} —{" "}
                </span>
                {s.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10"
      >
        <motion.p variants={fadeInUp} className="text-sm text-blue-600">
          Contact Me
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mt-4 text-white"
        >
          Let’s Create an{" "}
          <span className="text-blue-600">Amazing Project Together!</span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          Have an idea or product problem? I’ll help you design, build, and ship
          it faster with less risk.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-600 hover:text-black transition-all"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      <Footer />
    </main>
  );
}
