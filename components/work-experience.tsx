"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./section-title"

export function WorkExperience() {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Tech Company",
      period: "2023 - Present",
      description: "Leading data analysis projects and implementing machine learning solutions.",
      technologies: ["Python", "TensorFlow", "AWS"],
    },
    {
      title: "Data Analyst",
      company: "Analytics Firm",
      period: "2021 - 2023",
      description: "Developed data visualization dashboards and performed statistical analysis.",
      technologies: ["R", "SQL", "Tableau"],
    },
    // Add more experiences as needed
  ]

  return (
    <div>
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-12 mt-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 border-l border-white/10"
          >
            <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-white/20" />
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">{experience.title}</h3>
              <div className="flex items-center gap-2 text-gray-400">
                <span>{experience.company}</span>
                <span>•</span>
                <span>{experience.period}</span>
              </div>
              <p className="text-gray-300">{experience.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm bg-white/10 text-white rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

