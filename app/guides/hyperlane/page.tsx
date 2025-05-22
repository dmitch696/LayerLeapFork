"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, Circle, Copy, ExternalLink, RotateCcw, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function HyperlaneGuidePage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const links = [
    {
      id: "atlas",
      name: "Atlas Protocol",
      url: "https://atlastprotocol.io",
      description: "Bridge NFTs",
    },
    {
      id: "zeroway",
      name: "Zeroway",
      url: "https://zeroway.io",
      description: "Bridge NFTs",
    },
    {
      id: "merkly",
      name: "Merkly",
      url: "https://minter.merkly.com",
      description: "Bridge NFTs & tokens",
    },
    {
      id: "l2marathon",
      name: "L2 Marathon",
      url: "https://l2marathon.com",
      description: "Bridge NFTs",
    },
    {
      id: "renzo",
      name: "Renzo",
      url: "https://renzo.hyperlane.xyz/",
      description: "Bridge tokens",
    },
    {
      id: "nexus",
      name: "Nexus",
      url: "https://www.usenexus.org/",
      description: "Bridge tokens",
    },
    {
      id: "molten",
      name: "Molten",
      url: "https://molten.superbridge.app/",
      description: "Bridge tokens",
    },
    {
      id: "cheese",
      name: "Cheese Chain",
      url: "https://bridge.cheesechain.xyz/",
      description: "Bridge tokens",
    },
    {
      id: "fusionist",
      name: "Fusionist",
      url: "https://bridge.fusionist.io/",
      description: "Bridge tokens",
    },
  ]

  const checklistCategories = [
    {
      name: "Hyperlane Farming Tasks",
      items: [
        { id: "bridge10", category: "bridging", title: "Bridge 10+ times" },
        { id: "bridge25", category: "bridging", title: "Bridge 25+ times" },
        { id: "bridge50", category: "bridging", title: "Bridge 50+ times" },
        { id: "multiapp", category: "strategy", title: "Use multiple dApps and chains" },
        { id: "follow", category: "engagement", title: "Follow Hyperlane on socials" },
      ],
      color: "#8B5CF6", // Purple color
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/guides/bridges" passHref>
          <Button variant="ghost" className="flex items-center gap-2 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Bridge Guides
          </Button>
        </Link>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          🚀 How to Farm Future Hyperlane Airdrops
        </h1>
        <p className="text-xl mt-2 text-gray-300">Capitalize on Lower Competition + Long-Term Rewards</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">🧠 What Are Hyperlane Expansion Rewards?</h2>
              <p className="mb-4 text-gray-300">
                Hyperlane recently completed its first airdrop and launched an ongoing reward program called "Expansion
                Rewards", designed to:
              </p>
              <ul className="space-y-2 mb-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Distribute 85% of rewards to users actively using the protocol</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Allocate 15% to protocols and projects building on Hyperlane</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Deliver rewards quarterly over the next 4 years</span>
                </li>
              </ul>
              <p className="text-lg font-semibold text-purple-300">
                This is not a one-time airdrop — it's a long-term farming opportunity with very little competition.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">💡 Why Now is the Best Time to Start Farming</h2>
              <p className="mb-4 text-gray-300">
                After the initial airdrop, user activity has likely dropped significantly, as most airdrop hunters moved
                on. This creates a perfect storm of low competition and ongoing rewards:
              </p>
              <ul className="space-y-2 mb-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Less competition = more rewards for fewer users</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Rewards are proportional to your usage</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-indigo-400">🔗 What is Hyperlane?</h2>
              <p className="mb-4 text-gray-300">
                Hyperlane is a modular interoperability layer that lets any blockchain become "interchain" — i.e., able
                to send messages and assets to other chains. It uses sovereign consensus and is developer-friendly,
                meaning any chain can integrate it.
              </p>
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4 flex items-center justify-center bg-blue-600">
                <Image
                  src="/images/hyperlane.webp"
                  alt="Hyperlane Logo"
                  width={500}
                  height={200}
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                🛠 Step-by-Step: How to Farm Future Hyperlane Airdrops
              </h2>
              <p className="mb-2 text-gray-300">Here's how you can get started:</p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-300">1. Bridge Tokens Using Hyperlane</h3>
              <p className="mb-4 text-gray-300">
                Hyperlane supports bridging across multiple chains. There are many dApps you can use to bridge tokens or
                NFTs with Hyperlane:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {links.map((link) => (
                  <div key={link.id} className="bg-gray-800 rounded-lg p-3 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-white">{link.name}</h4>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => copyToClipboard(link.url, link.id)}
                        >
                          {copied === link.id ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon" className="h-7 w-7">
                            <ExternalLink className="h-4 w-4 text-blue-400" />
                          </Button>
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">{link.description}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 mb-6 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Do multiple transactions, not just one</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Try using different tokens, chains, and dApps for diversity</span>
                </li>
              </ul>

              <div className="bg-purple-900/30 border border-purple-800 rounded-lg p-4 mb-6">
                <p className="text-purple-200">
                  <span className="font-semibold">✅ Note:</span> Activity like volume, frequency, and variety likely
                  all influence your future rewards.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-300">
                2. Be Consistent — Not Just a One-Time User
              </h3>
              <p className="mb-4 text-gray-300">
                Since rewards are quarterly, sustained usage likely earns more. Consider:
              </p>
              <ul className="space-y-2 mb-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Bi-weekly or weekly bridging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Interacting during low gas periods (if using Ethereum)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Using multiple wallets (strategically)</span>
                </li>
              </ul>

              <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4 mb-6">
                <p className="text-blue-200">
                  <span className="font-semibold">🧠 Pro tip:</span> Track your activity in a spreadsheet so you can
                  compare against future snapshot dates.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-300">3. Stay Updated</h3>
              <p className="mb-4 text-gray-300">
                Hyperlane has made it clear that this is a multi-phase reward system, so stay close to the source:
              </p>
              <ul className="space-y-2 mb-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span>Join their Discord</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span>Follow @Hyperlane_xyz on Twitter</span>
                </li>
              </ul>
              <p className="text-gray-300 mb-4">
                Staying informed about upcoming airdrop dates is key to maximizing your rewards. Token prices often dip
                shortly after distribution, so claiming and selling early can help you secure the best value.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-indigo-400">🔮 Final Thoughts</h2>
              <p className="mb-4 text-gray-300">
                Hyperlane's Expansion Rewards are one of the few ongoing, structured airdrop programs in 2025. While
                others focus on big one-time drops, Hyperlane rewards patience, strategy, and real usage.
              </p>
              <p className="mb-4 text-gray-300">This means:</p>
              <ul className="space-y-2 mb-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span>Early & continued usage could snowball into large cumulative rewards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span>Current user drop-off = more opportunity for committed farmers</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link href="/guides/avoid-sybil-detection" passHref>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Learn How to Avoid Sybil Detection
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <Card className="bg-gray-900 border-gray-800 sticky top-8">
            <CardContent className="p-0">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-xl font-bold text-white">✅ Progress Tracker</h3>
              </div>

              {/* Custom progress tracker with reduced padding to maximize width */}
              <div className="w-full px-0">
                <div className="space-y-6 rounded-none bg-gray-900 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">Hyperlane Farming Progress</h3>
                    <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                      <RotateCcw className="h-3 w-3" />
                      Reset
                    </Button>
                  </div>

                  {/* Overall progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-300">Overall Progress</span>
                      </div>
                      <span className="font-medium text-gray-300">0%</span>
                    </div>
                    <Progress value={0} className="h-2.5 w-full" />
                  </div>

                  <div className="space-y-4">
                    {checklistCategories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <div className="flex justify-between items-center cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: category.color }} />
                            <span className="font-medium text-gray-300">{category.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400">0/{category.items.length}</span>
                            <svg
                              className="h-5 w-5 transition-transform rotate-180 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>

                        <Progress value={0} className="h-1.5 w-full" />

                        <div className="mt-2 space-y-1.5">
                          {category.items.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-start gap-2 rounded-md p-2 transition-colors hover:bg-gray-800"
                            >
                              <div className="mt-0.5 cursor-pointer">
                                <Circle className="h-5 w-5 text-gray-500" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-300">{item.title}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-800">
                <h3 className="text-lg font-semibold mb-3 text-white">Useful Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://twitter.com/Hyperlane_xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                    <span>Follow Hyperlane on Twitter</span>
                  </a>
                  <a
                    href="https://docs.hyperlane.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Hyperlane Documentation</span>
                  </a>
                  <a
                    href="https://discord.gg/hyperlane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Join Hyperlane Discord</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
