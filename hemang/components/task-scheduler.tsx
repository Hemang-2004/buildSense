"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown, Plus } from "lucide-react"

type Priority = "High" | "Medium" | "Low"
type Status = "Not Started" | "In Progress" | "Completed"
type ProjectType = "Mumbai Port" | "Bengaluru Metro"

interface Task {
  id: number
  name: string
  assignee: string
  priority: Priority
  deadline: string
  status: Status
  project: ProjectType
}

const initialTasks: Task[] = [
  {
    id: 1,
    name: "Foundation inspection",
    assignee: "John Doe",
    priority: "High",
    deadline: "2024-03-01",
    status: "Completed",
    project: "Mumbai Port",
  },
  {
    id: 2,
    name: "Steel framework installation",
    assignee: "Jane Smith",
    priority: "High",
    deadline: "2024-03-15",
    status: "In Progress",
    project: "Mumbai Port",
  },
  {
    id: 3,
    name: "Electrical wiring phase 1",
    assignee: "Mike Johnson",
    priority: "Medium",
    deadline: "2024-03-30",
    status: "Not Started",
    project: "Mumbai Port",
  },
  {
    id: 4,
    name: "Underground tunnel excavation",
    assignee: "Sarah Wilson",
    priority: "High",
    deadline: "2024-03-10",
    status: "In Progress",
    project: "Bengaluru Metro",
  },
  {
    id: 5,
    name: "Station platform construction",
    assignee: "David Brown",
    priority: "Medium",
    deadline: "2024-04-15",
    status: "Not Started",
    project: "Bengaluru Metro",
  },
  {
    id: 6,
    name: "Track laying initial phase",
    assignee: "Emily Davis",
    priority: "High",
    deadline: "2024-03-20",
    status: "Not Started",
    project: "Bengaluru Metro",
  },
]

export function TaskScheduler() {
  const [tasks, setTasks] = useState(initialTasks)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [selectedProject, setSelectedProject] = useState<"Mumbai Port" | "Bengaluru Metro" | "All">("All")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newTask, setNewTask] = useState({
    name: "",
    project: "" as ProjectType,
    assignee: "",
    priority: "" as Priority,
    deadline: "",
    status: "" as Status,
  })

  const handleAddTask = () => {
    if (newTask.name && newTask.project && newTask.assignee && newTask.priority && newTask.deadline && newTask.status) {
      const task: Task = {
        id: tasks.length + 1,
        ...newTask,
      }
      setTasks([...tasks, task])
      setNewTask({
        name: "",
        project: "" as ProjectType,
        assignee: "",
        priority: "" as Priority,
        deadline: "",
        status: "" as Status,
      })
      setIsDialogOpen(false)
    }
  }

  const sortByPriority = () => {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 }
    const sorted = [...tasks].sort((a, b) => {
      const diff = priorityOrder[b.priority] - priorityOrder[a.priority]
      return sortOrder === "asc" ? diff : -diff
    })
    setTasks(sorted)
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  const getPriorityColor = (priority: Priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-[#F2A900] bg-opacity-20 text-[#F2A900]"
      case "Low":
        return "bg-green-100 text-green-800"
    }
  }

  const getStatusColor = (status: Status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-[#005792] bg-opacity-20 text-[#005792]"
      case "Not Started":
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredTasks = selectedProject === "All" ? tasks : tasks.filter((task) => task.project === selectedProject)

  return (
    <Card className="p-6 border-[#005792] border-opacity-20">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[#005792]">Task Scheduler</h3>
        <div className="flex gap-4">
          <select
            className="border rounded-md p-2 border-[#005792] border-opacity-20 focus:border-[#F2A900] focus:ring-[#F2A900]"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value as "Mumbai Port" | "Bengaluru Metro" | "All")}
          >
            <option value="All">All Projects</option>
            <option value="Mumbai Port">Mumbai Port</option>
            <option value="Bengaluru Metro">Bengaluru Metro</option>
          </select>
          <Button
            variant="outline"
            onClick={sortByPriority}
            className="flex items-center gap-2 border-[#005792] text-[#005792] hover:bg-[#005792] hover:text-white"
          >
            Sort by Priority <ArrowUpDown className="h-4 w-4" />
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#005792] text-white hover:bg-[#005792]/90 flex items-center gap-2">
                <Plus className="h-4 w-4" /> Add Task
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-[#005792]">Add New Task</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="task-name">Task Name</Label>
                  <Input
                    id="task-name"
                    value={newTask.name}
                    onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                    className="border-[#005792] border-opacity-20"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="project">Project</Label>
                  <Select
                    value={newTask.project}
                    onValueChange={(value) => setNewTask({ ...newTask, project: value as ProjectType })}
                  >
                    <SelectTrigger className="border-[#005792] border-opacity-20">
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mumbai Port">Mumbai Port</SelectItem>
                      <SelectItem value="Bengaluru Metro">Bengaluru Metro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="assignee">Assignee</Label>
                  <Input
                    id="assignee"
                    value={newTask.assignee}
                    onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                    className="border-[#005792] border-opacity-20"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select
                    value={newTask.priority}
                    onValueChange={(value) => setNewTask({ ...newTask, priority: value as Priority })}
                  >
                    <SelectTrigger className="border-[#005792] border-opacity-20">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={newTask.deadline}
                    onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                    className="border-[#005792] border-opacity-20"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={newTask.status}
                    onValueChange={(value) => setNewTask({ ...newTask, status: value as Status })}
                  >
                    <SelectTrigger className="border-[#005792] border-opacity-20">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Not Started">Not Started</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleAddTask} className="bg-[#005792] text-white hover:bg-[#005792]/90 mt-4">
                  Add Task
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="rounded-md border border-[#005792] border-opacity-20">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#005792] bg-opacity-5">
              <TableHead className="text-[#005792]">Task</TableHead>
              <TableHead className="text-[#005792]">Project</TableHead>
              <TableHead className="text-[#005792]">Assignee</TableHead>
              <TableHead className="text-[#005792]">Priority</TableHead>
              <TableHead className="text-[#005792]">Deadline</TableHead>
              <TableHead className="text-[#005792]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTasks.map((task) => (
              <TableRow key={task.id} className="hover:bg-[#005792] hover:bg-opacity-5">
                <TableCell className="font-medium text-[#005792]">{task.name}</TableCell>
                <TableCell>{task.project}</TableCell>
                <TableCell>{task.assignee}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getPriorityColor(task.priority)}>
                    {task.priority}
                  </Badge>
                </TableCell>
                <TableCell>{new Date(task.deadline).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusColor(task.status)}>
                    {task.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}

