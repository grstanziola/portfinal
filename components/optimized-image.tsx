"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends React.ComponentProps<typeof Image> {
  fallback?: string
}

export function OptimizedImage({ className, fallback = "/placeholder.svg", ...props }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <Image
      {...props}
      src={error ? fallback : props.src}
      className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
      onLoadingComplete={() => setIsLoading(false)}
      onError={() => {
        setError(true)
        setIsLoading(false)
      }}
      loading="lazy"
      quality={90}
    />
  )
}

