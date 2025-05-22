"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Check, CheckCircle2, Clock, Copy, ExternalLink, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function NexusTestnetGuidePage() {
  const [progress, setProgress] = useState(0)
  const [tasks, setTasks] = useState([
    { id: "connect-wallet", label: "Connect wallet + X account", completed: false },
    { id: "send-points", label: "Send points to your wallet", completed: false },
    { id: "mint-nft", label: "Mint an NFT on Nexus testnet", completed: false },
    { id: "transfer-nft", label: "Transfer the NFT", completed: false },
    { id: "monitor-snapshot", label: "Monitor for snapshot + TGE", completed: false },
  ])

  const toggleTask = (id: string) => {
    const newTasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    setTasks(newTasks)

    const completedCount = newTasks.filter((task) => task.completed).length
    setProgress((completedCount / newTasks.length) * 100)
  }

  const [copiedLink, setCopiedLink] = useState<string | null>(null)

  const copyToClipboard = (text: string, linkId: string) => {
    navigator.clipboard.writeText(text)
    setCopiedLink(linkId)
    setTimeout(() => setCopiedLink(null), 2000)
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-green-600">Testnet</Badge>
                <Badge className="bg-green-700">Beginner</Badge>
                <Badge className="bg-blue-600">Free</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                🌉 Farm the Nexus Airdrop Before It's Too Late
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                Backed by $27M in funding with TGE confirmed for Q3 - learn how to participate before the snapshot.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>LayerLeap Team</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>May 20, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>15 minutes</span>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <p className="text-slate-300 leading-relaxed">
                  Nexus is an emerging modular Layer-1 blockchain built for scalability, speed, and interoperability.
                  With backing from heavyweights like Pantera Capital, Dragonfly, and Lightspeed Ventures, Nexus is
                  poised for a strong launch — and you still have time to get in early.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <div className="text-green-400 font-medium mb-2">✅ Confirmed TGE</div>
                    <p className="text-sm text-slate-300">Token Generation Event scheduled for Q3 2025</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <div className="text-green-400 font-medium mb-2">🆓 Free Participation</div>
                    <p className="text-sm text-slate-300">No investment required to participate</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <div className="text-amber-400 font-medium mb-2">⏳ Time-Sensitive</div>
                    <p className="text-sm text-slate-300">Snapshot could happen any day now</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What is Nexus */}
            <div>
              <h2 className="text-2xl font-bold mb-4">What is Nexus?</h2>
              <p className="text-slate-300 mb-4">
                Nexus is a modular Layer-1 blockchain designed for scalability, speed, and interoperability. It aims to
                solve the blockchain trilemma by providing a secure, decentralized, and highly scalable platform for
                decentralized applications.
              </p>
              <p className="text-slate-300">
                With significant backing from major venture capital firms, Nexus is positioned to be a major player in
                the blockchain space in 2025 and beyond.
              </p>
            </div>

            {/* Step-by-Step Guide */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Step-by-Step Guide</h2>

              {/* Step 1 */}
              <Card className="bg-slate-800/50 border-slate-700 mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                      1
                    </div>
                    <span>Sign Up & Link Your Wallet</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>
                      Visit:
                      <Button
                        variant="link"
                        className="px-2 text-blue-400 hover:text-blue-300 inline-flex items-center"
                        onClick={() => copyToClipboard("https://app.nexus.xyz", "nexus-app")}
                      >
                        https://app.nexus.xyz
                        {copiedLink === "nexus-app" ? (
                          <Check className="h-4 w-4 ml-1" />
                        ) : (
                          <Copy className="h-4 w-4 ml-1" />
                        )}
                      </Button>
                    </li>
                    <li>Connect your MetaMask or preferred wallet</li>
                    <li>Link your X (Twitter) account</li>
                    <li>You'll earn an initial 0.005 points or more just for connecting</li>
                  </ol>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="bg-slate-800/50 border-slate-700 mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                      2
                    </div>
                    <span>Send Points</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>Open your profile</li>
                    <li>Click "Send Points"</li>
                    <li>Enter your Metamask address and confirm</li>
                  </ol>

                  <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4 mt-4">
                    <p className="text-blue-300 flex items-start">
                      <span className="text-blue-400 mr-2">💡</span>
                      <span>
                        Tip: Sharing your wallet publicly can help you receive points from others farming the drop.
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="bg-slate-800/50 border-slate-700 mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                      3
                    </div>
                    <span>Mint an NFT on Nexus Testnet</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">This step helps prove you're actively testing the network.</p>

                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>
                      Head to:
                      <Button
                        variant="link"
                        className="px-2 text-blue-400 hover:text-blue-300 inline-flex items-center"
                        onClick={() => copyToClipboard("https://nexus-nft-example.vercel.app", "nexus-nft")}
                      >
                        https://nexus-nft-example.vercel.app
                        {copiedLink === "nexus-nft" ? (
                          <Check className="h-4 w-4 ml-1" />
                        ) : (
                          <Copy className="h-4 w-4 ml-1" />
                        )}
                      </Button>
                    </li>
                    <li>Connect your wallet</li>
                    <li>
                      Switch your network to Nexus Testnet (you may need to add it manually or using chainlist.org)
                    </li>
                    <li>Click "Mint New NFT" and approve the transaction</li>
                  </ol>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="bg-slate-800/50 border-slate-700 mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                      4
                    </div>
                    <span>Transfer the NFT</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">To complete your testnet interaction:</p>

                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>In the same interface, click "Transfer NFT"</li>
                    <li>Paste your wallet address again</li>
                    <li>Confirm the transfer to show on-chain activity</li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            {/* Why You Should Care */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Why You Should Care</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <p className="text-slate-300">
                    <span className="text-purple-400 font-medium">$27.2M Funding</span> - Nexus has secured major
                    investors including Pantera Capital, Dragonfly, and Lightspeed Ventures
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <p className="text-slate-300">
                    <span className="text-purple-400 font-medium">Confirmed TGE</span> - The Token Generation Event is
                    scheduled for Q3, meaning the snapshot could happen any day
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <p className="text-slate-300">
                    <span className="text-purple-400 font-medium">Quick & Free</span> - Farming Nexus takes just minutes
                    and costs nothing
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <p className="text-slate-300">
                    <span className="text-purple-400 font-medium">Less Competition</span> - Fewer users are farming
                    compared to saturated projects, giving you a potential edge
                  </p>
                </div>
              </div>
            </div>

            {/* Final Tips */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Final Tips</h2>

              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Check your points daily, work to increase them</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Engage on Discord and claim any available Discord roles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Consider repeating these actions across multiple wallets (carefully) if you're a serious farmer
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-6 border border-blue-800">
              <h3 className="text-xl font-bold mb-2">Don't miss your shot at one of Q3's biggest upcoming airdrops</h3>
              <p className="text-slate-300 mb-4">Get in early, stay active, and lock in your spot.</p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                onClick={() => window.open("https://app.nexus.xyz", "_blank")}
              >
                Start Farming Now
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Progress Tracker */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle>Nexus Farming Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Your progress</span>
                      <span className="text-slate-300 font-medium">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center p-2 rounded-md hover:bg-slate-700 cursor-pointer"
                        onClick={() => toggleTask(task.id)}
                      >
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-sm border mr-3 flex items-center justify-center ${
                            task.completed ? "bg-blue-600 border-blue-600" : "border-slate-600"
                          }`}
                        >
                          {task.completed && <Check className="h-3 w-3 text-white" />}
                        </div>
                        <span
                          className={`text-sm ${task.completed ? "text-slate-400 line-through" : "text-slate-300"}`}
                        >
                          {task.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-between text-slate-300"
                    onClick={() => window.open("https://app.nexus.xyz", "_blank")}
                  >
                    Nexus App
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-between text-slate-300"
                    onClick={() => window.open("https://nexus-nft-example.vercel.app", "_blank")}
                  >
                    NFT Minting
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-between text-slate-300"
                    onClick={() => window.open("https://chainlist.org", "_blank")}
                  >
                    Chainlist
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Share */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle>Share This Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Discord
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => copyToClipboard(window.location.href, "page-url")}
                    >
                      {copiedLink === "page-url" ? "Copied!" : "Copy Link"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
