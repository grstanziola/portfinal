import { NextResponse } from "next/server"
import type { SectionData } from "@/types"

export async function GET() {
  try {
    // This is your data structure. In a real application, this would typically come from a database
    const data: SectionData = {
      hero: {
        title: "Creative Data Analyst & Computer Scientist",
        subtitle: "¡Hola! I'm from Panama 🇵🇦",
        description: "Transforming complex data into meaningful insights through creative analysis and visualization.",
      },
      about: {
        quickFacts: [
          {
            title: "Who",
            description: "Computer Scientist specializing in creative data analysis and visualization",
          },
          {
            title: "What",
            description: "Transforming data into actionable insights through innovative analysis techniques",
          },
          {
            title: "Where",
            description: "Available Worldwide",
          },
        ],
      },
      projects: [
        {
          id: "1",
          title: "AI-Powered Analytics Dashboard",
          description: "An interactive dashboard combining real-time analytics with AI-driven insights.",
          longDescription:
            "Built with modern web technologies and machine learning, this dashboard provides real-time data processing and visualization.",
          image: "/placeholder.svg?height=600&width=800",
          category: "Data Science",
          technologies: ["Python", "React", "TensorFlow", "AWS"],
          status: "Active",
          date: "2024",
          metrics: ["500K+ data points processed daily", "99.9% uptime"],
          links: {
            github: "https://github.com",
            demo: "https://demo.com",
          },
          featured: true,
        },
        // Add more projects as needed
      ],
      approach: {
        cards: [
          {
            title: "Data-Driven Discovery",
            description: "Begin with comprehensive data analysis",
            icon: "Search",
            gradient: "from-blue-500/10 via-transparent to-purple-500/10",
            steps: ["Data Collection", "Pattern Analysis", "Insight Generation"],
          },
          // Add more cards as needed
        ],
        methodologies: [
          {
            title: "Analysis Phase",
            items: ["Requirements Gathering", "Data Assessment", "Feasibility Studies"],
          },
          // Add more methodologies as needed
        ],
      },
      personal: [
        {
          id: "1",
          type: "article",
          title: "The Future of Data Science",
          description: "Exploring the evolving landscape of data science",
          imageUrl: "/placeholder.svg?height=400&width=600",
          category: "writing",
          date: "2024-02-23",
          tags: ["Data Science", "AI", "Future"],
          readTime: "5 min read",
          span: "row",
        },
        // Add more personal items as needed
      ],
      techStack: {
        categories: [
          {
            name: "Programming Languages",
            items: ["Python", "JavaScript", "TypeScript", "R"],
          },
          // Add more categories as needed
        ],
      },
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in sections API:", error)
    return NextResponse.error()
  }
}

