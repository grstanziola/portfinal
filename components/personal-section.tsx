"use client"

import { motion } from "framer-motion"
import { PersonalGrid } from "./personal-grid"
import { SectionTitle } from "./section-title"
import { useState } from "react"
import { cn } from "@/lib/utils"

// Personal content categories
const categories = [
  { id: "all", label: "All" },
  { id: "writing", label: "Writing" },
  { id: "speaking", label: "Speaking" },
  { id: "photography", label: "Photography" },
  { id: "achievements", label: "Achievements" },
]

const personalItems = [
  {
    id: "1",
    type: "photography",
    title: "Urban Panama",
    description: "A photographic journey through Panama City's modern architecture and cultural heritage.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "photography",
    date: "March 2024",
    location: "Panama City, Panama",
    tags: ["Architecture", "Urban", "Culture"],
    span: "both",
  },
  {
    id: "2",
    type: "article",
    title: "The Future of Data Science in Latin America",
    description: "Exploring opportunities and challenges in the region's growing data science ecosystem.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "writing",
    date: "February 2024",
    url: "#",
    readTime: "8 min read",
    publication: "Medium",
    tags: ["Data Science", "Latin America", "Technology"],
    span: "row",
  },
  {
    id: "3",
    type: "video",
    title: "AI & Society: A Latin American Perspective",
    description: "Keynote speech at Tech Conference 2024 discussing AI's impact on Latin American societies.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "speaking",
    date: "January 2024",
    url: "#",
    duration: "25:14",
    event: "Tech Conference 2024",
    location: "Virtual",
    tags: ["AI", "Society", "Public Speaking"],
    span: "col",
  },
  {
    id: "4",
    type: "achievement",
    title: "AWS Community Builder",
    description: "Recognized for contributions to cloud computing education in Latin America.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    category: "achievements",
    date: "2024",
    url: "#",
    issuer: "Amazon Web Services",
    tags: ["Cloud Computing", "Community", "Education"],
  },
  {
    id: "5",
    type: "article",
    title: "Building Scalable Data Pipelines",
    description: "Technical guide on designing efficient data pipelines for large-scale applications.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    category: "writing",
    date: "March 2024",
    url: "#",
    readTime: "12 min read",
    publication: "Towards Data Science",
    tags: ["Data Engineering", "Architecture", "Best Practices"],
  },
  {
    id: "6",
    type: "photography",
    title: "Panama Wildlife",
    description: "Capturing the diverse wildlife in Panama's tropical rainforests.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "photography",
    date: "February 2024",
    location: "Soberania National Park",
    tags: ["Wildlife", "Nature", "Conservation"],
    span: "row",
  },
]

export function PersonalSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(false)

  const filteredItems = personalItems.filter((item) => activeCategory === "all" || item.category === activeCategory)

  return (
    <section className="relative py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <SectionTitle>Personal</SectionTitle>
          <p className="text-gray-400 mt-4">
            Exploring the intersection of technology, creativity, and culture through various mediums.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setIsLoading(true)
                setActiveCategory(category.id)
                // Simulate loading state
                setTimeout(() => setIsLoading(false), 300)
              }}
              className={cn(
                "px-4 py-2 rounded-full transition-all text-sm",
                activeCategory === category.id
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white hover:bg-white/10",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(isLoading && "opacity-50 pointer-events-none")}
        >
          <PersonalGrid items={filteredItems} />
        </motion.div>
      </div>
    </section>
  )
}

