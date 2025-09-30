"use client";
import { motion } from "framer-motion";
import {
  Download,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Layers,
  FileText,
} from "lucide-react";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { PiReadCvLogoFill } from "react-icons/pi";

import CustomCursor from "@/components/Common/CustomCursor";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";
import Link from "next/link";

const experienceData = [
  {
    role: "Software Engineer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    desc: "Building scalable full-stack applications with React, Next.js, and Node.js.",
  },
  {
    role: "Frontend Developer",
    company: "Startup Labs",
    period: "2020 - 2022",
    desc: "Created interactive and responsive UIs with React and Tailwind CSS.",
  },
];

const educationData = [
  {
    degree: "B.Com in Corporate",
    school: "Calicut University",
    period: "2020 - 2023",
  },
  {
    degree: "Higher Secondary in Commerce",
    school: "Learners Collage Puthanathani",
    period: "2018 - 2020",
  },
];

const skillsData = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "GitHub",
  "REST APIs",
  "Express.js",
  "Figma",
];

const projectsData = [
  {
    name: "Portfolio Website",
    desc: "A responsive developer portfolio built with Next.js and Tailwind CSS.",
    link: "#",
  },
  {
    name: "Task Manager App",
    desc: "React app with CRUD operations and localStorage persistence.",
    link: "#",
  },
  {
    name: "E-commerce App",
    desc: "React + Next.js app with shopping cart and payment integration.",
    link: "#",
  },
];

export default function ResumePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="relative w-full bg-black text-gray-300 overflow-hidden">
      <ScrollProgress />
      <CustomCursor />

      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles-resume"
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
      <section className="relative w-full text-center h-screen flex flex-col justify-center items-center px-4">
        <span className="absolute top-24 sm:top-20 text-sm text-blue-600 tracking-widest border border-blue-700/50 p-2 px-4 mb-10 flex items-center gap-2">
          <PiReadCvLogoFill /> Resume
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -right-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -right-1.5"></span>
        </span>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white"
        >
          My <span className="text-blue-600">Resume</span>
        </motion.h1>
        <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto bg-gradient-to-r from-gray-600 via-white to-gray-600 text-transparent bg-clip-text">
          A quick overview of my skills, experience, projects, and achievements
          as a software developer.
        </p>
        <motion.a
          whileHover={{ scale: 1.02 }}
          href="/resume.pdf"
          download
          className="mt-4 flex w-fit justify-center items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition shadow-lg shadow-blue-600/30 text-white"
        >
          <Download size={20} /> Download Resume
        </motion.a>

        {/* Ribbon */}
        <div className="w-full overflow-hidden bg-blue-600 py-2 bottom-20 sm:bottom-10 absolute left-0">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" },
            }}
          >
            {[
              "Web Design",
              "App Development",
              "Dashboards",
              "UI/UX",
              "APIs",
            ]
              .concat([
                "Web Design",
                "App Development",
                "Dashboards",
                "UI/UX",
                "APIs",
              ]) // seamless loop
              .map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 whitespace-nowrap text-sm md:text-base font-semibold text-black"
                >
                  {item} <BiSolidQuoteSingleRight />
                </div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-4 md:px-10 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2 text-white">
          <Briefcase className="text-blue-600" /> Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col justify-start text-start items-start p-6 h-full rounded-3xl bg-gradient-to-br from-slate-950 to-blue-950 shadow-md border border-blue-900/30"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-blue-600">{exp.company} · {exp.period}</p>
              <p className="mt-2 text-gray-300">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-4 md:px-10 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2 text-white">
          <GraduationCap className="text-blue-600" /> Education
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col justify-center items-center p-6 h-full rounded-2xl bg-gradient-to-br from-slate-950 to-blue-950 shadow-md border border-blue-900/30"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-blue-600">{edu.school} · {edu.period}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-4 md:px-10 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2 text-white">
          <Code2 className="text-blue-600" /> Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillsData.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-3 rounded-xl bg-blue-900/20 text-center text-blue-600 border border-blue-800/40 shadow-sm"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-4 md:px-10 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2 text-white">
          <Layers className="text-blue-600" /> Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectsData.map((proj, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-blue-950 shadow-md border border-blue-900/30"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white">{proj.name}</h3>
              <p className="text-gray-300 mt-1">{proj.desc}</p>
              {proj.link && (
                <Link href={proj.link} className="text-blue-600 mt-2 inline-block underline">
                  View Project
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-6xl mx-auto px-4 md:px-10 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2 text-white">
          <Award className="text-blue-600" /> Achievements
        </h2>
        <ul className="space-y-4 list-disc list-inside text-gray-300">
          <li>Top 1% on typing test (100+ WPM)</li>
          <li>250+ LeetCode problems solved with badges</li>
          <li>Winner of 15 Days Coding Challenge at Tegfly</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto px-4 md:px-10 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2 text-white">
          <FileText className="text-blue-600" /> Certifications
        </h2>
        <ul className="space-y-4 list-disc list-inside text-gray-300">
          <li>Full-Stack Web Development Certification - XYZ Institute</li>
          <li>React & TypeScript Advanced Course - ABC Academy</li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
