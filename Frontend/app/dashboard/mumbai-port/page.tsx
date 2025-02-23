import { Suspense } from "react"
import MumbaiPortDashboard from "@/components/mumbai-port-dashboard"

export default function MumbaiPortPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MumbaiPortDashboard />
    </Suspense>
  )
}

