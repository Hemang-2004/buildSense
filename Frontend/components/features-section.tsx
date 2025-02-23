"use client"

import type React from "react"

import { Activity, BarChart3, Users, Cog, Building2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"

const features = [
  {
    title: "Predictive Risk Analysis",
    icon: <Activity className="w-16 h-16 text-[#F2A900]" />,
    description: "Early risk detection and automated assessment reports for proactive risk management.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Supply Chain Optimization",
    icon: <BarChart3 className="w-16 h-16 text-[#F2A900]" />,
    description: "AI-powered forecasting and inventory optimization for efficient material management.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Workforce Management",
    icon: <Users className="w-16 h-16 text-[#F2A900]" />,
    description: "Smart resource allocation and performance tracking for optimal team productivity.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Project Automation",
    icon: <Cog className="w-16 h-16 text-[#F2A900]" />,
    description: "Streamlined workflows with intelligent automation for increased efficiency.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Real-time Monitoring",
    icon: <Building2 className="w-16 h-16 text-[#F2A900]" />,
    description: "Comprehensive monitoring with instant insights into project metrics.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center text-[#005792]">Our Powerful Features</h2>
        <div className="max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              image={feature.image}
              index={index}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  image: string
  index: number
  isEven: boolean
}

function FeatureCard({ title, description, icon, image, index, isEven }: FeatureCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -100 : 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="flex items-center justify-center w-full mb-16"
    >
      <Card
        className={`w-[400px] aspect-square bg-white shadow-lg hover:shadow-xl transition-all duration-300 
        ${isEven ? "ml-auto" : "mr-auto"}
        hover:shadow-[#F2A900] hover:scale-105`}
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

