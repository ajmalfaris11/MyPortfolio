"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Controls({ query, setQuery }: any) {
  const placeholders = [
    "Projects Name…",
    "Technologies…",
    "Discription…",
    "Tags…",
    "Anything…",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full rounded-r-full bg-blue-600">
      <div className="flex flex-wrap items-center gap-3 w-full">
        <div className="relative flex-1 min-w-[240px] rounded-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />

          {/* Input field */}
          <input
            id="project-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border-none px-3 py-2 pl-12 text-[16px] text-black 
                       placeholder-transparent focus:outline-none"
            placeholder=" " // hidden, since we fake placeholder below
          />

          {/* Animated placeholder */}
          {!query && (
            <div className="absolute left-12 top-1/2 -translate-y-1/2 text-black pointer-events-none">
              <span className="">Search By&nbsp;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: -1 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block align-middle whitespace-nowrap"
                >
                  {placeholders[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
