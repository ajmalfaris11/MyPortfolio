import { FaCode, FaGithub, FaTrophy, FaKeyboard } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { FaRegKeyboard } from "react-icons/fa";
import { BsKeyboard } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { IconType } from "react-icons";

interface Achievement {
  icon: IconType;
  title: string;
  description: string;
  style: string;
}

export const achievements : Achievement[] = [
  {
    icon: FaCode ,
    title: "500 Days LeetCode Streak",
    description:
      "Solved coding problems daily for over 500 days, building consistency and strong problem-solving skills.",
    style: "-mb-6 -rotate-2 bg-gradient-to-tr",
  },
  {
    icon: VscGithub,
    title: "Top 1% GitHub Contributor",
    description:
      "2034 contributions in a year, 204 stars earned, and a 170-day coding streak.",
    style: "-mb-6 rotate-2 bg-gradient-to-tl",
  },
  {
    icon: GrAchievement,
    title: "Winner - Tegfly Coding Challenge",
    description:
      "Secured 1st place in Tegfly's 15-Day Coding Challenge, proving speed and skill.",
    style: "-mb-6 -rotate-2 bg-gradient-to-tr",
  },
  {
    icon: BsKeyboard,
    title: "Top 1% Typist",
    description:
      "Achieved 100+ WPM in a 60-second test according to TCK Publishing.",
    style: "-mb-6 rotate-2 bg-gradient-to-t",
  },
];