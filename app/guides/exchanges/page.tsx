"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, ExternalLink, Shield, Wallet, Clock, AlertTriangle, DollarSign, Shuffle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function ExchangesGuidePage() {
  const [progress, setProgress] = useState(0)
  const [tasks, setTasks] = useState([
    { id: "coinbase", title: "Set up Coinbase account", completed: false },
    { id: "gemini", title: "Set up Gemini account", completed: false },
    { id: "binance", title: "Set up Binance account", completed: false },
    { id: "kucoin", title: "Set up KuCoin account", completed: false },
    { id: "mexc", title: "Set up MEXC account", completed: false },
    { id: "coinex", title: "Set up CoinEx account", completed: false },
    { id: "strategy", title: "Create a funding strategy", completed: false },
    { id: "security", title: "Implement security measures", completed: false },
  ])

  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const toggleTask = (id: string) => {
    const newTasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    setTasks(newTasks)

    // Calculate new progress
    const completedCount = newTasks.filter((task) => task.completed).length
    setProgress((completedCount / newTasks.length) * 100)
  }

  const exchanges = [
    {
      id: "coinbase",
      name: "Coinbase",
      logo: "/images/coinbase-logo.png",
      url: "https://coinbase.com",
      features: [
        { icon: <Check className="h-4 w-4 text-green-400" />, text: "Great for beginners" },
        { icon: <DollarSign className="h-4 w-4 text-blue-400" />, text: "Easy bank transfers & card purchases" },
        { icon: <Wallet className="h-4 w-4 text-purple-400" />, text: "Withdraw directly to your wallet" },
      ],
      beginner: true,
    },
    {
      id: "gemini",
      name: "Gemini",
      logo: "/images/gemini-logo.png",
      url: "https://gemini.com",
      features: [
        { icon: <Shield className="h-4 w-4 text-green-400" />, text: "US-regulated and secure" },
        { icon: <DollarSign className="h-4 w-4 text-blue-400" />, text: "Offers ACH/bank deposit options" },
        { icon: <Clock className="h-4 w-4 text-purple-400" />, text: "Low withdrawal fees" },
      ],
      beginner: true,
    },
    {
      id: "binance",
      name: "Binance",
      logo: "/images/binance-logo.png",
      url: "https://binance.com",
      features: [
        { icon: <Check className="h-4 w-4 text-green-400" />, text: "One of the largest global exchanges" },
        { icon: <DollarSign className="h-4 w-4 text-blue-400" />, text: "Low fees & wide crypto selection" },
        { icon: <AlertTriangle className="h-4 w-4 text-amber-400" />, text: "Not available in some US states" },
      ],
      beginner: false,
    },
    {
      id: "kucoin",
      name: "KuCoin",
      logo: "/images/kucoin-logo.png",
      url: "https://kucoin.com",
      features: [
        { icon: <Check className="h-4 w-4 text-green-400" />, text: "Easy account setup" },
        { icon: <Shuffle className="h-4 w-4 text-blue-400" />, text: "Great for accessing smaller tokens" },
      ],
      beginner: false,
    },
    {
      id: "mexc",
      name: "MEXC",
      logo: "/images/mexc-logo.png",
      url: "https://mexc.com",
      features: [
        { icon: <Check className="h-4 w-4 text-green-400" />, text: "Supports many testnet-related tokens" },
        { icon: <Clock className="h-4 w-4 text-blue-400" />, text: "Often early to list new coins" },
      ],
      beginner: false,
    },
    {
      id: "coinex",
      name: "CoinEx",
      logo: "/images/coinex-logo.png",
      url: "https://coinex.com",
      features: [
        { icon: <Check className="h-4 w-4 text-green-400" />, text: "Smaller exchange with fast withdrawals" },
        { icon: <Shuffle className="h-4 w-4 text-blue-400" />, text: "Ideal for less common assets" },
        {
          icon: <AlertTriangle className="h-4 w-4 text-amber-400" />,
          text: "Great backup if major exchanges are overloaded",
        },
      ],
      beginner: false,
    },
  ]

  const bestPractices = [
    {
      title: "Use Different Exchanges",
      description: "Don't fund all your wallets from the same exchange. Mix and match exchanges for better separation.",
      icon: <Shuffle className="h-5 w-5 text-purple-400" />,
    },
    {
      title: "Vary Withdrawal Amounts",
      description: "Don't withdraw the same amount to different wallets. Add some randomness to withdrawal amounts.",
      icon: <DollarSign className="h-5 w-5 text-purple-400" />,
    },
    {
      title: "Stagger Timing",
      description: "Don't make all withdrawals at the same time. Space out your withdrawals over days or weeks.",
      icon: <Clock className="h-5 w-5 text-purple-400" />,
    },
    {
      title: "Consider Using Intermediate Tokens",
      description: "Withdraw different tokens to different wallets. Convert to your target token using DEXs.",
      icon: <Shuffle className="h-5 w-5 text-purple-400" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="container mx-auto px-4 py-8">
        <Link href="/guides" passHref>
          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Guides
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="lg:w-2/3">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-amber-500">Tool</Badge>
                <Badge className="bg-green-700">Beginner</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Crypto Exchanges for Anonymous Wallet Funding
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                A guide to exchanges that can be used to fund airdrop farming wallets anonymously without creating
                connections between them.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>15 min read</span>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-invert prose-lg max-w-none mb-8">
              <p>
                When farming airdrops with multiple wallets, it's crucial to maintain separation between them. Using
                exchanges as intermediaries helps prevent on-chain connections that could trigger Sybil detection.
              </p>
            </div>

            {/* Why Use Exchanges */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Why Use Exchanges for Wallet Funding?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-800/50 rounded-lg p-4 flex items-start gap-3">
                  <div className="p-2 rounded-full bg-blue-500/20 mt-1">
                    <Shield className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Prevents Direct Connections</h3>
                    <p className="text-slate-300 text-sm">
                      Avoids direct transfers between farming wallets that can be easily traced
                    </p>
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 flex items-start gap-3">
                  <div className="p-2 rounded-full bg-purple-500/20 mt-1">
                    <Wallet className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Clean On-Chain History</h3>
                    <p className="text-slate-300 text-sm">
                      Creates a clean on-chain history for each wallet with legitimate sources
                    </p>
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 flex items-start gap-3">
                  <div className="p-2 rounded-full bg-green-500/20 mt-1">
                    <Check className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Reduces Sybil Risk</h3>
                    <p className="text-slate-300 text-sm">
                      Significantly reduces the risk of Sybil detection by blockchain analytics
                    </p>
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 flex items-start gap-3">
                  <div className="p-2 rounded-full bg-amber-500/20 mt-1">
                    <DollarSign className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Legitimate Funding</h3>
                    <p className="text-slate-300 text-sm">
                      Provides a legitimate source of funds that appears natural on-chain
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Exchanges */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Recommended Exchanges</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exchanges.map((exchange) => (
                  <Card
                    key={exchange.id}
                    className="bg-slate-800 border-slate-700 hover:border-primary/50 transition-colors"
                  >
                    <CardHeader className="pb-2 flex flex-row items-center gap-3">
                      <div className="w-12 h-12 rounded-md bg-slate-700 flex items-center justify-center overflow-hidden">
                        <Image
                          src={exchange.logo || "/placeholder.svg"}
                          alt={exchange.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {exchange.name}
                          {exchange.beginner && <Badge className="bg-green-700 text-xs">Beginner Friendly</Badge>}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <ul className="space-y-2">
                        {exchange.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            {feature.icon}
                            <span className="text-slate-300 text-sm">{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full flex items-center gap-2" asChild>
                        <a href={exchange.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Visit Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Best Practices */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Best Practices for Anonymous Funding</h2>

              <div className="space-y-4">
                {bestPractices.map((practice, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white font-bold">
                        {index + 1}
                      </div>
                      <h3 className="font-bold">{practice.title}</h3>
                    </div>
                    <p className="text-slate-300 ml-11">{practice.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Once Funded */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Once Funded:</h2>

              <div className="bg-slate-800/50 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-blue-500/20 mt-1">
                    <DollarSign className="h-5 w-5 text-blue-400" />
                  </div>
                  <p className="text-slate-300">Buy ETH or the token needed for your farm</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-purple-500/20 mt-1">
                    <Wallet className="h-5 w-5 text-purple-400" />
                  </div>
                  <p className="text-slate-300">
                    Withdraw to your wallet (use the right network: Ethereum, Solana, etc.)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-green-500/20 mt-1">
                    <Check className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="text-slate-300">Start farming airdrops!</p>
                </div>
              </div>
            </div>

            {/* Security Considerations */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Security Considerations</h2>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-purple-400" />
                  <h3 className="font-bold text-lg">Protect Your Exchange Accounts</h3>
                </div>

                <ul className="space-y-3 ml-10">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                    <span className="text-slate-300">Use strong, unique passwords for each exchange</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                    <span className="text-slate-300">Enable 2FA on all exchange accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                    <span className="text-slate-300">Consider using a dedicated email for crypto exchanges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                    <span className="text-slate-300">Never share your exchange API keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                    <span className="text-slate-300">
                      Regularly monitor your exchange accounts for unusual activity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-8">
              {/* Progress Tracker */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Exchange Setup Progress</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-400">Your progress</span>
                    <span className="text-sm font-medium">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2 mb-6" />

                  <div className="space-y-3">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className={`flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-slate-700/50 transition-colors ${
                          task.completed ? "bg-slate-700/30" : ""
                        }`}
                        onClick={() => toggleTask(task.id)}
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                            task.completed ? "bg-purple-600 border-purple-600" : "border-slate-600"
                          }`}
                        >
                          {task.completed && <Check className="h-3 w-3 text-white" />}
                        </div>
                        <span className={task.completed ? "line-through text-slate-400" : "text-slate-200"}>
                          {task.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6 p-4 bg-slate-800 border border-slate-700 rounded-lg">
                <h3 className="font-medium mb-3">Quick Links</h3>
                <div className="space-y-2">
                  {exchanges.map((exchange) => (
                    <a
                      key={exchange.id}
                      href={exchange.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded-md hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-slate-700 flex items-center justify-center overflow-hidden">
                          <Image
                            src={exchange.logo || "/placeholder.svg"}
                            alt={exchange.name}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm">{exchange.name}</span>
                      </div>
                      <ExternalLink className="h-3 w-3 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 p-4 bg-slate-800 border border-slate-700 rounded-lg">
                <h3 className="font-medium mb-2">Share This Guide</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Discord
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Copy Link
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
