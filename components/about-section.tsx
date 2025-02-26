"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./section-title"

export function AboutSection() {
  return (
    <div>
      <SectionTitle>About</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-gray-300 leading-relaxed">
            Hello, I'm Gabriel Stanziola, a dedicated data scientist and developer from Panama. With a passion for
            transforming complex challenges into actionable insights, I specialize in leveraging data to drive informed
            decision-making and create exceptional user experiences.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My expertise encompasses data analytics, web development, and cloud technologies, allowing me to approach
            projects with a comprehensive perspective. I am proficient in various programming languages and continuously
            seek opportunities to harness data insights for strategic growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Location", value: "Worldwide" },
              { label: "Experience", value: "1.5+ Years" },
              { label: "Education", value: "Computer Science" },
              { label: "Specialization", value: "Data Science" },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-white/5 rounded-lg">
                <div className="text-sm text-gray-400">{item.label}</div>
                <div className="text-white font-medium mt-1">{item.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

