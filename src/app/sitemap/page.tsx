"use client";

import React, { Suspense, useMemo } from "react";
import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { IoMapOutline } from "react-icons/io5";
import {
  FaHome,
  FaInfoCircle,
  FaLaptopCode,
  FaEnvelope,
  FaProjectDiagram,
  FaBriefcase,
  FaAward,
  FaUsers,
  FaFileAlt,
  FaSitemap,
  FaPhoneAlt,
} from "react-icons/fa";

import CustomCursor from "@/components/Common/CustomCursor";
import ScrollProgress from "@/components/Common/ScrollProgress";
import { SparklesCore } from "@/components/ui/effects/sparkles";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

/* Types */
type SiteLink = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};
type Section = {
  title: string;
  links: SiteLink[];
};

/* Memoized site sections */
const useSiteSections = () =>
  useMemo<Section[]>(
    () => [
      {
        title: "Core",
        links: [
          { title: "Home", description: "Start here & explore my work.", href: "/", icon: <FaHome /> },
          { title: "About", description: "Learn about my journey & values.", href: "/about", icon: <FaInfoCircle /> },
          { title: "Contact", description: "Let's collaborate or say hi!", href: "/contact", icon: <FaEnvelope /> },
        ],
      },
      {
        title: "Showcase",
        links: [
          { title: "Skills", description: "Tech stack & tools I work with.", href: "/skills", icon: <FaLaptopCode /> },
          { title: "Services", description: "Web dev, design systems & more.", href: "/services", icon: <FaLaptopCode /> },
          { title: "Projects", description: "Portfolio projects & experiments.", href: "/projects", icon: <FaProjectDiagram /> },
          { title: "Experience", description: "Work history & achievements.", href: "/experience", icon: <FaBriefcase /> },
          { title: "Achievements", description: "Certifications, awards & badges.", href: "/achievements", icon: <FaAward /> },
          { title: "Testimonials", description: "Clients & peers feedback.", href: "/testimonials", icon: <FaUsers /> },
        ],
      },
      {
        title: "Content",
        links: [{ title: "Resume", description: "Download my CV & career summary.", href: "/resume", icon: <FaFileAlt /> }],
      },
      {
        title: "Utility",
        links: [
          { title: "Support", description: "Need help? Reach out anytime.", href: "/support", icon: <FaPhoneAlt /> },
          { title: "Site Map", description: "Full site structure overview.", href: "/sitemap", icon: <FaSitemap /> },
        ],
      },
    ],
    []
  );

/* Framer Motion Variant */
const ease: Easing = [0.25, 0.1, 0.25, 1]; // smooth cubic-bezier
const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.8, ease },
  }),
};

export default function SiteMapPage() {
  const siteSections = useSiteSections();

  return (
    <main className={`relative w-full h-full bg-black flex flex-col items-center justify-start overflow-x-hidden scroll-smooth ${inter.className}`}>
      <CustomCursor />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Sparkles Effect */}
      <Suspense fallback={null}>
        <SparklesCore
          id="tsparticles-sitemap"
          background="transparent"
          minSize={0.5}
          maxSize={1.2}
          particleDensity={80} // tuned for performance
          className="w-full h-full absolute inset-0 z-0"
          particleColor="#2563eb"
        />
      </Suspense>

      {/* Hero */}
      <motion.header
        className="relative z-10 w-full text-center py-20 px-6 flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariant}
        custom={0}
      >
        <span className="relative text-sm text-blue-600 tracking-widest border border-blue-700/50 p-2 px-4 flex justify-center items-center gap-2">
          <IoMapOutline className="h-4 w-4" /> Explore My Portfolio
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -right-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -right-1.5"></span>
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-white">
          <span className="text-blue-600">Portfolio</span> Map
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Navigate through my work, skills, and achievements. Every section is mapped for smooth exploration.
        </p>
      </motion.header>

      {/* Site Sections */}
      <section className="w-full max-w-7xl px-6 sm:px-10 flex flex-col gap-16 pb-24 relative z-10">
        {siteSections.map((section, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={sectionVariant}
            custom={idx + 1}
            className="w-full"
          >
            <h2 className="text-xl font-bold text-blue-500 mb-6 tracking-wide border-b-2 w-10 hover:w-16 transition-all duration-300">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {section.links.map((link, lidx) => (
                <Link key={lidx} href={link.href}>
                  <div className="flex justify-between items-center w-full sm:max-w-xs gap-2 rounded-full backdrop-blur-sm bg-black/20 border border-blue-700 hover:scale-110 duration-500 p-1 pr-2 transition-all hover:border-blue-600 relative">
                    <div className="flex gap-4 justify-center items-center">
                      <span className="flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-600">
                        {link.icon}
                      </span>
                      <div className="flex flex-col mr-10">
                        <span className="text-blue-600 text-[16px]">
                          {link.title}
                        </span>
                      </div>
                    </div>
                    <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25 absolute right-1">
                      <GoArrowUpRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <motion.footer
        className="relative z-10 w-full text-center py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariant}
        custom={siteSections.length + 1}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Let’s build something <span className="text-blue-600">awesome together.</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Connect, collaborate, or just say hi! Check out my projects, resume, and everything in between.
        </p>
        <Link href="/contact">
          <button className="mt-6 px-10 py-3 border-2 border-blue-600 text-blue-600 hover:text-black rounded-full hover:bg-blue-600 transition-colors duration-300">
            Contact Me
          </button>
        </Link>
      </motion.footer>
    </main>
  );
}
