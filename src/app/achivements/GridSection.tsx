"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements, Achievement } from "@/data";

export default function GridSection({
  data = achievements,
}: {
  data?: Achievement[];
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-10">
      <AnimatePresence>
        {data.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article
              layout
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              onClick={() => setActiveId(activeId === item.id ? null : item.id)}
              className="group cursor-pointer select-none"
              aria-expanded={activeId === item.id}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/40 to-black/40 border border-slate-800 p-4 hover:scale-[1.01] transition-transform">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-14 h-14 rounded-lg bg-slate-800/50 flex items-center justify-center">
                    {Icon && (
                      <Icon
                        className={item.iconStyle ?? "text-2xl text-purple-400"}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1 truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </AnimatePresence>
    </section>
  );
}
