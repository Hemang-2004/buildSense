"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapContainer } from "./map-container"
import { ShipmentTable } from "./shipment-table"

export function SupplyChainMap() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Supply Chain Network</CardTitle>
              <CardDescription>Real-time view of global supply chain operations</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="grid w-[200px] items-center gap-1.5">
                <Label htmlFor="search">Search</Label>
                <Input id="search" placeholder="Search shipments..." />
              </div>
              <div className="grid w-[200px] items-center gap-1.5">
                <Label htmlFor="filter">Filter</Label>
                <select
                  id="filter"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>All Shipments</option>
                  <option>In Transit</option>
                  <option>Delayed</option>
                  <option>Completed</option>
                </select>
              </div>
              <Button className="mt-auto">Export Data</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="map" className="space-y-4">
            <TabsList>
              <TabsTrigger value="map">Map View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
            <TabsContent value="map" className="space-y-4">
              <div className="aspect-[21/9] overflow-hidden rounded-lg border">
                <MapContainer />
              </div>
            </TabsContent>
            <TabsContent value="list">
              <ShipmentTable />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

