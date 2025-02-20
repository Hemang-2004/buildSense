"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { useState } from "react"

const metrics = [
  {
    name: "Supply Chain",
    data: Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      disruption: Math.floor(Math.random() * 100),
      efficiency: Math.floor(Math.random() * 100),
      cost: Math.floor(Math.random() * 100),
    })),
  },
  {
    name: "Workforce",
    data: Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      productivity: Math.floor(Math.random() * 100),
      utilization: Math.floor(Math.random() * 100),
      satisfaction: Math.floor(Math.random() * 100),
    })),
  },
  {
    name: "Project",
    data: Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      progress: Math.floor(Math.random() * 100),
      deviation: Math.floor(Math.random() * 100),
      cost: Math.floor(Math.random() * 100),
    })),
  },
]

export function PredictiveAnalysis() {
  const [selectedMetric, setSelectedMetric] = useState(metrics[0])

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Risk Analysis Trends</h3>
        <Tabs value={selectedMetric.name} onValueChange={(v) => setSelectedMetric(metrics.find((m) => m.name === v)!)}>
          <TabsList>
            {metrics.map((metric) => (
              <TabsTrigger key={metric.name} value={metric.name}>
                {metric.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={selectedMetric.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(selectedMetric.data[0])
                .filter((key) => key !== "month")
                .map((key, index) => (
                  <Area
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stackId="1"
                    stroke={`hsl(${index * 120}, 70%, 50%)`}
                    fill={`hsl(${index * 120}, 70%, 50%)`}
                    fillOpacity={0.3}
                  />
                ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" dataKey="month" name="Month" />
              <YAxis type="number" dataKey={Object.keys(selectedMetric.data[0])[1]} name="Value" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
              {Object.keys(selectedMetric.data[0])
                .filter((key) => key !== "month")
                .map((key, index) => (
                  <Scatter key={key} name={key} data={selectedMetric.data} fill={`hsl(${index * 120}, 70%, 50%)`} />
                ))}
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div className="h-[300px] lg:col-span-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={selectedMetric.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(selectedMetric.data[0])
                .filter((key) => key !== "month")
                .map((key, index) => (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={`hsl(${index * 120}, 70%, 50%)`}
                    strokeWidth={2}
                    dot={{ fill: `hsl(${index * 120}, 70%, 50%)` }}
                  />
                ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
}

