"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "approach", label: "Approach" },
  { id: "personal", label: "Personal" },
  { id: "contact", label: "Contact" },
]

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/grstanziola",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gabriel-stanziola-862722187?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bw0jfA73dQoCjNKq14GZfgA%3D%3D",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:gabrielstanziola4@gmail.com",
    icon: Mail,
  },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(({ id }) => document.getElementById(id))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section) => {
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
    }
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-[250px] bg-black border-r border-white/10 p-8">
      <div className="flex flex-col h-full">
        <Link href="/" className="block mb-12">
          <h1 className="text-2xl font-bold">Gabriel Stanziola</h1>
          <p className="text-sm text-gray-400 mt-1">Data Scientist & Developer</p>
        </Link>

        <nav className="space-y-2 flex-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                "flex items-center px-4 py-2 rounded-lg transition-colors relative",
                activeSection === item.id
                  ? "text-white bg-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/10">
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

