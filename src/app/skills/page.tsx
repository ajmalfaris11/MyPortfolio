"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaDocker } from "react-icons/fa";
import { SiSass, SiJavascript, SiFirebase, SiMongodb, SiTypescript, SiPython, SiCplusplus, SiPhp, SiPostgresql, SiTailwindcss } from "react-icons/si";

export default function SkillsPage() {
  return (
    <main className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-b from-black via-blue-900/40 to-black">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-blue-500 drop-shadow-lg"
        >
          My Skillset
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300"
        >
          A showcase of my abilities across frontend, backend, programming languages, and more.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section className="px-8 py-16 space-y-20 max-w-6xl mx-auto">
        {/* Frontend */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-8 border-b-2 border-blue-600 inline-block">Frontend</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <SkillCard icon={<FaHtml5 className="text-orange-500" />} label="HTML" />
            <SkillCard icon={<FaCss3Alt className="text-blue-500" />} label="CSS" />
            <SkillCard icon={<SiSass className="text-pink-500" />} label="SASS" />
            <SkillCard icon={<SiJavascript className="text-yellow-400" />} label="JavaScript" />
            <SkillCard icon={<FaReact className="text-blue-400" />} label="React.js" />
            <SkillCard icon={<SiTailwindcss className="text-cyan-400" />} label="TailwindCSS" />
            <SkillCard icon={<SiTypescript className="text-blue-500" />} label="TypeScript" />
          </div>
        </div>

        {/* Backend */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-8 border-b-2 border-blue-600 inline-block">Backend</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <SkillCard icon={<FaNodeJs className="text-green-500" />} label="Node.js" />
            <SkillCard icon={<SiFirebase className="text-yellow-500" />} label="Firebase" />
            <SkillCard icon={<SiMongodb className="text-green-400" />} label="MongoDB" />
            <SkillCard icon={<SiPostgresql className="text-sky-500" />} label="PostgreSQL" />
            <SkillCard icon={<FaDocker className="text-blue-500" />} label="Docker" />
          </div>
        </div>

        {/* Programming Languages */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-8 border-b-2 border-blue-600 inline-block">Programming Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <SkillCard icon={<SiTypescript className="text-blue-500" />} label="TypeScript" />
            <SkillCard icon={<SiPython className="text-yellow-300" />} label="Python" />
            <SkillCard icon={<SiCplusplus className="text-blue-400" />} label="C++" />
            <SkillCard icon={<SiPhp className="text-indigo-400" />} label="PHP" />
          </div>
        </div>

        {/* Speaking Languages */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-8 border-b-2 border-blue-600 inline-block">Speaking Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <SkillCard icon={<span className="text-2xl">🇬🇧</span>} label="English" />
            <SkillCard icon={<span className="text-2xl">🇮🇳</span>} label="Hindi" />
            <SkillCard icon={<span className="text-2xl">🇵🇰</span>} label="Urdu" />
          </div>
        </div>

        {/* Other Tools */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-8 border-b-2 border-blue-600 inline-block">Other Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <SkillCard icon={<FaGithub className="text-gray-300" />} label="GitHub" />
          </div>
        </div>
      </section>
    </main>
  );
}

// Skill Card Component
function SkillCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/30 to-blue-600/10 p-6 rounded-2xl shadow-lg border border-blue-800 hover:border-blue-500 transition-all duration-300"
    >
      <div className="text-5xl mb-3">{icon}</div>
      <p className="text-lg font-medium text-gray-200">{label}</p>
    </motion.div>
  );
}
