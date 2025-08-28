"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { GoArrowUpRight } from "react-icons/go";
import { VscCallOutgoing } from "react-icons/vsc";
import { SlLocationPin } from "react-icons/sl";
import { AnimatedDiv } from "./ui/3DanimateDiv";
import { FiMail } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center relative overflow-hidden py-10 bg-transparent">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative z-10 w-full max-w-xl px-6 py-8 text-center bg-transparent">
        {/* Heading */}
        <AnimatedDiv rotateDepth={10} translateDepth={10}>
          <h1 className="text-6xl font-semibold">
            My <span className="text-purple animate-shine">Contact</span>
          </h1>
        </AnimatedDiv>
        <p className="text-gray-300 max-w-xl mx-auto my-8">
          If you're interested in working together, have a project in mind, or
          simply want to connect, reach out through the form below or via the
          contact information provided.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black p-6 rounded-3xl shadow-lg flex flex-col gap-4 border border-blue-700/30"
        >
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className="w-full p-3 rounded-full bg-blue-700/15 text-blue-200/90
                       focus:outline-none focus:ring-1 focus:ring-blue-700"
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full p-3 rounded-full bg-blue-700/15 text-blue-200/90
                       focus:outline-none focus:ring-1 focus:ring-blue-700"
          />
          <textarea
            placeholder="Message"
            rows={4}
            {...register("message", { required: true })}
            className="w-full p-3 rounded-3xl bg-blue-700/15 text-blue-200/90
                       focus:outline-none focus:ring-1 focus:ring-blue-700"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 
             hover:bg-blue-600 text-black font-semibold py-3 px-6 
             rounded-full flex justify-center items-center 
             gap-0 hover:gap-2 transition-all duration-300"
          >
            Submit
            <MdKeyboardDoubleArrowRight className="text-2xl" />
          </button>
        </form>
      </div>
      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className="flex items-center gap-3 rounded-full backdrop-blur-md bg-transparent border border-blue-700/50 p-1 pr-2">
          <span className="flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-700">
            <FiMail />
          </span>
          <div className="flex flex-col mr-10">
            <span className="text-gray-200 text-[12px]">Email address</span>
            <span className="text-gray-400 text-[11px] font-extralight">
              ajmalfaris.me@gmail.com
            </span>
          </div>
          <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25">
            <GoArrowUpRight />
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-full backdrop-blur-md bg-transparent border border-blue-700/50 p-1 pr-2">
          <span className="flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-700">
            <VscCallOutgoing />
          </span>
          <div className="flex flex-col mr-10">
            <span className="text-gray-200 text-[12px]">Contact number</span>
            <span className="text-gray-400 text-[11px] font-extralight">
              +91 755 896 9093
            </span>
          </div>{" "}
          <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25">
            <GoArrowUpRight />
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-full backdrop-blur-md bg-transparent border border-blue-700/50 p-1 pr-2">
          <span className="flex justify-center items-center text-black rounded-full w-10 h-10 bg-blue-700">
            <SlLocationPin />
          </span>
          <div className="flex flex-col mr-10">
            <span className="text-gray-200 text-[12px]">Location</span>
            <span className="text-gray-400 text-[11px] font-extralight">
              Malappuram, Kerala, India
            </span>
          </div>{" "}
          <span className="flex justify-center items-center text-white rounded-full w-8 h-8 bg-blue-700/25">
            <GoArrowUpRight />
          </span>
        </div>
      </div>
    </div>
  );
}
