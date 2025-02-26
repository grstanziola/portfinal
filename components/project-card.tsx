"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, FileText, Activity, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface ProjectLinks {
  github?: string
  demo?: string
  case_study?: string
  docs?: string
}

interface ProjectCardProps {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  category: string
  technologies: string[]
  status: string
  date: string
  metrics: string[]
  links: ProjectLinks
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  longDescription,
  image,
  category,
  technologies,
  status,
  date,
  metrics,
  links,
  featured,
}: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors border border-white/10"
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary-foreground backdrop-blur-sm">
            Featured Project
          </span>
        </div>
      )}

      {/* Project Image */}
      <div className="aspect-video relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm",
              status === "Active" ? "bg-emerald-500/20 text-emerald-300" : "bg-blue-500/20 text-blue-300",
            )}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-primary/80">
            <Activity className="w-4 h-4" />
            <span>{category}</span>
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-400 line-clamp-2">{description}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-2">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-1 h-1 rounded-full bg-primary/60" />
              <span>{metric}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs rounded-md bg-white/10 text-white">
              {tech}
            </span>
          ))}
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-4">
          {links.demo && (
            <Link href={links.demo} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </Link>
          )}
          {links.github && (
            <Link href={links.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </Link>
          )}
          {links.case_study && (
            <Link href={links.case_study} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
                <FileText className="w-4 h-4 mr-2" />
                Case Study
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

