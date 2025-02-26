"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface TimelineItemProps {
  year: string
  title: string
  description: string
  Icon: LucideIcon
  isActive?: boolean
}

export function TimelineItem({ year, title, description, Icon, isActive }: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-8 pb-8 group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute left-0 top-0 w-px h-full bg-gray-200 group-last:h-0" />
      <div
        className={`absolute left-0 top-0 w-2 h-2 -translate-x-[3px] rounded-full transition-colors duration-300
        ${isActive ? "bg-primary scale-125" : "bg-gray-300"} group-hover:bg-primary`}
      />
      <div className="space-y-2">
        <span className="text-sm text-muted-foreground">{year}</span>
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}

