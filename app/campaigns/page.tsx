"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Plus, Search, Filter, MessageSquare, Mail, Smartphone } from "lucide-react"

const initialCampaigns = [
    { id: 1, name: "Diwali Mega Sale", channel: "WhatsApp", status: "Live", sent: "12,500", openRate: "68%", revenue: "$45,200" },
    { id: 2, name: "Winter Collection Early Access", channel: "Email", status: "Completed", sent: "45,000", openRate: "24%", revenue: "$12,800" },
    { id: 3, name: "Loyalty Tier Upgrade", channel: "SMS", status: "Completed", sent: "2,300", openRate: "92%", revenue: "$5,600" },
    { id: 4, name: "Abandoned Cart Recovery", channel: "WhatsApp", status: "Live", sent: "Auto", openRate: "75%", revenue: "$8,900" },
    { id: 5, name: "Weekend Flash Sale", channel: "SMS", status: "Draft", sent: "-", openRate: "-", revenue: "-" },
    { id: 6, name: "New User Welcome", channel: "Email", status: "Live", sent: "Auto", openRate: "45%", revenue: "$2,100" },
    { id: 7, name: "Winback Campaign", channel: "SMS", status: "Draft", sent: "-", openRate: "-", revenue: "-" },
]

export default function CampaignsPage() {
    const [filter, setFilter] = useState("all")
    const [campaigns, setCampaigns] = useState(initialCampaigns)
    const [selectedCampaign, setSelectedCampaign] = useState<typeof initialCampaigns[0] | null>(null)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

    const filteredCampaigns = campaigns.filter((campaign) => {
        if (filter === "all") return true
        return campaign.status.toLowerCase() === filter
    })

    const handleEditClick = (campaign: typeof initialCampaigns[0]) => {
        setSelectedCampaign(campaign)
        setIsEditDialogOpen(true)
    }

    const handleChannelChange = (value: string) => {
        if (selectedCampaign) {
            const updatedCampaigns = campaigns.map((c) =>
                c.id === selectedCampaign.id ? { ...c, channel: value } : c
            )
            setCampaigns(updatedCampaigns)
            setSelectedCampaign({ ...selectedCampaign, channel: value })
        }
    }

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="mx-auto max-w-7xl space-y-6">

                        {/* Page Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
                                <p className="text-gray-500">Manage your multi-channel marketing campaigns.</p>
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                <Plus className="mr-2 h-4 w-4" />
                                Create Campaign
                            </Button>
                        </div>

                        {/* Filters & Controls */}
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2 flex-1 max-w-md">
                                <div className="relative w-full">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                                    <Input
                                        placeholder="Search campaigns..."
                                        className="pl-8 bg-white"
                                    />
                                </div>
                                <Button variant="outline" size="icon">
                                    <Filter className="h-4 w-4 text-gray-500" />
                                </Button>
                            </div>
                        </div>

                        {/* Campaign List */}
                        <Tabs defaultValue="all" className="w-full" onValueChange={setFilter}>
                            <TabsList className="bg-white border">
                                <TabsTrigger value="all">All Campaigns</TabsTrigger>
                                <TabsTrigger value="live">Live</TabsTrigger>
                                <TabsTrigger value="draft">Draft</TabsTrigger>
                                <TabsTrigger value="completed">Completed</TabsTrigger>
                            </TabsList>

                            <TabsContent value={filter} className="mt-4">
                                <div className="rounded-md border bg-white">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Campaign Name</TableHead>
                                                <TableHead>Channel</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Sent To</TableHead>
                                                <TableHead>Open Rate</TableHead>
                                                <TableHead className="text-right">Revenue</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {filteredCampaigns.map((campaign) => (
                                                <TableRow
                                                    key={campaign.id}
                                                    className="hover:bg-gray-50 cursor-pointer"
                                                    onClick={() => handleEditClick(campaign)}
                                                >
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
                                                    <TableCell>{campaign.sent}</TableCell>
                                                    <TableCell>{campaign.openRate}</TableCell>
                                                    <TableCell className="text-right font-medium">{campaign.revenue}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </TabsContent>
                        </Tabs>

                        {/* Edit Campaign Dialog */}
                        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Edit Campaign</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your campaign settings here.
                                    </DialogDescription>
                                </DialogHeader>
                                {selectedCampaign && (
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Name
                                            </Label>
                                            <Input id="name" value={selectedCampaign.name} className="col-span-3" readOnly />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="channel" className="text-right">
                                                Channel
                                            </Label>
                                            <div className="col-span-3">
                                                <Select
                                                    defaultValue={selectedCampaign.channel}
                                                    onValueChange={handleChannelChange}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select channel" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                                                        <SelectItem value="SMS">SMS</SelectItem>
                                                        <SelectItem value="Email">Email</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <DialogFooter>
                                    <Button type="submit" onClick={() => setIsEditDialogOpen(false)}>Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                </main>
            </div>
        </div>
    )
}
