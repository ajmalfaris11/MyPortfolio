"use client";

import { motion } from "framer-motion";
import Contact from "@/components/Contact/ContactSection";
import CustomCursor from "@/components/Common/CustomCursor";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { GoArrowUpRight } from "react-icons/go";
import { FaInstagram, FaTwitter, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
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

      {/* Hero Section */}
      <section className="w-full h-[100vh] flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Get in <span className="text-blue-500">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-400 mt-4 max-w-xl"
        >
          Whether it’s a collaboration, freelance work, or just saying hi —
          let’s connect and make things happen.
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <section className="w-full px-6">
        <Contact />
      </section>

      <section className="mt-10 mb-20 flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Instagram */}
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full backdrop-blur-md bg-transparent border border-blue-700/50 p-1 pr-2 transition-all"
          >
            <span className="flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-700">
              <FaInstagram />
            </span>
            <div className="flex flex-col mr-10">
              <span className="text-gray-200 text-[12px]">Instagram</span>
              <span className="text-gray-400 text-[11px] font-extralight">
                @yourhandle
              </span>
            </div>
            <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25">
              <GoArrowUpRight />
            </span>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full backdrop-blur-md bg-transparent border border-blue-700/50 p-1 pr-2 hover:border-blue-600/70 transition-all"
          >
            <span className="flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-700">
              <FaTwitter />
            </span>
            <div className="flex flex-col mr-10">
              <span className="text-gray-200 text-[12px]">Twitter</span>
              <span className="text-gray-400 text-[11px] font-extralight">
                @yourhandle
              </span>
            </div>
            <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25">
              <GoArrowUpRight />
            </span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full backdrop-blur-md bg-transparent border border-blue-700/50 p-1 pr-2 hover:border-blue-500/70 transition-all"
          >
            <span className="flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-600">
              <FaTelegramPlane />
            </span>
            <div className="flex flex-col mr-10">
              <span className="text-gray-200 text-[12px]">Telegram</span>
              <span className="text-gray-400 text-[11px] font-extralight">
                @yourhandle
              </span>
            </div>
            <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25">
              <GoArrowUpRight />
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full backdrop-blur-md bg-transparent border border-blue-700/50 p-1 pr-2 hover:border-blue-600/70 transition-all"
          >
            <span className="flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-600">
              <FaLinkedin />
            </span>
            <div className="flex flex-col mr-10">
              <span className="text-gray-200 text-[12px]">LinkedIn</span>
              <span className="text-gray-400 text-[11px] font-extralight">
                yourhandle
              </span>
            </div>
            <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25">
              <GoArrowUpRight />
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
