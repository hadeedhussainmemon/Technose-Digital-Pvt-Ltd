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
  const wasInView = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const startAnimation = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      const steps = 40;
      const intervalMs = 1500 / steps;
      const increment = target / steps;
      let current = 0;

      setCount(0);

      timerRef.current = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        } else {
          setCount(Math.floor(current));
        }
      }, intervalMs);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasInView.current) {
          wasInView.current = true;
          startAnimation();
        }

        if (!entry.isIntersecting) {
          wasInView.current = false;
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
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
            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-emerald-400">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div className="text-sm text-neutral-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
