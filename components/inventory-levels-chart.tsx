"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { item: "Item A", current: 150, threshold: 100 },
  { item: "Item B", current: 80, threshold: 120 },
  { item: "Item C", current: 200, threshold: 150 },
  { item: "Item D", current: 90, threshold: 100 },
  { item: "Item E", current: 180, threshold: 200 },
]

export function InventoryLevelsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="item" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="current" fill="#005792" />
          <Bar dataKey="threshold" fill="#F2A900" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

