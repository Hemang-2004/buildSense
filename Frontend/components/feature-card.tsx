"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  image: string
  index: number
  isEven: boolean
}

export function FeatureCard({ title, description, icon, image, index, isEven }: FeatureCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? 100 : -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 100 : -100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="flex items-center justify-center w-full mb-16"
    >
      <Card
        className={`w-[400px] aspect-square bg-white shadow-lg hover:shadow-xl transition-all duration-300 
        ${isEven ? "ml-auto" : "mr-auto"}
        hover:glow-[#F2A900] hover:scale-105`}
      >
        <div className="h-1/2">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover rounded-t-lg" />
        </div>
        <div className="p-6 h-1/2">
          <div className="flex items-center gap-4 mb-4">
            <div className="shrink-0">{icon}</div>
            <h3 className="text-xl font-bold text-[#005792]">{title}</h3>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </Card>
    </motion.div>
  )
}

