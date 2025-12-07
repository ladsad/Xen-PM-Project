import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { KPICard } from "@/components/dashboard/KPICard"
import { RevenueChart } from "@/components/dashboard/RevenueChart"
import { QuickActions } from "@/components/dashboard/QuickActions"
import { RecentCampaigns } from "@/components/dashboard/RecentCampaigns"
import { DollarSign, Users, TrendingUp, MessageCircle } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-7xl space-y-6">

            {/* Row 1: KPI Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <KPICard
                title="Total Revenue (Attributed)"
                value="$124,500"
                trend="+12%"
                trendDirection="up"
                context="vs last month"
                icon={<DollarSign className="h-4 w-4" />}
              />
              <KPICard
                title="Active Loyalty Members"
                value="8,430"
                trend="+5%"
                trendDirection="up"
                context="New signups"
                icon={<Users className="h-4 w-4" />}
              />
              <KPICard
                title="Campaign ROI"
                value="14x"
                trend="-2%"
                trendDirection="down"
                context="Avg. across channels"
                icon={<TrendingUp className="h-4 w-4" />}
              />
              <KPICard
                title="WhatsApp Engagement"
                value="24%"
                trend="Stable"
                trendDirection="neutral"
                context="Open Rate"
                icon={<MessageCircle className="h-4 w-4" />}
              />
            </div>

            {/* Row 2: Charts & Actions */}
            <div className="grid gap-4 lg:grid-cols-4">
              <RevenueChart />
              <QuickActions />
            </div>

            {/* Row 3: Recent Activity */}
            <div className="grid gap-4">
              <RecentCampaigns />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
