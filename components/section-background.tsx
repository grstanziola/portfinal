"use client"

import type React from "react"

interface SectionBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function SectionBackground({ children, className = "" }: SectionBackgroundProps) {
  return (
    <div className="relative bg-white">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Very subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80" />

      {/* Content */}
      <div className={`relative ${className}`}>{children}</div>
    </div>
  )
}

