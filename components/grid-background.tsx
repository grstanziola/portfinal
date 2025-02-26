"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef } from "react"

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const drawGrid = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"
      ctx.lineWidth = 1

      const gridSize = 30
      const offsetX = canvas.width % gridSize
      const offsetY = canvas.height % gridSize

      for (let x = offsetX; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    drawGrid()
    window.addEventListener("resize", drawGrid)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("resize", drawGrid)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-50" />
}

