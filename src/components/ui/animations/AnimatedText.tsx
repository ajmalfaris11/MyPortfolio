"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

const defaultAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

type AnimatedTextProps = {
  text: string[];
  el?: React.ElementType<{ className?: string; children?: React.ReactNode }>;
  className?: string;
  repeatDelay?: number;
  animation?: Variants;
};

function AnimatedText({
  text,
  el: Wrapper = "p",
  className,
  repeatDelay = 3000,
  animation = defaultAnimation,
}: AnimatedTextProps) {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false); // pause on touch
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (paused) return; // skip animation when paused
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      controls.start("visible");
      timeout = setTimeout(async () => {
        await controls.start("hidden");
        setIndex((prev) => (prev + 1) % text.length);
        controls.start("visible");
      }, repeatDelay);
    };

    animateText();
    return () => clearTimeout(timeout);
  }, [controls, repeatDelay, index, text.length, paused]);

  const currentText = text[index];

  return (
    <Wrapper
      className={className}
      onTouchStart={() => setPaused(true)}   // pause when finger down
      onTouchEnd={() => setPaused(false)}   // resume when released
    >
      <span className="sr-only">{currentText}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
        aria-hidden
      >
        {currentText.split(" ").map((word, wi) => (
          <span className="inline-block" key={`${word}-${wi}`}>
            {word.split("").map((char, ci) => (
              <motion.span
                key={`${char}-${ci}`}
                className="inline-block"
                variants={animation}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}

export default AnimatedText;
