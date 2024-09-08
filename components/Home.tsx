import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Zap, Shield, Users } from "lucide-react"
import Footer from "./Footer"

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800" >
            <header className="container mx-auto px-4 py-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Custom GPTs</h1>
                <nav>
                    <Button variant="ghost">Login</Button>
                    <Button>Sign Up</Button>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-12">
                <section className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Create Powerful GPTs with Ease</h2>
                    <p className="text-xl mb-8">Connect your account and start building intelligent chatbots today</p>
                    <Button size="lg" className="text-lg px-8">
                        Connect Account <ArrowRight className="ml-2" />
                    </Button>
                </section>

                <section className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        { title: "Intelligent Responses", icon: Bot, description: "Leverage GPT for human-like conversations" },
                        { title: "Quick Setup", icon: Zap, description: "Create and deploy chatbots in minutes" },
                        { title: "Secure & Scalable", icon: Shield, description: "Enterprise-grade security and performance" },
                    ].map((feature, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <feature.icon className="w-10 h-10 mb-2 text-primary" />
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="mb-16">
                    <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: 1, title: "Connect Your Account", description: "Link your GPT account to our platform" },
                            { step: 2, title: "Customize Your GPT", description: "Define your chatbot's personality and knowledge base" },
                            { step: 3, title: "Deploy and Engage", description: "Launch your GPT and start interacting with users" },
                        ].map((step, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mb-2">
                                        {step.step}
                                    </div>
                                    <CardTitle>{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{step.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">What Our Users Say</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <blockquote className="italic">
                                "Chatbot has revolutionized how we interact with our customers. The GPT integration is seamless and incredibly powerful."
                            </blockquote>
                            <div className="mt-4 flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gray-300 mr-4" />
                                <div>
                                    <p className="font-semibold">Jane Doe</p>
                                    <p className="text-sm text-gray-500">CEO, Tech Innovators</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <section className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="mb-8">Create your first GPT-powered chatbot today and transform your customer interactions.</p>
                    <Button size="lg">Create Your GPT Now</Button>
                </section>
            </main>

            <Footer />
        </div >
    )
}
export default Home