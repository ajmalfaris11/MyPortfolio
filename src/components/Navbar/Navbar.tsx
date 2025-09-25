"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  NavbarLogo,
} from "@/components/ui/layouts/resizable-navbar";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Skills", link: "/skills" },
  { name: "Experience", link: "/experience" },
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/services" },
  { name: "Achievements", link: "/achievements" },
  { name: "Testimonials", link: "/testimonials" },
  { name: "Resume", link: "/resume" },
  { name: "Contact", link: "/contact" },
  { name: "Site Map", link: "/sitemap" },
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

  return (
    <Navbar className="absolute top-2 flex justify-center bg-transparent justify-self-center sm:px-8 z-40">
      {/* Desktop Navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navLinks.slice(0, 5)} />
      </NavBody>
      <Link href="/contact"
      className="flex justify-center items-center">
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
                className="fixed bottom-0 left-0 w-full max-h-[70vh] bg-gradient-to-b from-neutral-900 to-black rounded-t-4xl shadow-xl z-50 p-6 overflow-y-auto"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Close button */}
                <div className="flex  justify-center top-0">
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-30 h-1 rounded-full text-2xl font-bold bg-blue-800 transition-colors"
                  ></button>
                </div>

                {/* Menu links */}
                <nav className="flex flex-col text-start gap-5 mt-6">
                  {navLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={() => setMenuOpen(false)}
                      className={`text-lg font-medium text-center py-2 transition-colors ${
                        pathname === item.link
                          ? "text-blue-700 font-semibold  scale-150"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </MobileNav>
    </Navbar>
  );
}
