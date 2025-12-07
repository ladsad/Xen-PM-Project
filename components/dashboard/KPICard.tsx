import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"

interface KPICardProps {
    title: string
    value: string
    trend: string
    trendDirection: "up" | "down" | "neutral"
    context: string
    icon?: React.ReactNode
}

export function KPICard({ title, value, trend, trendDirection, context, icon }: KPICardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
                {icon && <div className="text-gray-400">{icon}</div>}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <div className="flex items-center gap-2 pt-1 text-xs">
                    {trendDirection === "up" && <ArrowUpRight className="h-4 w-4 text-green-500" />}
                    {trendDirection === "down" && <ArrowDownRight className="h-4 w-4 text-red-500" />}
                    {trendDirection === "neutral" && <Minus className="h-4 w-4 text-gray-500" />}
                    <span
                        className={
                            trendDirection === "up"
                                ? "text-green-500"
                                : trendDirection === "down"
                                    ? "text-red-500"
                                    : "text-gray-500"
                        }
                    >
                        {trend}
                    </span>
                    <span className="text-gray-500">{context}</span>
                </div>
            </CardContent>
        </Card>
    )
}
