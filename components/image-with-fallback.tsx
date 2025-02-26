"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallbackSrc?: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
}

export function ImageWithFallback({ src, alt, fallbackSrc = "/placeholder.svg", ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  return <Image src={error ? fallbackSrc : src} alt={alt} onError={() => setError(true)} {...props} />
}

