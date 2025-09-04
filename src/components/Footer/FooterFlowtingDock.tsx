import React from "react";
import { FloatingDock } from "@/components/ui/layouts";
import { IconBrandGithub, IconBrandX, IconHome } from "@tabler/icons-react";
import { SiLeetcode } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

export function FooterFloatingDock() {
  const links = [
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
  return (
    <div className="flex items-center justify-center my-2 w-full">
      <FloatingDock items={links} />
    </div>
  );
}
