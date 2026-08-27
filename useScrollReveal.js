import { useEffect, useRef } from "react";

/**
 * Adds the "reveal" class treatment: element fades/slides in once it enters the viewport.
 * Usage: const ref = useScrollReveal(); <div ref={ref} className="reveal">...</div>
 */
export function useScrollReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("is-visible");
        observer.unobserve(node);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
