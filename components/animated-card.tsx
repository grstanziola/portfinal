"use client"

import type React from "react"

import { motion, useMotionTemplate, useSpring } from "framer-motion"
import type { MouseEvent } from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 })

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const maskImage = useMotionTemplate`radial-gradient(
    240px at ${mouseX}px ${mouseY}px,
    white,
    transparent
  )`

  const style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div
      onMouseMove={onMouseMove}
      className={`overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group ${className}`}
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition-all duration-500"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition-all duration-500"
          style={style}
        />
      </div>

      {children}
    </div>
  )
}

