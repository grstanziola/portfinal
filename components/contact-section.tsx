"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./section-title"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

export function ContactSection() {
  return (
    <div>
      <SectionTitle>Contact</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <Input className="bg-white/5 border-white/10 text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <Input className="bg-white/5 border-white/10 text-white" type="email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <Textarea className="bg-white/5 border-white/10 text-white" rows={4} />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-300">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Location</h4>
            <p className="text-gray-300">Panama City, Panama</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Email</h4>
            <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white">
              contact@example.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

