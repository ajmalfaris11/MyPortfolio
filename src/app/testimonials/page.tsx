"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import CustomCursor from "@/components/Common/CustomCursor";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import ScrollProgress from "@/components/Common/ScrollProgress";
import { testimonials } from "@/data";
import { FaQuoteRight } from "react-icons/fa";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { MdOutlineReviews } from "react-icons/md";

// Use TS-safe easing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }, // cubic-bezier easing
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Testimonials() {
  return (
    <main className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <ScrollProgress />
      <CustomCursor />

      {/* Sparkles */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles-testimonials"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#2563eb"
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full mx-auto text-center h-screen flex justify-center flex-col items-center px-4"
      >
        <span className="absolute top-30 text-sm text-blue-600 tracking-widest border border-blue-700/50 p-2 px-4 mb-10 flex items-center gap-2">
          <MdOutlineReviews /> Testimonials
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -right-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -right-1.5"></span>
        </span>

        <motion.div variants={fadeInUp} className="z-10 max-w-xl">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 bg-clip-text text-transparent">
            Testimonials
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto bg-gradient-to-r from-gray-600 via-white to-gray-600 text-transparent bg-clip-text">
            Hear directly from my clients and collaborators. Their experiences
            highlight the impact, quality, and efficiency of the projects I
            deliver.
          </p>
        </motion.div>

        {/* Ribbon */}
        <div className="w-full overflow-hidden bg-blue-600 py-2 bottom-10 absolute left-0">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 12,
                ease: "linear",
              },
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
                  className="flex items-center gap-2 whitespace-nowrap text-sm md:text-base font-semibold text-black px-3"
                >
                  {item} <BiSolidQuoteSingleRight />
                </div>
              ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Section Title */}
      <section className="text-center py-16 relative z-10 px-4">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Testimonials that <br />
          <span className="text-blue-600">Speak to My Results</span>
        </motion.h2>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {testimonials.map((t, idx) => (
            <motion.article
              key={idx}
              variants={fadeInUp}
              className="relative bg-gradient-to-br from-slate-950 to-blue-950 rounded-2xl p-6 shadow-[0_6px_18px_rgba(2,6,23,0.6)] border border-[#172733]/30"
            >
              {/* Neon strip */}
              <div className="absolute -left-1.5 top-6 h-16 w-1.5 rounded-l-xl bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />

              {/* Card Header */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/20 shadow-2xl shadow-black">
                  <img
                    src={t.profile}
                    alt={t.name[0]}
                    className="w-12 h-12 rounded-full object-cover brightness-75"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{t.name}</h3>
                  <p className="text-xs text-gray-400">{t.role}</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-blue-600 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <span className="p-3 rounded-full bg-slate-800/50">
                  <FaQuoteRight className="text-blue-600" />
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                {t.quote}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-sm text-blue-600"
        >
          Contact Me
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold mt-4"
        >
          Let’s Create an{" "}
          <span className="text-blue-600">Amazing Project Together!</span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          Have an idea or product problem? I’ll help you design, build, and ship
          it faster with less risk.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact" className="inline-block">
            <button className="inline-block px-10 py-3 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-600 hover:text-black transition-all">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
