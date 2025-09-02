"use client";

import { useEffect, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const moveMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    let animationFrame: number;

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.3;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.3;

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
