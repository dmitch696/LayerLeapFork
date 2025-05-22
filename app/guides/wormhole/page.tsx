"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Copy,
  ExternalLink,
  Globe,
  Layers,
  Lightbulb,
  Lock,
  Shield,
  Timer,
  Wallet,
  Check,
  ChevronDown,
  Sparkles,
  Zap,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { motion, AnimatePresence } from "framer-motion"
import { SybilChecklist, type ChecklistCategory } from "@/components/sybil-checklist"

export default function WormholeGuidePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [copied, setCopied] = useState(false)
  const [completedTasks, setCompletedTasks] = useState<string[]>([])
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([])

  // Load completed tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem("wormhole-completed-tasks")
    if (savedTasks) {
      try {
        setCompletedTasks(JSON.parse(savedTasks))
      } catch (e) {
        console.error("Error parsing saved tasks:", e)
      }
    }
  }, [])

  // Save completed tasks to localStorage
  useEffect(() => {
    localStorage.setItem("wormhole-completed-tasks", JSON.stringify(completedTasks))
  }, [completedTasks])

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) => (prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]))
  }

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs((prev) => (prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Checklist categories for the Sybil Checklist component
  const checklistCategories: ChecklistCategory[] = [
    {
      name: "Wallet Setup",
      color: "#a78bfa",
      items: [
        {
          id: "wallet-1",
          category: "wallet",
          title: "Create non-custodial wallet",
          description: "Use MetaMask, Phantom, or other non-custodial wallets",
        },
        {
          id: "wallet-2",
          category: "wallet",
          title: "Fund wallet with ETH/SOL",
          description: "Have enough for gas fees and bridging",
        },
        {
          id: "wallet-3",
          category: "wallet",
          title: "Set up multiple wallets (optional)",
          description: "For advanced users wanting to maximize rewards",
        },
      ],
    },
    {
      name: "Bridging Activity",
      color: "#f472b6",
      items: [
        {
          id: "bridge-1",
          category: "bridge",
          title: "Bridge ETH from Ethereum to another chain",
          description: "First transaction on Mayan Finance",
        },
        {
          id: "bridge-2",
          category: "bridge",
          title: "Bridge assets back to Ethereum",
          description: "Complete a round-trip transaction",
        },
        {
          id: "bridge-3",
          category: "bridge",
          title: "Bridge between non-Ethereum chains",
          description: "e.g., Arbitrum to Solana or Optimism to Base",
        },
        {
          id: "bridge-4",
          category: "bridge",
          title: "Use Limit Orders feature",
          description: "Advanced feature on Mayan Finance",
        },
      ],
    },
    {
      name: "Ecosystem Exploration",
      color: "#67e8f9",
      items: [
        {
          id: "eco-1",
          category: "ecosystem",
          title: "Try L2Marathon for NFT bridging",
          description: "Bridge NFTs across chains",
        },
        {
          id: "eco-2",
          category: "ecosystem",
          title: "Use Wombat Exchange",
          description: "Another Wormhole-powered application",
        },
        {
          id: "eco-3",
          category: "ecosystem",
          title: "Stake PYTH tokens",
          description: "Previous airdrop winners received ~$3k for staking",
        },
        {
          id: "eco-4",
          category: "ecosystem",
          title: "Try at least 3 different Wormhole dApps",
          description: "Explore the broader ecosystem",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?key=v0pxj')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/90"></div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center gap-3 mb-6">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-3 py-1">
                Strategy Guide
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-3 py-1">
                Airdrop Farming
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Wormhole + Mayan Finance <br className="hidden md:block" />
              <span className="text-purple-300">Airdrop Strategy</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              A comprehensive guide to positioning yourself for a potential second Wormhole airdrop and the Mayan
              Finance token launch.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-white/90 px-6">
                <Link href="https://mayan.finance" target="_blank" rel="noopener noreferrer">
                  Visit Mayan Finance <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="border-white/30 text-white hover:bg-white/10 px-6">
                <Link href="https://wormhole.com" target="_blank" rel="noopener noreferrer">
                  Explore Wormhole <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#111827" className="w-full h-auto">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-purple-800/30 overflow-hidden relative h-full">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-purple-300 font-medium">Wormhole Valuation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-white">$1.1B+</p>
                <p className="text-sm text-gray-400">Suggesting significant future incentives</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-purple-800/30 overflow-hidden relative h-full">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-purple-300 font-medium">First Airdrop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-white">April 2024</p>
                <p className="text-sm text-gray-400">W token launch date</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-purple-800/30 overflow-hidden relative h-full">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-purple-300 font-medium">Avg. Bridge Cost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-white">~$1</p>
                <p className="text-sm text-gray-400">Per transaction on Mayan Finance</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-purple-800/30 bg-gray-900 shadow-md">
                <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 pb-4">
                  <CardTitle className="text-white">Quick Links</CardTitle>
                  <CardDescription className="text-gray-400">Essential resources</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-purple-300">Bridges</h3>
                    <div className="space-y-1">
                      {[
                        { name: "Mayan Finance", url: "https://mayan.finance/" },
                        { name: "Portal Bridge", url: "https://portalbridge.com/" },
                        { name: "Allbridge", url: "https://allbridge.io/" },
                        { name: "Wombat Exchange", url: "https://app.wombat.exchange/" },
                      ].map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 text-sm rounded-md text-gray-300 hover:bg-gray-800 transition-colors"
                        >
                          <span>{link.name}</span>
                          <ExternalLink className="h-3 w-3 text-purple-400" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-purple-300">Other Tools</h3>
                    <div className="space-y-1">
                      {[
                        { name: "L2Marathon (NFT Bridge)", url: "https://l2marathon.com/" },
                        { name: "Carrier", url: "https://www.carrier.so/" },
                        { name: "Pyth Staking", url: "https://staking.pyth.network/" },
                      ].map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 text-sm rounded-md text-gray-300 hover:bg-gray-800 transition-colors"
                        >
                          <span>{link.name}</span>
                          <ExternalLink className="h-3 w-3 text-purple-400" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-purple-700/50 text-purple-300 hover:bg-purple-900/50 hover:text-purple-200"
                    >
                      <a
                        href="https://wormhole.com/ecosystem/multichain-apps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <span>All Wormhole dApps</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-xl bg-gray-900 border border-purple-800/30 shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Airdrop Checklist</h3>
                <p className="text-gray-400 mb-4">Track your progress</p>
                <SybilChecklist categories={checklistCategories} />
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-3 mb-6 bg-gray-800 p-1">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-purple-900 data-[state=active]:text-white data-[state=active]:shadow-sm text-gray-300"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="strategy"
                    className="data-[state=active]:bg-purple-900 data-[state=active]:text-white data-[state=active]:shadow-sm text-gray-300"
                  >
                    Strategy
                  </TabsTrigger>
                  <TabsTrigger
                    value="checklist"
                    className="data-[state=active]:bg-purple-900 data-[state=active]:text-white data-[state=active]:shadow-sm text-gray-300"
                  >
                    Checklist
                  </TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <Card className="border-purple-800/30 bg-gray-900 shadow-md overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Globe className="h-5 w-5 text-purple-400" />
                        Why Farm a Second Wormhole Airdrop?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300">
                        The first Wormhole airdrop (W token) launched in April 2024 and rewarded early users of the
                        cross-chain protocol. However, many believe:
                      </p>

                      <div className="pl-4 border-l-2 border-purple-500 space-y-4 py-2">
                        <p className="text-gray-300">The team reserved tokens for future incentives.</p>

                        <p className="text-gray-300">
                          Wormhole's $1.1B+ valuation suggests more rewards could come to attract long-term users and
                          builders.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-800/30 bg-gray-900 shadow-md overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Layers className="h-5 w-5 text-pink-400" />
                        Mayan Finance: Double Airdrop Opportunity
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300">
                        Mayan Finance is a cross-chain bridge built on Wormhole that allows fast swaps between
                        blockchains. It's a likely candidate for its own airdrop and serves as an excellent way to
                        interact with Wormhole at the same time.
                      </p>

                      <p className="text-gray-300">By using Mayan to bridge assets, you:</p>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-green-900/30">
                          <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">
                            Generate on-chain activity via Wormhole (for a second airdrop)
                          </span>
                        </li>
                        <li className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-green-900/30">
                          <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">
                            Interact with Mayan Finance smart contracts (for their potential token)
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-800/30 bg-gray-900 shadow-md overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-indigo-500 to-cyan-500"></div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Lightbulb className="h-5 w-5 text-indigo-400" />
                        Why Mayan Finance Might Airdrop
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300 font-medium">Mayan has:</p>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">No token yet.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Active ecosystem partnerships.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">
                            Strategic positioning as a decentralized alternative to Portal Bridge, Wormhole's legacy UI.
                          </span>
                        </li>
                      </ul>

                      <p className="text-gray-300">
                        They are backed by Solana and Wormhole contributors, so a token to incentivize users is highly
                        plausible. They wouldn't be the first bridge to reward early users, and they're also in a good
                        position to do so.
                      </p>
                    </CardContent>
                  </Card>

                  <Alert className="bg-gradient-to-r from-amber-900/50 to-yellow-900/50 border-amber-700/30">
                    <Sparkles className="h-5 w-5 text-amber-400" />
                    <AlertTitle className="text-amber-300">Success Story</AlertTitle>
                    <AlertDescription className="text-amber-200">
                      PYTH stakers were previously rewarded massively during the 1st Wormhole airdrop. Some users
                      received ~$3k worth of Wormhole tokens for staking ~$5k worth of $PYTH.
                    </AlertDescription>
                  </Alert>
                </TabsContent>

                {/* Strategy Tab */}
                <TabsContent value="strategy" className="space-y-6">
                  <div className="bg-gray-900 rounded-xl p-6 shadow-md border border-purple-800/30">
                    <h3 className="text-xl font-bold text-white mb-4">5-Step Airdrop Strategy</h3>
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

                        <div className="relative pl-10 pb-6">
                          <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-sm">
                            1
                          </div>
                          <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                            <Wallet className="h-5 w-5 text-purple-400" />
                            Prepare Wallets
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
                              <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-gray-300 font-medium">Use non-custodial wallets</p>
                                <p className="text-sm text-gray-400">MetaMask, Phantom, Keplr, etc.</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
                              <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-gray-300 font-medium">Consider multiple wallets</p>
                                <p className="text-sm text-gray-400">Be careful with sybil detection</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="relative pl-10 pb-6">
                          <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-sm">
                            2
                          </div>
                          <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                            <Layers className="h-5 w-5 text-purple-400" />
                            Fund Your Wallet
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
                              <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-gray-300 font-medium">Hold assets on multiple chains</p>
                                <p className="text-sm text-gray-400">EVM chains, Solana, etc.</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
                              <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-gray-300 font-medium">Diversify your assets</p>
                                <p className="text-sm text-gray-400">ETH, SOL, SUI recommended</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="relative pl-10 pb-6">
                          <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-sm">
                            3
                          </div>
                          <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                            <Globe className="h-5 w-5 text-purple-400" />
                            Bridge Funds with Mayan.Finance
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-purple-900/30">
                              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-900/50 text-purple-300 text-sm font-medium flex-shrink-0 mt-0.5">
                                1
                              </div>
                              <div>
                                <p className="text-gray-300 font-medium">
                                  Go to:{" "}
                                  <a
                                    href="https://mayan.finance"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-400 hover:underline inline-flex items-center"
                                  >
                                    mayan.finance
                                    <ArrowUpRight className="h-3 w-3 ml-1" />
                                  </a>
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-purple-900/30">
                              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-900/50 text-purple-300 text-sm font-medium flex-shrink-0 mt-0.5">
                                2
                              </div>
                              <div>
                                <p className="text-gray-300 font-medium">Select source and destination:</p>
                                <div className="mt-2 space-y-1 text-sm text-gray-400">
                                  <p>• From: your source chain and token</p>
                                  <p>• To: destination chain (e.g., Arbitrum → Solana)</p>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-purple-900/30">
                              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-900/50 text-purple-300 text-sm font-medium flex-shrink-0 mt-0.5">
                                3
                              </div>
                              <div>
                                <p className="text-gray-300 font-medium">Confirm the swap</p>
                                <p className="text-sm text-gray-400 mt-1">Each transaction costs ~$1 in fees.</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg border border-purple-800/30">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-purple-300">
                                <span className="font-medium">Pro Tip:</span> Try doing multiple swaps over time and
                                vary source/destination chains for better eligibility.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="relative pl-10 pb-6">
                          <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-sm">
                            4
                          </div>
                          <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                            <Zap className="h-5 w-5 text-purple-400" />
                            Use Advanced Features
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
                              <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-gray-300 font-medium">Use Limit Orders</p>
                                <p className="text-sm text-gray-400">Available on Mayan Finance</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
                              <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-gray-300 font-medium">Bridge different token types</p>
                                <p className="text-sm text-gray-400">ETH, USDC, SOL, etc.</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
                              <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-gray-300 font-medium">Switch chains frequently</p>
                                <p className="text-sm text-gray-400">Shows deeper protocol usage</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="relative pl-10">
                          <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-sm">
                            5
                          </div>
                          <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                            <Timer className="h-5 w-5 text-purple-400" />
                            Track & Repeat
                          </h4>
                          <div className="space-y-3">
                            <p className="text-gray-300">Keep track of:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="flex items-center gap-2 bg-gray-800 p-3 rounded-lg border border-gray-700">
                                <CheckCircle2 className="h-5 w-5 text-purple-400 flex-shrink-0" />
                                <span className="text-gray-300">Wallets used</span>
                              </div>
                              <div className="flex items-center gap-2 bg-gray-800 p-3 rounded-lg border border-gray-700">
                                <CheckCircle2 className="h-5 w-5 text-purple-400 flex-shrink-0" />
                                <span className="text-gray-300">Chains bridged</span>
                              </div>
                              <div className="flex items-center gap-2 bg-gray-800 p-3 rounded-lg border border-gray-700">
                                <CheckCircle2 className="h-5 w-5 text-purple-400 flex-shrink-0" />
                                <span className="text-gray-300">Tokens moved</span>
                              </div>
                              <div className="flex items-center gap-2 bg-gray-800 p-3 rounded-lg border border-gray-700">
                                <CheckCircle2 className="h-5 w-5 text-purple-400 flex-shrink-0" />
                                <span className="text-gray-300">Interaction frequency</span>
                              </div>
                            </div>

                            <p className="text-gray-300 mt-2">
                              Repeat daily or weekly to simulate organic usage. Their second airdrop could occur at any
                              time.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Card className="border-red-900/30 bg-gray-900 shadow-md overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-red-500 to-pink-500"></div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Shield className="h-5 w-5 text-red-400" />
                        Avoid Red Flags
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-red-900/30">
                          <Lock className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-gray-300 font-medium">
                              Don't use centralized exchanges to fund multiple wallets identically
                            </p>
                            <p className="text-sm text-gray-400">This is a common sybil detection flag</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 bg-gray-800 p-3 rounded-lg border border-red-900/30">
                          <Lock className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-gray-300 font-medium">Vary behavior across wallets</p>
                            <p className="text-sm text-gray-400">Don't copy/paste exact patterns</p>
                          </div>
                        </li>
                      </ul>

                      <div className="mt-2">
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-purple-700/50 text-purple-300 hover:bg-purple-900/50 hover:text-purple-200"
                        >
                          <Link href="/guides/avoid-sybil-detection">
                            <Shield className="mr-2 h-4 w-4" />
                            Learn More About Sybil Avoidance
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Checklist Tab */}
                <TabsContent value="checklist" className="space-y-6">
                  <Card className="border-purple-800/30 bg-gray-900 shadow-md overflow-hidden">
                    <CardHeader>
                      <CardTitle className="text-white">Airdrop Farming Checklist</CardTitle>
                      <CardDescription className="text-gray-400">
                        Track your progress with this checklist
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="font-medium text-purple-300">Wallet Setup</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="wallet-setup-1"
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                              />
                              <label htmlFor="wallet-setup-1" className="ml-2 block text-sm text-gray-300">
                                Create non-custodial wallet (MetaMask, Phantom, etc.)
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="wallet-setup-2"
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                              />
                              <label htmlFor="wallet-setup-2" className="ml-2 block text-sm text-gray-300">
                                Fund wallet with ETH, SOL, or other assets
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="wallet-setup-3"
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                              />
                              <label htmlFor="wallet-setup-3" className="ml-2 block text-sm text-gray-300">
                                Set up multiple wallets (optional)
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium text-purple-300">Mayan Finance Activity</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="mayan-1"
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                              />
                              <label htmlFor="mayan-1" className="ml-2 block text-sm text-gray-300">
                                Bridge ETH from Ethereum to another chain
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="mayan-2"
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                              />
                              <label htmlFor="mayan-2" className="ml-2 block text-sm text-gray-300">
                                Bridge assets back to Ethereum
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="mayan-3"
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                              />
                              <label htmlFor="mayan-3" className="ml-2 block text-sm text-gray-300">
                                Bridge between non-Ethereum chains
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="mayan-4"
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                              />
                              <label htmlFor="mayan-4" className="ml-2 block text-sm text-gray-300">
                                Use Limit Orders feature
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="mayan-5"
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                              />
                              <label htmlFor="mayan-5" className="ml-2 block text-sm text-gray-300">
                                Bridge different token types (ETH, USDC, SOL)
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium text-purple-300">Ecosystem Exploration</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="ecosystem-1"
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                              />
                              <label htmlFor="ecosystem-1" className="ml-2 block text-sm text-gray-300">
                                Try L2Marathon for NFT bridging
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="ecosystem-2"
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                              />
                              <label htmlFor="ecosystem-2" className="ml-2 block text-sm text-gray-300">
                                Use Wombat Exchange
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="ecosystem-3"
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                              />
                              <label htmlFor="ecosystem-3" className="ml-2 block text-sm text-gray-300">
                                Stake PYTH tokens
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="ecosystem-4"
                                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                              />
                              <label htmlFor="ecosystem-4" className="ml-2 block text-sm text-gray-300">
                                Try at least 3 different Wormhole dApps
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-800/30 bg-gray-900 shadow-md overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                    <CardHeader>
                      <CardTitle className="text-white">Strategy Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-700">
                          <thead className="bg-gray-800">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider"
                              >
                                Action
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider"
                              >
                                Benefits
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-gray-900 divide-y divide-gray-800">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                Use Mayan.Finance to bridge tokens
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                Farms Wormhole + Mayan
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                Use multiple chains (EVM ↔ Solana)
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                Increases eligibility
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                Bridge during different times/days & vary assets
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                Avoids sybil detection
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                Explore other provided dApps
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                Shows deeper engagement
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="border-purple-800/30 bg-gray-900 shadow-md overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              <CardHeader>
                <CardTitle className="text-white">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    id: "faq-1",
                    question: "How much should I bridge to qualify for a potential airdrop?",
                    answer:
                      "There's no guaranteed minimum, but consistent activity is more important than large amounts. Start with small amounts ($10-$50) and focus on regular interactions across multiple chains rather than one-time large transfers.",
                  },
                  {
                    id: "faq-2",
                    question: "Is it better to use multiple wallets or one wallet?",
                    answer:
                      "Both strategies have merit. One active wallet with consistent, varied usage is better than multiple wallets with identical patterns. If using multiple wallets, ensure each has unique behavior patterns to avoid sybil detection.",
                  },
                  {
                    id: "faq-3",
                    question: "When might a second Wormhole airdrop happen?",
                    answer:
                      "There's no official announcement for a second airdrop. However, with the first airdrop occurring in April 2024 and significant reserved tokens, many speculate a second distribution could happen within 6-12 months to maintain ecosystem growth.",
                  },
                  {
                    id: "faq-4",
                    question: "Which chains should I prioritize for bridging?",
                    answer:
                      "Focus on chains with strong Wormhole integration: Ethereum, Solana, Arbitrum, Optimism, Base, and Avalanche. Bridging between EVM chains and Solana demonstrates versatile protocol usage, which may be valued more highly.",
                  },
                ].map((faq) => {
                  const isExpanded = expandedFaqs.includes(faq.id)

                  return (
                    <div key={faq.id} className="border border-purple-800/30 rounded-lg overflow-hidden">
                      <button
                        className="flex justify-between items-center w-full p-4 text-left bg-gray-800 hover:bg-gray-700 transition-colors"
                        onClick={() => toggleFaq(faq.id)}
                      >
                        <span className="font-medium text-gray-200">{faq.question}</span>
                        <ChevronDown
                          className={`h-5 w-5 text-purple-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="p-4 bg-gray-900 text-gray-300">{faq.answer}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Final Thoughts */}
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="border-purple-800/30 bg-gray-900 shadow-md overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Lightbulb className="h-5 w-5 text-purple-400" />
                  Final Thoughts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  If you missed the first Wormhole airdrop, this is a prime time to position for a second one. Using
                  Mayan Finance lets you strategically double-dip into airdrop farming without wasting funds. Even a
                  small budget can pay off big with the right on-chain behavior.
                </p>

                <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg border border-purple-800/30">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-purple-300">Key Takeaway</p>
                      <p className="text-purple-200 mt-1">
                        Consistent, varied interaction with Wormhole via Mayan Finance is more valuable than one-time
                        large transactions. Start small, stay consistent, and explore the ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4 bg-gradient-to-r from-gray-800 to-gray-900 border-t border-purple-800/30">
                <Button asChild className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
                  <Link href="https://mayan.finance" target="_blank" rel="noopener noreferrer">
                    Visit Mayan Finance <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto border-purple-700/50 text-purple-300 hover:bg-purple-900/50 hover:text-purple-200"
                >
                  <Link href="/guides/avoid-sybil-detection">
                    Learn Sybil Avoidance <Shield className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button
            variant="outline"
            asChild
            className="w-full sm:w-auto border-purple-700/50 text-purple-300 hover:bg-purple-900/50 hover:text-purple-200"
          >
            <Link href="/guides">
              <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
              Back to Guides
            </Link>
          </Button>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-800 text-gray-400 hover:text-purple-300"
              onClick={() => copyToClipboard(window.location.href)}
            >
              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">Copy Link</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-800 text-gray-400 hover:text-purple-300"
              asChild
            >
              <a
                href="https://twitter.com/intent/tweet?text=Check%20out%20this%20Wormhole%20airdrop%20strategy%20guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Share on Twitter</span>
              </a>
            </Button>
          </div>

          <Button asChild className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
            <Link href="/guides/bridges">
              Explore More Bridges
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
