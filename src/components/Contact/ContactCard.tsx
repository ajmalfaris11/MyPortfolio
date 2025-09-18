"use client";
import { GoArrowUpRight } from "react-icons/go";
import {
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaLinkedin,
} from "react-icons/fa";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/ajmal_faris11",
    handle: "@ajmalfaris11",
    icon: <FaInstagram />,
    bgColor: "bg-blue-700",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ajmalfaris11",
    handle: "@ajmalfaris11",
    icon: <FaTwitter />,
    bgColor: "bg-blue-700",
  },
  {
    name: "Telegram",
    url: "https://t.me/ajmalfaris11",
    handle: "@ajmalfaris11",
    icon: <FaTelegramPlane />,
    bgColor: "bg-blue-600",
    hover: "hover:border-blue-500/70",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ajmal-faris11/",
    handle: "ajmalfaris11",
    icon: <FaLinkedin />,
    bgColor: "bg-blue-600",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/ajmalfaris_38234",
    handle: "ajmalfaris_38234",
    icon: <FaDiscord />,
    bgColor: "bg-indigo-600",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/7558969093",
    handle: "+91 7558969093",
    icon: <FaWhatsapp />,
    bgColor: "bg-green-600",
  },
];

export default function ContactCard() {
  return (
    <section className="mt-10 mb-20 flex flex-col items-center justify-center w-full px-6">
      <h2 className="mb-4">connect through social</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl justify-center items-center">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center`}
          >
            <div className="flex justify-between items-center w-full max-w-xs gap-2 rounded-full backdrop-blur-md bg-transparent border border-blue-700/50 p-1 pr-2 transition-all hover:border-blue-600">
              <div className="flex gap-4 justify-center items-center">
                <span
                  className={`flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-600`}
                >
                  {social.icon}
                </span>
                <div className="flex flex-col mr-10">
                  <span className="text-gray-200 text-[12px]">
                    {social.name}
                  </span>
                  <span className="text-gray-400 text-[11px] font-extralight">
                    {social.handle}
                  </span>
                </div>
              </div>
              <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25">
                <GoArrowUpRight />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
