"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StoryChapterProps {
  chapter: number
  title: string
  children: ReactNode
}

export function StoryChapter({ chapter, title, children }: StoryChapterProps) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute -left-20 top-0 flex items-center gap-4 text-muted-foreground"
      >
        <span className="text-sm font-medium">Chapter {chapter}</span>
        <div className="h-[1px] w-12 bg-muted-foreground/50" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold mb-8"
      >
        {title}
      </motion.h2>
      {children}
    </div>
  )
}

