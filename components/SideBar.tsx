import { BarChart2, Settings, Share2 } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from "next-themes";

const SideBar = () => {
    const pathname = usePathname()
    const { theme } = useTheme();

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
                <div className="flex items-center justify-center h-20 border-b dark:border-gray-700">
                    <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">MarketConnect</h1>
                </div>
                <nav className="mt-6">
                    <Link href="/dashboard" className={`flex items-center px-6 py-2 mt-4 ${pathname === '/' ? 'text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white'}`}>
                        <BarChart2 className="h-5 w-5 mr-3" />
                        <span>Dashboard</span>
                    </Link>
                    <Link href="/integrations" className={`flex items-center px-6 py-2 mt-4 ${pathname === '/integrations' ? 'text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white'}`}>
                        <Share2 className="h-5 w-5 mr-3" />
                        <span>Integrations</span>
                    </Link>
                    <Link href="/settings" className={`flex items-center px-6 py-2 mt-4 ${pathname === '/settings' ? 'text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white'}`}>
                        <Settings className="h-5 w-5 mr-3" />
                        <span>Settings</span>
                    </Link>
                </nav>
            </aside>
        </div>
    )
}

export default SideBar
