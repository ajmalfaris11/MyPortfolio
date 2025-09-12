"use client";
import React from "react";
import CustomCursor from "@/components/Common/CustomCursor";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import LeetCode from "@/components/Achievements/LeetCode";
import Certificates from "@/components/Achievements/Certificates";
import Github from "@/components/Achievements/gitHub";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "./hero"
import GridSection from "./GridSection"

const categoryMeta = {
  all: { label: "All", color: "bg-blue-600/90" },
  leetcode: { label: "LeetCode", color: "bg-[#0ea5e9]/90" },
  github: { label: "GitHub", color: "bg-black/90" },
  certificate: { label: "Certificates", color: "bg-sky-700/90" },
  other: { label: "Other", color: "bg-indigo-700/90" },
};

export default function AchievementsPage() {

  return (
    <main className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
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
      <section className="w-full">
        <Navbar/>
        <Hero/>
        <GridSection/>
        <LeetCode />
        <Certificates />
        <Github />
        <Footer/>
      </section>
    </main>
  );
}
