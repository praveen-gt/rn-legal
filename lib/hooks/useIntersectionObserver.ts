"use client";

import { useEffect, useState, useRef, RefObject } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  freezeOnceVisible?: boolean;
}

/**
 * Custom hook for detecting when an element enters the viewport
 * 
 * @param elementRef - Reference to the DOM element to observe
 * @param options - IntersectionObserver options
 * @returns isIntersecting - Whether the element is currently in view
 */
export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0px",
    freezeOnceVisible = false,
  }: IntersectionObserverOptions = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  
  const frozen = useRef(false);

  useEffect(() => {
    const element = elementRef?.current;
    
    if (!element || (freezeOnceVisible && frozen.current)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        setIsIntersecting(isElementIntersecting);
        
        if (freezeOnceVisible && isElementIntersecting) {
          frozen.current = true;
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible]);

  return isIntersecting;
}