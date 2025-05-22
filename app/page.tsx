"use client"

import Link from "next/link"
import Image from "next/image"
import { Boxes, GitMerge, Shield, Wrench, LayoutDashboard, Wallet, BarChart3, Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { NotificationSubscribe } from "@/components/notification-subscribe"
import { useAuth } from "@/contexts/auth-context"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  // Get authentication status
  const { user, isLoading } = useAuth()

  // Determine dashboard link destination based on auth status
  const dashboardLink = user ? "/dashboard" : "/auth/sign-in"

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Removed the logo, keeping only the text */}
            <h1 className="text-2xl font-bold">LayerLeap</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#mainnets" className="hover:text-primary transition-colors">
              Mainnets
            </Link>
            <Link href="#testnets" className="hover:text-primary transition-colors">
              Testnets
            </Link>
            <Link href="#bridges" className="hover:text-primary transition-colors">
              Bridges
            </Link>
            <Link href="#tools" className="hover:text-primary transition-colors">
              Tools
            </Link>
            <Link href="#waitlists" className="hover:text-primary transition-colors">
              Waitlists
            </Link>
            <Link href="#avoid-sybil" className="hover:text-primary transition-colors">
              Avoid Sybil
            </Link>
          </nav>
          <Link href={dashboardLink}>
            <Button className="bg-primary hover:bg-primary/90">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20 relative py-16">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left md:pr-8 flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Master the Art of Airdrop Farming
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Comprehensive guides to help you maximize your chances of receiving valuable token airdrops across the
                crypto ecosystem.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/get-started" passHref>
                  <Button className="bg-primary hover:bg-primary/90 text-lg px-6 py-6">Get Started</Button>
                </Link>
                <Button variant="outline" className="text-lg px-6 py-6 border-primary text-primary hover:bg-primary/10">
                  View Latest Airdrops
                </Button>
              </div>
            </div>

            <div className="relative mx-auto max-w-md">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl opacity-70"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                    {/* Increased the size of the logo by ~3x */}
                    <Image src="/images/logo.png" alt="LayerLeap Logo" width={72} height={72} />
                  </div>
                  <div>
                    <h3 className="font-medium">Airdrop Opportunities</h3>
                    <p className="text-sm text-slate-400">Promising Protocols & Projects</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700/50 rounded-lg p-3 flex items-center">
                    <Image
                      src="/images/soneium-logo.png"
                      alt="Soneium"
                      width={24}
                      height={24}
                      className="mr-3 rounded-full"
                    />
                    <span className="text-sm">Soneium</span>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3 flex items-center">
                    <Image src="/images/monad-logo.png" alt="Monad" width={24} height={24} className="mr-3" />
                    <span className="text-sm">Monad</span>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3 flex items-center">
                    <Image
                      src="/images/unichain-logo.png"
                      alt="Unichain"
                      width={24}
                      height={24}
                      className="mr-3 rounded-full"
                    />
                    <span className="text-sm">Unichain</span>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3 flex items-center">
                    <Image src="/images/ink-logo.png" alt="Ink" width={24} height={24} className="mr-3 rounded-full" />
                    <span className="text-sm">Ink</span>
                  </div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-400">Airdrop Progress</span>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Sections */}
        <section id="mainnets" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Boxes className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Mainnet Guides</h2>
          </div>
          <p className="text-slate-300 mb-8">
            Mainnet activities often lead to the most valuable airdrops. Learn how to strategically interact with
            protocols before their token launches.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>Soneium Protocol</CardTitle>
                <CardDescription>Decentralized Finance Infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Learn how to participate in Soneium's ecosystem, from liquidity provision to governance, and position
                  yourself for potential token distributions.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/guides/soneium" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore Soneium Guide
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-slate-800 border-slate-700 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>Unichain Network</CardTitle>
                <CardDescription>Cross-Chain Interoperability Protocol</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Discover how to effectively interact with Unichain's mainnet features to maximize your chances of
                  qualifying for their anticipated airdrop.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/guides/unichain" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore Unichain Guide
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-slate-800 border-slate-700 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>Ink Protocol</CardTitle>
                <CardDescription>Decentralized Data & Smart Contract Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Step-by-step instructions on how to engage with Ink Protocol's key features and establish a meaningful
                  on-chain presence before token launch.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/guides/ink" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore Ink Guide
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-6 text-center">
            <Link href="/guides/mainnets" passHref>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All Mainnet Guides
              </Button>
            </Link>
          </div>
        </section>

        <section id="testnets" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <GitMerge className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Testnet Guides</h2>
          </div>
          <p className="text-slate-300 mb-8">
            Testnet participation is often rewarded with airdrops. We track all promising testnet opportunities and
            provide step-by-step guides.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>Monad Testnet 🧪</CardTitle>
                <CardDescription>High-performance EVM-compatible L1</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Complete guide to participating in the Monad testnet, including wallet setup, claiming testnet tokens,
                  and interacting with 15+ dApps to maximize your airdrop potential.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/guides/monad-testnet" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore Monad Guide
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-slate-800 border-slate-700 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>MegaETH Testnet 🧪</CardTitle>
                <CardDescription>High-performance Ethereum-based L2</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Learn how to participate in the MegaETH testnet to position yourself for a potential future airdrop.
                  Complete guide with wallet setup and dApp interactions.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/guides/megaeth-testnet" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore MegaETH Guide
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-slate-800 border-slate-700 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>Somnia Testnet</CardTitle>
                <CardDescription>High-performance Layer 1 blockchain</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Learn how to participate in the Somnia testnet to maximize your chances for their potential airdrop.
                  With $270M in funding, this could be a massive opportunity.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/guides/somnia" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore Somnia Guide
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-6 text-center">
            <Link href="/guides/testnets" passHref>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All Testnet Guides
              </Button>
            </Link>
          </div>
        </section>

        <section id="bridges" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <GitMerge className="h-8 w-8 rotate-90 text-primary" />
            <h2 className="text-3xl font-bold">Bridge Guides</h2>
          </div>
          <p className="text-slate-300 mb-8">
            Cross-chain bridges are prime candidates for airdrops. Learn which bridges to use and how to maximize your
            chances.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>LayerZero Season 2</CardTitle>
                <CardDescription>Cross-chain messaging protocol</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Learn how to participate in LayerZero Season 2 activities to position yourself for potential future
                  airdrops.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/guides/layerzero-season-2" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore Guide
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-slate-800 border-slate-700 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>Relay Bridge</CardTitle>
                <CardDescription>Fast cross-chain bridging solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Discover how to use Relay Bridge effectively to maximize your chances of qualifying for a potential
                  airdrop.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/guides/relay-strategy" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore Guide
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-slate-800 border-slate-700 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>Wormhole</CardTitle>
                <CardDescription>Generic message passing protocol</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Learn how to use Wormhole's cross-chain messaging and bridging capabilities to position for potential
                  rewards.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/guides/wormhole" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore Guide
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-6 text-center">
            <Link href="/guides/bridges" passHref>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All Bridge Guides
              </Button>
            </Link>
          </div>
        </section>

        <section id="tools" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Airdrop Tools</h2>
          </div>
          <p className="text-slate-300 mb-8">
            Essential tools to help you track, manage, and optimize your airdrop farming activities.
          </p>

          {/* Enhanced Tools Section with Exchanges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wallet Trackers Card */}
            <Card className="bg-slate-800 border-slate-700 hover:border-primary transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-500/20">
                    <BarChart3 className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle>Wallet Trackers</CardTitle>
                    <CardDescription>Monitor your on-chain activity</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Tools to track your on-chain activity and potential airdrop eligibility across multiple protocols.
                  Monitor your progress and ensure you're meeting criteria for upcoming airdrops.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span>Portfolio tracking across multiple chains</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span>Transaction history visualization</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span>Airdrop eligibility monitoring</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/guides/wallet-tracker" passHref>
                  <Button variant="secondary" className="w-full">
                    View Wallet Trackers
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Exchanges Card */}
            <Card className="bg-slate-800 border-slate-700 hover:border-primary transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-purple-500/20">
                    <Wallet className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle>Exchanges Guide</CardTitle>
                    <CardDescription>Fund wallets anonymously</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Learn how to use exchanges to fund your airdrop farming wallets anonymously without creating
                  connections between them. Essential for effective Sybil avoidance.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-slate-700/40 rounded-lg p-3 flex items-center">
                    <Image
                      src="/images/coinbase-logo.png"
                      alt="Coinbase"
                      width={24}
                      height={24}
                      className="mr-2 rounded-full"
                    />
                    <span className="text-sm">Coinbase</span>
                  </div>
                  <div className="bg-slate-700/40 rounded-lg p-3 flex items-center">
                    <Image
                      src="/images/binance-logo.png"
                      alt="Binance"
                      width={24}
                      height={24}
                      className="mr-2 rounded-full"
                    />
                    <span className="text-sm">Binance</span>
                  </div>
                  <div className="bg-slate-700/40 rounded-lg p-3 flex items-center">
                    <Image
                      src="/images/kucoin-logo.png"
                      alt="KuCoin"
                      width={24}
                      height={24}
                      className="mr-2 rounded-full"
                    />
                    <span className="text-sm">KuCoin</span>
                  </div>
                  <div className="bg-slate-700/40 rounded-lg p-3 flex items-center">
                    <Image
                      src="/images/mexc-logo.png"
                      alt="MEXC"
                      width={24}
                      height={24}
                      className="mr-2 rounded-full"
                    />
                    <span className="text-sm">MEXC</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/guides/exchanges" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore Exchanges Guide
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-6 text-center">
            <Link href="/guides/tools" passHref>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All Airdrop Tools
              </Button>
            </Link>
          </div>
        </section>

        <section id="avoid-sybil" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Avoid Sybil Detection</h2>
          </div>
          <p className="text-slate-300 mb-8">
            Learn ethical strategies to avoid being flagged as a Sybil attacker while maximizing your airdrop
            opportunities.
          </p>
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle>How to Avoid Being Labeled a Sybil</CardTitle>
              <CardDescription>Smart multi-wallet management strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">
                Running multiple wallets can be profitable for airdrop farming, but it comes with the risk of sybil
                detection. Our guide shows you how to manage multiple wallets safely and ethically.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-slate-300">
                <li>Fund wallets uniquely from different sources</li>
                <li>Vary transaction behavior across wallets</li>
                <li>Spread activity over time with consistent usage</li>
                <li>Track your wallets carefully to avoid patterns</li>
                <li>Establish identity in your main wallet</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/guides/avoid-sybil-detection" passHref>
                <Button variant="secondary" className="w-full">
                  Learn Sybil Avoidance
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </section>

        <section id="waitlists" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Early Access Waitlists</h2>
          </div>
          <p className="text-slate-300 mb-8">
            Join exclusive waitlists to gain early access to promising projects and position yourself for potential
            rewards and airdrops.
          </p>

          <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  25+ Active Waitlists Available
                </h3>
                <p className="text-slate-300 mb-6">
                  Get early access to promising projects before they launch. Join waitlists now to position yourself for
                  exclusive rewards and potential airdrops.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">Layer 1 Chains</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">Layer 2 Solutions</Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30">DeFi Protocols</Badge>
                  <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30">Gaming</Badge>
                  <Badge className="bg-pink-500/20 text-pink-400 hover:bg-pink-500/30">Infrastructure</Badge>
                </div>
                <Link href="/waitlists">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    <Bell className="mr-2 h-4 w-4" />
                    Explore All Waitlists
                  </Button>
                </Link>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="grid grid-cols-2 gap-4 max-w-xs">
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300">
                    <div className="text-sm font-medium text-white mb-1">TREX Chain</div>
                    <div className="text-xs text-slate-400">DeFi Infrastructure</div>
                    <div className="mt-2 text-xs">
                      <Badge variant="outline" className="border-blue-500/50 text-blue-400 text-xs">
                        New
                      </Badge>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300">
                    <div className="text-sm font-medium text-white mb-1">Pipe Network</div>
                    <div className="text-xs text-slate-400">ZK Layer 2</div>
                    <div className="mt-2 text-xs">
                      <Badge variant="outline" className="border-purple-500/50 text-purple-400 text-xs">
                        Hot
                      </Badge>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="text-sm font-medium text-white mb-1">Pin AI</div>
                    <div className="text-xs text-slate-400">Real-yield DeFi</div>
                    <div className="mt-2 text-xs">
                      <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 text-xs">
                        Filling Fast
                      </Badge>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-amber-500/50 transition-all duration-300">
                    <div className="text-sm font-medium text-white mb-1">VLayer</div>
                    <div className="text-xs text-slate-400">Gaming L1</div>
                    <div className="mt-2 text-xs">
                      <Badge variant="outline" className="border-amber-500/50 text-amber-400 text-xs">
                        Exclusive
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mb-20">
          <NotificationSubscribe />
        </section>
      </main>
    </div>
  )
}
