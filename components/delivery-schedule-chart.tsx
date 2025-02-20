"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { date: "2023-07-01", scheduled: 5, completed: 4 },
  { date: "2023-07-02", scheduled: 3, completed: 3 },
  { date: "2023-07-03", scheduled: 6, completed: 5 },
  { date: "2023-07-04", scheduled: 4, completed: 4 },
  { date: "2023-07-05", scheduled: 5, completed: 3 },
]

export function DeliveryScheduleChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="scheduled" fill="#005792" />
          <Bar dataKey="completed" fill="#28A745" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

