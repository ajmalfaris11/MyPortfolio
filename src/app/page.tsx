import HeroSection from "@/components/Hero/HeroSection";
import CustomCursor from "@/components/Common/CustomCursor";
import GridSection from "@/components/Grid/GridSection";
import ServiceSection from "@/components/Service/ServiceSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import AchievementsSection from "@/components/Achievements/AchievementsSection";
import ApproachSection from "@/components/Approach/ApproachSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";


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
      <HeroSection />
      <GridSection />
      <ServiceSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <SkillsSection />
      <AchievementsSection />
      <ApproachSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
