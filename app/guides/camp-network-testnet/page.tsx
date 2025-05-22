"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Circle, Copy, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function CampNetworkTestnetGuidePage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    joinLoyalty: false,
    completeSocial: false,
    completeQuests: false,
    getTokens: false,
    deployContract: false,
    engageDaily: false,
    setupMultipleWallets: false,
  })

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const calculateProgress = () => {
    const totalItems = Object.keys(checkedItems).length
    const completedItems = Object.values(checkedItems).filter(Boolean).length
    return (completedItems / totalItems) * 100
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
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

      <main className="container mx-auto px-4 py-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-2/3">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-green-500">Testnet</Badge>
                <Badge className="bg-green-700">Beginner</Badge>
                <Badge className="bg-blue-600">$30M Funding</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">🏕️ Camp Network Testnet Guide</h1>
              <p className="text-xl text-slate-300 mb-6">
                Farm the Camp Network testnet backed by $30M in funding - modernizing IP infrastructure for AI
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8">
                <div className="flex items-center gap-1">
                  <span>LayerLeap Team</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>May 29, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>15-20 minutes</span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 z-0"></div>
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 relative">
                      <Image
                        src="/images/camp-network-logo.png"
                        alt="Camp Network Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Camp Network</h2>
                      <p className="text-slate-300">@campnetworkxyz</p>
                    </div>
                  </div>
                  <p className="text-lg">
                    Camp Network is a next-gen Layer-1 blockchain built to modernize IP infrastructure and support
                    future AI agents with verifiable intellectual property systems.
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold">
                      1
                    </div>
                    <h2 className="text-2xl font-bold">Join the Camp Loyalty Program</h2>
                    <button
                      onClick={() => toggleItem("joinLoyalty")}
                      className="ml-auto flex items-center justify-center w-6 h-6 text-slate-400 hover:text-white"
                    >
                      {checkedItems.joinLoyalty ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <Circle className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                  <div className="ml-11 space-y-4">
                    <p>Start by joining the official loyalty program:</p>
                    <div className="flex items-center gap-2 p-3 bg-slate-800 rounded-lg">
                      <span className="text-slate-300">Visit the loyalty hub:</span>
                      <a
                        href="https://loyalty.campnetwork.xyz/loyalty?referral_code=YA73272X"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        loyalty.campnetwork.xyz
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <div className="flex-1"></div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyToClipboard("https://loyalty.campnetwork.xyz/loyalty?referral_code=YA73272X")
                        }
                        className="text-slate-400 hover:text-white"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Connect your wallet (any EVM-compatible wallet like MetaMask)</li>
                      <li>
                        Complete all available tasks (these may include following social accounts, inviting friends,
                        engaging with content, etc.)
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold">
                      2
                    </div>
                    <h2 className="text-2xl font-bold">Complete Camp Quests</h2>
                    <button
                      onClick={() => toggleItem("completeQuests")}
                      className="ml-auto flex items-center justify-center w-6 h-6 text-slate-400 hover:text-white"
                    >
                      {checkedItems.completeQuests ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <Circle className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                  <div className="ml-11 space-y-4">
                    <p>Next, engage with the testnet quest portal:</p>
                    <div className="flex items-center gap-2 p-3 bg-slate-800 rounded-lg">
                      <span className="text-slate-300">Visit the testnet quest portal:</span>
                      <a
                        href="http://campstaging.snag-render.com/home2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        campstaging.snag-render.com
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <div className="flex-1"></div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("http://campstaging.snag-render.com/home2")}
                        className="text-slate-400 hover:text-white"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Connect your EVM wallet</li>
                      <li>
                        Complete all listed quests (tasks vary but usually include interacting with testnet dApps,
                        exploring the ecosystem, and more)
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold">
                      3
                    </div>
                    <h2 className="text-2xl font-bold">Get Testnet Tokens</h2>
                    <button
                      onClick={() => toggleItem("getTokens")}
                      className="ml-auto flex items-center justify-center w-6 h-6 text-slate-400 hover:text-white"
                    >
                      {checkedItems.getTokens ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <Circle className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                  <div className="ml-11 space-y-4">
                    <p>You'll need CAMP testnet tokens to perform actions:</p>
                    <div className="flex items-center gap-2 p-3 bg-slate-800 rounded-lg">
                      <span className="text-slate-300">Use the faucet here:</span>
                      <a
                        href="http://faucet.campnetwork.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        faucet.campnetwork.xyz
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <div className="flex-1"></div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("http://faucet.campnetwork.xyz")}
                        className="text-slate-400 hover:text-white"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Enter your EVM wallet address and receive test tokens instantly</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold">
                      4
                    </div>
                    <h2 className="text-2xl font-bold">Deploy a Smart Contract</h2>
                    <button
                      onClick={() => toggleItem("deployContract")}
                      className="ml-auto flex items-center justify-center w-6 h-6 text-slate-400 hover:text-white"
                    >
                      {checkedItems.deployContract ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <Circle className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                  <div className="ml-11 space-y-4">
                    <p>Show advanced engagement and stand out by deploying a contract:</p>
                    <div className="flex items-center gap-2 p-3 bg-slate-800 rounded-lg">
                      <span className="text-slate-300">Go to OnChain GM's contract deployment tool:</span>
                      <a
                        href="https://onchaingm.com?ref=0xd859E2EeD8e3E7F262a93738105731da737C445B"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        onchaingm.com
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <div className="flex-1"></div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyToClipboard("https://onchaingm.com?ref=0xd859E2EeD8e3E7F262a93738105731da737C445B")
                        }
                        className="text-slate-400 hover:text-white"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Connect your wallet and select the Camp Network</li>
                      <li>Deploy a basic contract, do this daily or as often as you can!</li>
                    </ul>
                    <div className="p-4 bg-blue-900/30 border border-blue-700/30 rounded-lg">
                      <p className="text-blue-300">
                        <span className="font-bold">💡 Pro Tip:</span> This step demonstrates higher-level interaction
                        and could increase your airdrop eligibility.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Maximizing Your Airdrop Potential</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleItem("engageDaily")}
                        className="flex items-center justify-center w-6 h-6 text-slate-400 hover:text-white"
                      >
                        {checkedItems.engageDaily ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <Circle className="w-6 h-6" />
                        )}
                      </button>
                      <p>
                        <span className="font-bold">Daily Engagement:</span> Return to the platform daily to show
                        consistent activity
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleItem("setupMultipleWallets")}
                        className="flex items-center justify-center w-6 h-6 text-slate-400 hover:text-white"
                      >
                        {checkedItems.setupMultipleWallets ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <Circle className="w-6 h-6" />
                        )}
                      </button>
                      <p>
                        <span className="font-bold">Multiple Wallets:</span> Consider using different wallets to
                        multiply your rewards (carefully manage these to avoid Sybil detection)
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleItem("completeSocial")}
                        className="flex items-center justify-center w-6 h-6 text-slate-400 hover:text-white"
                      >
                        {checkedItems.completeSocial ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <Circle className="w-6 h-6" />
                        )}
                      </button>
                      <p>
                        <span className="font-bold">Social Engagement:</span> Actively participate in the Camp Network
                        community on Discord and Twitter
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="p-6 bg-green-900/30 border border-green-700/30 rounded-lg">
                    <h2 className="text-2xl font-bold mb-2">🏁 You're All Set!</h2>
                    <p>
                      By completing all the above steps, you're now actively participating in the Camp Network
                      testnet—positioning yourself for a share of a potential future airdrop. Remember to check back
                      regularly for new tasks and opportunities to engage with the platform.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </article>

          <aside className="lg:w-1/3">
            <div className="sticky top-8 space-y-6">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Your Progress</h3>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-400">Completion</span>
                    <span className="text-sm font-medium">{Math.round(calculateProgress())}%</span>
                  </div>
                  <Progress value={calculateProgress()} className="h-2" />
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => toggleItem("joinLoyalty")}
                    className={`flex items-center gap-2 w-full p-2 rounded-md text-left ${
                      checkedItems.joinLoyalty ? "bg-green-900/20 text-green-400" : "bg-slate-700/50 hover:bg-slate-700"
                    }`}
                  >
                    {checkedItems.joinLoyalty ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>Join the Camp Loyalty Program</span>
                  </button>
                  <button
                    onClick={() => toggleItem("completeSocial")}
                    className={`flex items-center gap-2 w-full p-2 rounded-md text-left ${
                      checkedItems.completeSocial
                        ? "bg-green-900/20 text-green-400"
                        : "bg-slate-700/50 hover:bg-slate-700"
                    }`}
                  >
                    {checkedItems.completeSocial ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>Complete social tasks</span>
                  </button>
                  <button
                    onClick={() => toggleItem("completeQuests")}
                    className={`flex items-center gap-2 w-full p-2 rounded-md text-left ${
                      checkedItems.completeQuests
                        ? "bg-green-900/20 text-green-400"
                        : "bg-slate-700/50 hover:bg-slate-700"
                    }`}
                  >
                    {checkedItems.completeQuests ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>Complete Camp Quests</span>
                  </button>
                  <button
                    onClick={() => toggleItem("getTokens")}
                    className={`flex items-center gap-2 w-full p-2 rounded-md text-left ${
                      checkedItems.getTokens ? "bg-green-900/20 text-green-400" : "bg-slate-700/50 hover:bg-slate-700"
                    }`}
                  >
                    {checkedItems.getTokens ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>Get testnet tokens</span>
                  </button>
                  <button
                    onClick={() => toggleItem("deployContract")}
                    className={`flex items-center gap-2 w-full p-2 rounded-md text-left ${
                      checkedItems.deployContract
                        ? "bg-green-900/20 text-green-400"
                        : "bg-slate-700/50 hover:bg-slate-700"
                    }`}
                  >
                    {checkedItems.deployContract ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>Deploy a smart contract</span>
                  </button>
                  <button
                    onClick={() => toggleItem("engageDaily")}
                    className={`flex items-center gap-2 w-full p-2 rounded-md text-left ${
                      checkedItems.engageDaily ? "bg-green-900/20 text-green-400" : "bg-slate-700/50 hover:bg-slate-700"
                    }`}
                  >
                    {checkedItems.engageDaily ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>Engage daily</span>
                  </button>
                  <button
                    onClick={() => toggleItem("setupMultipleWallets")}
                    className={`flex items-center gap-2 w-full p-2 rounded-md text-left ${
                      checkedItems.setupMultipleWallets
                        ? "bg-green-900/20 text-green-400"
                        : "bg-slate-700/50 hover:bg-slate-700"
                    }`}
                  >
                    {checkedItems.setupMultipleWallets ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>Set up multiple wallets</span>
                  </button>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Difficulty:</span>
                    <span className="font-medium">Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Time Required:</span>
                    <span className="font-medium">15-20 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Funding:</span>
                    <span className="font-medium">$30M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Requirements:</span>
                    <span className="font-medium">EVM Wallet</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Pro Tips</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span>
                      Deploy contracts <strong>daily</strong> to maximize your on-chain activity score
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span>
                      Claim <strong>all available Discord roles</strong> - many users miss this step
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span>
                      Use the referral code to get <strong>bonus points</strong> in the loyalty program
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800 border border-slate-700 rounded-lg">
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
