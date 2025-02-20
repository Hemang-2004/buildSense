"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const initialOrders = [
  { id: "001", date: "2023-06-15", supplier: "Supplier A", quantity: 100, status: "Delivered" },
  { id: "002", date: "2023-06-18", supplier: "Supplier B", quantity: 75, status: "In Transit" },
  { id: "003", date: "2023-06-20", supplier: "Supplier C", quantity: 150, status: "Processing" },
  { id: "004", date: "2023-06-22", supplier: "Supplier A", quantity: 50, status: "Delivered" },
  { id: "005", date: "2023-06-25", supplier: "Supplier B", quantity: 200, status: "Processing" },
]

export function OrderHistoryTable() {
  const [orders, setOrders] = useState(initialOrders)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredOrders = orders.filter((order) =>
    Object.values(order).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <Input
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button onClick={() => setOrders(initialOrders)}>Reset</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.supplier}</TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

