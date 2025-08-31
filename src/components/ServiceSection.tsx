"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaSearchDollar } from "react-icons/fa";
import {} from "react-icons/fa";
import { AnimatedDiv } from "./ui/3DanimateDiv";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

import {
  FaLaptopCode,
  FaSearch,
  FaDatabase,
  FaNetworkWired,
  FaPaintBrush,
  FaCloud,
} from "react-icons/fa";

const services: Service[] = [
  {
    title: "UI/UX Design",
    description:
      "Create intuitive and user-friendly interfaces that enhance usability and delight users.",
    icon: <FaPaintBrush className="h-6 w-6" />,
  },
  {
    title: "Web App Development",
    description:
      "Create responsive and scalable web applications using modern frameworks and clean architecture.",
    icon: <FaLaptopCode className="h-6 w-6" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Boost website visibility and search engine ranking with proven SEO strategies and analytics.",
    icon: <FaSearch className="h-6 w-6" />,
  },
  {
    title: "Database Management",
    description:
      "Design, optimize, and maintain secure databases ensuring high performance and data integrity.",
    icon: <FaDatabase className="h-6 w-6" />,
  },
  {
    title: "API Development",
    description:
      "Develop secure and scalable APIs to enable seamless integration across applications and services.",
    icon: <FaNetworkWired className="h-6 w-6" />,
  },
  {
    title: "Cloud & Deployment",
    description:
      "Deploy applications to cloud platforms with automated CI/CD pipelines for smooth scaling.",
    icon: <FaCloud className="h-6 w-6" />,
  },
];

const ServiceCard: React.FC<Service> = ({ title, description, icon }) => {
  const [onEnter, setOnEnter] = useState(false);
  return (
    <motion.div transition={{ duration: 0.3 }} className="relative h-[300px]">
      <span
        className={`w-[104%] from-blue-700 via-blue-500 to-blue-400 h-2 absolute top-0 -left-[2%] rounded-full z-20  ${
          onEnter ? "bg-gradient-to-r" : "bg-gradient-to-l"
        }`}
      ></span>
      <div
        className="absolute top-0 left-0 flex flex-col justify-center items-center rounded-2xl 
                 bg-gradient-to-b from-neutral-950 to-neutral-800 
                 px-6 pt-10 pb-24 text-white shadow-lg hover:shadow-xl border border-neutral-800 hover:pt-16 duration-300"
        onMouseEnter={() => setOnEnter(true)}
        onMouseLeave={() => setOnEnter(false)}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
        }}
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-700">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section className="w-full py-10 text-white z-10">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <AnimatedDiv rotateDepth={5} translateDepth={5}>
          <h1 className="text-6xl font-semibold">
            My <span className="text-purple animate-shine">Services</span>
          </h1>
        </AnimatedDiv>
        <p className="mb-12 mt-5 text-neutral-400 max-w-3xl mx-auto">
          I deliver end-to-end web solutions — from building scalable web apps
          and crafting intuitive UI/UX to optimizing SEO, managing databases,
          developing APIs, and deploying to the cloud — helping startups and
          businesses launch faster and grow smarter.
        </p>

        {/* Cards */}
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
