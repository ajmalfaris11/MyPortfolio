"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/Common/CustomCursor";
import ScrollProgress from "@/components/Common/ScrollProgress";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import { FaQuestion } from "react-icons/fa";
import { TbZoomQuestion } from "react-icons/tb";

const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Next.js, Node.js, TypeScript, Tailwind CSS, and MongoDB.",
  },
  {
    question: "Can I hire you for a project?",
    answer:
      "Yes! I am available for freelance, contract, and full-time opportunities. Contact me via the Contact page.",
  },
  {
    question: "Do you provide UI/UX design services?",
    answer:
      "Yes, I create wireframes, prototypes, and user-friendly interfaces for web and mobile apps.",
  },
  {
    question: "Do you have experience with APIs?",
    answer:
      "Absolutely! I build and integrate REST APIs and work with third-party services.",
  },
  {
    question: "Where can I see your projects?",
    answer:
      "You can check out my Projects page for a complete list of applications and websites I’ve built.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="tsparticles-faq"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={90}
          className="w-full h-full"
          particleColor="#2563eb"
        />
      </div>

      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full text-center h-screen flex flex-col items-center justify-center px-4">
        <span className="absolute top-30 sm:top-24 text-sm text-blue-600 tracking-widest border border-blue-700/50 p-2 px-4 mb-10 flex items-center gap-2">
          <TbZoomQuestion /> Frequently Asked Questions
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -right-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -right-1.5"></span>
        </span>

        {/* Title */}
        <div className="flex justify-center items-center gap-4 sm:gap-6">
          <div className="flex flex-col text-blue-600 items-center">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold">
              F
            </span>
            <span className="text-sm sm:text-base">Frequently</span>
          </div>
          <div className="flex flex-col text-white items-center">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold">
              A
            </span>
            <span className="text-sm sm:text-base">Asked</span>
          </div>
          <div className="flex flex-col text-blue-600 items-center ml-1">
            <span className="text-7xl sm:text-8xl md:text-9xl font-bold">
              <TbZoomQuestion />
            </span>
            <span className="text-sm sm:text-base">Questions</span>
          </div>
        </div>

        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto bg-gradient-to-r from-gray-600 via-white to-gray-600 text-transparent bg-clip-text">
          Answers to common questions about my skills, experience, and services.
        </p>

        {/* Ribbon */}
        <div className="w-full overflow-hidden bg-blue-600 py-2 bottom-20 sm:bottom-10 absolute left-0">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
            }}
          >
            {[
              "Web Design",
              "App Development",
              "Dashboards",
              "UI/UX",
              "APIs",
              "Web Design",
            ]
              .concat([
                "Web Design",
                "App Development",
                "Dashboards",
                "UI/UX",
                "APIs",
                "Web Design",
                "App Development",
                "Dashboards",
                "UI/UX",
                "APIs",
              ]) // duplicate for seamless loop
              .map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 whitespace-nowrap text-sm md:text-base font-semibold text-black"
                >
                  {item} <TbZoomQuestion />
                </div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-3xl px-3 sm:px-6 md:px-10 py-12 space-y-4 z-20">
        {faqData.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col p-4 sm:p-6 rounded-3xl shadow-md border border-blue-600/30 bg-black/20 backdrop-blur-md cursor-pointer"
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="p-2 sm:p-3 bg-black rounded-full shadow-lg shadow-blue-950 border border-blue-600 text-blue-600">
                    <FaQuestion />
                  </span>
                  <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-white">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <BiChevronDown className="text-blue-600 text-xl sm:text-2xl" />
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: isActive ? "auto" : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-3 sm:gap-4 mt-3">
                  <img
                    src="images/hero_img.webp"
                    alt="AJ"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </section>

      <Footer />
    </main>
  );
}
