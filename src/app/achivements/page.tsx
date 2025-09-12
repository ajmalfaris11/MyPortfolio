"use client";
import React from "react";
import CustomCursor from "@/components/Common/CustomCursor";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import LeetCode from "@/components/Achievements/LeetCode";
import Certificates from "@/components/Achievements/Certificates";
import Github from "@/components/Achievements/gitHub";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "./hero";
import GridSection from "./GridSection";

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
        <Navbar />
        <section id="hero">
          <Hero />
        </section>

        <section id="achievements">
          <GridSection />
        </section>

        <section id="leetcode">
          <LeetCode />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id="github">
          <Github />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </section>
    </main>
  );
}
