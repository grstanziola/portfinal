export interface SectionData {
  hero: {
    title: string
    subtitle: string
    description: string
  }
  about: {
    quickFacts: {
      title: string
      description: string
    }[]
  }
  projects: {
    id: string
    title: string
    description: string
    longDescription: string
    image: string
    category: string
    technologies: string[]
    status: string
    date: string
    metrics: string[]
    links: {
      github?: string
      demo?: string
      case_study?: string
    }
    featured?: boolean
  }[]
  approach: {
    cards: {
      title: string
      description: string
      icon: string
      gradient: string
      steps: string[]
    }[]
    methodologies: {
      title: string
      items: string[]
    }[]
  }
  personal: {
    id: string
    type: string
    title: string
    description: string
    imageUrl: string
    category: string
    date: string
    tags: string[]
    url?: string
    readTime?: string
    duration?: string
    location?: string
    event?: string
    publication?: string
    issuer?: string
    span?: "row" | "col" | "both"
  }[]
  techStack: {
    categories: {
      name: string
      items: string[]
    }[]
  }
}

