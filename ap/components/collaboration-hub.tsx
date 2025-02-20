"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, PlusCircle, Link2 } from "lucide-react"

export function CollaborationHub() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Updated the delivery schedule for Site A",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Safety inspection report uploaded for review",
      timestamp: "3 hours ago",
    },
    {
      id: 3,
      user: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Inventory levels updated for cement and steel",
      timestamp: "5 hours ago",
    },
  ])

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Team Communication</CardTitle>
          <CardDescription>Real-time project updates and discussions</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={message.avatar} alt={message.user} />
                    <AvatarFallback>{message.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{message.user}</span>
                      <span className="text-sm text-muted-foreground">{message.timestamp}</span>
                    </div>
                    <p className="text-sm">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="mt-4 flex gap-2">
            <Input placeholder="Type your message..." />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common collaboration tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Task
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Link2 className="mr-2 h-4 w-4" />
              Share Documents
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Team Members</CardTitle>
            <CardDescription>Currently online team members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "John Doe", status: "online", role: "Project Manager" },
                { name: "Jane Smith", status: "online", role: "Site Engineer" },
                { name: "Mike Johnson", status: "away", role: "Procurement Officer" },
              ].map((member, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.role}</div>
                  </div>
                  <div
                    className={`ml-auto h-2 w-2 rounded-full ${
                      member.status === "online" ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

