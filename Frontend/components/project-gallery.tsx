"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { GalleryHorizontalEnd, X } from "lucide-react"

const projectImages = [
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
]

export function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showGallery, setShowGallery] = useState(false)

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Project Gallery</h3>
        <Dialog open={showGallery} onOpenChange={setShowGallery}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <GalleryHorizontalEnd className="w-4 h-4 mr-2" />
              View All
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setShowGallery(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {projectImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative cursor-pointer group"
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Project Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-lg" />
                  </motion.div>
                ))}
              </div>
              <AnimatePresence>
                {selectedImage !== null && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                  >
                    <motion.img
                      src={projectImages[selectedImage]}
                      alt={`Project Image ${selectedImage + 1}`}
                      className="max-w-[90%] max-h-[90vh] object-contain"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.8 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {projectImages.slice(0, 3).map((image, index) => (
          <motion.div key={index} className="relative cursor-pointer group" whileHover={{ scale: 1.05 }}>
            <img
              src={image || "/placeholder.svg"}
              alt={`Project Image ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-lg" />
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

