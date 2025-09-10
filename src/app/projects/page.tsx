import React from "react";
import Projects from "./projects";
import CustomCursor from "@/components/Common/CustomCursor";
import Navbar from "@/components/Navbar/Navbar";
import Header from "./header";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/Footer";

function page() {
  return (
    <main className="relative w-full p-4 sm:px-6 lg:px-8 bg-black text-white flex flex-col items-center justify-center overflow-hidden mx-auto select-none">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,rgba(37,99,235,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.3)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(37,99,235,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.15)_1px,transparent_1px)]"
        )}
      />

      <CustomCursor />
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}

export default page;
