"use client"
import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ApproachSection } from "@/components/approach-section"
import { PersonalSection } from "@/components/personal-section"
import { ContactSection } from "@/components/contact-section"
import { LoadingSkeleton } from "@/components/loading-skeleton"
import ErrorBoundary from "@/components/error-boundary"
import { useSectionData } from "@/hooks/use-section-data"

export default function Portfolio() {
  const { data, isLoading, error } = useSectionData()

  if (isLoading) {
    return <LoadingSkeleton />
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error Loading Data</h2>
          <p className="text-gray-400">Please try refreshing the page</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return null
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Sidebar />

      <main className="relative ml-[250px]">
        <ErrorBoundary>
          <HeroSection data={data.hero} />

          <div className="px-8 py-16 space-y-32">
            <section id="about" className="scroll-mt-16">
              <AboutSection data={data.about} />
            </section>

            <section id="projects" className="scroll-mt-16">
              <ProjectsSection projects={data.projects} />
            </section>

            <section id="approach" className="scroll-mt-16">
              <ApproachSection data={data.approach} />
            </section>

            <section id="personal" className="scroll-mt-16">
              <PersonalSection items={data.personal} />
            </section>

            <section id="contact" className="scroll-mt-16">
              <ContactSection />
            </section>
          </div>
        </ErrorBoundary>
      </main>
    </div>
  )
}

