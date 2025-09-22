import React from "react";
import Projects from "./projects";
import CustomCursor from "@/components/Common/CustomCursor";
import Navbar from "@/components/Navbar/Navbar";
import Header from "./header";
import Footer from "@/components/Footer/Footer";
import { SparklesCore } from "@/components/ui/effects/sparkles";

function page() {
  return (
    <main className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md scroll-smooth">
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
      <CustomCursor />
      <Navbar />
      <section className="p-10">
        <Header />
      <Projects />
      </section>
      <Footer />
    </main>
  );
}

export default page;
