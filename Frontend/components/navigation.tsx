"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Cog, ListTodo, LogOut, Menu, PackageSearch, Shield } from "lucide-react"

export function Navigation() {
  return (
    <Sheet>
      <nav className="bg-[#005792] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            BuildSense.AI
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex space-x-6">
              <Link href="/tasks">
                <Button variant="ghost" className="text-white hover:text-[#F2A900]">
                  <ListTodo className="w-4 h-4 mr-2" />
                  Tasks
                </Button>
              </Link>
              <Link href="/supply-chain">
                <Button variant="ghost" className="text-white hover:text-[#F2A900]">
                  <PackageSearch className="w-4 h-4 mr-2" />
                  Supply Chain
                </Button>
              </Link>
              <Link href="/risk-analysis">
                <Button variant="ghost" className="text-white hover:text-[#F2A900]">
                  <Shield className="w-4 h-4 mr-2" />
                  Risk Analysis
                </Button>
              </Link>
              <Link href="/settings">
                <Button variant="ghost" className="text-white hover:text-[#F2A900]">
                  <Cog className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="text-white hover:text-[#F2A900]">
                  <LogOut className="w-4 h-4 mr-2" />
                  Exit
                </Button>
              </Link>
            </div>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
          </div>
        </div>
      </nav>
      <SheetContent side="left">
        <div className="grid gap-4 py-4">
          <Link href="/tasks">
            <Button variant="ghost" className="justify-start w-full">
              <ListTodo className="w-4 h-4 mr-2" /> Tasks
            </Button>
          </Link>
          <Link href="/supply-chain">
            <Button variant="ghost" className="justify-start w-full">
              <PackageSearch className="w-4 h-4 mr-2" /> Supply Chain
            </Button>
          </Link>
          <Link href="/risk-analysis">
            <Button variant="ghost" className="justify-start w-full">
              <Shield className="w-4 h-4 mr-2" /> Risk Analysis
            </Button>
          </Link>
          <Link href="/settings">
            <Button variant="ghost" className="justify-start w-full">
              <Cog className="w-4 h-4 mr-2" /> Settings
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="justify-start w-full">
              <LogOut className="w-4 h-4 mr-2" /> Exit
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

