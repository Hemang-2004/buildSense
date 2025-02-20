"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Task 1", start: 0, duration: 3 },
  { name: "Task 2", start: 2, duration: 4 },
  { name: "Task 3", start: 5, duration: 2 },
]

export function MiniGanttChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} layout="vertical" barSize={20}>
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="duration" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

