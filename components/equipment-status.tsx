"use client"

import { Progress } from "@/components/ui/progress"

export function EquipmentStatus() {
  const equipment = [
    {
      name: "Tower Crane 1",
      health: 85,
      nextMaintenance: "2 days",
      status: "Operational",
    },
    {
      name: "Excavator 2",
      health: 92,
      nextMaintenance: "5 days",
      status: "Operational",
    },
    {
      name: "Concrete Pump 1",
      health: 78,
      nextMaintenance: "12 hours",
      status: "Maintenance Required",
    },
  ]

  return (
    <div className="space-y-6">
      {equipment.map((item) => (
        <div key={item.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{item.name}</span>
            <span className={`text-sm ${item.status === "Operational" ? "text-green-500" : "text-yellow-500"}`}>
              {item.status}
            </span>
          </div>
          <Progress value={item.health} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Health: {item.health}%</span>
            <span>Next Maintenance: {item.nextMaintenance}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

