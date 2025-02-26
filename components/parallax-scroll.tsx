"use client"

import type React from "react"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

interface ParallaxScrollProps {
  children: React.ReactNode
  baseVelocity?: number
}

export function ParallaxScroll({ children, baseVelocity = 1 }: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -300 * baseVelocity])

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

