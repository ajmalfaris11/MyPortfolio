"use client";

import { AnimatedDiv } from "./ui/3DanimateDiv";
import { GiAchievement } from "react-icons/gi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";
import { FaCode, FaGithub, FaTrophy, FaKeyboard } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { FaRegKeyboard } from "react-icons/fa";
import { BsKeyboard } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

const achievements = [
  {
    icon: <FaCode />,
    title: "500 Days LeetCode Streak",
    description:
      "Solved coding problems daily for over 500 days, building consistency and strong problem-solving skills.",
    style: "-mb-6 -rotate-2 bg-gradient-to-tr",
  },
  {
    icon: <VscGithub />,
    title: "Top 1% GitHub Contributor",
    description:
      "2034 contributions in a year, 204 stars earned, and a 170-day coding streak.",
    style: "-mb-6 rotate-2 bg-gradient-to-tl",
  },
  {
    icon: <GrAchievement />,
    title: "Winner - Tegfly Coding Challenge",
    description:
      "Secured 1st place in Tegfly's 15-Day Coding Challenge, proving speed and skill.",
    style: "-mb-6 -rotate-2 bg-gradient-to-tr",
  },
  {
    icon: <BsKeyboard />,
    title: "Top 1% Typist",
    description:
      "Achieved 100+ WPM in a 60-second test according to TCK Publishing.",
    style: "-mb-6 rotate-2 bg-gradient-to-t",
  },
];

const AchivementSection = () => {
  const [onClick, setOnClick] = useState(false);

  return (
    <div className="flex flex-col items-center py-20 text-white z-10">
      <AnimatedDiv rotateDepth={10} translateDepth={10}>
        <h1 className="text-6xl font-semibold">
          My <span className="text-purple animate-shine">Achievements</span>
        </h1>
      </AnimatedDiv>
      <p className="text-center text-gray-300 my-5 max-w-xl">
        Highlights from my journey — milestones that reflect growth,
        consistency, and a drive to keep building.
      </p>

      <div className="relative flex flex-col pt-10 max-w-2xl">
        {achievements.map((achievement, idx) => (
          <div
            key={idx}
            className={`${achievement.style} relative from-blue-900/30 hover:from-blue-700 via-blue-700 to-blue-600 hover:scale-105 
            transition-transform duration-300 text-white rounded-4xl p-6 py-10 shadow-xl backdrop-blur-sm hover:z-50 
            hover:rotate-0 flex gap-4`}
          >
            <div className="flex items-center space-x-6 w-[40%] text-5xl">
              {achievement.icon}
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
            </div>
            <span className="w-[60%]">
              <p className="mt-2 text-gray-200">{achievement.description}</p>
            </span>
          </div>
        ))}

        <div
          className="relative bg-gradient-to-t from-blue-700 hover:from-blue-700 via-blue-800 to-blue-600
            duration-500 text-white rounded-full p-4 
            flex justify-between items-center transition-all mt-5"
          onMouseEnter={() => setOnClick(true)}
          onMouseLeave={() => setOnClick(false)}
        >
          <GiAchievement className="text-4xl" />
          <span className="flex items-center gap-0 transition-all duration-500">
            <h3 className="text-lg font-semibold transition-all duration-500">
              VIEW ALL MY ACHIEVEMENTS
            </h3>
            <MdKeyboardDoubleArrowRight
              className={`text-3xl -ml-2 opacity-0 transition-all duration-500 ${
                onClick ? "opacity-100 ml-3 animate-pulse" : ""
              }`}
            />
          </span>
          <GiAchievement className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default AchivementSection;
