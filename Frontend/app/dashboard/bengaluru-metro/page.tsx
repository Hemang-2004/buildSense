import { Suspense } from "react"
import BengaluruMetroDashboard from "@/components/bengaluru-metro-dashboard"

export default function BengaluruMetroPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BengaluruMetroDashboard />
    </Suspense>
  )
}

