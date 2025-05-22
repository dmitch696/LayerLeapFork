"use client"

import Link from "next/link"
import { ArrowLeft, Bell, Clock, Zap, ExternalLink, Timer, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WaitlistsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header with back button */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Bell className="h-5 w-5 text-blue-400" />
                <h1 className="text-3xl font-bold text-white">Early Access Waitlists</h1>
              </div>
              <p className="text-slate-400 max-w-2xl">
                Join these exclusive waitlists to gain early access to promising projects and position yourself for
                potential rewards and airdrops.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="h-4 w-4" />
              <span>Last updated: May 16, 2025</span>
            </div>
          </div>
        </div>

        {/* Combined Hero Section with Process Steps */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-slate-700 mb-12">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>

          <div className="relative z-10 p-8">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">Limited Time Opportunity</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Fill the form → Get early access → Enjoy rewards
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 flex items-start">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Fill the form</h3>
                  <p className="text-sm text-slate-400">Takes just 1 minute each</p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 flex items-start">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Get early access</h3>
                  <p className="text-sm text-slate-400">Huge funding backing</p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 flex items-start">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-emerald-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Enjoy rewards</h3>
                  <p className="text-sm text-slate-400">100% free to join</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-full">
                <AlertCircle className="h-4 w-4" />
                <span className="font-medium">Complete waitlists as soon as possible</span>
              </div>
            </div>
          </div>
        </div>

        {/* All Waitlists */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">All Waitlists</h2>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
              <Clock className="h-4 w-4" />
              <span className="font-medium">Complete as soon as possible</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TREX Chain Waitlist Card */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">Layer 1</Badge>
                  <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
                    Hot 🔥
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">T</span>
                  </div>
                  <CardTitle className="text-xl">TREX Chain</CardTitle>
                </div>
                <CardDescription className="mt-2">
                  Purpose-built blockchain for entertainment and culture
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-sm text-green-400 font-medium mb-4">
                  <Zap className="h-4 w-4" />
                  <span>$17M Raised backed by Arbitrum</span>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Entertainment-focused blockchain</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Strong backing from Arbitrum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Cultural integration features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Takes just 1 minute to join</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300"
                  onClick={() => window.open("https://trex.xyz", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Join Waitlist
                </Button>
              </CardFooter>
            </Card>

            {/* Pipe Network Waitlist Card */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">Infrastructure</Badge>
                  <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
                    New
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-bold">P</span>
                  </div>
                  <CardTitle className="text-xl">Pipe Network</CardTitle>
                </div>
                <CardDescription className="mt-2">The decentralized CDN redefining data delivery</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-sm text-green-400 font-medium mb-4">
                  <Zap className="h-4 w-4" />
                  <span>$10M Raised</span>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Decentralized content delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Improved data transfer efficiency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Web3 infrastructure solution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Takes just 1 minute to join</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300"
                  onClick={() => window.open("https://airtable.com/apph9N7T0WlrPqnyc/pagSLmmUFNFbnKVZh/form", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Join Waitlist
                </Button>
              </CardFooter>
            </Card>

            {/* Pin AI Waitlist Card */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30">AI</Badge>
                  <Badge variant="outline" className="border-slate-500/50 text-slate-400">
                    Limited Spots
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">P</span>
                  </div>
                  <CardTitle className="text-xl">Pin AI</CardTitle>
                </div>
                <CardDescription className="mt-2">The First Personal AI Network</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-sm text-green-400 font-medium mb-4">
                  <Zap className="h-4 w-4" />
                  <span>$10M Raised</span>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Personal AI assistants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Decentralized AI infrastructure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Privacy-focused design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Takes just 1 minute to join</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300"
                  onClick={() => window.open("https://pinai.io", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Join Waitlist
                </Button>
              </CardFooter>
            </Card>

            {/* vLayer Waitlist Card */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden hover:border-amber-500/50 transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-amber-500 to-orange-500"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30">Infrastructure</Badge>
                  <Badge variant="outline" className="border-green-500/50 text-green-400">
                    Popular
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-amber-400 font-bold">V</span>
                  </div>
                  <CardTitle className="text-xl">vLayer</CardTitle>
                </div>
                <CardDescription className="mt-2">
                  Solidity "2.0" with trustless, verifiable data infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-sm text-green-400 font-medium mb-4">
                  <Zap className="h-4 w-4" />
                  <span>$10M Raised</span>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Advanced Solidity capabilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Powered by zero-knowledge proofs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Trustless data verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Takes just 1 minute to join</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-300"
                  onClick={() =>
                    window.open("https://gplxanr6y5w.typeform.com/to/ghUG09Cg?typeform-source=www.vlayer.xyz", "_blank")
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Join Waitlist
                </Button>
              </CardFooter>
            </Card>

            {/* Spheron Waitlist Card */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden hover:border-pink-500/50 transition-all duration-300 group">
              <div className="h-3 bg-gradient-to-r from-pink-500 to-rose-500"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge className="bg-pink-500/20 text-pink-400 hover:bg-pink-500/30">Cloud</Badge>
                  <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                    Growing Fast
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <span className="text-pink-400 font-bold">S</span>
                  </div>
                  <CardTitle className="text-xl">Spheron</CardTitle>
                </div>
                <CardDescription className="mt-2">A decentralized cloud platform for GPU resources</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-sm text-green-400 font-medium mb-4">
                  <Zap className="h-4 w-4" />
                  <span>$7M Raised</span>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Decentralized GPU marketplace</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Lease and monetize computing resources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Peer-to-peer network architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    <span>Takes just 1 minute to join</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 group-hover:shadow-lg group-hover:shadow-pink-500/20 transition-all duration-300"
                  onClick={() => window.open("https://tge.spheron.network/login", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Join Waitlist
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-slate-700 rounded-xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">
              1 minute each to join, huge funding, and free, why miss them?
            </h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              These projects have secured significant funding and are positioned for potential growth. Don't miss your
              chance to get in early with minimal effort.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-full">
              <Timer className="h-4 w-4" />
              <span className="font-medium">Complete waitlists as soon as possible</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Never Miss a Waitlist</h2>
              <p className="text-slate-400 mb-4">
                Subscribe to our newsletter to get notified about new waitlist opportunities before they fill up.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="relative bg-slate-800 rounded-full p-6">
                  <Bell className="h-12 w-12 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
