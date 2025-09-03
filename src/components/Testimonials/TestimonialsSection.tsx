"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteCards } from "@/components/ui/animations";
import { FlowCards } from "@/components/ui/animations";
import { Animate3DDiv } from "@/components/ui/animations";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-10 z-10 flex flex-col gap-10 justify-center items-center">
      <Animate3DDiv rotateDepth={10} translateDepth={10}>
        <h1 className="text-4xl sm:text-6xl font-semibold text-center">
          What <span className="text-purple animate-shine">People Say</span>
        </h1>
      </Animate3DDiv>
      <div className="flex flex-col items-center ">
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16">
        <FlowCards items={companies} direction="left" speed="slow" />
      </div>
    </section>
  );
};

export default Testimonials;
