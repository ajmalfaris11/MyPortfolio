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

import { FloatingDock } from "@/components/ui/layouts";
import { IconBrandGithub, IconBrandX, IconHome } from "@tabler/icons-react";
import { SiLeetcode } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

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
  {
    title: "Twitter",
    icon: <IconBrandX className="h-full w-full text-blue-600" />,
    href: "#",
  },
  {
    title: "LinkedIn",
    icon: <SlSocialLinkedin className="h-full w-full text-blue-600" />,
    href: "https://www.linkedin.com/in/ajmal-faris11/",
  },
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-blue-600" />,
    href: "/",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-blue-600" />,
    href: "https://github.com/ajmalfaris11",
  },
  {
    title: "Leetcode ",
    icon: <SiLeetcode className="h-full w-full text-blue-600" />,
    href: "#",
  },
];

const navLinks = [
  { name: "Home", link: "/", icon: <FaHome /> },
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

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const controls = useDragControls();

  return (
    <Navbar className="absolute top-2 flex justify-center bg-transparent justify-self-center sm:px-8 z-40">
      {/* Desktop Navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navLinks.slice(0, 5)} />
      </NavBody>
      <Link
        href="/contact"
        className="hidden lg:flex justify-center items-center"
      >
        <span
          className="bg-transparent border-[1.5px] text-white px-6 py-2 rounded-full font-medium 
             hover:bg-blue-700 hover:border-blue-700 transition-colors duration-300 text-nowrap flex justify-center items-center"
        >
          Contact Me
        </span>
      </Link>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </MobileNavHeader>

        {/* Mobile menu popup */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/70 z-40"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Bottom popup */}
              <motion.div
                className="fixed bottom-0 left-0 w-full max-h-[75vh] bg-gradient-to-b from-neutral-900 to-black rounded-t-[50px] border-t-3 border-blue-600 shadow-xl z-50 overflow-y-auto"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="y"
                dragControls={controls}
                dragListener={false} // prevents accidental drags anywhere
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.y > 0 || info.velocity.y > 500) {
                    setMenuOpen(false);
                  }
                }}
              >
                {/* Handle that activates dragging */}
                <div
                  className="flex justify-center w-full sticky top-0 z-50 bg-neutral-900 backdrop-blur-md rounded-t-full p-4 cursor-grab active:cursor-grabbing"
                  onPointerDown={(e) => controls.start(e)}
                >
                  <button className="w-24 h-1 rounded-full bg-blue-600 transition-colors" />
                </div>

                {/* Scrollable content */}
                <nav className="flex w-full relative overflow-hidden flex-col text-start gap-5 mt-6 px-6 justify-center">
                  {navLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={() => setMenuOpen(false)}
                      className={`text-xl font-medium text-start border-b py-2 transition-colors flex justify-between items-center ${
                        pathname === item.link
                          ? "text-blue-700 font-semibold border-blue-700"
                          : "text-slate-300  border-neutral-800"
                      }`}
                    >
                      {item.name}
                      <span className="text-xl">{item.icon}</span>
                    </Link>
                  ))}
                </nav>
                <div className="sticky bottom-0 bg-black w-full flex flex-col md:hidden gap-2 justify-center py-4 rounded-t-4xl">
                  <div className="flex gap-3 justify-center">
                    {items.map((item) => (
                      <motion.a
                        key={item.title}
                        href={item.href}
                        title={item.title}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 dark:bg-blue-900/30"
                        style={{
                          clipPath:
                            "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                        }}
                      >
                        <div className="h-4 w-4">{item.icon}</div>
                      </motion.a>
                    ))}
                  </div>
                  <div className="w-full text-center text-xs text-blue-200/50">
                    © {new Date().getFullYear()} Ajmal Faris. All rights
                    reserved.
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </MobileNav>
    </Navbar>
  );
}
