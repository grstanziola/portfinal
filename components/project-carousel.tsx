"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  link: string
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: "2",
    title: "Machine Learning Pipeline",
    description: "Automated ML pipeline for processing and analyzing large-scale data.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: "3",
    title: "Analytics Platform",
    description: "Full-stack analytics platform for business intelligence.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
]

interface ProjectCarouselProps {
  projects?: Project[]
}

export default function ProjectCarousel({ projects: propProjects }: ProjectCarouselProps) {
  const [currentProjects, setCurrentProjects] = useState<Project[]>(defaultProjects)
  const [[page, direction], setPage] = useState([0, 0])

  // Update currentProjects when propProjects changes
  useEffect(() => {
    if (propProjects && propProjects.length > 0) {
      setCurrentProjects(propProjects)
    }
  }, [propProjects])

  const paginate = (newDirection: number) => {
    setPage(([currentPage, _]) => [
      (currentPage + newDirection + currentProjects.length) % currentProjects.length,
      newDirection,
    ])
  }

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

  // Ensure we have valid projects before rendering
  if (!currentProjects || currentProjects.length === 0) {
    return null
  }

  const previousProject = currentProjects[(page - 1 + currentProjects.length) % currentProjects.length]
  const currentProject = currentProjects[page]
  const nextProject = currentProjects[(page + 1) % currentProjects.length]

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-8">
      <div className="flex items-center justify-center w-full gap-4">
        {/* Previous Project Preview */}
        <div className="hidden md:block w-[180px] h-[260px] overflow-hidden">
          <div className="relative w-full h-full opacity-50 transition-opacity duration-300">
            <Image
              src={previousProject.imageUrl || "/placeholder.svg"}
              alt={`Preview of ${previousProject.title}`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Current Project */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
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
            className="relative w-[500px] h-[340px]"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden group">
              <Image
                src={currentProject.imageUrl || "/placeholder.svg"}
                alt={currentProject.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 rounded-3xl flex flex-col items-center justify-center text-white">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs mb-3"
                >
                  {currentProject.title}
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold mb-3 text-center px-6"
                >
                  {currentProject.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm mb-4 max-w-sm text-center text-gray-200 px-6"
                >
                  {currentProject.description}
                </motion.p>
                <Link href={currentProject.link}>
                  <Button variant="outline" className="bg-white hover:bg-white/90 text-black">
                    Explore Project
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Next Project Preview */}
        <div className="hidden md:block w-[180px] h-[260px] overflow-hidden">
          <div className="relative w-full h-full opacity-50 transition-opacity duration-300">
            <Image
              src={nextProject.imageUrl || "/placeholder.svg"}
              alt={`Preview of ${nextProject.title}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => paginate(-1)}
          className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

