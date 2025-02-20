"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Timeline, TimelineItem } from "@/components/ui/timeline"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  Brain,
  Timer,
  Shield,
  TrendingUp,
  X,
  Activity,
  BarChart3,
  Users,
  Cog,
  Building2,
} from "lucide-react"

export default function LandingPage() {
  const [selectedBox, setSelectedBox] = React.useState<number | null>(null)

  const whyChooseUs = [
    {
      title: "AI-Powered Intelligence",
      icon: <Brain className="w-16 h-16 text-[#F2A900]" />,
      description:
        "Our advanced AI algorithms process vast amounts of construction data to provide actionable insights.",
      benefits: ["Real-time analysis", "Predictive modeling", "Pattern recognition"],
    },
    {
      title: "Time & Cost Efficiency",
      icon: <Timer className="w-16 h-16 text-[#F2A900]" />,
      description: "Optimize your project timeline and budget with our intelligent resource management system.",
      benefits: ["Resource optimization", "Cost prediction", "Schedule management"],
    },
    {
      title: "Risk Management",
      icon: <Shield className="w-16 h-16 text-[#F2A900]" />,
      description: "Proactively identify and mitigate risks with our comprehensive risk assessment tools.",
      benefits: ["Early detection", "Mitigation strategies", "Safety management"],
    },
    {
      title: "Performance Analytics",
      icon: <TrendingUp className="w-16 h-16 text-[#F2A900]" />,
      description: "Track and analyze project performance with detailed analytics dashboards.",
      benefits: ["Performance tracking", "Resource monitoring", "Progress reporting"],
    },
  ]

  const features = [
    {
      title: "Predictive Risk Analysis",
      icon: <Activity className="w-12 h-12 text-[#F2A900]" />,
      description: "Early risk detection and automated assessment reports for proactive risk management.",
    },
    {
      title: "Supply Chain Optimization",
      icon: <BarChart3 className="w-12 h-12 text-[#F2A900]" />,
      description: "AI-powered forecasting and inventory optimization for efficient material management.",
    },
    {
      title: "Workforce Management",
      icon: <Users className="w-12 h-12 text-[#F2A900]" />,
      description: "Smart resource allocation and performance tracking for optimal team productivity.",
    },
    {
      title: "Project Automation",
      icon: <Cog className="w-12 h-12 text-[#F2A900]" />,
      description: "Streamlined workflows with intelligent automation for increased efficiency.",
    },
    {
      title: "Real-time Monitoring",
      icon: <Building2 className="w-12 h-12 text-[#F2A900]" />,
      description: "Comprehensive monitoring with instant insights into project metrics.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <div className="relative bg-[#005792] text-white">
        <header className="absolute top-0 w-full z-10 p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">BuildSense.AI</h1>
            <div className="space-x-6">
              <a href="#home" className="hover:text-[#F2A900] transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-[#F2A900] transition-colors">
                About
              </a>
              <a href="#features" className="hover:text-[#F2A900] transition-colors">
                Features
              </a>
              <a href="#contact" className="hover:text-[#F2A900] transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </header>

        <div className="container mx-auto pt-32 pb-20 text-center px-4">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Predict Your Tomorrow with BuildSense.AI
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Projects with Intelligent Insights
          </motion.p>
          <motion.p
            className="text-2xl mb-8 text-[#F2A900]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            From Designing to Delivery, From Constructing to Predicting
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/dashboard">
              <Button className="bg-[#F2A900] text-[#005792] hover:bg-[#002D62] hover:text-white text-lg py-6 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                ENTER DASHBOARD
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#005792]">Why Choose BuildSense.AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedBox(index)}
              >
                <Card className="p-6 h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {item.icon}
                    <h3 className="text-xl font-bold text-[#005792]">{item.title}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Dialog open={selectedBox !== null} onOpenChange={() => setSelectedBox(null)}>
            <DialogContent className="max-w-md">
              {selectedBox !== null && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[#005792] flex items-center justify-between">
                      {whyChooseUs[selectedBox].title}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedBox(null)}
                        className="absolute right-4 top-4"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center justify-center py-4">{whyChooseUs[selectedBox].icon}</div>
                    <p className="text-gray-700">{whyChooseUs[selectedBox].description}</p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-[#005792] mb-2">Key Benefits:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {whyChooseUs[selectedBox].benefits.map((benefit, index) => (
                          <li key={index} className="text-gray-700">
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#005792]">Our Powerful Features</h2>
          <Timeline>
            {features.map((feature, index) => (
              <TimelineItem key={index} icon={feature.icon} title={feature.title}>
                {feature.description}
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#005792]">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Input type="tel" placeholder="Phone Number" className="w-full" />
                <Textarea placeholder="Your Message" className="w-full" rows={4} />
                <Button className="bg-[#005792] text-white hover:bg-[#002D62] w-full">Send Message</Button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-[#005792] text-white p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <Phone className="mr-3" /> Hotline: +1 (800) 555-BUILD
                  </p>
                  <p className="flex items-center">
                    <Mail className="mr-3" /> Email: info@buildsense.ai
                  </p>
                  <p>Address: L&T Technology Center, Mumbai, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002D62] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BuildSense.AI</h3>
              <p className="text-sm mb-2">A subsidiary of Larsen & Toubro</p>
              <p className="text-sm">Transforming construction with AI</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block hover:text-[#F2A900] transition-colors">
                  Home
                </a>
                <a href="#about" className="block hover:text-[#F2A900] transition-colors">
                  About
                </a>
                <a href="#features" className="block hover:text-[#F2A900] transition-colors">
                  Features
                </a>
                <a href="#contact" className="block hover:text-[#F2A900] transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-[#F2A900] transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block hover:text-[#F2A900] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-[#F2A900] transition-colors">
                  Cookie Policy
                </a>
                <a href="#" className="block hover:text-[#F2A900] transition-colors">
                  Licenses
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-[#F2A900] transition-colors">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-[#F2A900] transition-colors">
                  <Twitter />
                </a>
                <a href="#" className="hover:text-[#F2A900] transition-colors">
                  <Linkedin />
                </a>
                <a href="#" className="hover:text-[#F2A900] transition-colors">
                  <Instagram />
                </a>
              </div>
              <div className="space-y-2 text-sm">
                <p>ISO 9001:2015 Certified</p>
                <p>ISO 27001 Certified</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="text-center">
              <p>&copy; 2025 BuildSense.AI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

