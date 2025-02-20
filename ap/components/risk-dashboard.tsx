"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const riskData = [
  { date: "2024-01", score: 65 },
  { date: "2024-02", score: 72 },
  { date: "2024-03", score: 68 },
  { date: "2024-04", score: 75 },
  { date: "2024-05", score: 70 },
]

const complianceData = [
  {
    id: 1,
    standard: "ISO 9001:2015",
    status: "Compliant",
    expiry: "2024-12-31",
    lastAudit: "2023-12-15",
  },
  {
    id: 2,
    standard: "ISO 14001:2015",
    status: "Warning",
    expiry: "2024-06-30",
    lastAudit: "2023-11-20",
  },
  {
    id: 3,
    standard: "OHSAS 18001",
    status: "Non-Compliant",
    expiry: "2024-03-15",
    lastAudit: "2023-10-05",
  },
]

const regulatoryUpdates = [
  {
    id: 1,
    title: "New Environmental Guidelines",
    severity: "high",
    date: "2024-02-15",
    description: "Updated regulations for construction site emissions and waste management",
  },
  {
    id: 2,
    title: "Safety Protocol Update",
    severity: "medium",
    date: "2024-02-10",
    description: "Revised safety requirements for high-rise construction projects",
  },
]

export function RiskDashboard() {
  const [timeframe, setTimeframe] = useState("6m")

  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Overall Risk Score</CardTitle>
            <CardDescription>Current risk assessment based on multiple factors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-yellow-500">70/100</div>
            <p className="text-sm text-muted-foreground">+5 points from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Status</CardTitle>
            <CardDescription>Overall compliance with regulations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Standards Met</span>
                <span className="font-bold text-green-500">85%</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-full w-[85%] rounded-full bg-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Alerts</CardTitle>
            <CardDescription>Critical issues requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-destructive">3</div>
            <p className="text-sm text-muted-foreground">2 high priority, 1 medium priority</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Risk Trend Analysis</CardTitle>
              <CardDescription>Historical risk score progression</CardDescription>
            </div>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select timeframe" />
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
              <AreaChart data={riskData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="score" stroke="#f59e0b" fill="#fcd34d" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Compliance Standards</CardTitle>
            <CardDescription>Current certification status and upcoming renewals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceData.map((item) => (
                <div key={item.id} className="flex items-center justify-between space-x-4 rounded-lg border p-4">
                  <div>
                    <p className="font-semibold">{item.standard}</p>
                    <p className="text-sm text-muted-foreground">
                      Expires: {item.expiry} • Last Audit: {item.lastAudit}
                    </p>
                  </div>
                  {item.status === "Compliant" && <CheckCircle className="h-5 w-5 text-green-500" />}
                  {item.status === "Warning" && <AlertCircle className="h-5 w-5 text-yellow-500" />}
                  {item.status === "Non-Compliant" && <AlertTriangle className="h-5 w-5 text-destructive" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Regulatory Updates</CardTitle>
            <CardDescription>Recent changes in regulations and compliance requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regulatoryUpdates.map((update) => (
                <Alert key={update.id} variant={update.severity === "high" ? "destructive" : "default"}>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>{update.title}</AlertTitle>
                  <AlertDescription>
                    <p>{update.description}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Updated: {update.date}</p>
                  </AlertDescription>
                </Alert>
              ))}
              <Button className="w-full" variant="outline">
                View All Updates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

