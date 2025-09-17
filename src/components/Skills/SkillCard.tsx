import React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  key: string;
  icon: React.ReactNode;
  label: string;
}

export default function SkillCard({ key, icon, label }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/30 to-blue-600/10 p-6 rounded-3xl shadow-lg border border-blue-800 hover:border-blue-500 transition-all duration-300"
    >
      <div className="text-5xl mb-3">{icon}</div>
      <p className="text-lg font-medium text-gray-200">{label}</p>
    </motion.div>
  );
}
