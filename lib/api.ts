import type { SectionData } from "@/types"

export async function fetchSectionData(): Promise<SectionData> {
  try {
    const response = await fetch("/api/sections")
    if (!response.ok) {
      throw new Error("Failed to fetch section data")
    }
    return response.json()
  } catch (error) {
    console.error("Error fetching section data:", error)
    throw error
  }
}

