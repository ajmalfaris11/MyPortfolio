"use client";

import { useEffect, useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  // initialize with 0, update later in useEffect
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // safe: window only runs here (client)
    pos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // detect if it's a touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const moveMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    let animationFrame: number;

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.5;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.5;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) rotate(-65deg)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (isTouch) return null; // don’t render cursor on touch screens

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 pointer-events-none text-blue-600"
      style={{ width: 24, height: 24 }}
    >
      <FaLocationArrow size={24} />
    </div>
  );
}
