import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { NavBar } from "@/components/nav-bar"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
