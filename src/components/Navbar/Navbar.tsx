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
  { name: "Projects", link: "/projects" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
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
        <NavItems items={navLinks} />
        <div className="flex gap-6 text-xl z-10 border-1 hover:border-blue-700 rounded-full p-2 px-4">
          <a
            href="https://github.com/ajmalfaris11"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-90 hover:text-blue-700"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ajmal-faris11/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-90 hover:text-blue-700"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/ajmal_faris11"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-90 hover:text-blue-700"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://leetcode.com/u/AjmalFaris/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-90 hover:text-blue-700"
          >
            <SiLeetcode />
          </a>
        </div>
      </NavBody>

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
                className="fixed bottom-0 left-0 w-full max-h-[70vh] bg-gradient-to-b from-neutral-800 to-black rounded-t-3xl shadow-xl z-50 p-6 overflow-y-auto"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Close button */}
                <div className="flex  justify-center top-0">
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-30 h-1.5 rounded-full text-2xl font-bold bg-blue-800 transition-colors"
                  ></button>
                </div>

                {/* Menu links */}
                <nav className="flex flex-col text-start gap-5 mt-6">
                  {navLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={() => setMenuOpen(false)}
                      className={`text-lg font-medium text-center py-2 transition-colors border-b-1 border-blue-800/30 ${
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
