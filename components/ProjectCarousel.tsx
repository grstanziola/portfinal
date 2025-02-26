"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  imageUrl: string
  technologies: string[]
  category: "Data Visualization" | "Web Development" | "Machine Learning" | "Data Analysis"
  links: {
    github?: string
    demo?: string
  }
}

interface ProjectCarouselProps {
  projects: Project[]
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    const newPage = (page + newDirection + projects.length) % projects.length
    setPage([newPage, newDirection])
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* Preview of previous project */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-3/4 z-0">
        <div className="relative w-full h-full opacity-40">
          <Image
            src={projects[(page - 1 + projects.length) % projects.length].imageUrl || "/placeholder.svg"}
            alt="Previous project"
            fill
            className="object-cover rounded-r-3xl"
          />
        </div>
      </div>

      {/* Current project */}
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
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          <div className="relative w-1/2 h-3/4 mx-auto">
            <Image
              src={projects[page].imageUrl || "/placeholder.svg"}
              alt={projects[page].title}
              fill
              className="object-cover rounded-3xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 rounded-3xl flex flex-col items-center justify-end text-white pb-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="px-6 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm mb-4"
              >
                {projects[page].category}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-bold mb-4 text-center"
              >
                {projects[page].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg mb-6 max-w-lg text-center text-gray-200"
              >
                {projects[page].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-2 mb-6 px-4"
              >
                {projects[page].technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-sm backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                {projects[page].links.github && (
                  <Link href={projects[page].links.github} target="_blank">
                    <Button
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-sm text-white"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </Link>
                )}
                {projects[page].links.demo && (
                  <Link href={projects[page].links.demo} target="_blank">
                    <Button
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-sm text-white"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Preview of next project */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-3/4 z-0">
        <div className="relative w-full h-full opacity-40">
          <Image
            src={projects[(page + 1) % projects.length].imageUrl || "/placeholder.svg"}
            alt="Next project"
            fill
            className="object-cover rounded-l-3xl"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
        <button
          onClick={() => paginate(-1)}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  )
}

export default ProjectCarousel

