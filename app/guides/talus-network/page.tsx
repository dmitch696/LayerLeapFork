"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ExternalLink,
  Check,
  Copy,
  Twitter,
  DiscIcon as Discord,
  Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AirdropProgress } from "@/components/airdrop-progress"

export default function TalusNetworkGuidePage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const guide = {
    id: "talus-network",
    title: "🚀 Talus Network Airdrop Guide",
    description: "Farm Rewards from the AI-Focused Blockchain Backed by $9M in Funding",
    category: "testnet",
    difficulty: "beginner",
    author: "LayerLeap Team",
    date: "May 25, 2025",
    readTime: "10 minutes",
    tasks: [
      {
        id: "visit-loyalty-hub",
        title: "Visit the Talus Loyalty Hub",
        description: "Head over to the official Talus loyalty dashboard",
        completed: false,
      },
      {
        id: "connect-wallet",
        title: "Connect your wallet",
        description: "Connect MetaMask or another compatible wallet",
        completed: false,
      },
      {
        id: "link-socials",
        title: "Link social accounts",
        description: "Connect your X (Twitter) and Discord accounts",
        completed: false,
      },
      {
        id: "claim-roles",
        title: "Claim all Discord roles",
        description: "Select all regional community roles for maximum points",
        completed: false,
      },
      {
        id: "complete-tasks",
        title: "Complete all available tasks",
        description: "Earn loyalty points through social media actions and community involvement",
        completed: false,
      },
      {
        id: "daily-checkins",
        title: "Perform daily check-ins",
        description: "Return regularly to earn extra points",
        completed: false,
      },
      {
        id: "monitor-new-tasks",
        title: "Monitor for new tasks",
        description: "Keep an eye out for additional opportunities to earn points",
        completed: false,
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="container mx-auto px-4 py-8">
        <Link href="/guides/testnets" passHref>
          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Testnet Guides
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-2/3">
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

            {/* Hero Section */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
              <Image src="/placeholder-urgzi.png" alt="Talus Network" fill className="object-cover" />
              <div className="absolute inset-0 z-20 flex flex-col justify-center p-8">
                <h2 className="text-3xl font-bold mb-2">Talus Network</h2>
                <p className="text-lg text-slate-200 max-w-2xl">
                  A next-generation blockchain project aiming to decentralize artificial intelligence. With $9M raised
                  from major backers like Polychain Capital, it's a serious contender in the AI + blockchain space.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-invert prose-lg max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">🪂 How to Qualify for the Talus Airdrop</h2>
              <p>
                Getting started is fast and free. Follow these steps to position yourself for the potential airdrop:
              </p>
            </div>

            {/* Step 1 */}
            <Card className="bg-slate-800/50 border-slate-700 mb-6 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-2 px-4">
                <h3 className="text-xl font-medium">Step 1: Visit the Loyalty Hub</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <p className="mb-4">Head over to the official Talus loyalty dashboard to get started:</p>
                    <div className="flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg mb-4">
                      <code className="text-green-400">hub.talus.network/loyalty</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2"
                        onClick={() => copyToClipboard("https://hub.talus.network/loyalty", "loyalty-hub")}
                      >
                        {copied === "loyalty-hub" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <Button variant="outline" size="sm" className="h-8" asChild>
                        <a
                          href="https://hub.talus.network/loyalty"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Visit
                        </a>
                      </Button>
                    </div>
                    <p>
                      The Loyalty Hub is where you'll track your progress, complete tasks, and earn points that may
                      determine your future airdrop allocation.
                    </p>
                  </div>
                  <div className="md:w-1/3 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-blue-600/20 flex items-center justify-center">
                      <ExternalLink className="h-10 w-10 text-blue-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-slate-800/50 border-slate-700 mb-6 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 py-2 px-4">
                <h3 className="text-xl font-medium">Step 2: Connect Wallet & Socials</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Wallet className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>Connect your wallet (e.g. MetaMask) to the Loyalty Hub</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Twitter className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>Link your X (Twitter) account to verify your social presence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Discord className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>Connect your Discord account and join the Talus community</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-purple-900/30 border border-purple-800/50 rounded-lg">
                      <p className="text-purple-200 font-medium">Pro Tip:</p>
                      <p className="text-purple-100">
                        When choosing your regional community role, select them all to maximize your points!
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/3 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center">
                        <Wallet className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-sky-600/20 flex items-center justify-center">
                        <Twitter className="h-6 w-6 text-sky-400" />
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                        <Discord className="h-6 w-6 text-indigo-400" />
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-green-600/20 flex items-center justify-center">
                        <Check className="h-6 w-6 text-green-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-slate-800/50 border-slate-700 mb-10 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 py-2 px-4">
                <h3 className="text-xl font-medium">Step 3: Complete Tasks</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <p className="mb-4">
                      You'll see a list of tasks ranging from social media actions to community involvement:
                    </p>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span>Follow Talus Network on social media</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span>Retweet announcements and tag friends</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span>Join community discussions on Discord</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span>Complete daily check-ins for bonus points</span>
                      </li>
                    </ul>
                    <p>
                      Complete all available tasks to earn loyalty points, which may be used to determine future airdrop
                      allocations.
                    </p>
                  </div>
                  <div className="md:w-1/3 flex items-center justify-center">
                    <div className="w-32 h-32 relative">
                      <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping opacity-75"></div>
                      <div className="relative w-full h-full rounded-full bg-green-600/30 border-2 border-green-500/50 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">Points</div>
                          <div className="text-sm text-green-300">Earn More!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Farm Talus */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">💡 Why Farm Talus?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        >
                          <path d="M22 17a10 10 0 1 1-9-15" />
                          <path d="M16 4h6v6" />
                          <path d="m22 4-5.5 5.5" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Early Stage, Low Competition</h3>
                        <p className="text-slate-300">
                          Get in early before the project gains mainstream attention and competition increases.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-400"
                        >
                          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">AI + Blockchain Narrative</h3>
                        <p className="text-slate-300">
                          The intersection of AI and blockchain is heating up, positioning Talus in a high-growth
                          sector.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-400"
                        >
                          <path d="M12 2v20" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Backed by $9M from Top-Tier Funds</h3>
                        <p className="text-slate-300">
                          Significant funding from Polychain Capital and other major investors validates the project's
                          potential.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-900/50 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-400"
                        >
                          <path d="M12 2v8" />
                          <path d="m4.93 10.93 1.41 1.41" />
                          <path d="M2 18h2" />
                          <path d="M20 18h2" />
                          <path d="m19.07 10.93-1.41 1.41" />
                          <path d="M22 22H2" />
                          <path d="m16 6-4 4-4-4" />
                          <path d="M16 18a4 4 0 0 0-8 0" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Simple Tasks, Multiple Accounts</h3>
                        <p className="text-slate-300">
                          Tasks take just minutes and can be done with multiple accounts if you have multiple X and
                          Discord accounts.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pro Tip */}
            <Card className="bg-gradient-to-r from-amber-900/30 to-amber-800/20 border border-amber-700/30 p-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center flex-shrink-0">
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
                    className="text-amber-400"
                  >
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="m16 6-4 4-4-4" />
                    <path d="M16 18a4 4 0 0 0-8 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-amber-300 mb-2">🕓 Pro Tip</h3>
                  <p className="text-amber-100 mb-2">
                    Keep checking back on the Talus Loyalty Hub — do daily check-ins for extra points and keep an eye
                    out for new tasks.
                  </p>
                  <p className="text-amber-200">
                    Consistent engagement over time may be rewarded more heavily than one-time participation.
                  </p>
                </div>
              </div>
            </Card>
          </article>

          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-8">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Track Your Progress</h3>
                <AirdropProgress tasks={guide.tasks} guideId={guide.id} />
              </div>

              <div className="mt-6 p-4 bg-slate-800 border border-slate-700 rounded-lg">
                <h3 className="font-medium mb-2">Quick Links</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a
                      href="https://hub.talus.network/loyalty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Talus Loyalty Hub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a
                      href="https://twitter.com/TalusNetwork"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Twitter className="h-3.5 w-3.5" />
                      Talus Twitter
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a
                      href="https://discord.gg/talus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Discord className="h-3.5 w-3.5" />
                      Talus Discord
                    </a>
                  </Button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-800 border border-slate-700 rounded-lg">
                <h3 className="font-medium mb-2">Get Notified</h3>
                <p className="text-sm text-slate-400 mb-4">
                  Receive updates when this guide changes or when important deadlines approach.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Enable Notifications</Button>
              </div>

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
