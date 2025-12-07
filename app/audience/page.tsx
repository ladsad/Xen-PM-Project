"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Users, UserPlus, Star } from "lucide-react"

const segments = [
    { name: "VIP Customers", count: "1,240", growth: "+12%", color: "bg-purple-100 text-purple-700" },
    { name: "Big Spenders", count: "850", growth: "+5%", color: "bg-green-100 text-green-700" },
    { name: "At Risk", count: "2,100", growth: "-2%", color: "bg-red-100 text-red-700" },
    { name: "New Signups", count: "450", growth: "+24%", color: "bg-blue-100 text-blue-700" },
]

const initialCustomers = [
    { name: "Aditi Sharma", email: "aditi.s@example.com", tier: "Platinum", points: "4,500", ltv: "$1,200", lastVisit: "2 days ago" },
    { name: "Rahul Verma", email: "rahul.v@example.com", tier: "Gold", points: "2,100", ltv: "$850", lastVisit: "1 week ago" },
    { name: "Sneha Gupta", email: "sneha.g@example.com", tier: "Silver", points: "800", ltv: "$320", lastVisit: "Yesterday" },
    { name: "Vikram Singh", email: "vikram.s@example.com", tier: "Bronze", points: "150", ltv: "$120", lastVisit: "3 weeks ago" },
    { name: "Priya Patel", email: "priya.p@example.com", tier: "Gold", points: "2,350", ltv: "$900", lastVisit: "5 days ago" },
]

export default function AudiencePage() {
    const [customers, setCustomers] = useState(initialCustomers)
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [newCustomer, setNewCustomer] = useState({ name: "", email: "" })

    const handleAddCustomer = () => {
        if (newCustomer.name && newCustomer.email) {
            setCustomers([
                {
                    ...newCustomer,
                    tier: "Bronze",
                    points: "0",
                    ltv: "$0",
                    lastVisit: "Just now"
                },
                ...customers
            ])
            setIsAddOpen(false)
            setNewCustomer({ name: "", email: "" })
        }
    }

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="mx-auto max-w-7xl space-y-6">

                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Audience</h1>
                                <p className="text-gray-500">Segment your customers and view profiles.</p>
                            </div>
                            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                                <DialogTrigger asChild>
                                    <Button className="bg-blue-600 hover:bg-blue-700">
                                        <UserPlus className="mr-2 h-4 w-4" />
                                        Add Customer
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Add New Customer</DialogTitle>
                                        <DialogDescription>
                                            Manually add a customer to your database.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Name
                                            </Label>
                                            <Input
                                                id="name"
                                                value={newCustomer.name}
                                                onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="email" className="text-right">
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                value={newCustomer.email}
                                                onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                                                className="col-span-3"
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" onClick={handleAddCustomer}>Save Customer</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>

                        {/* Segments Grid */}
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {segments.map((segment) => (
                                <Card key={segment.name}>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium text-gray-500">{segment.name}</CardTitle>
                                        <Users className="h-4 w-4 text-gray-400" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{segment.count}</div>
                                        <div className={`text-xs font-medium mt-1 inline-block px-2 py-0.5 rounded ${segment.color}`}>
                                            {segment.growth}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Customer Table */}
                        <Card>
                            <CardHeader>
                                <CardTitle>All Customers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Loyalty Tier</TableHead>
                                            <TableHead>Points Balance</TableHead>
                                            <TableHead>LTV</TableHead>
                                            <TableHead>Last Visit</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {customers.map((customer) => (
                                            <TableRow key={customer.email} className="hover:bg-gray-50 cursor-pointer">
                                                <TableCell className="font-medium">{customer.name}</TableCell>
                                                <TableCell>{customer.email}</TableCell>
                                                <TableCell>
                                                    <Badge variant="outline" className="flex w-fit items-center gap-1">
                                                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                                                        {customer.tier}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>{customer.points}</TableCell>
                                                <TableCell>{customer.ltv}</TableCell>
                                                <TableCell>{customer.lastVisit}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>

                    </div>
                </main>
            </div>
        </div>
    )
}
