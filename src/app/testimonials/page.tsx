"use client";

import CustomCursor from "@/components/Common/CustomCursor";
import { SparklesCore } from "@/components/ui/effects/sparkles";
import Navbar from "@/components/Navbar/Navbar";
import { FaQuoteRight } from "react-icons/fa";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Leslie Alexander",
      role: "CEO, CodeCraft Software",
      rating: 5,
      text:
        "Working with Aj was a game changer — his ability to ship scalable, high-performing solutions saved us months of dev time.",
      image: "/peopleProfiles/profile1.jpg",
    },
    {
      name: "Dianne Russell",
      role: "Founder, EventEase",
      rating: 5,
      text:
        "His frontend and backend expertise gave our app a seamless user experience. Clients love how smooth everything feels.",
      image: "/peopleProfiles/profile2.jpg",
    },
    {
      name: "Kathryn Murphy",
      role: "CTO, BrewHouse Coffee",
      rating: 5,
      text:
        "From UI design to backend APIs, everything was delivered with precision. Couldn’t have asked for a better partner.",
      image: "/peopleProfiles/profile3.jpg",
    },
    {
      name: "Robert Fox",
      role: "CEO, PetPal",
      rating: 5,
      text:
        "Aj built our MVP in record time — and it’s still running flawlessly today. True full-stack mastery.",
      image: "/peopleProfiles/profile4.jpg",
    },
    {
      name: "Sophia Anderson",
      role: "Founder, Bloomify",
      rating: 5,
      text:
        "He’s not just a developer, he’s a problem solver. Every challenge we faced, he turned into a growth opportunity.",
      image: "/peopleProfiles/profile5.jpg",
    },
    {
      name: "Olivia Miller",
      role: "Owner, Sparkle Jewelry",
      rating: 5,
      text:
        "The ecommerce system he created for us is beautiful, functional, and built for scale. Sales doubled in 3 months.",
      image: "/peopleProfiles/profile6.jpg",
    },
    {
      name: "Evelyn Clark",
      role: "CEO, Learnify",
      rating: 5,
      text:
        "Aj has an incredible eye for design systems. Our learning platform is now smoother, faster, and future-proof.",
      image: "/peopleProfiles/profile7.jpg",
    },
    {
      name: "Ava Wilson",
      role: "Founder, StyleHub",
      rating: 5,
      text:
        "His ability to merge creativity with code blew us away. Our fashion app is not only stylish but super reliable.",
      image: "/peopleProfiles/profile8.jpg",
    },
  ];

  return (
    <main className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <CustomCursor />
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles-testimonials"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#2563eb"
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 relative z-10">
        <h1 className="text-5xl font-extrabold">Testimonials</h1>
        <p className="mt-2 text-blue-600">Home / Testimonials</p>
      </section>

      {/* Ribbon */}
      <div className="w-full bg-blue-600/10 relative z-10">
        <div className="max-w-6xl mx-auto py-3 overflow-hidden">
          <div className="w-full bg-blue-600 text-black font-semibold py-2 inline-flex gap-8 justify-center items-center text-lg">
            <span>Web Design</span> <BiSolidQuoteSingleRight />
            <span>App Development</span> <BiSolidQuoteSingleRight />
            <span>Dashboards</span> <BiSolidQuoteSingleRight />
            <span>Wireframes</span> <BiSolidQuoteSingleRight />
            <span>UI/UX</span> <BiSolidQuoteSingleRight />
            <span>APIs</span>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <section className="text-center py-16 relative z-10">
        <span className="text-sm uppercase tracking-wide bg-blue-600 px-4 py-1 rounded-md">
          Client Testimonials
        </span>
        <h2 className="text-4xl font-bold mt-6">
          Testimonials that <br />
          <span className="text-blue-600">Speak to My Results</span>
        </h2>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className="relative bg-zinc-900 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] border border-blue-600/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Neon strip */}
              <div className="absolute -left-1.5 top-6 h-16 w-1.5 rounded-l-xl bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />

              {/* Card Header */}
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover brightness-75"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{t.name}</h3>
                  <p className="text-xs text-gray-400">{t.role}</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-blue-600 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <span className="p-3 rounded-full bg-slate-800/50">
                  <FaQuoteRight className="text-blue-600" />
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                {t.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
        <p className="text-sm text-blue-600">Contact Me</p>
        <h2 className="text-3xl font-bold">
          Let’s Create an{" "}
          <span className="text-blue-600">Amazing Project Together!</span>
        </h2>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
          Have an idea or product problem? I’ll help you design, build, and
          ship it faster with less risk.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <span className="inline-block px-6 py-3 bg-blue-600 text-black font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all">
              Go to Contact Page
            </span>
          </Link>
          <button className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-600 hover:text-black transition-all">
            Contact Me
          </button>
        </div>
      </section>

      <Footer/>
    </main>
  );
}
