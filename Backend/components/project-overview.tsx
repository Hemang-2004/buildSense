"use client"

import { useState } from "react"
import { BarChart2, AlertTriangle, Plus, ArrowRight } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Bar, BarChart, Line, LineChart, PieChart, Pie, Area } from "@/components/ui/chart"
import { ImageUpload } from "@/components/image-upload"

export function ProjectOverview() {
  const [projects] = useState([
    {
      id: 1,
      name: "Construction Site A",
      status: "High Risk",
      incidents: 12,
      lastUpdated: "2h ago",
    },
    {
      id: 2,
      name: "Construction Site B",
      status: "Medium Risk",
      incidents: 5,
      lastUpdated: "5h ago",
    },
    {
      id: 3,
      name: "Construction Site C",
      status: "Low Risk",
      incidents: 2,
      lastUpdated: "1d ago",
    },
  ])

  const chartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 278 },
    { name: "May", value: 189 },
  ]

  const pieData = [
    { name: "High Risk", value: 400 },
    { name: "Medium Risk", value: 300 },
    { name: "Low Risk", value: 200 },
  ]

  const areaData = [
    { name: "Week 1", value: 400 },
    { name: "Week 2", value: 300 },
    { name: "Week 3", value: 200 },
    { name: "Week 4", value: 278 },
    { name: "Week 5", value: 189 },
  ]

  return (
    <div className="space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Projects Overview</h2>
        <div className="flex items-center space-x-2">
          <ImageUpload />
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk Projects</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last week</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Risk Trends</CardTitle>
            <CardDescription>Monthly risk incidents reported</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <LineChart data={chartData}>
              <Line type="monotone" dataKey="value" stroke="#2563eb" />
            </LineChart>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Risk Distribution</CardTitle>
            <CardDescription>By risk level</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" fill="#2563eb" />
            </PieChart>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Weekly Incidents</CardTitle>
            <CardDescription>Number of incidents per week</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <BarChart data={chartData}>
              <Bar dataKey="value" fill="#2563eb" />
            </BarChart>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Risk Severity Trend</CardTitle>
            <CardDescription>Weekly risk severity levels</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <AreaChart data={areaData}>
              <Area type="monotone" dataKey="value" fill="#2563eb" fillOpacity={0.2} stroke="#2563eb" />
            </AreaChart>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>Overview of all current projects and their risk status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="flex items-center justify-between space-x-4 rounded-lg border p-4">
                  <div>
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.incidents} incidents • Updated {project.lastUpdated}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                        project.status === "High Risk" && "bg-destructive text-destructive-foreground",
                        project.status === "Medium Risk" && "bg-yellow-500 text-white",
                        project.status === "Low Risk" && "bg-green-500 text-white",
                      )}
                    >
                      {project.status}
                    </span>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/projects/${project.id}`}>
                        <ArrowRight className="h-4 w-4" />
                        <span className="sr-only">View project details</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

