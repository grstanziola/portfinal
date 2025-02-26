"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FilterTabsProps {
  categories: string[]
  activeCategory: string
  onChange: (category: string) => void
}

export function FilterTabs({ categories, activeCategory, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "px-4 py-2 text-sm rounded-full transition-all relative",
            activeCategory === category ? "text-primary" : "text-muted-foreground hover:text-primary",
          )}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-muted rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {category}
        </button>
      ))}
    </div>
  )
}

