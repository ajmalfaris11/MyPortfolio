import HeroV2 from "@/components/Hero/HeroV2";
import CustomCursor from "@/components/CustomCursor";
import Grid from "@/components/Grid";
import ServiceSection from "@/components/ServiceSection";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="relative bg-black text-white flex flex-col items-center justify-center overflow-hidden mx-auto select-none">
      <CustomCursor />
      
      {/* Background dots */}
      <div
        className="absolute inset-0
          [background-size:20px_20px]
          [background-image:radial-gradient(#2d2d2d_1px,transparent_1px)]
          dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
      />
      
      {/* Sections */}
      <HeroV2 />
      <Grid />
      <ServiceSection />
      <Projects />
      <Experience />
      <Testimonials />
      <SkillsSection />
      <AchievementsSection />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
