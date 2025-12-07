import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Users, Download, AlertTriangle, TrendingDown } from "lucide-react"

export function QuickActions() {
    return (
        <div className="col-span-4 lg:col-span-1 grid gap-4">
            {/* Quick Actions Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                    <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                        <Rocket className="mr-2 h-4 w-4" />
                        Launch Blast
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                        <Users className="mr-2 h-4 w-4" />
                        View Segments
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                        <Download className="mr-2 h-4 w-4" />
                        Export Report
                    </Button>
                </CardContent>
            </Card>

            {/* Alerts Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-red-600 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Needs Attention
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="flex items-start gap-3 rounded-md bg-red-50 p-3 text-sm">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                        <div>
                            <p className="font-medium text-red-900">Inventory Low</p>
                            <p className="text-red-700">Summer Dress (SKU-123) is below 10 units.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-md bg-orange-50 p-3 text-sm">
                        <TrendingDown className="h-4 w-4 text-orange-600 mt-0.5" />
                        <div>
                            <p className="font-medium text-orange-900">Engagement Drop</p>
                            <p className="text-orange-700">'Winter Sale' email open rate -5%.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
