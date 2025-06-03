'use client'

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  animation?: 'fade' | 'slide' | 'scale' | 'none';
}

export default function ScrollReveal({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  once = true,
  animation = 'fade',
}: ScrollRevealProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Observed:', entry);
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    console.log('Component visibility:', isVisible);
    if (isVisible) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isVisible, controls, once]);

  const getVariants = () => {
    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration, delay },
          },
        };
      case 'slide':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay },
          },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration, delay },
          },
        };
      case 'none':
      default:
        return {
          hidden: {},
          visible: {},
        };
    }
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={getVariants()}>
      {children}
    </motion.div>
  );
}
