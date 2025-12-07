import { Search, Bell, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
    return (
        <header className="flex h-16 items-center gap-4 border-b bg-white px-6">
            <div className="flex flex-1 items-center gap-4">
                <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                        type="search"
                        placeholder="Search campaigns, customers..."
                        className="w-full bg-gray-50 pl-8"
                    />
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5 text-gray-500" />
                            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                            <span className="font-medium text-red-600">Inventory Low</span>
                            <span className="text-sm text-gray-500">Summer Dress (SKU-123) is below 10 units.</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                            <span className="font-medium text-orange-600">Engagement Drop</span>
                            <span className="text-sm text-gray-500">'Winter Sale' email open rate -5%.</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>PM</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}
