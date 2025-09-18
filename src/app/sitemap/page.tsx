"use client";

import React from "react";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import CustomCursor from "@/components/Common/CustomCursor";
import { GoArrowUpRight } from "react-icons/go";
import {
  FaHome,
  FaInfoCircle,
  FaLaptopCode,
  FaEnvelope,
  FaProjectDiagram,
  FaPhoneAlt,
  FaAward,
  FaBook,
  FaUsers,
  FaFileAlt,
  FaSitemap,
  FaBriefcase,
} from "react-icons/fa";

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

const siteSections: Section[] = [
  {
    title: "Core",
    links: [
      { title: "Home", description: "Welcome screen & intro to my work.", href: "/", icon: <FaHome /> },
      { title: "About", description: "Who I am, my journey, and values I follow.", href: "/about", icon: <FaInfoCircle /> },
      { title: "Contact", description: "Let’s talk about building something together.", href: "/contact", icon: <FaEnvelope /> },
    ],
  },
  {
    title: "Showcase",
    links: [
      { title: "Skills", description: "Frontend, backend, programming languages & tools.", href: "/skills", icon: <FaLaptopCode /> },
      { title: "Services", description: "Full stack development, design systems, DevOps & more.", href: "/services", icon: <FaLaptopCode /> },
      { title: "Projects", description: "Case studies, apps, and experiments I’ve built.", href: "/projects", icon: <FaProjectDiagram /> },
      { title: "Experience", description: "Professional journey, companies, and roles I’ve worked in.", href: "/experience", icon: <FaBriefcase /> },
      { title: "Achievements", description: "Certifications, badges, milestones, and awards.", href: "/achievements", icon: <FaAward /> },
      { title: "Testimonials", description: "What clients and colleagues say about me.", href: "/testimonials", icon: <FaUsers /> },
    ],
  },
  {
    title: "Content",
    links: [
      { title: "Resume", description: "Download my CV and detailed career breakdown.", href: "/resume", icon: <FaFileAlt /> },
    ],
  },
  {
    title: "Utility",
    links: [
      { title: "Support", description: "Need help? Reach out directly anytime.", href: "/support", icon: <FaPhoneAlt /> },
      { title: "Site Map", description: "Explore all sections of this website.", href: "/sitemap", icon: <FaSitemap /> },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <main className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md scroll-smooth">
      <CustomCursor />
      <div className="w-full h-full absolute inset-0">
        <SparklesCore
          id="tsparticles-sitemap"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={120}
          className="w-full h-full"
          particleColor="#2563eb"
        />
      </div>

      {/* Hero */}
      <section className="mx-auto px-6 py-20 text-center relative z-10">
        <span className="relative text-sm text-blue-600 tracking-widest border border-blue-700/50 p-2 px-4">
          Navigation Map
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -top-1 -right-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -left-1.5"></span>
          <span className="w-3 h-2 bg-blue-600 absolute -bottom-1 -right-1.5"></span>
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold">
          <span className="text-blue-600">Site</span> Map
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          Everything neatly mapped so you can explore without getting lost.
        </p>
      </section>

      {/* Sectioned Site Map */}
      <section className="mx-auto px-10 pb-24 relative z-10 space-y-16">
        {siteSections.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-bold text-blue-500 mb-6 tracking-wide border-b-2 w-10 hover:w-16 transition-all duration-300">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {section.links.map((link, lidx) => (
                <Link key={lidx} href={link.href}>
                  <div className="flex justify-between items-center w-full max-w-xs gap-2 rounded-full backdrop-blur-md bg-transparent border border-blue-700 hover:scale-110 duration-500 p-1 pr-2 transition-all hover:border-blue-600">
                    <div className="flex gap-4 justify-center items-center">
                      <span className="flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-600">
                        {link.icon}
                      </span>
                      <div className="flex flex-col mr-10">
                        <span className="text-gray-200 text-[12px] text-nowrap">{link.title}</span>
                      </div>
                    </div>
                    <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25 absolute right-1">
                      <GoArrowUpRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Navigate smarter. <span className="text-blue-600">Build faster.</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Every section connects back to shipping better products, faster.
        </p>
      </section>
    </main>
  );
}
