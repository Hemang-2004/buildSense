"use client"

import { Activity, BarChart3, Users, Cog, Building2 } from "lucide-react"

const features = [
  {
    title: "Predictive Risk Analysis",
    icon: <Activity className="w-16 h-16 text-[#F2A900]" />,
    description: "Early risk detection and automated assessment reports for proactive risk management.",
  },
  {
    title: "Supply Chain Optimization",
    icon: <BarChart3 className="w-16 h-16 text-[#F2A900]" />,
    description: "AI-powered forecasting and inventory optimization for efficient material management.",
  },
  {
    title: "Workforce Management",
    icon: <Users className="w-16 h-16 text-[#F2A900]" />,
    description: "Smart resource allocation and performance tracking for optimal team productivity.",
  },
  {
    title: "Project Automation",
    icon: <Cog className="w-16 h-16 text-[#F2A900]" />,
    description: "Streamlined workflows with intelligent automation for increased efficiency.",
  },
  {
    title: "Real-time Monitoring",
    icon: <Building2 className="w-16 h-16 text-[#F2A900]" />,
    description: "Comprehensive monitoring with instant insights into project metrics.",
  },
]

export function FeaturesTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center text-[#005792]">Our Powerful Features</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#005792] transform -translate-x-1/2" />

          {/* Features */}
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                {/* Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg">
                  {feature.icon}
                </div>

                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "ml-auto pl-8" : "mr-auto pr-8"
                  } bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <h3 className="text-xl font-bold text-[#005792] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

