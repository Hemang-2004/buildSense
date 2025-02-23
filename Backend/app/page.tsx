"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DigitalTwin } from "@/components/digital-twin"
import { SupplyChainMap } from "@/components/supply-chain-map"
import { RiskDashboard } from "@/components/risk-dashboard"
import { InventoryManagement } from "@/components/inventory-management"
import { SupplierPortal } from "@/components/supplier-portal"
import { SustainabilityMetrics } from "@/components/sustainability-metrics"
import { CollaborationHub } from "@/components/collaboration-hub"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("digital-twin")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background px-6 py-4">
        <h1 className="text-2xl font-bold">L&T Supply Chain Management</h1>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
        <TabsList className="w-full justify-start rounded-none border-b px-6 bg-background">
          <TabsTrigger value="digital-twin">Digital Twin</TabsTrigger>
          <TabsTrigger value="supply-chain">Supply Chain Map</TabsTrigger>
          <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="suppliers">Supplier Portal</TabsTrigger>
          <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
        </TabsList>

        <div className="flex-1 p-6">
          <TabsContent value="digital-twin" className="m-0">
            <DigitalTwin />
          </TabsContent>
          <TabsContent value="supply-chain" className="m-0">
            <SupplyChainMap />
          </TabsContent>
          <TabsContent value="risk" className="m-0">
            <RiskDashboard />
          </TabsContent>
          <TabsContent value="inventory" className="m-0">
            <InventoryManagement />
          </TabsContent>
          <TabsContent value="suppliers" className="m-0">
            <SupplierPortal />
          </TabsContent>
          <TabsContent value="sustainability" className="m-0">
            <SustainabilityMetrics />
          </TabsContent>
          <TabsContent value="collaboration" className="m-0">
            <CollaborationHub />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

