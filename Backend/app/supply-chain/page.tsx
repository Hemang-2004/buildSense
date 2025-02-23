"use client"

import { useState } from "react"
import { ArrowLeft, Truck, Package, Calendar, FileText } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/ui/date-picker"
import { SupplierPerformanceChart } from "@/components/supplier-performance-chart"
import { InventoryLevelsChart } from "@/components/inventory-levels-chart"
import { DeliveryScheduleChart } from "@/components/delivery-schedule-chart"
import { OrderHistoryTable } from "@/components/order-history-table"
import { MLInsightsSidebar } from "@/components/ml-insights-sidebar"

export default function SupplyChainPage() {
  const [activeTab, setActiveTab] = useState("supplier-data")

  return (
    <div className="flex min-h-screen bg-concrete-white">
      <div className="flex-grow p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to projects</span>
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-steel-gray">Supply Chain Management</h1>
          </div>
          <Button className="bg-lt-blue text-white hover:bg-lt-blue/90">Export Data</Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 bg-lt-blue text-white">
            <TabsTrigger
              value="supplier-data"
              className="data-[state=active]:bg-lt-yellow data-[state=active]:text-steel-gray"
            >
              <Truck className="mr-2 h-4 w-4" />
              Supplier Data
            </TabsTrigger>
            <TabsTrigger
              value="inventory-levels"
              className="data-[state=active]:bg-lt-yellow data-[state=active]:text-steel-gray"
            >
              <Package className="mr-2 h-4 w-4" />
              Inventory Levels
            </TabsTrigger>
            <TabsTrigger
              value="delivery-schedules"
              className="data-[state=active]:bg-lt-yellow data-[state=active]:text-steel-gray"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Delivery Schedules
            </TabsTrigger>
            <TabsTrigger
              value="order-history"
              className="data-[state=active]:bg-lt-yellow data-[state=active]:text-steel-gray"
            >
              <FileText className="mr-2 h-4 w-4" />
              Order History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="supplier-data" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Supplier Information</CardTitle>
                <CardDescription>Enter and manage supplier details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="supplier-name">Supplier Name</Label>
                    <Select>
                      <SelectTrigger id="supplier-name">
                        <SelectValue placeholder="Select supplier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="supplier-a">Supplier A</SelectItem>
                        <SelectItem value="supplier-b">Supplier B</SelectItem>
                        <SelectItem value="supplier-c">Supplier C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reliability-score">Reliability Score</Label>
                    <Input id="reliability-score" type="number" min="0" max="100" placeholder="Enter score (0-100)" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="performance-notes">Additional Notes</Label>
                  <Textarea
                    id="performance-notes"
                    placeholder="Enter any additional notes about the supplier's performance"
                  />
                </div>
                <SupplierPerformanceChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory-levels" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
                <CardDescription>Monitor and update inventory levels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-stock">Current Stock Level</Label>
                    <Input id="current-stock" type="number" min="0" placeholder="Enter current stock quantity" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reorder-threshold">Reorder Threshold</Label>
                    <Input id="reorder-threshold" type="number" min="0" placeholder="Enter reorder threshold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inventory-location">Inventory Location</Label>
                  <Select>
                    <SelectTrigger id="inventory-location">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="warehouse-a">Warehouse A</SelectItem>
                      <SelectItem value="warehouse-b">Warehouse B</SelectItem>
                      <SelectItem value="site-storage">On-site Storage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <InventoryLevelsChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivery-schedules" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Schedules</CardTitle>
                <CardDescription>Manage upcoming deliveries and logistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eta">Estimated Time of Arrival</Label>
                    <DatePicker />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transport-mode">Transport Mode</Label>
                    <Select>
                      <SelectTrigger id="transport-mode">
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="truck">Truck</SelectItem>
                        <SelectItem value="rail">Rail</SelectItem>
                        <SelectItem value="air">Air Freight</SelectItem>
                        <SelectItem value="sea">Sea Freight</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tracking-info">Tracking Information</Label>
                  <Input id="tracking-info" placeholder="Enter tracking number or link" />
                </div>
                <DeliveryScheduleChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="order-history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View and manage past orders</CardDescription>
              </CardHeader>
              <CardContent>
                <OrderHistoryTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <MLInsightsSidebar />
    </div>
  )
}

