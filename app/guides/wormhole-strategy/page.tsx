"use client"

import Link from "next/link"
import { useState } from "react"
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Globe,
  Layers,
  Lightbulb,
  Lock,
  Shield,
  Timer,
  Wallet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function WormholeGuidePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900 p-8 mb-8">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?key=c9dnu')] opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
              Strategy Guide
            </Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
              Airdrop Farming
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Wormhole + Mayan Finance Airdrop Strategy</h1>
          <p className="text-lg text-white/80 max-w-3xl mb-6">
            A comprehensive guide to positioning yourself for a potential second Wormhole airdrop and the Mayan Finance
            token launch.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Button asChild className="bg-white text-purple-900 hover:bg-white/90">
              <Link href="https://mayan.finance" target="_blank" rel="noopener noreferrer">
                Visit Mayan Finance <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="border-white/30 text-white hover:bg-white/10">
              <Link href="https://wormhole.com" target="_blank" rel="noopener noreferrer">
                Explore Wormhole <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-500 font-medium">Wormhole Valuation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$1.1B+</p>
            <p className="text-sm text-gray-500">Suggesting significant future incentives</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-500 font-medium">First Airdrop</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">April 2024</p>
            <p className="text-sm text-gray-500">W token launch date</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-500 font-medium">Avg. Bridge Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">~$1</p>
            <p className="text-sm text-gray-500">Per transaction on Mayan Finance</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
              <CardDescription>Essential resources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Bridges</h3>
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
                      className="flex items-center justify-between p-2 text-sm rounded-md hover:bg-gray-100"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="h-3 w-3 text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Other Tools</h3>
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
                      className="flex items-center justify-between p-2 text-sm rounded-md hover:bg-gray-100"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="h-3 w-3 text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button asChild variant="outline" className="w-full">
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

          <Card>
            <CardHeader>
              <CardTitle>Progress Tracker</CardTitle>
              <CardDescription>Track your airdrop farming</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Chains Bridged</span>
                  <span className="font-medium">0/10+</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Consistency</span>
                  <span className="font-medium">0/30 days</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Volume</span>
                  <span className="font-medium">$0/$1,000</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Features Used</span>
                  <span className="font-medium">0/3</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
              <TabsTrigger value="checklist">Checklist</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-purple-600" />
                    Why Farm a Second Wormhole Airdrop?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The first Wormhole airdrop (W token) launched in April 2024 and rewarded early users of the
                    cross-chain protocol. However, many believe:
                  </p>

                  <div className="pl-4 border-l-2 border-purple-200 space-y-4">
                    <p>The team reserved tokens for future incentives.</p>

                    <p>
                      Wormhole's $1.1B+ valuation suggests more rewards could come to attract long-term users and
                      builders.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-purple-600" />
                    Mayan Finance: Double Airdrop Opportunity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Mayan Finance is a cross-chain bridge built on Wormhole that allows fast swaps between blockchains.
                    It's a likely candidate for its own airdrop and serves as an excellent way to interact with Wormhole
                    at the same time.
                  </p>

                  <p>By using Mayan to bridge assets, you:</p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Generate on-chain activity via Wormhole (for a second airdrop)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Interact with Mayan Finance smart contracts (for their potential token)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-purple-600" />
                    Why Mayan Finance Might Airdrop
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Mayan has:</p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No token yet.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Active ecosystem partnerships.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Strategic positioning as a decentralized alternative to Portal Bridge, Wormhole's legacy UI.
                      </span>
                    </li>
                  </ul>

                  <p>
                    They are backed by Solana and Wormhole contributors, so a token to incentivize users is highly
                    plausible. They wouldn't be the first bridge to reward early users, and they're also in a good
                    position to do so.
                  </p>
                </CardContent>
              </Card>

              <Alert className="bg-amber-50 border-amber-200">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                <AlertTitle>Success Story</AlertTitle>
                <AlertDescription>
                  PYTH stakers were previously rewarded massively during the 1st Wormhole airdrop. Some users received
                  ~$3k worth of Wormhole tokens for staking ~$5k worth of $PYTH.
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* Strategy Tab */}
            <TabsContent value="strategy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-purple-600" />
                    Step 1: Prepare Wallets
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use non-custodial wallets (e.g., MetaMask, Phantom, Keplr).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Have multiple wallets if you want to sybil farm (be careful not to overdo it or use centralized
                        exchanges to fund all of them identically).
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-purple-600" />
                    Step 2: Fund Your Wallet
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Hold assets on EVM-compatible chains (Ethereum, Arbitrum, Optimism, etc.), or Solana.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        ETH is recommended for Wormhole/Mayan bridge transactions, but also consider using SUI and SOL
                        to have more destination/source chains.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-purple-600" />
                    Step 3: Bridge Funds with Mayan.Finance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="space-y-4">
                    <li className="flex items-start gap-2">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-700 text-sm font-medium flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="font-medium">
                          Go to:{" "}
                          <a
                            href="https://mayan.finance"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:underline"
                          >
                            https://mayan.finance
                          </a>
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-2">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-700 text-sm font-medium flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Select:</p>
                        <ul className="mt-2 space-y-2 pl-4">
                          <li>From: your source chain and token</li>
                          <li>To: destination chain (e.g., Arbitrum → Solana, or vice versa)</li>
                        </ul>
                      </div>
                    </li>

                    <li className="flex items-start gap-2">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-700 text-sm font-medium flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Confirm the swap and wait for the transaction to complete.</p>
                        <p className="text-gray-600 mt-1">
                          Be aware of transaction fees, pay attention to how much ETH you will be receiving on the
                          destination chain. Each transaction tends to cost ~$1.
                        </p>
                      </div>
                    </li>
                  </ol>

                  <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">
                        <span className="font-medium">Tip:</span> Try doing multiple swaps over time and vary
                        source/destination chains for better eligibility.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-purple-600" />
                    Step 4: Use Advanced Features (Optional but Recommended)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use Limit Orders (available on Mayan).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Try bridging different token types (ETH, USDC, SOL).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Switch chains frequently — this shows deeper usage.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Timer className="h-5 w-5 text-purple-600" />
                    Step 5: Track & Repeat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Keep track of:</p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Wallets used</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Chains bridged</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Tokens moved</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Time and frequency of interaction</span>
                    </li>
                  </ul>

                  <p>
                    Repeat daily or weekly to simulate organic usage, their second airdrop could occur at any time. Now
                    is the time to get as many active days as possible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    Bonus: Avoid Red Flags
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Lock className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Don't use centralized exchanges to fund multiple wallets identically.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Vary behavior — don't copy/paste exact patterns across wallets.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Checklist Tab */}
            <TabsContent value="checklist" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Airdrop Farming Checklist</CardTitle>
                  <CardDescription>Track your progress with this checklist</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-purple-800">Wallet Setup</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="wallet-setup-1"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="wallet-setup-1" className="ml-2 block text-sm text-gray-700">
                            Create non-custodial wallet (MetaMask, Phantom, etc.)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="wallet-setup-2"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="wallet-setup-2" className="ml-2 block text-sm text-gray-700">
                            Fund wallet with ETH, SOL, or other assets
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="wallet-setup-3"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="wallet-setup-3" className="ml-2 block text-sm text-gray-700">
                            Set up multiple wallets (optional)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-purple-800">Mayan Finance Activity</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="mayan-1"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="mayan-1" className="ml-2 block text-sm text-gray-700">
                            Bridge ETH from Ethereum to another chain
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="mayan-2"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="mayan-2" className="ml-2 block text-sm text-gray-700">
                            Bridge assets back to Ethereum
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="mayan-3"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="mayan-3" className="ml-2 block text-sm text-gray-700">
                            Bridge between non-Ethereum chains
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="mayan-4"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="mayan-4" className="ml-2 block text-sm text-gray-700">
                            Use Limit Orders feature
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="mayan-5"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="mayan-5" className="ml-2 block text-sm text-gray-700">
                            Bridge different token types (ETH, USDC, SOL)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-purple-800">Consistency & Volume</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="consistency-1"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="consistency-1" className="ml-2 block text-sm text-gray-700">
                            Bridge at least once per week
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="consistency-2"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="consistency-2" className="ml-2 block text-sm text-gray-700">
                            Reach $100+ in total bridge volume
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="consistency-3"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="consistency-3" className="ml-2 block text-sm text-gray-700">
                            Reach $1,000+ in total bridge volume
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="consistency-4"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="consistency-4" className="ml-2 block text-sm text-gray-700">
                            Bridge across 5+ different chains
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-purple-800">Ecosystem Exploration</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="ecosystem-1"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="ecosystem-1" className="ml-2 block text-sm text-gray-700">
                            Try L2Marathon for NFT bridging
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="ecosystem-2"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="ecosystem-2" className="ml-2 block text-sm text-gray-700">
                            Use Wombat Exchange
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="ecosystem-3"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="ecosystem-3" className="ml-2 block text-sm text-gray-700">
                            Stake PYTH tokens
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="ecosystem-4"
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor="ecosystem-4" className="ml-2 block text-sm text-gray-700">
                            Try at least 3 different Wormhole dApps
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Action
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Benefits
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Use Mayan.Finance to bridge tokens
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Farms Wormhole + Mayan</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Use multiple chains (EVM ↔ Solana)
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Increases eligibility</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Bridge during different times/days & vary assets
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Avoids sybil detection</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Explore other provided dApps
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Shows deeper engagement</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Track activity per wallet
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Easier to avoid sybil activities
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Final Thoughts */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-purple-600" />
              Final Thoughts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              If you missed the first Wormhole airdrop, this is a prime time to position for a second one. Using Mayan
              Finance lets you strategically double-dip into airdrop farming without wasting funds. Even a small budget
              can pay off big with the right on-chain behavior.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="w-full sm:w-auto">
              <Link href="https://mayan.finance" target="_blank" rel="noopener noreferrer">
                Visit Mayan Finance <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/guides/avoid-sybil-detection">
                Learn Sybil Avoidance <Shield className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Button variant="outline" asChild className="w-full sm:w-auto">
          <Link href="/guides">
            <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
            Back to Guides
          </Link>
        </Button>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
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
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            <span className="sr-only">Share on Facebook</span>
          </Button>
          <Button variant="ghost" size="icon">
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
          </Button>
          <Button variant="ghost" size="icon">
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
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span className="sr-only">Copy Link</span>
          </Button>
        </div>

        <Button asChild className="w-full sm:w-auto">
          <Link href="/guides/bridges">
            Explore More Bridges
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
