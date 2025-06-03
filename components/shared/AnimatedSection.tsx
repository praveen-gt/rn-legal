"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fadeIn" | "slideUp" | "slideIn" | "scale" | "none";
  threshold?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
};

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  animation = "fadeIn",
  threshold = 0.2,
  staggerChildren = false,
  staggerDelay = 0.1,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  // Define animation variants
  const variants: Record<string, Variants> = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    slideIn: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    },
    none: {
      hidden: {},
      visible: {}
    }
  };

  // Define stagger variants for children
  const containerVariants: Variants | undefined = staggerChildren
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }
    : undefined;

  const itemVariants: Variants | undefined = staggerChildren
    ? {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }
    : undefined;

  if (staggerChildren) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
