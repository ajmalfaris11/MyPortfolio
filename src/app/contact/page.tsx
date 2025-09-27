"use client";

import { motion } from "framer-motion";
import Contact from "@/components/Contact/ContactSection";
import CustomCursor from "@/components/Common/CustomCursor";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import ContactCard from "@/components/Contact/ContactCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import ScrollProgress from "@/components/Common/ScrollProgress";
import { GrContact } from "react-icons/gr";

export default function ContactPage() {
  return (
    <main className="relative w-full h-full bg-black flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto scroll-smooth">
      {/* Custom Elements */}
      <CustomCursor />
      <ScrollProgress />

      {/* Background Particles */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles-contact"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          particleColor="#2563eb"
          className="w-full h-full"
        />
      </div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen pt-24 pb-16 flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative text-xs sm:text-sm md:text-base text-blue-600 tracking-widest border border-blue-700/50 px-6 py-2 mb-6 flex items-center gap-2 rounded-lg"
        >
          <GrContact className="h-4 w-4" /> My Contacts
          <span className="absolute w-2 h-2 bg-blue-600 -top-1 -left-1"></span>
          <span className="absolute w-2 h-2 bg-blue-600 -top-1 -right-1"></span>
          <span className="absolute w-2 h-2 bg-blue-600 -bottom-1 -left-1"></span>
          <span className="absolute w-2 h-2 bg-blue-600 -bottom-1 -right-1"></span>
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
        >
          Get in <span className="text-blue-500">Touch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-gray-400 mt-4 max-w-xl text-sm sm:text-base"
        >
          Whether it’s a collaboration, freelance work, or just saying hi —
          let’s connect and make things happen.
        </motion.p>
      </section>

      {/* Ribbon */}
      <div className="w-full overflow-hidden bg-blue-600 py-2 top-[80vh] absolute sm:top-[90vh] left-0">
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
                {item} <BiSolidQuoteSingleRight />
              </div>
            ))}
        </motion.div>
      </div>

      {/* Contact Section */}
      <section className="w-full flex flex-col items-center gap-10 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-4xl"
        >
          <Contact />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-4xl"
        >
          <ContactCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Footer />
        </motion.div>
      </section>
    </main>
  );
}
