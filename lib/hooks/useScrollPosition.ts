"use client";

import { useState, useEffect } from "react";

type ScrollPosition = {
  x: number;
  y: number;
  direction: "up" | "down" | "none";
  isScrolled: boolean;
};

/**
 * Custom hook to track scroll position and direction
 * 
 * @param threshold - Pixel threshold to consider page as scrolled
 * @returns ScrollPosition object containing x, y coordinates, direction and isScrolled flag
 */
export function useScrollPosition(threshold = 10): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: "none",
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      const direction = currentScrollY > lastScrollY ? "down" : 
                        currentScrollY < lastScrollY ? "up" : "none";
      
      setScrollPosition({
        x: currentScrollX,
        y: currentScrollY,
        direction: direction,
        isScrolled: currentScrollY > threshold,
      });
      
      lastScrollY = currentScrollY;
    };

    // Set initial position
    updateScrollPosition();

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, [threshold]);

  return scrollPosition;
}