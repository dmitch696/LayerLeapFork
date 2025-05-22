"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, Circle, Copy, ExternalLink, Shield, Gamepad2, Users, Vote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"

// Define the checklist items
const CHECKLIST_ITEMS = [
  {
    id: "get-tokens",
    title: "Get Testnet Tokens",
    description: "Obtain Base Sepolia ETH and INCO tokens from faucets",
  },
  {
    id: "use-comfy",
    title: "Use the Comfy App",
    description: "Interact with INCO's privacy-focused dApp",
  },
  {
    id: "play-hangman",
    title: "Play the Hangman Game",
    description: "Generate transactions through the Hangman game",
  },
  {
    id: "earn-discord",
    title: "Earn Discord Roles",
    description: "Join Discord and get involved for extra recognition",
  },
  {
    id: "cast-vote",
    title: "Cast Your Vote",
    description: "Participate in decentralized governance",
  },
]

export default function IncoTestnetGuidePage() {
  // State for tracking progress
  const [completedItems, setCompletedItems] = useState<string[]>([])

  // Calculate progress percentage
  const progress = (completedItems.length / CHECKLIST_ITEMS.length) * 100

  // Toggle completion status of a checklist item
  const toggleItemCompletion = (itemId: string) => {
    setCompletedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  // Copy text to clipboard
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/guides/testnets" className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Testnet Guides
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-slate-800 p-2 rounded-lg border border-blue-500">
              <Image src="/images/inco-logo.png" alt="INCO Logo" width={100} height={100} className="rounded" />
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-blue-600 hover:bg-blue-700">Testnet</Badge>
                <Badge className="bg-green-600 hover:bg-green-700">Free</Badge>
                <Badge className="bg-purple-600 hover:bg-purple-700">Massive Potential</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-2">🚀 How to Farm the INCO Airdrop ($10M+)</h1>
              <p className="text-xl text-blue-100">Full Step-by-Step Guide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Guide Content */}
          <div className="lg:w-2/3">
            {/* Introduction */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8 border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold mb-4">About INCO</h2>
              <p className="mb-4">
                INCO is an emerging modular Layer 1 blockchain built on Fully Homomorphic Encryption (FHE) — enabling
                truly private smart contracts and secure data processing. It's gaining serious traction with:
              </p>

              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>$10M raised</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Backing from a16z, CSX, and Circle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Real innovation in privacy tech</span>
                </li>
              </ul>

              <p>
                Think Initia vibes, but with built-in encryption at the protocol level. Here's how to farm it early:
              </p>
            </div>

            {/* Step 1: Get Testnet Tokens */}
            <div id="get-tokens" className="bg-slate-800 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 rounded-full p-2 mr-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">1. Get Testnet Tokens</h2>
              </div>

              <p className="mb-4">
                You'll need some testnet ETH (Base Sepolia) and INCO tokens to interact with the ecosystem:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 text-blue-400 mr-2" />
                    <span>QuickNode Faucet (Base Sepolia)</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-blue-400 border-blue-400 hover:bg-blue-900"
                    onClick={() => copyToClipboard("https://faucet.quicknode.com/base/sepolia", "QuickNode Faucet URL")}
                  >
                    <Copy className="h-4 w-4 mr-1" /> Copy
                  </Button>
                </div>

                <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 text-blue-400 mr-2" />
                    <span>INCO Official Faucet</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-blue-400 border-blue-400 hover:bg-blue-900"
                    onClick={() => copyToClipboard("https://faucet.inco.org", "INCO Faucet URL")}
                  >
                    <Copy className="h-4 w-4 mr-1" /> Copy
                  </Button>
                </div>

                <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 text-blue-400 mr-2" />
                    <span>Alchemy Faucet (Base Sepolia)</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-blue-400 border-blue-400 hover:bg-blue-900"
                    onClick={() => copyToClipboard("https://sepoliafaucet.com/", "Alchemy Faucet URL")}
                  >
                    <Copy className="h-4 w-4 mr-1" /> Copy
                  </Button>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
                <p className="text-sm">
                  <span className="font-bold">👉 Connect your wallet and request tokens from each.</span>
                  <br />💡 Need more? Engage with the INCO community on X (Twitter) — often people will send extras.
                </p>
              </div>
            </div>

            {/* Step 2: Use the Comfy App */}
            <div id="use-comfy" className="bg-slate-800 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 rounded-full p-2 mr-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">2. Use the Comfy App</h2>
              </div>

              <p className="mb-4">Start interacting with INCO's privacy-focused dApp:</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 text-purple-400 mr-2" />
                    <span>Go to comfy.inco.org</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-purple-400 border-purple-400 hover:bg-purple-900"
                    onClick={() => copyToClipboard("https://comfy.inco.org", "Comfy App URL")}
                  >
                    <Copy className="h-4 w-4 mr-1" /> Copy
                  </Button>
                </div>
              </div>

              <ol className="list-decimal pl-5 space-y-2 mb-6">
                <li>Mint some test USDC</li>
                <li>Click "Shield" → input an amount → confirm the transaction</li>
                <li>Try Unshielding, then Shield again</li>
                <li>Repeat a few times to simulate regular usage</li>
              </ol>

              <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4">
                <p className="text-sm">
                  <span className="font-bold">🔁 The more interaction, the better.</span>
                  <br />
                  This demonstrates your engagement with INCO's core privacy features.
                </p>
              </div>
            </div>

            {/* Step 3: Play the Hangman Game */}
            <div id="play-hangman" className="bg-slate-800 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 rounded-full p-2 mr-4">
                  <Gamepad2 className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">3. Play the Hangman Game</h2>
              </div>

              <p className="mb-4">A fun way to generate transactions and boost on-chain activity:</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 text-green-400 mr-2" />
                    <span>Visit hangman.inco.org</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-green-400 border-green-400 hover:bg-green-900"
                    onClick={() => copyToClipboard("https://hangman.inco.org", "Hangman Game URL")}
                  >
                    <Copy className="h-4 w-4 mr-1" /> Copy
                  </Button>
                </div>
              </div>

              <ol className="list-decimal pl-5 space-y-2 mb-6">
                <li>Connect your wallet</li>
                <li>Play by guessing letters</li>
                <li>Confirm transactions each time</li>
              </ol>

              <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                <p className="text-sm">
                  <span className="font-bold">It's simple, fast, and counts toward your participation.</span>
                  <br />
                  Each game generates multiple on-chain transactions, boosting your activity metrics.
                </p>
              </div>
            </div>

            {/* Step 4: Earn Discord Roles */}
            <div id="earn-discord" className="bg-slate-800 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-600 rounded-full p-2 mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">4. Earn Discord Roles</h2>
              </div>

              <p className="mb-4">Join the INCO Discord and get involved for extra recognition:</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 text-indigo-400 mr-2" />
                    <span>INCO Discord</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-indigo-400 border-indigo-400 hover:bg-indigo-900"
                    onClick={() => copyToClipboard("https://discord.gg/inco", "INCO Discord URL")}
                  >
                    <Copy className="h-4 w-4 mr-1" /> Copy
                  </Button>
                </div>
              </div>

              <p className="mb-2">Here are the roles you can farm:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="bg-indigo-800 rounded-full p-1 mr-2 mt-0.5">
                    <span className="text-xs">🎭</span>
                  </div>
                  <span>
                    <strong>Viber</strong> – active in chat & invites
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-800 rounded-full p-1 mr-2 mt-0.5">
                    <span className="text-xs">🧠</span>
                  </div>
                  <span>
                    <strong>FHE-pilled</strong> – top quiz performers
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-800 rounded-full p-1 mr-2 mt-0.5">
                    <span className="text-xs">🎭</span>
                  </div>
                  <span>
                    <strong>Inmemer</strong> – dankest memes
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-800 rounded-full p-1 mr-2 mt-0.5">
                    <span className="text-xs">🎨</span>
                  </div>
                  <span>
                    <strong>Inartist</strong> – post original fan art
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-800 rounded-full p-1 mr-2 mt-0.5">
                    <span className="text-xs">🌎</span>
                  </div>
                  <span>
                    <strong>local-incos</strong> – rep your region
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-800 rounded-full p-1 mr-2 mt-0.5">
                    <span className="text-xs">👑</span>
                  </div>
                  <span>
                    <strong>incos-OG</strong> – early contributors & community builders
                  </span>
                </li>
              </ul>

              <div className="bg-indigo-900/30 border border-indigo-700 rounded-lg p-4">
                <p className="text-sm">
                  <span className="font-bold">
                    🧠 The more visible and valuable you are, the better your odds at getting rewarded.
                  </span>
                  <br />
                  Discord activity is often tracked for airdrops, especially for community-focused projects.
                </p>
              </div>
            </div>

            {/* Step 5: Cast Your Vote */}
            <div id="cast-vote" className="bg-slate-800 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-600 rounded-full p-2 mr-4">
                  <Vote className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">5. Cast Your Vote</h2>
              </div>

              <p className="mb-4">Take part in decentralized governance early:</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 text-cyan-400 mr-2" />
                    <span>Head to melee.game/consensus</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-cyan-400 border-cyan-400 hover:bg-cyan-900"
                    onClick={() => copyToClipboard("https://melee.game/consensus", "Melee Consensus URL")}
                  >
                    <Copy className="h-4 w-4 mr-1" /> Copy
                  </Button>
                </div>
              </div>

              <ol className="list-decimal pl-5 space-y-2 mb-6">
                <li>Connect wallet and cast your vote</li>
              </ol>

              <div className="bg-cyan-900/30 border border-cyan-700 rounded-lg p-4">
                <p className="text-sm">
                  <span className="font-bold">
                    Even small governance actions matter for building your on-chain presence.
                  </span>
                  <br />
                  Participating in governance shows you're an engaged community member.
                </p>
              </div>
            </div>

            {/* Why INCO Section */}
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">🧠 Why INCO Deserves a Spot in Your Farming Strategy</h2>

              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>FHE at Layer 1 = true encrypted computation (beyond just ZK)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>Supports DeFi, DAOs, games — all privacy-native</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>Backed by top VCs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>Strong early-stage indicators (Moni Score: 1315)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>Feels like Initia in its early days</span>
                </li>
              </ul>
            </div>

            {/* TL;DR Section */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8 border-l-4 border-yellow-500">
              <h2 className="text-2xl font-bold mb-4">💡 TL;DR</h2>
              <p className="text-lg">
                INCO is underfarmed and backed by $10 million in funding — all signs point to a serious airdrop
                opportunity. Get in early while we're still in the testnet stage!
              </p>
              <p className="mt-4">
                This can be done with multiple wallets, discord roles may be important, so try to set up multiple
                discord accounts and claim the roles for each wallet that you're using as well!
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              {/* Progress Tracker */}
              <div className="bg-slate-800 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Your Progress</h3>
                <Progress value={progress} className="h-2 mb-4" />
                <p className="text-sm text-slate-300 mb-6">
                  {completedItems.length} of {CHECKLIST_ITEMS.length} tasks completed ({Math.round(progress)}%)
                </p>

                <div className="space-y-4">
                  {CHECKLIST_ITEMS.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start cursor-pointer hover:bg-slate-700 p-2 rounded-lg transition-colors"
                      onClick={() => toggleItemCompletion(item.id)}
                    >
                      {completedItems.includes(item.id) ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Circle className="h-5 w-5 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips */}
              <div className="bg-slate-800 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Pro Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-yellow-600 rounded-full p-1 mr-2 mt-0.5">
                      <span className="text-xs">💡</span>
                    </div>
                    <p className="text-sm">
                      Use multiple wallets to increase your chances, but make sure each wallet has meaningful activity.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-yellow-600 rounded-full p-1 mr-2 mt-0.5">
                      <span className="text-xs">💡</span>
                    </div>
                    <p className="text-sm">
                      Consistency matters more than volume. Regular activity over time is better than a one-day burst.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-yellow-600 rounded-full p-1 mr-2 mt-0.5">
                      <span className="text-xs">💡</span>
                    </div>
                    <p className="text-sm">
                      Follow INCO on Twitter/X for announcements about additional testnet activities.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-yellow-600 rounded-full p-1 mr-2 mt-0.5">
                      <span className="text-xs">💡</span>
                    </div>
                    <p className="text-sm">
                      Create genuine value in the Discord - quality over quantity for community contributions.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Quick Info */}
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Project Stage:</span>
                    <span className="font-medium">Early Testnet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Funding:</span>
                    <span className="font-medium">$10M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Cost:</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Difficulty:</span>
                    <span className="font-medium">Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Time Required:</span>
                    <span className="font-medium">15-20 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Airdrop Potential:</span>
                    <span className="font-medium text-green-500">Massive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
