"use client"

import { motion } from "framer-motion"
import PersonalGrid from "@/components/personal-grid"

{
  /* Personal Section */
}
;<section id="personal" className="container mx-auto px-4 py-20">
  <div className="max-w-[100rem] mx-auto">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold mb-12"
    >
      Personal
    </motion.h2>
    <PersonalGrid
      items={[
        {
          id: "1",
          type: "image",
          title: "Nature Photography",
          description: "Capturing the beauty of natural landscapes and moments in time.",
          imageUrl: "/placeholder.svg?height=400&width=600",
          span: "both",
        },
        {
          id: "2",
          type: "article",
          title: "Data Visualization Techniques",
          description: "Exploring modern approaches to presenting complex data in intuitive ways.",
          imageUrl: "/placeholder.svg?height=400&width=600",
          date: "February 15, 2024",
          url: "#",
          span: "row",
        },
        {
          id: "3",
          type: "video",
          title: "Tech Talk: AI & Future",
          description: "Watch my presentation on emerging AI trends and their impact on technology.",
          imageUrl: "/placeholder.svg?height=400&width=300",
          url: "#",
          span: "col",
        },
        {
          id: "4",
          type: "news",
          title: "Featured Interview",
          description: "Discussing data science and development approaches in Tech Magazine.",
          imageUrl: "/placeholder.svg?height=200&width=300",
          date: "January 28, 2024",
          url: "#",
        },
        {
          id: "5",
          type: "image",
          title: "Creative Coding",
          description: "Exploring the intersection of art and technology through creative coding projects.",
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
      ]}
    />
  </div>
</section>

