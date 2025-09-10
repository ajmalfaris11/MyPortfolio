"use client";

import React, { useEffect, useState } from "react";
import {
  Rocket,
  Cpu,
  Zap,
  Layers,
  Briefcase,
  GitCommit,
  Users,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

function Badge({ children, className = "" }: any) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}

// ✅ Counter Component with animation
const Counter = ({ end, label, icon: Icon }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2s
    const step = Math.ceil(end / (duration / 30)); // smooth increments

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 30);

    return () => clearInterval(interval);
  }, [end]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Icon className="w-6 h-6 text-blue-500 mb-1" />
      <h3 className="text-2xl font-bold text-white">{count}+</h3>
      <p className="text-xs text-blue-200">{label}</p>
    </motion.div>
  );
};

function HeaderCarousel() {
  return (
    <div className="w-full relative overflow-hidden rounded-3xl border border-blue-600/50 p-8 md:p-12 shadow-xl bg-gradient-to-tr to-blue-600/50 via-blue-900/40 from-black backdrop-blur-2xl mt-12">
      <motion.div
        className="relative flex flex-col items-start gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <Badge className="border border-blue-500/30 text-blue-300 bg-blue-600/10">
          <Rocket className="h-4 w-4" /> Shipping quality builds
        </Badge>

        {/* Heading */}
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
          Developer Projects{" "}
          <span className="text-blue-400 drop-shadow-md">that scale</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-sm text-blue-200/70">
          A curated set of production-grade projects. Solid DX, performance
          budgets, and architectures that won’t crumble when traffic comes.
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-blue-400/70">
          <span className="inline-flex items-center gap-1">
            <Cpu className="h-4 w-4" />
            Next.js • TypeScript • Tailwind
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Zap className="h-4 w-4" />
            SSR, Edge
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Layers className="h-4 w-4" />
            Clean architecture
          </span>
        </div>

        {/* Stats Carousel */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-5 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          <Counter end={50} label="Projects" icon={Briefcase} />
          <Counter end={2200} label="Commits" icon={GitCommit} />
          <Counter end={10} label="Clients" icon={Users} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeaderCarousel;
