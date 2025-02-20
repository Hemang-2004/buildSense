"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { PredictiveAnalysis } from "./predictive-analysis"
import { ProjectMap } from "./project-map"
import { CalendarView } from "./calendar-view"
import { ProjectGallery } from "./project-gallery"
import { BarChart3, Clock, Cog, LineChart, ListTodo, LogOut, Menu, PackageSearch, Shield, Users } from "lucide-react"

export default function MumbaiPortDashboard() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
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
                <Button variant="ghost" className="text-white hover:text-[#F2A900]">
                  <PackageSearch className="w-4 h-4 mr-2" />
                  Supply Chain
                </Button>
                <Button variant="ghost" className="text-white hover:text-[#F2A900]">
                  <Shield className="w-4 h-4 mr-2" />
                  Risk Analysis
                </Button>
                <Button variant="ghost" className="text-white hover:text-[#F2A900]">
                  <Cog className="w-4 h-4 mr-2" />
                  Settings
                </Button>
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
            <Button variant="ghost" className="justify-start">
              <PackageSearch className="w-4 h-4 mr-2" /> Supply Chain
            </Button>
            <Button variant="ghost" className="justify-start">
              <Shield className="w-4 h-4 mr-2" /> Risk Analysis
            </Button>
            <Button variant="ghost" className="justify-start">
              <Cog className="w-4 h-4 mr-2" /> Settings
            </Button>
            <Link href="/">
              <Button variant="ghost" className="justify-start w-full">
                <LogOut className="w-4 h-4 mr-2" /> Exit
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <main className="container mx-auto px-4 py-8">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.div variants={item}>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#005792] mb-2">Mumbai Port Project</h1>
              <p className="text-gray-600">Phase 1 Construction | Started: Jan 2024</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-[#F2A900]" />
                  Progress
                </h3>
                <Progress value={65} className="mb-2" />
                <p className="text-2xl font-bold text-[#005792]">65%</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2 flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2 text-[#F2A900]" />
                  Budget Utilized
                </h3>
                <Progress value={48} className="mb-2" />
                <p className="text-2xl font-bold text-[#005792]">$4.8M / $10M</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2 flex items-center">
                  <LineChart className="w-4 h-4 mr-2 text-[#F2A900]" />
                  Risk Level
                </h3>
                <div className="text-2xl font-bold text-green-600">Low</div>
                <p className="text-sm text-gray-600">No major risks detected</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[#F2A900]" />
                  Workforce
                </h3>
                <div className="text-2xl font-bold text-[#005792]">342</div>
                <p className="text-sm text-gray-600">Active workers on site</p>
              </Card>
            </div>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ProjectGallery />
            <CalendarView />
          </motion.div>

          <motion.div variants={item}>
            <PredictiveAnalysis />
          </motion.div>

          <motion.div variants={item}>
            <ProjectMap />
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

