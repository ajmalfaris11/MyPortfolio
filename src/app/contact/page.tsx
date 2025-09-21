"use client";

import { motion } from "framer-motion";
import Contact from "@/components/Contact/ContactSection";
import CustomCursor from "@/components/Common/CustomCursor";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import ContactCard from "@/components/Contact/ContactCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { BiSolidQuoteSingleRight } from "react-icons/bi";

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
      <section className="w-full pt-20 flex flex-col justify-center items-center text-center px-6">
        <Navbar />
        <span className="relative text-sm text-blue-600 tracking-widest border border-blue-700/50 p-2 px-4 mb-5">
          My Contacts
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -right-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -right-1.5"></span>
        </span>
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

      {/* Ribbon */}
      <div className="w-full bg-blue-600/10 relative z-10 mt-10">
        <div className="max-w-6xl mx-auto py-3 overflow-hidden">
          <div className="w-full bg-blue-600 text-black font-semibold py-2 inline-flex gap-8 justify-center items-center text-lg">
            <span>Web Design</span> <BiSolidQuoteSingleRight />
            <span>App Development</span> <BiSolidQuoteSingleRight />
            <span>Dashboards</span> <BiSolidQuoteSingleRight />
            <span>Wireframes</span> <BiSolidQuoteSingleRight />
            <span>UI/UX</span> <BiSolidQuoteSingleRight />
            <span>APIs</span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="w-full flex flex-col justify-center items-center">
        <Contact />
        <ContactCard />
        <Footer />
      </section>
    </main>
  );
}
