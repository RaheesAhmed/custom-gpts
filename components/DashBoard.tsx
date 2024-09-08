"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BarChart2, Users, Share2, Settings, Bell, Search, DollarSign } from 'lucide-react'
import SideBar from '@/components/SideBar'
import DashboardHeader from '@/components/DashboardHeader'

const dummyChartData = [
    { name: 'Jan', Google: 4000, Facebook: 2400, Shopify: 2400 },
    { name: 'Feb', Google: 3000, Facebook: 1398, Shopify: 2210 },
    { name: 'Mar', Google: 2000, Facebook: 9800, Shopify: 2290 },
    { name: 'Apr', Google: 2780, Facebook: 3908, Shopify: 2000 },
    { name: 'May', Google: 1890, Facebook: 4800, Shopify: 2181 },
    { name: 'Jun', Google: 2390, Facebook: 3800, Shopify: 2500 },
    { name: 'Jul', Google: 3490, Facebook: 4300, Shopify: 2100 },
]

const statCards = [
    { title: 'Total Revenue', icon: DollarSign, value: '$45,231.89', change: '+20.1%' },
    { title: 'Active Users', icon: Users, value: '+2,350', change: '+180.1%' },
    { title: 'Connected Platforms', icon: Share2, value: '3', subtext: 'Google, Facebook, Shopify' },
]

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            <SideBar />
            <main className="flex-1 overflow-y-auto">
                <DashboardHeader />
                <div className="p-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
                    >
                        {statCards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="dark:bg-gray-800 dark:text-white hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                                        <card.icon className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{card.value}</div>
                                        <p className="text-xs text-muted-foreground">
                                            {card.change ? (
                                                <span className={card.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                                                    {card.change} from last month
                                                </span>
                                            ) : (
                                                card.subtext
                                            )}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Card className="col-span-4 dark:bg-gray-800 dark:text-white">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-xl font-bold">Marketing Performance Overview</CardTitle>
                                <Button variant="outline" size="sm">
                                    <BarChart2 className="mr-2 h-4 w-4" />
                                    Download Report
                                </Button>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <ResponsiveContainer width="100%" height={350}>
                                    <BarChart data={dummyChartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                border: 'none',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                            }}
                                        />
                                        <Legend />
                                        <Bar dataKey="Google" fill="#4285F4" />
                                        <Bar dataKey="Facebook" fill="#3b5998" />
                                        <Bar dataKey="Shopify" fill="#96bf48" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard

