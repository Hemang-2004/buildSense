"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const performanceData = [
  { month: "Jan", score: 85 },
  { month: "Feb", score: 88 },
  { month: "Mar", score: 87 },
  { month: "Apr", score: 89 },
  { month: "May", score: 91 },
  { month: "Jun", score: 90 },
]

export function SupplierPortal() {
  const [selectedSupplier, setSelectedSupplier] = useState("")

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Supplier Portal</h2>
          <p className="text-muted-foreground">Manage supplier relationships and track performance metrics</p>
        </div>
        <Button>Add New Supplier</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Active Suppliers</CardTitle>
            <CardDescription>Total number of active suppliers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">45</div>
            <p className="text-sm text-muted-foreground">+3 this quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Performance</CardTitle>
            <CardDescription>Overall supplier performance score</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-500">88%</div>
            <p className="text-sm text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
            <CardDescription>Suppliers awaiting verification</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-yellow-500">5</div>
            <p className="text-sm text-muted-foreground">Documentation pending</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Supplier Performance</CardTitle>
              <CardDescription>Historical performance metrics</CardDescription>
            </div>
            <Select value={selectedSupplier} onValueChange={setSelectedSupplier}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select supplier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="supplier1">Supplier 1</SelectItem>
                <SelectItem value="supplier2">Supplier 2</SelectItem>
                <SelectItem value="supplier3">Supplier 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#2563eb" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Supplier Directory</CardTitle>
              <CardDescription>Complete list of registered suppliers</CardDescription>
            </div>
            <Input className="w-[300px]" placeholder="Search suppliers..." />
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50 text-sm">
                  <th className="p-4 text-left font-medium">Supplier Name</th>
                  <th className="p-4 text-left font-medium">Category</th>
                  <th className="p-4 text-left font-medium">Performance Score</th>
                  <th className="p-4 text-left font-medium">Compliance Status</th>
                  <th className="p-4 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Supplier 1",
                    category: "Raw Materials",
                    score: 92,
                    status: "Compliant",
                  },
                  {
                    name: "Supplier 2",
                    category: "Equipment",
                    score: 85,
                    status: "Under Review",
                  },
                  {
                    name: "Supplier 3",
                    category: "Tools",
                    score: 78,
                    status: "Non-Compliant",
                  },
                ].map((supplier, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{supplier.name}</td>
                    <td className="p-4">{supplier.category}</td>
                    <td className="p-4">{supplier.score}%</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          supplier.status === "Compliant"
                            ? "bg-green-100 text-green-700"
                            : supplier.status === "Under Review"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {supplier.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
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

