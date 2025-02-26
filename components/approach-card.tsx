"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface ApproachCardProps {
  title: string
  children: ReactNode
  delay?: number
  Icon: LucideIcon
  gradient: string
}

export function ApproachCard({ title, children, delay = 0, Icon, gradient }: ApproachCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-black/80 backdrop-blur-sm text-white p-6 rounded-2xl h-full transform transition-all duration-300"
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
      />

      {/* Icon */}
      <div className="relative mb-4">
        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <motion.h3
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.div
          className="text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          {children}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
    </motion.div>
  )
}

