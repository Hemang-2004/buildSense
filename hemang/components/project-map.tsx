"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectMap() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Geospatial Overview</h3>
        <div className="flex gap-2">
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Active Sites
          </Badge>
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            Delayed Sites
          </Badge>
        </div>
      </div>
      <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
        <img src="/placeholder.svg?height=400&width=800" alt="Project Map" className="w-full h-full object-cover" />
        {/* Sample markers */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-green-500 rounded-full animate-ping" />
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-green-500 rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full" />
      </div>
    </Card>
  )
}

