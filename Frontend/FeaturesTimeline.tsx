"\"use client"

import { motion } from "framer-motion"
import { Activity, BarChart3, Users, Cog, Building2 } from "lucide-react"

const features = [
  {
    title: "Predictive Risk Analysis",
    icon: <Activity className="w-16 h-16 text-[#F2A900]" />,
    description:
      "Early risk detection and automated assessment reports for proactive risk management. Our advanced algorithms analyze historical data and current metrics to provide comprehensive risk insights.",
  },
  {
    title: "Supply Chain Optimization",
    icon: <BarChart3 className="w-16 h-16 text-[#F2A900]" />,
    description:
      "AI-powered forecasting and inventory optimization for efficient material management. Transform your supply chain with intelligent scheduling and automated reordering systems.",
  },
  {
    title: "Workforce Management",
    icon: <Users className="w-16 h-16 text-[#F2A900]" />,
    description:
      "Smart resource allocation and performance tracking for optimal team productivity. Ensure the right people with the right skills are at the right place at the right time.",
  },
  {
    title: "Project Automation",
    icon: <Cog className="w-16 h-16 text-[#F2A900]" />,
    description:
      "Streamlined workflows with intelligent automation for increased efficiency. Reduce manual tasks and increase productivity across your entire project lifecycle.",
  },
  {
    title: "Real-time Monitoring",
    icon: <Building2 className="w-16 h-16 text-[#F2A900]" />,
    description:
      "Comprehensive monitoring with instant insights into project metrics. Keep your finger on the pulse of your projects with live updates and automated alerts.",
  },
]

export default function FeaturesTimeline() {
  return (
    <div className="relative py-20">
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#005792] transform -translate-x-1/2" />

      {/* Features */}
      <div className="relative max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex items-center mb-32 last:mb-0 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            {/* Content */}
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-16 text-right" : "pl-16 text-left"}`}>
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  {index % 2 === 1 && feature.icon}
                  <h3 className="text-2xl font-bold text-[#005792]">{feature.title}</h3>
                  {index % 2 === 0 && feature.icon}
                </div>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            </div>

            {/* Timeline Node */}
            <div className="relative w-12 h-12 rounded-full bg-[#F2A900] shadow-lg flex items-center justify-center z-10 transform -translate-x-1/2">
              <span className="text-white font-bold text-xl">{index + 1}</span>
            </div>

            {/* Empty space for the other side */}
            <div className="w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

