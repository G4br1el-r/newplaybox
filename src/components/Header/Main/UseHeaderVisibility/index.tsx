import { useState, useEffect, useRef } from "react";

export function useScrollVisibility(threshold = 50) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);

      if (currentScrollY > lastScrollY.current && currentScrollY > threshold) {
        setIsVisible(false);
      } else if (
        currentScrollY < lastScrollY.current ||
        currentScrollY <= threshold
      ) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isVisible, isScrolled };
}
