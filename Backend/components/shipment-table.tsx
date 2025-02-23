"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const shipments = [
  {
    id: "SHP001",
    origin: "Mumbai Port",
    destination: "Project Site A",
    status: "In Transit",
    eta: "2024-02-22",
    type: "Construction Materials",
  },
  {
    id: "SHP002",
    origin: "Chennai Factory",
    destination: "Project Site B",
    status: "Delayed",
    eta: "2024-02-23",
    type: "Heavy Equipment",
  },
  {
    id: "SHP003",
    origin: "Delhi Warehouse",
    destination: "Project Site C",
    status: "On Schedule",
    eta: "2024-02-21",
    type: "Steel Components",
  },
]

export function ShipmentTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Shipment ID</TableHead>
          <TableHead>Origin</TableHead>
          <TableHead>Destination</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>ETA</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shipments.map((shipment) => (
          <TableRow key={shipment.id}>
            <TableCell className="font-medium">{shipment.id}</TableCell>
            <TableCell>{shipment.origin}</TableCell>
            <TableCell>{shipment.destination}</TableCell>
            <TableCell>{shipment.status}</TableCell>
            <TableCell>{shipment.eta}</TableCell>
            <TableCell>{shipment.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

