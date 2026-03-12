"use client";
import { useInView } from "@/hooks/useInView";

export function SlideIn({ children, from = "left", delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  const x = from === "left" ? "-50px" : "50px";
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : `translateX(${x})`,
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
