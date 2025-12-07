import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Mail, Smartphone } from "lucide-react"

const campaigns = [
    {
        name: "Diwali Mega Sale",
        channel: "WhatsApp",
        status: "Live",
        sentTo: "12,500",
        revenue: "$45,200",
        roi: "18x",
    },
    {
        name: "Winter Collection Early Access",
        channel: "Email",
        status: "Completed",
        sentTo: "45,000",
        revenue: "$12,800",
        roi: "8x",
    },
    {
        name: "Loyalty Tier Upgrade",
        channel: "SMS",
        status: "Completed",
        sentTo: "2,300",
        revenue: "$5,600",
        roi: "12x",
    },
    {
        name: "Abandoned Cart Recovery",
        channel: "WhatsApp",
        status: "Live",
        sentTo: "Auto",
        revenue: "$8,900",
        roi: "22x",
    },
    {
        name: "Weekend Flash Sale",
        channel: "SMS",
        status: "Draft",
        sentTo: "-",
        revenue: "-",
        roi: "-",
    },
]

export function RecentCampaigns() {
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Recent Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Campaign Name</TableHead>
                            <TableHead>Channel</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Sent To</TableHead>
                            <TableHead>Revenue</TableHead>
                            <TableHead>ROI</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {campaigns.map((campaign) => (
                            <TableRow key={campaign.name}>
                                <TableCell className="font-medium">{campaign.name}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        {campaign.channel === "WhatsApp" && <MessageSquare className="h-4 w-4 text-green-500" />}
                                        {campaign.channel === "Email" && <Mail className="h-4 w-4 text-blue-500" />}
                                        {campaign.channel === "SMS" && <Smartphone className="h-4 w-4 text-purple-500" />}
                                        {campaign.channel}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            campaign.status === "Live"
                                                ? "default"
                                                : campaign.status === "Completed"
                                                    ? "secondary"
                                                    : "outline"
                                        }
                                        className={
                                            campaign.status === "Live" ? "bg-green-600 hover:bg-green-700" : ""
                                        }
                                    >
                                        {campaign.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{campaign.sentTo}</TableCell>
                                <TableCell>{campaign.revenue}</TableCell>
                                <TableCell className="font-bold text-green-600">{campaign.roi}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
