import { Suspense } from "react"
import { TaskScheduler } from "@/components/task-scheduler"
import { Navigation } from "@/components/navigation"

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navigation />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-[#005792]">Project Tasks</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <TaskScheduler />
        </Suspense>
      </div>
    </div>
  )
}

