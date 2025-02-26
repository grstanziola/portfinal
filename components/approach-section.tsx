"use client"

import { motion } from "framer-motion"
import { Brain, Search, Users } from "lucide-react"

export function ApproachSection() {
  const approaches = [
    {
      title: "Data-Driven Discovery",
      description:
        "Begin with comprehensive data analysis to uncover patterns and insights that drive strategic decision-making.",
      icon: Search,
      gradient: "from-blue-500/10 via-transparent to-purple-500/10",
      steps: ["Data Collection", "Pattern Analysis", "Insight Generation"],
    },
    {
      title: "User-Centric Solutions",
      description:
        "Develop solutions that prioritize user needs while maintaining technical excellence and scalability.",
      icon: Users,
      gradient: "from-orange-500/10 via-transparent to-pink-500/10",
      steps: ["User Research", "Solution Design", "Iterative Testing"],
    },
    {
      title: "Technical Innovation",
      description: "Leverage cutting-edge technologies and methodologies to build efficient and scalable solutions.",
      icon: Brain,
      gradient: "from-emerald-500/10 via-transparent to-cyan-500/10",
      steps: ["Technology Assessment", "Architecture Design", "Implementation"],
    },
  ]

  const methodologies = [
    {
      title: "Analysis Phase",
      items: ["Requirements Gathering", "Data Assessment", "Feasibility Studies", "Stakeholder Interviews"],
    },
    {
      title: "Development Phase",
      items: ["Iterative Development", "Continuous Integration", "Code Reviews", "Performance Optimization"],
    },
    {
      title: "Delivery Phase",
      items: ["Quality Assurance", "User Acceptance Testing", "Documentation", "Deployment"],
    },
  ]

  return (
    <section id="approach" className="relative overflow-hidden">
      <div className="container relative px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            A systematic methodology combining data science and software engineering principles
          </motion.p>
        </motion.div>

        {/* Core Approaches */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-white/5 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors duration-300 border border-white/10">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${approach.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />

                {/* Content */}
                <div className="relative space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <approach.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold">{approach.title}</h3>
                  <p className="text-gray-400">{approach.description}</p>

                  {/* Steps */}
                  <div className="space-y-2 pt-4">
                    {approach.steps.map((step, stepIndex) => (
                      <div key={step} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                          {stepIndex + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methodology Breakdown */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Methodology Breakdown</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <motion.div
                key={methodology.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-gray-200">{methodology.title}</h4>
                <ul className="space-y-2">
                  {methodology.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

