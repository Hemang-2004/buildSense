"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export function ProjectGanttChart({ project }) {
  const data = project.milestones.map((milestone, index) => ({
    name: milestone.name,
    start: index * 2, // This is a simplification. In a real app, you'd calculate the start based on actual dates
    duration: 2, // This is also simplified. You'd calculate the duration between milestones
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" barSize={20}>
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="duration" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

