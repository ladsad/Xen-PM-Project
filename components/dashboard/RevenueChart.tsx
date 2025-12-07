"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
    { date: "Nov 01", revenue: 4000, spend: 2400 },
    { date: "Nov 05", revenue: 3000, spend: 1398 },
    { date: "Nov 10", revenue: 2000, spend: 9800 },
    { date: "Nov 15", revenue: 2780, spend: 3908 },
    { date: "Nov 20", revenue: 1890, spend: 4800 },
    { date: "Nov 25", revenue: 2390, spend: 3800 },
    { date: "Nov 30", revenue: 3490, spend: 4300 },
]

export function RevenueChart() {
    return (
        <Card className="col-span-4 lg:col-span-3">
            <CardHeader>
                <CardTitle>Revenue vs. Spend (Last 30 Days)</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="date"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#16a34a" // Green-600
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                            name="Revenue"
                        />
                        <Line
                            type="monotone"
                            dataKey="spend"
                            stroke="#94a3b8" // Slate-400
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            name="Ad Spend"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
