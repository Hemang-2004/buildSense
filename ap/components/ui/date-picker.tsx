"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function DatePicker({ className, ...props }: any) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleDateChange = (date: Date) => {
    setSelectedDate(date)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={cn("w-full", className)} {...props}>
          {selectedDate ? <span>{selectedDate.toLocaleDateString()}</span> : <span>Select Date</span>}
          <Calendar className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-4">
        <DialogHeader>
          <DialogTitle>Select Date</DialogTitle>
          <DialogDescription>Choose a date for this project.</DialogDescription>
        </DialogHeader>
        <Input type="date" onChange={(e) => handleDateChange(new Date(e.target.value))} />
      </DialogContent>
    </Dialog>
  )
}

