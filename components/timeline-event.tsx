"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface TimelineEventProps {
  date: string
  title: string
  description: string
  icon: LucideIcon
  isActive?: boolean
}

export function TimelineEvent({ date, title, description, icon: Icon, isActive }: TimelineEventProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative pl-8 pb-8 group cursor-pointer ${isActive ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
    >
      {/* Vertical line */}
      <div className="absolute left-0 top-0 w-px h-full bg-gray-200 group-last:h-0" />

      {/* Dot */}
      <div
        className={`absolute left-0 top-0 w-2 h-2 -translate-x-[3px] rounded-full transition-all duration-300
          ${isActive ? "bg-primary scale-125" : "bg-gray-300"} group-hover:bg-primary group-hover:scale-125`}
      />

      {/* Content */}
      <div className="space-y-2">
        <span className="text-sm text-primary/80">{date}</span>
        <div className="flex items-center gap-2">
          <Icon
            className={`w-5 h-5 ${isActive ? "text-primary" : "text-gray-400"} group-hover:text-primary transition-colors`}
          />
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">{title}</h3>
        </div>
        <p className="text-gray-600 group-hover:text-gray-500 transition-colors">{description}</p>
      </div>
    </motion.div>
  )
}

