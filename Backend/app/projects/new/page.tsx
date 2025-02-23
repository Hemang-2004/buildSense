"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MiniGanttChart } from "@/components/mini-gantt-chart"

export default function NewProjectPage() {
  const [activeTab, setActiveTab] = useState("details")

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
          <h1 className="text-3xl font-bold">New Project</h1>
        </div>
        <Button>Save Project</Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Enter the basic information about your project.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name</Label>
                <Input id="project-name" placeholder="Enter project name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-id">Project ID</Label>
                <Input id="project-id" placeholder="Auto-generated" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter project location" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea id="description" placeholder="Enter a brief description of the project" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-type">Project Type</Label>
                <Select>
                  <SelectTrigger id="project-type">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="highway">Highway</SelectItem>
                    <SelectItem value="metro">Metro</SelectItem>
                    <SelectItem value="smart-city">Smart City</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Timeline Information</CardTitle>
              <CardDescription>Define the project schedule and key milestones.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <DatePicker />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <DatePicker />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Milestones</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Milestone name" />
                    <DatePicker />
                    <Button size="icon" variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Gantt Chart Preview</Label>
                <MiniGanttChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Data</CardTitle>
              <CardDescription>Enter budget and cost information for the project.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="total-budget">Total Budget</Label>
                <Input id="total-budget" type="number" placeholder="Enter total budget" />
              </div>
              <div className="space-y-2">
                <Label>Cost Estimates</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Component name" />
                    <Input type="number" placeholder="Estimated cost" />
                    <Button size="icon" variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="funding-sources">Funding Sources</Label>
                <Select>
                  <SelectTrigger id="funding-sources">
                    <SelectValue placeholder="Select funding sources" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="private-investors">Private Investors</SelectItem>
                    <SelectItem value="bank-loans">Bank Loans</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Compliance</CardTitle>
              <CardDescription>Track necessary approvals and permits for the project.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Required Approvals</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Approval name" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button size="icon" variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            const tabs = ["details", "timeline", "financials", "compliance"]
            const currentIndex = tabs.indexOf(activeTab)
            if (currentIndex > 0) {
              setActiveTab(tabs[currentIndex - 1])
            }
          }}
        >
          Previous
        </Button>
        <Button
          onClick={() => {
            const tabs = ["details", "timeline", "financials", "compliance"]
            const currentIndex = tabs.indexOf(activeTab)
            if (currentIndex < tabs.length - 1) {
              setActiveTab(tabs[currentIndex + 1])
            }
          }}
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

