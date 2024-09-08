import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-100 dark:bg-gray-800 mt-16 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="font-bold mb-4">Chatbot</h4>
                            <p className="text-sm">Empowering conversations with AI</p>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-4">Product</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm hover:underline">Features</a></li>
                                <li><a href="#" className="text-sm hover:underline">Pricing</a></li>
                                <li><a href="#" className="text-sm hover:underline">API</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-4">Company</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm hover:underline">About Us</a></li>
                                <li><a href="#" className="text-sm hover:underline">Careers</a></li>
                                <li><a href="#" className="text-sm hover:underline">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-4">Legal</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="text-sm hover:underline">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm">
                        © 2023 Chatbot. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
