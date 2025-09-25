"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useDragControls } from "framer-motion";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  NavbarLogo,
} from "@/components/ui/layouts/resizable-navbar";

import { IconBrandGithub, IconBrandX, IconHome } from "@tabler/icons-react";
import { SiLeetcode } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

import {
  FaHome,
  FaUserAlt,
  FaTools,
  FaBriefcase,
  FaProjectDiagram,
  FaCogs,
  FaTrophy,
  FaRegComments,
  FaFileAlt,
  FaEnvelope,
  FaSitemap,
} from "react-icons/fa";

const items = [
  { title: "Twitter", icon: <IconBrandX className="h-full w-full text-blue-600" />, href: "#" },
  { title: "LinkedIn", icon: <SlSocialLinkedin className="h-full w-full text-blue-600" />, href: "https://www.linkedin.com/in/ajmal-faris11/" },
  { title: "Home", icon: <IconHome className="h-full w-full text-blue-600" />, href: "/" },
  { title: "GitHub", icon: <IconBrandGithub className="h-full w-full text-blue-600" />, href: "https://github.com/ajmalfaris11" },
  { title: "Leetcode", icon: <SiLeetcode className="h-full w-full text-blue-600" />, href: "#" },
];

const navLinks = [
  { name: "About", link: "/about", icon: <FaUserAlt /> },
  { name: "Skills", link: "/skills", icon: <FaTools /> },
  { name: "Experience", link: "/experience", icon: <FaBriefcase /> },
  { name: "Projects", link: "/projects", icon: <FaProjectDiagram /> },
  { name: "Services", link: "/services", icon: <FaCogs /> },
  { name: "Achievements", link: "/achievements", icon: <FaTrophy /> },
  { name: "Testimonials", link: "/testimonials", icon: <FaRegComments /> },
  { name: "Resume", link: "/resume", icon: <FaFileAlt /> },
  { name: "Contact", link: "/contact", icon: <FaEnvelope /> },
  { name: "Site Map", link: "/sitemap", icon: <FaSitemap /> },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const controls = useDragControls();

  // Lock body scroll
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <Navbar className="absolute top-2 flex justify-center bg-transparent justify-self-center sm:px-8 z-40">
      {/* Desktop Navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navLinks.slice(0, 5)} />
      </NavBody>

      <Link href="/contact" className="hidden lg:flex justify-center items-center">
        <span className="bg-transparent border-[1.5px] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 hover:border-blue-700 transition-colors duration-300 text-nowrap flex justify-center items-center">
          Contact Me
        </span>
      </Link>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        </MobileNavHeader>

        {/* Mobile menu popup */}
        <AnimatePresence>
          {menuOpen && (
            <div className="absolute h-screen w-screen bg-black/50 backdrop-blur-sm">
              <motion.div
                className="absolute bottom-0 left-0 w-full max-h-[75vh] overflow-hidden rounded-t-[50px] border-t-2 border-blue-600 bg-gradient-to-b from-neutral-900 to-black shadow-xl will-change-transform"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                drag="y"
                dragControls={controls}
                dragListener={false}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.y > 0 || info.velocity.y > 500) setMenuOpen(false);
                }}
              >
                {/* Drag handle */}
                <div
                  className="sticky top-0 z-50 flex w-full cursor-grab justify-center rounded-t-full bg-neutral-900 p-4 backdrop-blur-sm active:cursor-grabbing"
                  onPointerDown={(e) => controls.start(e)}
                >
                  <button className="h-1 w-24 rounded-full bg-blue-600 transition-colors" />
                </div>

                {/* Scrollable nav links */}
                <div className="overflow-y-auto max-h-[calc(75vh-64px)] px-6 py-4">
                  <nav className="flex flex-col gap-5">
                    {navLinks.map((item, idx) => {
                      const active = pathname === item.link;
                      return (
                        <Link
                          key={idx}
                          href={item.link}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center justify-between border-b py-2 text-lg font-medium transition-colors ${
                            active ? "border-blue-700 font-semibold text-blue-700" : "border-neutral-800 text-slate-300"
                          }`}
                        >
                          {item.name}
                          <span>{item.icon}</span>
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Footer icons + copyright */}
                <div className="sticky bottom-0 flex flex-col gap-2 rounded-t-4xl bg-black py-4 pb-20 md:hidden">
                  <div className="flex justify-center gap-3">
                    {items.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        title={item.title}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 dark:bg-blue-900/30"
                        style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}
                      >
                        <div className="h-4 w-4">{item.icon}</div>
                      </a>
                    ))}
                  </div>
                  <div className="w-full text-center text-xs text-blue-200/50">
                    © {new Date().getFullYear()} Ajmal Faris. All rights reserved.
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </MobileNav>
    </Navbar>
  );
}
