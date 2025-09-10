"use client";

import React from "react";
import {
  Rocket,
  Cpu,
  Zap,
  Layers,
  Briefcase,
  GitCommit,
  Users,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";

function Badge({ children, className = "" }: any) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}

const Counter = ({ end, label, icon: Icon }: any) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 30));

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
      className="flex flex-col items-center justify-center bg-blue-500/10 backdrop-blur-md px-6 py-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
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
    <div className="w-full relative overflow-hidden rounded-3xl border border-blue-600/30 p-8 md:p-14 shadow-xl bg-gradient-to-tr from-blue-900/40 via-blue-800/20 to-blue-600/30 backdrop-blur-xl mt-12">
      <motion.div
        className="relative flex flex-col items-start gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <Badge className="border border-blue-500/30 text-blue-300 bg-blue-600/10">
          <Rocket className="h-4 w-4" /> Crafting Impactful Software
        </Badge>

        {/* Heading */}
        <h1 className="text-4xl md:text-8xl font-extrabold tracking-tight text-white leading-tight">
          Showcasing <span className="text-blue-600">Projects</span> that{" "}
          <span className="text-blue-700">Scale & Inspire</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-base md:text-lg text-blue-200/80 leading-relaxed">
          Explore production-ready projects built with precision, performance,
          and creativity. From robust architectures to sleek user experiences,
          each build is designed to stand the test of real-world demands.
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-blue-300/80">
          <span className="inline-flex items-center gap-1">
            <Cpu className="h-4 w-4" /> Next.js • TypeScript • Tailwind
          </span>
          <span className="inline-flex items-center gap-1">
            <Zap className="h-4 w-4" /> SSR • Edge Deployments
          </span>
          <span className="inline-flex items-center gap-1">
            <Layers className="h-4 w-4" /> Clean Architecture
          </span>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-5 gap-6 mt-6 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          <Counter end={50} label="Projects" icon={Briefcase} />
          <Counter end={2200} label="Commits" icon={GitCommit} />
          <Counter end={85} label="Repositories" icon={RiGitRepositoryCommitsLine} />
          <Counter end={10} label="Clients" icon={Users} />
          <Counter end={5} label="Awards" icon={Trophy} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeaderCarousel;
