'use client'

import { motion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 20,
}: FadeInProps) {
  const getDirectionalVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        }
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 },
        }
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 },
        }
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 },
        }
      case 'none':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={getDirectionalVariants()}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}