import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GridBackground } from "@/components/grid-background"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Analytics } from "@vercel/analytics/react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gabriel Stanziola - Portfolio",
  description: "Computer Scientist & Data Analyst Portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <GridBackground />
          <ScrollProgress />
          {children}
          <ScrollToTop />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'