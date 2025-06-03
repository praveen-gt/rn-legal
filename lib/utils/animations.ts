/**
 * Animation utilities for consistent animations across the website
 */

export type AnimationDirection = "up" | "down" | "left" | "right" | "none";

export type FadeAnimationProps = {
  direction?: AnimationDirection;
  duration?: number;
  delay?: number;
  distance?: number;
};

/**
 * Returns animation properties for framer-motion based on direction
 */
export const getFadeAnimation = ({
  direction = "up",
  duration = 0.6,
  delay = 0,
  distance = 50,
}: FadeAnimationProps) => {
  const initialX = direction === "left" ? -distance : direction === "right" ? distance : 0;
  const initialY = direction === "up" ? distance : direction === "down" ? -distance : 0;

  return {
    initial: {
      opacity: 0,
      x: initialX,
      y: initialY,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      x: initialX,
      y: initialY,
      transition: {
        duration: duration * 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

/**
 * Returns staggered children animation properties for framer-motion
 */
export const getStaggerAnimation = (staggerDelay = 0.1, initialDelay = 0) => {
  return {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: initialDelay,
        staggerChildren: staggerDelay,
      },
    },
  };
};

/**
 * Returns animation properties for framer-motion for individual staggered items
 */
export const getStaggerItemAnimation = (direction: AnimationDirection = "up", distance = 30) => {
  const initialX = direction === "left" ? -distance : direction === "right" ? distance : 0;
  const initialY = direction === "up" ? distance : direction === "down" ? -distance : 0;

  return {
    initial: { opacity: 0, x: initialX, y: initialY },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

/**
 * Returns scroll-triggered animation properties for framer-motion
 */
export const getScrollAnimation = (threshold = 0.1, once = true) => {
  return {
    threshold,
    once,
    margin: "-100px 0px",
  };
};