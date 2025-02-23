"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const emissionsData = [
  { month: "Jan", emissions: 120 },
  { month: "Feb", emissions: 115 },
  { month: "Mar", emissions: 130 },
  { month: "Apr", emissions: 125 },
  { month: "May", emissions: 110 },
  { month: "Jun", emissions: 105 },
]

const wasteData = [
  { month: "Jan", waste: 80 },
  { month: "Feb", waste: 75 },
  { month: "Mar", waste: 85 },
  { month: "Apr", waste: 70 },
  { month: "May", waste: 65 },
  { month: "Jun", waste: 60 },
]

export function SustainabilityMetrics() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Sustainability Metrics</h2>
          <p className="text-muted-foreground">Track environmental impact and sustainability initiatives</p>
        </div>
        <Button>Download Report</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Carbon Footprint</CardTitle>
            <CardDescription>Total CO2 emissions this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-500">105</div>
            <p className="text-sm text-muted-foreground">-15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Waste Management</CardTitle>
            <CardDescription>Waste reduction progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-yellow-500">60%</div>
            <p className="text-sm text-muted-foreground">Of waste recycled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Green Suppliers</CardTitle>
            <CardDescription>Eco-certified supplier percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">75%</div>
            <p className="text-sm text-muted-foreground">+5% this quarter</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Emissions Trend</CardTitle>
                <CardDescription>Monthly CO2 emissions in metric tons</CardDescription>
              </div>
              <Select defaultValue="6m">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m">1 Month</SelectItem>
                  <SelectItem value="3m">3 Months</SelectItem>
                  <SelectItem value="6m">6 Months</SelectItem>
                  <SelectItem value="1y">1 Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={emissionsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="emissions" stroke="#2563eb" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Waste Reduction</CardTitle>
                <CardDescription>Monthly waste generation in tons</CardDescription>
              </div>
              <Select defaultValue="6m">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m">1 Month</SelectItem>
                  <SelectItem value="3m">3 Months</SelectItem>
                  <SelectItem value="6m">6 Months</SelectItem>
                  <SelectItem value="1y">1 Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={wasteData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="waste" stroke="#2563eb" fill="#93c5fd" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sustainability Initiatives</CardTitle>
          <CardDescription>Active environmental programs and their impact</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50 text-sm">
                  <th className="p-4 text-left font-medium">Initiative</th>
                  <th className="p-4 text-left font-medium">Status</th>
                  <th className="p-4 text-left font-medium">Impact</th>
                  <th className="p-4 text-left font-medium">Progress</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Solar Panel Installation",
                    status: "In Progress",
                    impact: "Reduce energy consumption by 30%",
                    progress: 65,
                  },
                  {
                    name: "Water Recycling System",
                    status: "Completed",
                    impact: "Save 1M gallons annually",
                    progress: 100,
                  },
                  {
                    name: "Green Building Certification",
                    status: "Planned",
                    impact: "Achieve LEED Gold status",
                    progress: 25,
                  },
                ].map((initiative, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{initiative.name}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          initiative.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : initiative.status === "In Progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {initiative.status}
                      </span>
                    </td>
                    <td className="p-4">{initiative.impact}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-green-500"
                            style={{ width: `${initiative.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{initiative.progress}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

