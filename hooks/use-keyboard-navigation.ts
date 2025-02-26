"use client"

import { useEffect } from "react"

export function useKeyboardNavigation(sections: string[]) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault()

        const currentSection = sections.find((section) => window.location.hash === `#${section}`) || sections[0]

        const currentIndex = sections.indexOf(currentSection)
        const nextIndex =
          e.key === "ArrowDown" ? Math.min(currentIndex + 1, sections.length - 1) : Math.max(currentIndex - 1, 0)

        const nextSection = sections[nextIndex]
        document.querySelector(`#${nextSection}`)?.scrollIntoView({ behavior: "smooth" })
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [sections])
}

