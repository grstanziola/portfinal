"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface SectionFlipProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "left" | "right"
}

export function SectionFlip({ children, className = "", delay = 0, direction = "left" }: SectionFlipProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    hidden: {
      opacity: 0,
      rotateY: direction === "left" ? -90 : 90,
      transformPerspective: 1000,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      transformPerspective: 1000,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom ease curve for smooth flip
      },
    },
  }

  return (
    <div ref={ref} className={`${className} perspective-1000`}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

