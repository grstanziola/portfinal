"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-3xl font-bold text-white mb-8 ${className}`}
    >
      {children}
    </motion.h2>
  )
}

