"use client";

import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

export default function AchievementHero() {
  return (
    <div className="relative min-h-screen text-slate-100 py-10 px-6 sm:px-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight text-blue-600"
          >
            My Achievements
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl"
          >
            Celebrating milestones that define my coding journey from{" "}
            <span className="text-blue-600 font-semibold">
              LeetCode streaks
            </span>{" "}
            and{" "}
            <span className="text-blue-600 font-semibold">GitHub projects</span>{" "}
            to{" "}
            <span className="text-blue-600 font-semibold">certifications </span>
            and real-world problem-solving wins. Every line of code tells a
            story.
          </motion.p>
        </div>

        {/* Right: Achievements/Illustration */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Example badges or stats */}
            <div className="border-2 border-blue-700 bg-gradient-to-br from-slate-900/40 to-black/40 p-10 rounded-4xl shadow-lg flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">650+</span>
              <span className="text-sm text-slate-300 mt-1">
                LeetCode Problems
              </span>
            </div>
            <div className="border-2 border-slate-700 bg-gradient-to-br from-slate-900/40 to-black/40 p-10 rounded-4xl shadow-lg flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">20+</span>
              <span className="text-sm text-slate-300 mt-1">Badges Earned</span>
            </div>
            <div className="border-2 border-slate-700 bg-gradient-to-br from-slate-900/40 to-black/40 p-10 rounded-4xl shadow-lg flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">100+</span>
              <span className="text-sm text-slate-300 mt-1">
                GitHub Projects
              </span>
            </div>
            <div className="border-2 border-blue-700 bg-gradient-to-br from-slate-900/40 to-black/40 p-10 rounded-4xl shadow-lg flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">500+</span>
              <span className="text-sm text-slate-300 mt-1">Days Streak</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-13 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-blue-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}

      <div className="w-auto flex py-1 border-2 border-blue-700 rounded-full mt-10 -mb-14 overflow-hidden gap-2">
        <span className="bg-blue-600 rounded-r-full px-2 flex justify-center items-center text-black gap-1">
          Navigate
          <IoIosArrowForward className="rotate-90" />
        </span>
        <div className="flex justify-center items-center text-blue-600">
          <a
            href="#leetcode"
            className="hover:bg-blue-700 hover:text-black py-1 px-4 rounded-full"
          >
            LeetCode
          </a>
          <a
            href="#github"
            className="hover:bg-blue-700 hover:text-black py-1 px-4 rounded-full"
          >
            GitHub
          </a>
          <a
            href="#certificates"
            className="hover:bg-blue-700 hover:text-black py-1 px-4 rounded-full"
          >
            Certificates
          </a>
          <a
            href="#other"
            className="hover:bg-blue-700 hover:text-black py-1 px-4 rounded-full"
          >
            Other
          </a>
        </div>
      </div>
    </div>
  );
}
