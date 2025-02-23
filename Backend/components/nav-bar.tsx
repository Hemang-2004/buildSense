"use client"

import Link from "next/link"
import { Home, BarChart2, Plus, Settings, Truck } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function NavBar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <BarChart2 className="h-6 w-6" />
          <span className="font-bold">Risk Analysis</span>
        </Link>
        <NavigationMenu className="ml-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                >
                  <BarChart2 className="mr-2 h-4 w-4" />
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/supply-chain" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                >
                  <Truck className="mr-2 h-4 w-4" />
                  Supply Chain
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/settings" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
    </div>
  )
}

