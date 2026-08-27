import { useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

/** Animates a number counting up from 0 once its ref scrolls into view. */
export function useCountUp(target, duration = 1600) {
  const ref = useScrollReveal({ threshold: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let raf;
    let started = false;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.floor(eased * target));
          if (progress < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.4 });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration, ref]);

  return [ref, value];
}
