"use client"

import { Progress } from "@/components/ui/progress"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Building2, ChevronRight, FolderKanban } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "mumbai-port",
    name: "Mumbai Port Project",
    location: "Mumbai, Maharashtra",
    progress: 65,
    budget: "10M",
    utilized: "4.8M",
    image: "/placeholder.svg?height=200&width=400",
    status: "In Progress",
  },
  {
    id: "bengaluru-metro",
    name: "Bengaluru Metro Phase 2",
    location: "Bengaluru, Karnataka",
    progress: 35,
    budget: "15M",
    utilized: "3.2M",
    image: "/placeholder.svg?height=200&width=400",
    status: "In Progress",
  },
]

export function ProjectList() {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <FolderKanban className="h-4 w-4" />
          Projects
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#005792] mb-6">Active Projects</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link href={`/dashboard/${project.id}`} key={project.id}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="secondary" className="gap-2">
                      View Project <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[#005792] mb-2">{project.name}</h3>
                      <p className="text-gray-600 flex items-center gap-2">
                        <Building2 className="h-4 w-4" /> {project.location}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={
                        project.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Budget Utilized</span>
                      <span className="font-medium">
                        ${project.utilized} / ${project.budget}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

