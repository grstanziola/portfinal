"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
  words: string[]
  className?: string
  speed?: number
  delay?: number
}

export function TypewriterEffect({ words, className = "", speed = 100, delay = 1500 }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const typeWriter = () => {
      const currentWord = words[currentWordIndex]
      const shouldDelete = isDeleting
      const currentLength = currentText.length

      if (!shouldDelete && currentLength === currentWord.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, delay)
        return
      }

      if (shouldDelete && currentLength === 0) {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        return
      }

      const nextText = shouldDelete
        ? currentWord.substring(0, currentLength - 1)
        : currentWord.substring(0, currentLength + 1)

      setCurrentText(nextText)

      timeout = setTimeout(typeWriter, shouldDelete ? speed / 2 : speed)
    }

    timeout = setTimeout(typeWriter, speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay])

  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`inline-block ${className}`}>
      {currentText}
      <span className="ml-1 animate-blink">|</span>
    </motion.span>
  )
}

