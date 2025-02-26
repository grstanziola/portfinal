"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, ExternalLink, MapPin, Play, FileText, Award, Camera, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface ContentItem {
  id: string
  type: string
  title: string
  description: string
  imageUrl: string
  category: string
  date: string
  url?: string
  readTime?: string
  duration?: string
  location?: string
  event?: string
  publication?: string
  issuer?: string
  tags: string[]
  span?: "row" | "col" | "both"
}

interface PersonalGridProps {
  items: ContentItem[]
}

export function PersonalGrid({ items }: PersonalGridProps) {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="w-4 h-4" />
      case "article":
        return <FileText className="w-4 h-4" />
      case "achievement":
        return <Award className="w-4 h-4" />
      case "photography":
        return <Camera className="w-4 h-4" />
      default:
        return <ExternalLink className="w-4 h-4" />
    }
  }

  const getItemMetadata = (item: ContentItem) => {
    const metadata = []

    if (item.readTime) {
      metadata.push(
        <div key="readTime" className="flex items-center gap-1 text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{item.readTime}</span>
        </div>,
      )
    }

    if (item.duration) {
      metadata.push(
        <div key="duration" className="flex items-center gap-1 text-gray-400">
          <Play className="w-4 h-4" />
          <span>{item.duration}</span>
        </div>,
      )
    }

    if (item.location) {
      metadata.push(
        <div key="location" className="flex items-center gap-1 text-gray-400">
          <MapPin className="w-4 h-4" />
          <span>{item.location}</span>
        </div>,
      )
    }

    if (item.publication || item.event || item.issuer) {
      metadata.push(
        <div key="source" className="flex items-center gap-1 text-gray-400">
          <Building className="w-4 h-4" />
          <span>{item.publication || item.event || item.issuer}</span>
        </div>,
      )
    }

    return metadata
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "relative rounded-xl overflow-hidden cursor-pointer group",
                item.span === "row" && "md:col-span-2",
                item.span === "col" && "md:row-span-2",
                item.span === "both" && "md:col-span-2 md:row-span-2",
              )}
              onClick={() => setSelectedItem(item)}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end">
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    {getItemMetadata(item)[0]} {/* Show first metadata item */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black text-white">
          {selectedItem && (
            <div className="relative">
              {/* Header Image */}
              <div className="relative h-[50vh]">
                <Image
                  src={selectedItem.imageUrl || "/placeholder.svg"}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 backdrop-blur-sm text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h2 className="text-3xl font-bold mb-4">{selectedItem.title}</h2>
                <p className="text-gray-300 mb-6">{selectedItem.description}</p>

                {/* Metadata */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-1 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedItem.date}</span>
                  </div>
                  {getItemMetadata(selectedItem)}
                </div>

                {/* Action Button */}
                {selectedItem.url && (
                  <Link href={selectedItem.url}>
                    <Button
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20 border-white/10 backdrop-blur-sm"
                    >
                      {getTypeIcon(selectedItem.type)}
                      <span className="ml-2">
                        {selectedItem.type === "video" && "Watch Video"}
                        {selectedItem.type === "article" && "Read Article"}
                        {selectedItem.type === "achievement" && "View Achievement"}
                        {selectedItem.type === "photography" && "View Gallery"}
                      </span>
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

