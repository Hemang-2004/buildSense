"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectGanttChart } from "@/components/project-gantt-chart"
import { ProjectFinancialChart } from "@/components/project-financial-chart"
import { ProjectRiskChart } from "@/components/project-risk-chart"
import { ComplianceChecklist } from "@/components/compliance-checklist"
import { ImageUploadAnalysis } from "@/components/image-upload-analysis"

// This would typically come from your database
const getProject = (id: string) => {
  const projects = [
    {
      id: "1",
      name: "Construction Site A",
      status: "High Risk",
      incidents: 12,
      lastUpdated: "2h ago",
      description: "Major construction project in downtown area",
      location: "123 Main St",
      startDate: "2024-01-15",
      endDate: "2024-12-31",
      riskFactors: ["Heavy machinery operation", "Height-related work", "Electrical hazards"],
      budget: 10000000,
      expenses: 8500000,
      milestones: [
        { name: "Foundation", date: "2024-03-01" },
        { name: "Structural Work", date: "2024-06-15" },
        { name: "Interior Finishing", date: "2024-10-01" },
      ],
      compliance: [
        { name: "Environmental Impact Assessment", status: "Approved" },
        { name: "Building Permit", status: "Pending" },
        { name: "Safety Inspection", status: "In Progress" },
      ],
    },
    // Add more projects as needed
  ]

  return projects.find((p) => p.id === id)
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = useParams()
  const project = getProject(id as string)
  const [activeTab, setActiveTab] = useState("overview")

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to projects</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">{project.name}</h1>
        </div>
        <ImageUploadAnalysis />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="risks">Risks</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Basic information about the project</CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium">Location</dt>
                  <dd className="text-sm text-muted-foreground">{project.location}</dd>
                </div>
                <div>
                  <dt className="font-medium">Timeline</dt>
                  <dd className="text-sm text-muted-foreground">
                    {project.startDate} to {project.endDate}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Status</dt>
                  <dd className="text-sm text-muted-foreground">{project.status}</dd>
                </div>
                <div>
                  <dt className="font-medium">Incidents</dt>
                  <dd className="text-sm text-muted-foreground">{project.incidents}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Risk Factors</CardTitle>
              <CardDescription>Identified risk factors for this project</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-4">
                {project.riskFactors.map((factor, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {factor}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Project Timeline</CardTitle>
              <CardDescription>Visual representation of project milestones and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectGanttChart project={project} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financials">
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>Budget breakdown and expense tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectFinancialChart project={project} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risks">
          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment</CardTitle>
              <CardDescription>Current risk levels and historical trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectRiskChart project={project} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance">
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Compliance</CardTitle>
              <CardDescription>Status of required approvals and permits</CardDescription>
            </CardHeader>
            <CardContent>
              <ComplianceChecklist project={project} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

