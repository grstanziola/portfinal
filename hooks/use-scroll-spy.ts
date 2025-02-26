"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(selectors: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const elements = selectors.map((selector) => document.querySelector(selector))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: `-${offset}px 0px -${offset}px 0px`,
      },
    )

    elements.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [selectors, offset])

  return activeId
}

