"use client";

import { useEffect, useRef, useState } from "react";

// TODO: Replace these numbers with your real stats
const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 3,  suffix: "+", label: "Years of Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 40;
          const intervalMs = 1500 / steps;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, intervalMs);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={spanRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="w-full py-12 border-y border-neutral-800">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-[#00AAE7]">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div className="text-sm text-black/70 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
