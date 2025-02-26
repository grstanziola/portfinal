"use client"

import { ArrowUp } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "./ui/button"

export function ScrollToTop() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <Button
        variant="outline"
        size="icon"
        className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm hover:bg-background"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </motion.div>
  )
}

