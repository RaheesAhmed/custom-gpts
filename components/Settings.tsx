"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Lock, User, Moon, Sun } from 'lucide-react'
import SideBar from '@/components/SideBar'
import DashboardHeader from '@/components/DashboardHeader'
import { useTheme } from "next-themes"

const Settings = () => {
    const { theme, setTheme } = useTheme()
    const [notifications, setNotifications] = useState(true)

    return (
        <div className="flex h-screen w-full bg-gray-100 dark:bg-gray-900">
            <SideBar />

            <main className="flex-1 overflow-y-auto">
                <DashboardHeader />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-6"
                >
                    <Card className="mb-6 dark:bg-gray-800 dark:text-white">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                                Settings
                            </CardTitle>
                        </CardHeader>
                    </Card>

                    <Tabs defaultValue="account" className="space-y-6">
                        <TabsList className="grid w-full grid-cols-3 mb-6">
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="preferences">Preferences</TabsTrigger>
                            <TabsTrigger value="security">Security</TabsTrigger>
                        </TabsList>

                        <TabsContent value="account">
                            <Card className="dark:bg-gray-800 dark:text-white">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <User className="mr-2" /> Account Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center space-x-4 mb-6">
                                        <Avatar className="h-20 w-20">
                                            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <Button variant="outline">Change Avatar</Button>
                                    </div>
                                    <form className="space-y-4">
                                        <div>
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" placeholder="Your Name" className="dark:bg-gray-700 dark:text-white" />
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="your@email.com" className="dark:bg-gray-700 dark:text-white" />
                                        </div>
                                        <Button className="w-full">Update Account</Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="preferences">
                            <Card className="dark:bg-gray-800 dark:text-white">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Bell className="mr-2" /> Preferences
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Label htmlFor="notifications" className="text-base font-medium">Email Notifications</Label>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Receive email about your account activity</p>
                                        </div>
                                        <Switch
                                            id="notifications"
                                            checked={notifications}
                                            onCheckedChange={setNotifications}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Label htmlFor="darkMode" className="text-base font-medium">Dark Mode</Label>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Switch between light and dark themes</p>
                                        </div>
                                        <Switch
                                            id="darkMode"
                                            checked={theme === 'dark'}
                                            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                                            icon={theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="security">
                            <Card className="dark:bg-gray-800 dark:text-white">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Lock className="mr-2" /> Security
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-4">
                                        <div>
                                            <Label htmlFor="currentPassword">Current Password</Label>
                                            <Input id="currentPassword" type="password" className="dark:bg-gray-700 dark:text-white" />
                                        </div>
                                        <div>
                                            <Label htmlFor="newPassword">New Password</Label>
                                            <Input id="newPassword" type="password" className="dark:bg-gray-700 dark:text-white" />
                                        </div>
                                        <div>
                                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                            <Input id="confirmPassword" type="password" className="dark:bg-gray-700 dark:text-white" />
                                        </div>
                                        <Button className="w-full">Change Password</Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </main>
        </div>
    )
}

export default Settings