"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { ExternalLink, Play, FileText, Newspaper } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type ContentType = "image" | "video" | "article" | "news"

interface ContentItem {
  id: string
  type: ContentType
  title: string
  description: string
  imageUrl: string
  url?: string
  date?: string
  span?: "row" | "col" | "both"
}

interface PersonalGridProps {
  items: ContentItem[]
}

export function PersonalGrid({ items }: PersonalGridProps) {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null)

  const getTypeIcon = (type: ContentType) => {
    switch (type) {
      case "video":
        return <Play className="w-4 h-4" />
      case "article":
        return <FileText className="w-4 h-4" />
      case "news":
        return <Newspaper className="w-4 h-4" />
      default:
        return <ExternalLink className="w-4 h-4" />
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] overflow-x-auto pb-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`relative rounded-2xl overflow-hidden cursor-pointer group
              ${item.span === "row" ? "md:col-span-2" : ""}
              ${item.span === "col" ? "md:row-span-2" : ""}
              ${item.span === "both" ? "md:col-span-2 md:row-span-2" : ""}
            `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedItem(item)}
          >
            <Image
              src={item.imageUrl || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-2 text-sm mb-1">
                {getTypeIcon(item.type)}
                <span className="capitalize">{item.type}</span>
              </div>
              <h3 className="font-medium">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black text-white">
          {selectedItem && (
            <div className="relative">
              <div className="relative h-[70vh]">
                <Image
                  src={selectedItem.imageUrl || "/placeholder.svg"}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-3xl font-bold mb-2">{selectedItem.title}</h2>
                <p className="text-gray-300 mb-4">{selectedItem.description}</p>
                {selectedItem.url && (
                  <Link
                    href={selectedItem.url}
                    className="inline-flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm transition-colors"
                  >
                    {getTypeIcon(selectedItem.type)}
                    <span>
                      {selectedItem.type === "video" && "Watch Video"}
                      {selectedItem.type === "article" && "Read Article"}
                      {selectedItem.type === "news" && "Read News"}
                      {selectedItem.type === "image" && "View Full Image"}
                    </span>
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

export default PersonalGrid

