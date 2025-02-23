"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

const events = [
  { date: new Date(2024, 2, 15), title: "Foundation Inspection", type: "deadline" },
  { date: new Date(2024, 2, 20), title: "Steel Delivery", type: "delivery" },
  { date: new Date(2024, 2, 25), title: "Safety Audit", type: "audit" },
]

export function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const getDayContent = (day: Date) => {
    const dayEvents = events.filter((event) => event.date.toDateString() === day.toDateString())

    if (dayEvents.length > 0) {
      return (
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-0 right-0">
            <Badge
              variant="secondary"
              className={`text-xs ${
                dayEvents[0].type === "deadline"
                  ? "bg-red-100 text-red-800"
                  : dayEvents[0].type === "delivery"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {dayEvents[0].title}
            </Badge>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Project Calendar</h3>
      <div className="flex gap-4 mb-4">
        <Badge variant="secondary" className="bg-red-100 text-red-800">
          Deadlines
        </Badge>
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
          Deliveries
        </Badge>
        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
          Audits
        </Badge>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        classNames={{
          day: "h-9 w-9 p-0 font-normal text-[14px] text-black hover:bg-gray-100",
          day_selected: "bg-[#005792] text-white hover:bg-[#005792] hover:text-white",
          day_today: "bg-[#F2A900] text-white",
          day_outside: "text-gray-400",
          nav_button: "text-[#005792] hover:bg-gray-100",
          table: "w-full border-collapse space-y-1",
          head_cell: "text-[#005792] font-semibold text-base px-2 py-4",
          cell: "text-center relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          button: "h-9 w-9 p-0 font-normal hover:bg-gray-100 text-black",
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          caption: "relative flex justify-center py-2 px-10",
        }}
        components={{
          DayContent: ({ date }) => (
            <div className="flex items-center justify-center h-full w-full relative">
              <span>{date.getDate()}</span>
              {getDayContent(date)}
            </div>
          ),
        }}
      />
    </Card>
  )
}

