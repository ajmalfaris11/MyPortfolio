"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/Common/CustomCursor";
import ScrollProgress from "@/components/Common/ScrollProgress";
import { SparklesCore } from "@/components/ui/effects/sparkles";

interface StartupPlan {
  name: string;
  tagline: string;
  description: string;
  stage: string;
  logo: string;
}

const startupPlans: StartupPlan[] = [
  {
    name: "Ecodrops",
    tagline: "Affordable Water Solutions",
    description:
      "Providing eco-friendly water purification systems and waterproofing services with free site visits and water testing.",
    stage: "Scaling",
    logo: "/logos/ecodrops.png",
  },
  {
    name: "Fashion Friday",
    tagline: "Affordable Streetwear & Footwear",
    description:
      "Bringing stylish and affordable fashion products like sneakers and crocs to the youth market across India.",
    stage: "Active Growth",
    logo: "/logos/fashionfriday.png",
  },
  {
    name: "Zera Events Planner",
    tagline: "Modern Event Experiences",
    description:
      "Event management with a focus on curated dessert and juice experiences, blending tradition with innovation.",
    stage: "Launch Ready",
    logo: "/logos/zera.png",
  },
];

export default function StartupPage() {
  return (
    <main className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md scroll-smooth">
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
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          My <span className="text-blue-500">Startups</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto bg-gradient-to-r from-gray-600 via-white to-gray-600 text-transparent bg-clip-text"
        >
          A collection of ventures I’m building — each tackling unique problems
          with creative solutions.
        </motion.p>
      </section>

      {/* Startup Showcase Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {startupPlans.map((startup, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-xl hover:shadow-blue-600/30 flex flex-col border border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src={startup.logo}
                    alt={`${startup.name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {startup.name}
                  </h3>
                  <p className="italic text-gray-400 text-sm">
                    {startup.tagline}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 flex-grow leading-relaxed text-sm">
                {startup.description}
              </p>

              <div className="mt-6 text-sm text-gray-400 flex items-center justify-between">
                <span>
                  Stage: <span className="text-white">{startup.stage}</span>
                </span>
                <a
                  href="/contact"
                  className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-xs text-white font-medium shadow-md transition"
                >
                  Connect
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Let’s Collaborate
        </motion.h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Have ideas, partnerships, or just want to chat about startups? Let’s
          connect.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition"
        >
          Get in Touch
        </a>
      </section>

      <Footer />
    </main>
  );
}
