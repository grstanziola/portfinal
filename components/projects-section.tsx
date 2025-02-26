"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "./project-card"
import { SectionTitle } from "./section-title"
import { cn } from "@/lib/utils"

// Project categories with descriptions
const categories = [
  {
    id: "all",
    label: "All Projects",
    description: "Explore all my projects across different domains",
  },
  {
    id: "data-science",
    label: "Data Science",
    description: "Projects focusing on data analysis and machine learning",
  },
  {
    id: "web-dev",
    label: "Web Development",
    description: "Full-stack web applications and interactive experiences",
  },
  {
    id: "visualization",
    label: "Data Visualization",
    description: "Interactive visualizations and dashboards",
  },
]

// Project data
const projects = [
  {
    id: "1",
    title: "AI-Powered Analytics Dashboard",
    description:
      "An interactive dashboard combining real-time analytics with AI-driven insights for business intelligence.",
    longDescription: `
      Built with modern web technologies and machine learning, this dashboard provides:
      • Real-time data processing and visualization
      • AI-powered trend analysis and predictions
      • Interactive data exploration features
      • Automated reporting and alerts
    `,
    image: "/placeholder.svg?height=600&width=800",
    category: "data-science",
    technologies: ["Python", "React", "TensorFlow", "AWS"],
    status: "Active",
    date: "2024",
    metrics: ["500K+ data points processed daily", "99.9% uptime", "45% reduction in analysis time"],
    links: {
      github: "https://github.com",
      demo: "https://demo.com",
      case_study: "https://case-study.com",
    },
    featured: true,
  },
  {
    id: "2",
    title: "Predictive Market Analysis Tool",
    description: "Machine learning system for market trend prediction and automated trading strategy development.",
    longDescription: `
      Advanced market analysis tool featuring:
      • ML-based price prediction models
      • Automated strategy backtesting
      • Real-time market data integration
      • Risk assessment algorithms
    `,
    image: "/placeholder.svg?height=600&width=800",
    category: "data-science",
    technologies: ["Python", "scikit-learn", "PostgreSQL", "Docker"],
    status: "Completed",
    date: "2023",
    metrics: ["85% prediction accuracy", "1M+ trades analyzed", "30% performance improvement"],
    links: {
      github: "https://github.com",
      demo: "https://demo.com",
    },
    featured: true,
  },
  {
    id: "3",
    title: "Interactive Data Visualization Library",
    description: "A comprehensive library for creating interactive and responsive data visualizations.",
    longDescription: `
      Modern visualization library providing:
      • 20+ customizable chart types
      • Real-time data updates
      • Responsive design
      • Advanced animation system
    `,
    image: "/placeholder.svg?height=600&width=800",
    category: "visualization",
    technologies: ["TypeScript", "D3.js", "React", "Vite"],
    status: "Active",
    date: "2024",
    metrics: ["1000+ GitHub stars", "Used by 500+ developers", "98% satisfaction rate"],
    links: {
      github: "https://github.com",
      docs: "https://docs.com",
    },
    featured: true,
  },
  {
    id: "4",
    title: "Full-Stack Analytics Platform",
    description: "End-to-end analytics platform for processing and visualizing large-scale data.",
    longDescription: `
      Enterprise-grade analytics platform featuring:
      • Real-time data processing
      • Custom dashboard creation
      • Automated reporting
      • Team collaboration tools
    `,
    image: "/placeholder.svg?height=600&width=800",
    category: "web-dev",
    technologies: ["Next.js", "Node.js", "MongoDB", "Redis"],
    status: "Active",
    date: "2024",
    metrics: ["100K+ monthly active users", "5M+ queries processed daily", "Sub-second query response"],
    links: {
      demo: "https://demo.com",
      case_study: "https://case-study.com",
    },
    featured: true,
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(false)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const handleCategoryChange = (categoryId: string) => {
    setIsLoading(true)
    setActiveCategory(categoryId)
    // Simulate loading state
    setTimeout(() => setIsLoading(false), 300)
  }

  const currentCategory = categories.find((cat) => cat.id === activeCategory)

  return (
    <section className="relative py-20">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <SectionTitle>Projects</SectionTitle>
          <p className="text-gray-400 mt-4">
            {currentCategory?.description || "Explore my projects across different domains"}
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-all text-sm relative",
                activeCategory === category.id ? "text-white" : "text-gray-400 hover:text-white",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", isLoading && "opacity-50 pointer-events-none")}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

