"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function ProjectRiskChart({ project }) {
  // This is dummy data. In a real application, you'd have actual risk data for the project
  const data = [
    { name: "Safety", risk: 8 },
    { name: "Schedule", risk: 5 },
    { name: "Budget", risk: 7 },
    { name: "Quality", risk: 4 },
    { name: "Environmental", risk: 6 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="risk" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

