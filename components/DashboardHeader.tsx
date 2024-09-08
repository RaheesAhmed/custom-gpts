import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Bell } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'

const DashboardHeader = () => {
    return (
        <header className="bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between px-8 py-5">
                <h6 className="text-2xl font-semibold text-gray-800 dark:text-white">Dashboard</h6>
                <div className="flex items-center space-x-4">
                    <DarkModeToggle />
                    <Button variant="ghost" size="icon" className="text-gray-600 dark:text-white">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="h-full w-full object-cover rounded-full" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader
