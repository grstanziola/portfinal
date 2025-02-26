"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ContentItem {
  id: string
  type: "image" | "video" | "article" | "news"
  title: string
  description?: string
  url?: string
  imageUrl: string
  date?: string
}

interface ContentCarouselProps {
  items: ContentItem[]
}

export function ContentCarousel({ items }: ContentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + items.length) % items.length)
  }

  const currentItem = items[currentIndex]

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <Image
            src={currentItem.imageUrl || "/placeholder.svg"}
            alt={currentItem.title}
            fill
            className="object-cover"
            priority
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="max-w-4xl w-full px-6 text-white">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                {currentItem.date && <p className="text-sm text-white/70">{currentItem.date}</p>}
                <h3 className="text-4xl md:text-5xl font-bold">{currentItem.title}</h3>
                {currentItem.description && <p className="text-lg text-white/90">{currentItem.description}</p>}
                {currentItem.url && (
                  <Link
                    href={currentItem.url}
                    className="inline-block mt-4 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
                  >
                    {currentItem.type === "article" && "Read Article"}
                    {currentItem.type === "video" && "Watch Video"}
                    {currentItem.type === "news" && "Read More"}
                    {currentItem.type === "image" && "View Full Image"}
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
        <button
          onClick={() => paginate(-1)}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-white w-8" : "bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

