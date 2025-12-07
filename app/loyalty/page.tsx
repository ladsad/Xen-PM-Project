"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Gift, Crown, Settings } from "lucide-react"

export default function LoyaltyPage() {
    const [goldMultiplier, setGoldMultiplier] = useState("1.5")

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="mx-auto max-w-7xl space-y-6">

                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Loyalty Program</h1>
                                <p className="text-gray-500">Manage tiers, points, and rewards.</p>
                            </div>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Program Settings
                                    </Button>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Program Settings</SheetTitle>
                                        <SheetDescription>
                                            Configure global loyalty rules and tier benefits.
                                        </SheetDescription>
                                    </SheetHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="space-y-2">
                                            <h3 className="font-medium">Tier Multipliers</h3>
                                            <div className="grid grid-cols-2 items-center gap-4">
                                                <Label htmlFor="silver">Silver</Label>
                                                <Input id="silver" value="1.0" disabled />
                                            </div>
                                            <div className="grid grid-cols-2 items-center gap-4">
                                                <Label htmlFor="gold">Gold</Label>
                                                <Input
                                                    id="gold"
                                                    value={goldMultiplier}
                                                    onChange={(e) => setGoldMultiplier(e.target.value)}
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 items-center gap-4">
                                                <Label htmlFor="platinum">Platinum</Label>
                                                <Input id="platinum" value="2.0" />
                                            </div>
                                        </div>
                                    </div>
                                    <SheetFooter>
                                        <SheetClose asChild>
                                            <Button type="submit">Save Changes</Button>
                                        </SheetClose>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>

                        {/* Tiers Overview */}
                        <div className="grid gap-6 md:grid-cols-3">
                            {/* Silver Tier */}
                            <Card className="border-t-4 border-t-gray-400">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Crown className="h-5 w-5 text-gray-400" />
                                        Silver
                                    </CardTitle>
                                    <CardDescription>Entry level tier</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold mb-2">12,500</div>
                                    <p className="text-sm text-gray-500 mb-4">Members</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Points Multiplier</span>
                                            <span className="font-medium">1x</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Birthday Gift</span>
                                            <span className="font-medium">No</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Gold Tier */}
                            <Card className="border-t-4 border-t-yellow-500 bg-yellow-50/50">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-yellow-700">
                                        <Crown className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                                        Gold
                                    </CardTitle>
                                    <CardDescription>Spend {'>'} $500</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold mb-2 text-yellow-900">4,200</div>
                                    <p className="text-sm text-yellow-700 mb-4">Members</p>
                                    <div className="space-y-2 text-sm text-yellow-800">
                                        <div className="flex justify-between">
                                            <span>Points Multiplier</span>
                                            <span className="font-medium">{goldMultiplier}x</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Birthday Gift</span>
                                            <span className="font-medium">Yes</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Platinum Tier */}
                            <Card className="border-t-4 border-t-purple-600 bg-purple-50/50">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-purple-700">
                                        <Crown className="h-5 w-5 fill-purple-600 text-purple-600" />
                                        Platinum
                                    </CardTitle>
                                    <CardDescription>Spend {'>'} $2000</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold mb-2 text-purple-900">850</div>
                                    <p className="text-sm text-purple-700 mb-4">Members</p>
                                    <div className="space-y-2 text-sm text-purple-800">
                                        <div className="flex justify-between">
                                            <span>Points Multiplier</span>
                                            <span className="font-medium">2x</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Birthday Gift</span>
                                            <span className="font-medium">Premium</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Rewards Catalog */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Active Rewards</h2>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                {[
                                    { name: "$10 Off Voucher", points: "500 pts", claimed: "1.2k" },
                                    { name: "Free Shipping", points: "200 pts", claimed: "3.4k" },
                                    { name: "Tote Bag", points: "1000 pts", claimed: "450" },
                                    { name: "Mystery Gift", points: "1500 pts", claimed: "120" },
                                ].map((reward) => (
                                    <Card key={reward.name}>
                                        <CardHeader className="pb-2">
                                            <Gift className="h-8 w-8 text-blue-500 mb-2" />
                                            <CardTitle className="text-base">{reward.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex justify-between items-center">
                                                <Badge variant="secondary">{reward.points}</Badge>
                                                <span className="text-xs text-gray-500">{reward.claimed} claimed</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}
