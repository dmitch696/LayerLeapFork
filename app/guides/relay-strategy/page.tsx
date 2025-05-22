"use client"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ExternalLink,
  CheckCircle2,
  Zap,
  Repeat,
  Shield,
  Wallet,
  BarChart3,
  ArrowRightLeft,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AirdropProgress } from "@/components/airdrop-progress"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Relay.link guide data
const guide = {
  id: "relay-strategy",
  title: "🔗 How to Position for a Potential Relay.link Airdrop (2025 Guide)",
  description:
    "Learn how to use Relay.link effectively to maximize your chances of qualifying for a potential airdrop.",
  category: "bridge",
  difficulty: "beginner",
  author: "Crypto Guide",
  date: "May 14, 2025",
  readTime: "5 min read",
  content: `
# 🔗 How to Position for a Potential Relay.link Airdrop (2025 Guide)

## 💡 What is Relay.link?

**Relay.link** is a fast, user-friendly cross-chain bridge supporting Ethereum, INK, Unichain, and more. With no token launched yet, active users may be in a good position to receive a future airdrop — similar to what happened with LayerZero and Hyperlane.

## ✅ Step 1: Use the Bridge Regularly & Try Multiple Chains

Go to [relay.link](https://relay.link) and:

- Bridge ETH or other coins of your choice between Ethereum and supported chains (INK, Unichain, etc.)
- Try bridging back and forth over multiple days
- Volume is likely the most important factor, but it is likely also important to have used a significant number of the available source and destination chains
- Try to use new chains weekly, interacting with less popular chains might show deeper involvement

## ✅ Step 2: Use the Relay bridge option on Jumper Bridge

Bridge between chains on Jumper.exchange, you'll see many bridge options when doing so. One of those options is Relay, this may not be available for every chain, but if you're bridging between Ethereum, Base, Optimism, and Arbitrum, it should be there.

Using Relay through Jumper might add to your potential airdrop, and it will earn you XP on Jumper Exchange for their potential airdrop as well.

## ✅ Step 3: Be Consistent

Use Relay across multiple days, weeks and months. Projects often reward consistency and variety over time, not just one-time or one chain use.

Transactions on Relay tend to have very low fees, this is a great opportunity to give yourself dozens, if not 100+ transactions on their bridge for only a few dollars.

I personally am trying to have $10k+ volume on relay with each of my wallets. If you transact with $100 for each bridge transaction, and do that 100+ times over a few months, you will have $10k+ bridge volume.

## 🫴 Bonus: Use Multiple Wallets

Run similar activity through 2–3 wallets — organically — to diversify your chances (don't spam or bot).

Relay has many available chains, use unique chains on each wallet in order for each one to appear as unique.

## 🔐 Safety Tips

- Only use the official site: [relay.link](https://relay.link)
- Double check all URLs and transactions

## 🎯 Final Thoughts

Relay.link is early, growing fast, and hasn't launched a token. If they follow the playbook of other bridges, loyal users could be handsomely rewarded. Start interacting now — it only takes a few minutes!

This is the perfect bridge airdrop to farm with 10+ wallets at an extremely low cost. If you choose to do so, make sure to read through our Avoid Sybil guide!
`,
  tasks: [
    {
      id: "relay-task-1",
      title: "Bridge ETH and/or other coins via Relay.link",
      description: "Complete at least one bridge transaction on Relay.link",
      completed: false,
    },
    {
      id: "relay-task-2",
      title: "Bridge to and from 10+ chains",
      description: "Use Relay.link to bridge between at least 10 different chains",
      completed: false,
    },
    {
      id: "relay-task-3",
      title: "Use Relay through Jumper.exchange",
      description: "Complete a bridge transaction using Relay via Jumper",
      completed: false,
    },
    {
      id: "relay-task-4",
      title: "Bridge consistently for 3+ months",
      description: "Use Relay.link regularly over a period of at least 3 months",
      completed: false,
    },
    {
      id: "relay-task-5",
      title: "Reach $1,000+ in bridge volume",
      description: "Accumulate at least $1,000 in total bridge volume",
      completed: false,
    },
    {
      id: "relay-task-6",
      title: "Reach $10,000+ in bridge volume",
      description: "Accumulate at least $10,000 in total bridge volume",
      completed: false,
    },
    {
      id: "relay-task-7",
      title: "Try bridging back to Ethereum",
      description: "Complete a round-trip bridge transaction back to Ethereum",
      completed: false,
    },
    {
      id: "relay-task-8",
      title: "Use Relay on multiple wallets (optional)",
      description: "Use 2-3 different wallets with Relay.link",
      completed: false,
    },
  ],
  stats: [
    {
      title: "Supported Chains",
      value: "15+",
      icon: ArrowRightLeft,
      color: "bg-blue-500",
    },
    {
      title: "Avg. Transaction Fee",
      value: "$0.25",
      icon: Zap,
      color: "bg-green-500",
    },
    {
      title: "Est. Volume Needed",
      value: "$5-10K",
      icon: BarChart3,
      color: "bg-purple-500",
    },
    {
      title: "Recommended Wallets",
      value: "2-3",
      icon: Wallet,
      color: "bg-amber-500",
    },
  ],
}

const categoryColors: Record<string, string> = {
  mainnet: "bg-blue-500",
  testnet: "bg-green-500",
  bridge: "bg-purple-500",
  tool: "bg-amber-500",
}

const difficultyColors: Record<string, string> = {
  beginner: "bg-green-700",
  intermediate: "bg-amber-700",
  advanced: "bg-red-700",
}

export default function RelayStrategyGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="container mx-auto px-4 py-8">
        <Link href="/get-started" passHref>
          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Guides
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-2/3 bg-slate-800/50 rounded-xl p-8 shadow-lg">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={categoryColors[guide.category]}>
                  {guide.category.charAt(0).toUpperCase() + guide.category.slice(1)}
                </Badge>
                <Badge className={difficultyColors[guide.difficulty]}>
                  {guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
                </Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">{guide.title}</h1>
              <p className="text-xl text-slate-300 mb-6">{guide.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{guide.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{guide.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{guide.readTime}</span>
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-lg overflow-hidden border border-slate-700">
              <Image
                src="https://sjc.microlink.io/Clkz54zj_ZtRVxSReQYtmySwA_YfanyTKwsCPnJNf3jsBQck7cX59Lhj5x7-iULYL87FP6sl7B25vslHHc-EfA.jpeg"
                alt="Relay.link interface showing the bridge/swap functionality"
                width={1200}
                height={675}
                className="w-full"
              />
              <div className="bg-slate-800 p-3 text-sm text-slate-400 text-center">
                The Relay.link interface for bridging assets between chains
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {guide.stats.map((stat, index) => (
                <Card key={index} className="bg-slate-800/70 border-slate-700">
                  <CardContent className="p-4">
                    <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center mb-3`}>
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-medium text-slate-400">{stat.title}</h3>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert className="bg-blue-900/30 border-blue-700 mb-8">
              <Zap className="h-4 w-4" />
              <AlertTitle>Airdrop Potential</AlertTitle>
              <AlertDescription>
                Relay.link has not announced a token yet, but consistent usage across multiple chains could position you
                well for a potential future airdrop.
              </AlertDescription>
            </Alert>

            <Tabs defaultValue="guide" className="mb-8">
              <TabsList className="grid w-full grid-cols-2 bg-slate-800">
                <TabsTrigger value="guide">Step-by-Step Guide</TabsTrigger>
                <TabsTrigger value="strategy">Strategy Tips</TabsTrigger>
              </TabsList>
              <TabsContent value="guide" className="mt-4 bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                <div className="prose prose-invert prose-lg max-w-none">
                  {guide.content.split("\n\n").map((paragraph, index) => {
                    // Handle headings
                    if (paragraph.startsWith("# ")) {
                      return (
                        <h1 key={index} className="text-3xl font-bold mt-10 mb-6 flex items-center gap-2">
                          {paragraph.replace("# ", "")}
                        </h1>
                      )
                    } else if (paragraph.startsWith("## ")) {
                      const content = paragraph.replace("## ", "")
                      const emoji = content.match(/^([\u{1F300}-\u{1F6FF}\u{2600}-\u{26FF}])/u)?.[1] || ""
                      const title = content.replace(emoji, "").trim()

                      return (
                        <div key={index} className="relative">
                          <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {emoji && <span className="text-2xl">{emoji}</span>}
                            {title}
                          </h2>
                          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                      )
                    } else if (paragraph.startsWith("### ")) {
                      return (
                        <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                          {paragraph.replace("### ", "")}
                        </h3>
                      )
                    }
                    // Handle lists
                    else if (paragraph.startsWith("- ")) {
                      const items = paragraph.split("\n")
                      return (
                        <ul key={index} className="list-none pl-0 my-6 space-y-3">
                          {items.map((item, i) => {
                            // Process markdown in list items (bold, links, etc.)
                            let content = item.replace("- ", "")

                            // Handle bold text
                            content = content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

                            // Handle links
                            content = content.replace(
                              /\[(.*?)\]$$(.*?)$$/g,
                              '<a href="$2" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>',
                            )

                            return (
                              <li
                                key={i}
                                className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700"
                              >
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span dangerouslySetInnerHTML={{ __html: content }} />
                              </li>
                            )
                          })}
                        </ul>
                      )
                    }
                    // Handle regular paragraphs
                    else {
                      // Process markdown in paragraphs (bold, links, etc.)
                      let content = paragraph

                      // Handle bold text
                      content = content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

                      // Handle links
                      content = content.replace(
                        /\[(.*?)\]$$(.*?)$$/g,
                        '<a href="$2" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>',
                      )

                      return <p key={index} className="mb-6" dangerouslySetInnerHTML={{ __html: content }} />
                    }
                  })}
                </div>
              </TabsContent>
              <TabsContent value="strategy" className="mt-4 bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                <div className="space-y-6">
                  <div className="bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-purple-400" />
                      Volume Strategy
                    </h3>
                    <p className="text-slate-300 mb-3">
                      Aim for $10,000+ in total bridge volume. This can be achieved by:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Bridging $100 per transaction</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Completing 100+ transactions over several months</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Focusing on consistency rather than large one-time transfers</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Repeat className="h-5 w-5 text-blue-400" />
                      Chain Diversity
                    </h3>
                    <p className="text-slate-300 mb-3">Use as many different chains as possible:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Bridge to less popular chains like INK and Unichain</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Try a new chain each week</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Complete round-trip transactions (bridge out and back)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-amber-400" />
                      Multi-Wallet Approach
                    </h3>
                    <p className="text-slate-300 mb-3">If using multiple wallets, follow these guidelines:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Use different chains with each wallet</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Maintain organic, non-bot-like behavior</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Vary transaction amounts and timing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-800/70 p-4 rounded-lg border border-slate-700">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-400" />
                      Security Best Practices
                    </h3>
                    <p className="text-slate-300 mb-3">Stay safe while farming:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>
                          Only use the official site:{" "}
                          <a
                            href="https://relay.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline inline-flex items-center gap-1"
                          >
                            relay.link <ExternalLink className="h-3 w-3" />
                          </a>
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Verify all transaction details before confirming</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Keep detailed records of all your transactions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="flex items-center gap-2">
                <Link href="/guides/avoid-sybil-detection" passHref>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Read our Sybil Avoidance Guide
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <a href="https://relay.link" target="_blank" rel="noopener noreferrer">
                  <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
                    Visit Relay.link
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </article>

          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-8">
              <AirdropProgress airdropId={guide.id} airdropName={guide.title} tasks={guide.tasks} />

              <div className="mt-6 p-6 bg-slate-800 border border-slate-700 rounded-xl shadow-md">
                <h3 className="font-medium text-lg mb-3">Get Notified</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Receive updates when this guide changes or when important deadlines approach.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Enable Notifications</Button>
              </div>

              <div className="mt-6 p-6 bg-slate-800 border border-slate-700 rounded-xl shadow-md">
                <h3 className="font-medium text-lg mb-3">Share This Guide</h3>
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

              <div className="mt-6 p-6 bg-slate-800 border border-slate-700 rounded-xl shadow-md">
                <h3 className="font-medium text-lg mb-3 flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-purple-400" />
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <a
                    href="https://relay.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>Relay.link Official Site</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://jumper.exchange"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>Jumper Exchange</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <Link
                    href="/guides/avoid-sybil-detection"
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>Sybil Avoidance Guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
