"use client"

import { useRef } from "react"

import type React from "react"

import { useEffect } from "react"
import { useInView } from "framer-motion"

interface SectionObserverProps {
  sectionId: string
  onInView: (id: string) => void
  children: React.ReactNode
}

export function SectionObserver({ sectionId, onInView, children }: SectionObserverProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      onInView(sectionId)
    }
  }, [isInView, sectionId, onInView])

  return <div ref={ref}>{children}</div>
}

