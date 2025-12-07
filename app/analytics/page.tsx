"use client"

import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"

const channelData = [
    { name: "WhatsApp", roi: 18, spend: 4000, revenue: 72000 },
    { name: "SMS", roi: 12, spend: 3000, revenue: 36000 },
    { name: "Email", roi: 8, spend: 1500, revenue: 12000 },
    { name: "Facebook", roi: 4, spend: 5000, revenue: 20000 },
]

const attributionData = [
    { name: "Direct", value: 400 },
    { name: "Social", value: 300 },
    { name: "Email", value: 300 },
    { name: "Organic", value: 200 },
]

export default function AnalyticsPage() {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="mx-auto max-w-7xl space-y-6">

                        <div className="mb-8">
                            <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
                            <p className="text-gray-500">Deep dive into channel performance and ROI.</p>
                        </div>

                        {/* Channel ROI Chart */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Channel Performance (ROI)</CardTitle>
                                <CardDescription>Return on Ad Spend by Channel</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={350}>
                                    <BarChart data={channelData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="revenue" fill="#16a34a" name="Revenue ($)" radius={[4, 4, 0, 0]} />
                                        <Bar dataKey="spend" fill="#94a3b8" name="Spend ($)" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Attribution Table (Mock) */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Attribution Breakdown</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="rounded-md border">
                                    <div className="grid grid-cols-3 p-4 font-medium bg-gray-50 border-b">
                                        <div>Source</div>
                                        <div className="text-right">Conversions</div>
                                        <div className="text-right">Value</div>
                                    </div>
                                    {[
                                        { source: "WhatsApp Blast", conv: "1,240", val: "$45,000" },
                                        { source: "Abandoned Cart Email", conv: "850", val: "$22,000" },
                                        { source: "Loyalty SMS", conv: "620", val: "$15,500" },
                                        { source: "Instagram Ad", conv: "410", val: "$8,200" },
                                    ].map((row) => (
                                        <div key={row.source} className="grid grid-cols-3 p-4 border-b last:border-0 hover:bg-gray-50">
                                            <div>{row.source}</div>
                                            <div className="text-right">{row.conv}</div>
                                            <div className="text-right">{row.val}</div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </main>
            </div>
        </div>
    )
}
