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
import { ImQuestion } from "react-icons/im";
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
    <main className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
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

      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}

      <section className="relative z-10 text-center pt-24 pb-12 px-6">
        <div className="flex justify-center items-center gap-5">
          <div className="flex flex-col text-blue-600 justify-center items-center w-20">
            <span className="text-9xl font-bold">F</span>
            <span>Frequently</span>
          </div>
          <div className="flex flex-col text-white justify-center items-center w-20">
            <span className="text-9xl font-bold">A</span>
            <span>Asked</span>
          </div>
          <div className="flex flex-col text-blue-600 justify-center items-center w-20 ml-2">
            <span className="text-9xl font-bold">
              <TbZoomQuestion />
            </span>
            <span>Questions</span>
          </div>
        </div>
        <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl mx-auto bg-gradient-to-r from-gray-600 via-white to-gray-600 text-transparent bg-clip-text">
          Answers to common questions about my skills, experience, and services.
        </p>
      </section>

      {/* Ribbon */}
      <div className="w-full relative z-10">
        <div className="max-w-6xl mx-auto py-3 overflow-hidden">
          <div className="w-full bg-blue-600 text-black font-semibold py-2 inline-flex gap-8 justify-center items-center text-lg">
            <span>Qualification</span> <ImQuestion />
            <span>Skills</span> <ImQuestion />
            <span>Services</span> <ImQuestion />
            <span>Projects</span> <ImQuestion />
            <span>Education</span> <ImQuestion />
            <span>Specialities</span> <ImQuestion />
            <span>Other</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="w-full max-w-2xl  px-6 md:px-10 py-12 space-y-4 z-20">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col  gap-4 p-6 rounded-4xl shadow-md border-b border-l border-blue-600/50 bg-black/5 backdrop-blur-lg cursor-pointer"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-4">
                <span className="p-4 bg-black rounded-full shadow-lg shadow-blue-950 border-2 border-blue-600 text-blue-600">
                  <FaQuestion />
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {faq.question}
                </h3>
              </div>

              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <BiChevronDown className="text-blue-600 text-2xl" />
              </motion.div>
            </div>
            {activeIndex === index && (
              <div className="flex justify-center items-center gap-4">
                <img
                  src="images/hero_img.webp"
                  alt="AJ"
                  className="w-14 h-14"
                />
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-gray-300"
                >
                  {faq.answer}
                </motion.p>
              </div>
            )}
          </motion.div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
