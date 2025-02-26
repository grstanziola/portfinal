"use client"

import { useState, useEffect } from "react"
import type { SectionData } from "@/types"
import { fetchSectionData } from "@/lib/api"

export function useSectionData() {
  const [data, setData] = useState<SectionData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true)
        const sectionData = await fetchSectionData()
        setData(sectionData)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch data"))
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  return { data, isLoading, error }
}

