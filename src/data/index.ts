export * from './grid';

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 6,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];


export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was seamless. He stayed professional, communicated clearly, and delivered exactly what we envisioned without delay or drama.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    profile: "/profile.svg",
  },
  {
    quote:
      "Adrian brings genuine energy to every project. His work ethic and quick turnarounds make him a partner you can count on from day one.",
    name: "Sarah Lee",
    title: "Founder of BrightWave Digital",
    profile: "/profile.svg",
  },
  {
    quote:
      "He doesn’t just code, he solves problems. Adrian approaches each challenge thoughtfully and delivers clean results that actually help businesses grow.",
    name: "David Kim",
    title: "CTO at NovaLabs",
    profile: "/profile.svg",
  },
  {
    quote:
      "Adrian translated our scattered ideas into a polished product. He’s focused, responsive, and easy to work with on tight timelines.",
    name: "Emily Carter",
    title: "Product Manager at CloudCore",
    profile: "/profile.svg",
  },
  {
    quote:
      "Smart, reliable, and detail-oriented. Adrian understands both the technical and strategic sides of building a modern digital presence.",
    name: "Raj Patel",
    title: "CEO of QuantumReach",
    profile: "/profile.svg",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Freelance Developer",
    desc: "Delivered end-to-end web solutions for multiple clients, from requirements gathering to deployment, ensuring scalability and performance.",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Lead Developer – Full-Stack",
    desc: "Directed architecture, development, and integration of complex full-stack applications using modern frameworks and cloud services.",
    className: "md:col-span-2",
  },
  {
    id: 3,
    title: "SaaS Product Developer",
    desc: "Designed and built SaaS platforms with multi-tenant architectures, secure APIs, and responsive UIs for real-world business needs.",
    className: "md:col-span-2",
  },
  {
    id: 4,
    title: "Web Solutions Engineer",
    desc: "Created and optimized dozens of high-quality websites, focusing on performance, clean UI/UX, and maintainable codebases.",
    className: "md:col-span-2",
  },
];


import { RiPokerClubsFill, RiPokerHeartsFill, RiPokerDiamondsFill, RiPokerSpadesFill } from "react-icons/ri";
import { IconType } from "react-icons";

interface ApproachStep {
  title: string;
  phase: string;
  description: string;
  bg: string;
  colors?: number[][];
  value: string;
  symbol: string | IconType; // either string or component
}

export const ApproachSteps: ApproachStep[] = [
  {
    title: "Research & Analysis",
    phase: "Step 1",
    description: "We dive deep into your market and competitors to understand the landscape.",
    bg: "bg-blue-500",
    colors: undefined,
    value: "1",
    symbol: RiPokerClubsFill, // component, not JSX
  },
  {
    title: "UI/UX Design",
    phase: "Step 2",
    description: "We craft intuitive and visually stunning user interfaces tailored to your audience.",
    bg: "bg-blue-600",
    colors: [
      [255, 166, 158],
      [221, 255, 247]
    ],
    value: "2",
    symbol: RiPokerDiamondsFill,
  },
  {
    title: "Development",
    phase: "Step 3",
    description: "Our engineers turn designs into fast, scalable, and maintainable code.",
    bg: "bg-blue-700",
    colors: [[125, 211, 252]],
    value: "3",
    symbol: RiPokerSpadesFill,
  },
  {
    title: "Launch & Support",
    phase: "Step 4",
    description: "We launch your product and provide ongoing maintenance and improvements.",
    bg: "bg-blue-800",
    colors: [[180, 200, 255]],
    value: "4",
    symbol: RiPokerHeartsFill,
  }
];
