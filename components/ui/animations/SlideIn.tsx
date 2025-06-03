"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type SlideInProps = {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
  // threshold?: number;
};

const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  distance = 50,
  once = true,
  // threshold = 0.2,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  // Define the direction-specific initial and animate properties
  const initialProps = {
    left: { x: -distance, opacity: 0 },
    right: { x: distance, opacity: 0 },
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
  };

  const animateProps = {
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialProps[direction]}
      animate={isInView ? animateProps[direction] : initialProps[direction]}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;