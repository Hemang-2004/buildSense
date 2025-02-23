"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const tasks = [
  {
    name: "Initial Planning",
    startMonth: 0,
    duration: 2,
    completion: 100,
    phase: "Planning",
  },
  {
    name: "Site Preparation",
    startMonth: 1,
    duration: 3,
    completion: 100,
    phase: "Execution",
  },
  {
    name: "Foundation Work",
    startMonth: 2,
    duration: 4,
    completion: 80,
    phase: "Execution",
  },
  {
    name: "Structural Steel",
    startMonth: 4,
    duration: 5,
    completion: 60,
    phase: "Construction",
  },
  {
    name: "MEP Systems",
    startMonth: 6,
    duration: 6,
    completion: 40,
    phase: "Systems",
  },
]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function GanttChart() {
  const [view, setView] = useState<"gantt" | "heatmap">("gantt")

  const CustomBar = ({ x, y, width, height, fill }: any) => {
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill={fill} rx={4} ry={4} />
      </g>
    )
  }

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Project Timeline</h3>
        <Tabs value={view} onValueChange={(v) => setView(v as "gantt" | "heatmap")}>
          <TabsList>
            <TabsTrigger value="gantt">Gantt Chart</TabsTrigger>
            <TabsTrigger value="heatmap">Heat Map</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={tasks} layout="vertical" barSize={20} margin={{ top: 20, right: 30, left: 100, bottom: 20 }}>
            <XAxis type="number" domain={[0, 12]} tickFormatter={(value) => months[value]} />
            <YAxis type="category" dataKey="name" />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload
                  return (
                    <div className="bg-white p-2 border rounded shadow">
                      <p className="font-semibold">{data.name}</p>
                      <p>Phase: {data.phase}</p>
                      <p>Start: {months[data.startMonth]}</p>
                      <p>Duration: {data.duration} months</p>
                      <p>Completion: {data.completion}%</p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Bar dataKey="duration" fill="#005792" shape={<CustomBar />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

