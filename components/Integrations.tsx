"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Database, Linkedin, Facebook, BarChart3, PieChart, Search, Ghost, Loader2 } from 'lucide-react'
import SideBar from '@/components/SideBar'
import DashboardHeader from '@/components/DashboardHeader'

const providers = [
    { name: 'BigQuery', icon: Database, color: 'bg-blue-500' },
    { name: 'LinkedIn Ads', icon: Linkedin, color: 'bg-blue-600' },
    { name: 'Facebook Ads', icon: Facebook, color: 'bg-blue-700' },
    { name: 'Google Analytics', icon: BarChart3, color: 'bg-green-500' },
    { name: 'Google Ads', icon: PieChart, color: 'bg-green-600' },
    { name: 'Google Search Console', icon: Search, color: 'bg-green-700' },
    { name: 'Snapchat Ads', icon: Ghost, color: 'bg-yellow-500' },
]

const Integrations = () => {
    const [connectedProviders, setConnectedProviders] = useState<Record<string, boolean>>({})
    const [activeProviders, setActiveProviders] = useState<Record<string, boolean>>({})
    const [connectingProvider, setConnectingProvider] = useState<string | null>(null)

    const handleConnect = async (providerName: string) => {
        setConnectingProvider(providerName)
        if (providerName === 'Google Analytics') {
            try {
                const response = await fetch('/api/google/analytics');
                const data = await response.json();
                if (data.url) {
                    window.location.href = data.url;
                } else {
                    console.error('No URL returned from the server');
                }

            } catch (error) {
                console.error('Error connecting to Google Analytics:', error);
            }
        } else {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setConnectedProviders(prev => ({ ...prev, [providerName]: true }))
            setActiveProviders(prev => ({ ...prev, [providerName]: true }))
        }
        setConnectingProvider(null)
    }

    const handleToggle = (providerName: string) => {
        setActiveProviders(prev => ({ ...prev, [providerName]: !prev[providerName] }))
    }

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
                    >
                        <Card className="mb-6 dark:bg-gray-800 dark:text-white">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                                    Connect Accounts
                                </CardTitle>
                                <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                                    Connect your accounts and create a personalized GPT
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {providers.map((provider, index) => (
                            <motion.div
                                key={provider.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="dark:bg-gray-800 dark:text-white overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader className={`flex flex-row items-center justify-between space-y-0 pb-2 ${provider.color} text-white`}>
                                        <CardTitle className="text-lg font-medium">
                                            {provider.name}
                                        </CardTitle>
                                        <provider.icon className="h-6 w-6" />
                                    </CardHeader>
                                    <CardContent className="pt-4">
                                        {connectedProviders[provider.name] ? (
                                            <div className="flex items-center justify-between space-x-2">
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    {activeProviders[provider.name] ? 'Active' : 'Inactive'}
                                                </span>
                                                <Switch
                                                    id={`${provider.name}-switch`}
                                                    checked={activeProviders[provider.name]}
                                                    onCheckedChange={() => handleToggle(provider.name)}
                                                    className="data-[state=checked]:bg-primary"
                                                />
                                            </div>
                                        ) : (
                                            <Button
                                                variant="outline"
                                                className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                                                onClick={() => handleConnect(provider.name)}
                                                disabled={connectingProvider === provider.name}
                                            >
                                                {connectingProvider === provider.name ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Connecting...
                                                    </>
                                                ) : (
                                                    'Connect'
                                                )}
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Integrations