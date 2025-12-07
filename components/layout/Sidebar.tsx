"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Megaphone, Users, Award, BarChart3, Settings, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="flex h-16 items-center border-b px-6">
        <span className="text-xl font-bold text-blue-600">Xeno</span>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="grid gap-1 px-2">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
              isActive("/")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            )}
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/campaigns"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
              isActive("/campaigns")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            )}
          >
            <Megaphone className="h-4 w-4" />
            Campaigns
          </Link>
          <Link
            href="/audience"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
              isActive("/audience")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            )}
          >
            <Users className="h-4 w-4" />
            Audience
          </Link>
          <Link
            href="/loyalty"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
              isActive("/loyalty")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            )}
          >
            <Award className="h-4 w-4" />
            Loyalty
          </Link>
          <Link
            href="/analytics"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
              isActive("/analytics")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            )}
          >
            <BarChart3 className="h-4 w-4" />
            Analytics
          </Link>
        </nav>
      </div>
      <div className="border-t p-4">
        <nav className="grid gap-1">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100"
          >
            <HelpCircle className="h-4 w-4" />
            Help & Support
          </Link>
        </nav>
      </div>
    </div>
  )
}
