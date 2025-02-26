"use client"

import { motion } from "framer-motion"

const categories = [
  {
    name: "Programming Languages & Fundamentals",
    items: ["Python", "R", "SQL", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    name: "Front-End Frameworks & Libraries",
    items: ["React", "Next.js"],
  },
  {
    name: "Data Science, Machine Learning & AI",
    items: ["Pandas", "NumPy", "scikit-learn", "TensorFlow", "PyTorch", "ChatGPT (and other AI technologies)"],
  },
  {
    name: "Big Data, Cloud & DevOps",
    items: [
      "Apache Spark",
      "Hadoop",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Google BigQuery",
      "AWS",
      "Google Cloud",
      "Azure",
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Jupyter",
      "VS Code",
      "RStudio",
    ],
  },
]

export function TechStackSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xl font-medium mb-6 text-center">
        Tech Stack
      </motion.h3>

      <div className="bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <h4 className="text-xs font-medium tracking-wider text-primary/90 pb-2 border-b border-primary/10">
                {category.name.toUpperCase()}
              </h4>
              <ul className="space-y-1.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

