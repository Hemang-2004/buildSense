"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
import { ConstructionSite } from "./3d/construction-site"
import { MaterialFlow } from "./3d/material-flow"
import { EquipmentStatus } from "./equipment-status"

export function DigitalTwin() {
  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>Digital Twin Visualization</CardTitle>
          <CardDescription>Real-time 3D visualization of construction site and supply chain</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-[16/9] overflow-hidden rounded-lg border bg-muted">
            <Canvas shadows>
              <PerspectiveCamera makeDefault position={[20, 20, 20]} />
              <OrbitControls enableDamping />
              <Suspense fallback={null}>
                <ConstructionSite />
                <MaterialFlow />
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Equipment Status</CardTitle>
          <CardDescription>Real-time monitoring and maintenance alerts</CardDescription>
        </CardHeader>
        <CardContent>
          <EquipmentStatus />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Alerts</CardTitle>
          <CardDescription>Critical maintenance and inventory alerts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Crane Maintenance Required</AlertTitle>
            <AlertDescription>Scheduled maintenance due in 48 hours. Parts ordered.</AlertDescription>
          </Alert>
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Low Inventory Alert</AlertTitle>
            <AlertDescription>Steel reinforcement bars below threshold. Reorder recommended.</AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}

