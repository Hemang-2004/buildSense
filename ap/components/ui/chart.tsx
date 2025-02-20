"use client"

import {
  LineChart as RechartsLineChart,
  Line as RechartsLine,
  AreaChart as RechartsAreaChart,
  Area as RechartsArea,
  BarChart as RechartsBarChart,
  Bar as RechartsBar,
  PieChart as RechartsPieChart,
  Pie as RechartsPie,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

export const LineChart = ({ children, className, ...props }: any) => (
  <ResponsiveContainer width="100%" height="100%">
    <RechartsLineChart {...props}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      {children}
    </RechartsLineChart>
  </ResponsiveContainer>
)

export const BarChart = ({ children, className, ...props }: any) => (
  <ResponsiveContainer width="100%" height="100%">
    <RechartsBarChart {...props}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      {children}
    </RechartsBarChart>
  </ResponsiveContainer>
)

export const AreaChart = ({ children, className, ...props }: any) => (
  <ResponsiveContainer width="100%" height="100%">
    <RechartsAreaChart {...props}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      {children}
    </RechartsAreaChart>
  </ResponsiveContainer>
)

export const PieChart = ({ children, className, ...props }: any) => (
  <ResponsiveContainer width="100%" height="100%">
    <RechartsPieChart {...props}>
      <Tooltip />
      <Legend />
      {children}
    </RechartsPieChart>
  </ResponsiveContainer>
)

export const Line = RechartsLine
export const Bar = RechartsBar
export const Area = RechartsArea
export const Pie = RechartsPie

