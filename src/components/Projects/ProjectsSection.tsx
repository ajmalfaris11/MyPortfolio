"use client";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { GrProjects } from "react-icons/gr";


import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";                // core styles
import "swiper/css/pagination";     // pagination styles
import "swiper/css/navigation";     // navigation styles
import "swiper/css/effect-coverflow"; // effect styles


import { projects } from "@/data";
import { PinContainer } from "@/components/ui/layouts";
import { Animate3DDiv } from "@/components/ui/animations";

const Projects = () => {
  return (
    <div className="flex relative justify-center items-center flex-col z-20 sm:p-5 my-10">
      {/* Heading */}
      <Animate3DDiv rotateDepth={10} translateDepth={10}>
        <h1 className="text-5xl sm:text-6xl font-semibold text-center">
          My <span className="text-purple animate-shine">Projects</span>
        </h1>
      </Animate3DDiv>

      {/* ---- MOBILE SWIPER ---- */}
      <div className="w-full sm:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          freeMode={true}
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id} className="pb-16">
              <div className="h-[25rem] flex items-center justify-center">
                <PinContainer title={item.link} href={item.link}>
                  <div className="relative flex items-center justify-center w-[90vw] overflow-hidden h-[20vh] mb-10 rounded-3xl bg-blue-700 bg-gradient-to-t from-blue-700/38 to-black">
                    <div className="relative w-full overflow-hidden h-full">
                      <img src="/projectThumb/bg.png" alt="bgimg" />
                      <img
                        src={item.img}
                        alt="cover"
                        className="z-10 absolute -bottom-16"
                      />
                    </div>
                  </div>

                  <h1 className="font-bold text-lg line-clamp-1">{item.title}</h1>
                  <p className="text-sm font-light line-clamp-2 text-blue-200/80 my-2">
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-5">
                    {/* Icons */}
                    <div className="grid grid-cols-5 items-center gap-x-2">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="bg-blue-900/50 w-8 h-8 flex justify-center items-center"
                          style={{
                            clipPath:
                              "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center gap-2 mr-2">
                      <p className="flex text-sm text-purple">Check Live Site</p>
                      <FaLocationArrow className="text-xl text-blue-500" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            </SwiperSlide>
          ))}

          {/* Extra slide: "More Projects" button */}
          <SwiperSlide>
            <div className="h-[25rem] flex items-center justify-center">
              <button className="flex flex-col justify-center items-center w-full h-full rounded-3xl">
                <span className="rotate-90 border-1 px-8 py-6 rounded-full text-center text-blue-500 font-bold text-xl animate-pulse whitespace-nowrap flex gap-2 justify-center items-center">
                  <GrProjects className="text-xl" /> VIEW ALL MY PROJECTS{" "}
                  <IoIosArrowForward className="text-3xl -rotate-90" />
                </span>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* ---- DESKTOP GRID ---- */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 pb-10 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[28rem] h-[25rem] flex items-center justify-center"
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[28vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 rounded-3xl bg-blue-700 bg-gradient-to-t from-blue-700/38 to-black">
                <div className="relative w-full overflow-hidden h-full">
                  <img src="/projectThumb/bg.png" alt="bgimg" />
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute -bottom-16"
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-xl xl:text-2xl md:text-lg text-base line-clamp-1">
                {item.title}
              </h1>

              <p className="lg:text-md xl:text-xl lg:font-normal font-light text-sm line-clamp-2 text-blue-200/80 my-2">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="grid grid-cols-5 items-center gap-x-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="bg-blue-900/50 w-8 h-8 flex justify-center items-center"
                      style={{
                        clipPath:
                          "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center gap-2 mr-2">
                  <p className="flex lg:text-md md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="text-xl text-blue-500" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {/* ---- DESKTOP "More Projects" button ---- */}
      <div className="w-[100vw] h-[200px] absolute z-50 -bottom-5 bg-gradient-to-t from-transparent via-blue-700/40 to-transparent justify-center items-center hidden sm:flex">
        <Link href="/projects">
          <button className="relative inline-flex h-12 xl:h-14 overflow-hidden rounded-full p-[1px] focus:outline-none hover:text-blue-500 hover:animate-pulse">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000ff_0%,#fff_50%,#0000ff_100%)]" />
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-black px-4 pr-3 py-1 text-sm font-medium backdrop-blur-3xl gap-2 xl:gap-4 xl:hover:gap-8 hover:gap-6 transform duration-300 transition-all ease-in-out">
              Check Out More Projects <IoIosArrowForward className="text-2xl" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
