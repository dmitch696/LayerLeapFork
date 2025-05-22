"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, Copy, ExternalLink, Info, Wallet, Zap } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function MegaETHTestnetGuidePage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://layerleap.xyz/guides/megaeth-testnet")
    setCopied(true)
    toast.success("Link copied to clipboard!")
    setTimeout(() => setCopied(false), 2000)
  }

  // Define checklist items with proper structure
  const checklistCategories = [
    {
      name: "Wallet Setup",
      items: [
        { id: "setup-metamask", label: "Set up MetaMask with MegaETH RPC" },
        { id: "get-testnet-eth", label: "Get testnet ETH from faucet" },
      ],
    },
    {
      name: "dApp Interactions",
      items: [
        { id: "nfts2me", label: "Create & mint NFT on nfts2me.com" },
        { id: "conft", label: "Mint 5-10 NFTs on conft.app" },
        { id: "cap-app", label: "Mint testnet USD on cap.app" },
        { id: "gte-xyz", label: "Swap tokens on gte.xyz" },
        { id: "bebop", label: "Add liquidity on bebop.xyz" },
        { id: "teko", label: "Lend & borrow on teko.finance" },
      ],
    },
    {
      name: "Community Engagement",
      items: [
        { id: "join-discord", label: "Join MegaETH Discord" },
        { id: "follow-twitter", label: "Follow MegaETH on Twitter" },
        { id: "superboard", label: "Complete Superboard tasks" },
      ],
    },
  ]

  // Fallback checklist in case the SybilChecklist component doesn't work
  const FallbackChecklist = () => (
    <div className="space-y-4">
      {checklistCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-2">
          <h4 className="font-medium text-sm text-slate-300">{category.name}</h4>
          <div className="space-y-1.5">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-start space-x-2">
                <Checkbox id={item.id} className="mt-0.5" />
                <label htmlFor={item.id} className="text-sm text-slate-400 cursor-pointer">
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-200 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 z-0"></div>
        <div className="absolute inset-0 bg-[url('/abstract-blockchain-network.png')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <Link
            href="/guides"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Guides
          </Link>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  🧪 MegaETH Testnet Guide
                </h1>
                <p className="text-xl text-slate-300 mb-6">Positioning for a Potential Airdrop</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="bg-slate-800/80 backdrop-blur rounded-full px-4 py-1 text-sm flex items-center">
                    <span className="bg-purple-500 w-2 h-2 rounded-full mr-2"></span>
                    Testnet
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur rounded-full px-4 py-1 text-sm flex items-center">
                    <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
                    Beginner Friendly
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur rounded-full px-4 py-1 text-sm flex items-center">
                    <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                    ~15 Minutes Setup
                  </div>
                </div>

                <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-6 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="h-5 w-5 text-blue-400" />
                    <h2 className="text-xl font-medium">Why Use the MegaETH Testnet?</h2>
                  </div>
                  <p className="text-slate-300 mb-4">
                    MegaETH is a new, high-performance Ethereum-based L2 with blazing-fast speeds. Although the team has
                    stated there's no guaranteed airdrop, we've seen this story before:
                  </p>
                  <blockquote className="border-l-4 border-purple-500 pl-4 py-2 my-4 bg-slate-800/50 rounded-r-lg italic">
                    "No airdrop" ≠ never airdrop. Projects like zkSync, Arbitrum, Blast, and Starknet once denied or
                    downplayed airdrops, only to launch massive ones later.
                  </blockquote>
                  <p className="text-slate-300">
                    Getting involved early with the MegaETH testnet is free, low-effort, and potentially high-reward.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-medium mb-4">Track Your Progress</h3>
                <p className="text-sm text-slate-400 mb-4">
                  Use this checklist to track your progress through the MegaETH testnet tasks.
                </p>
                <div className="bg-slate-900/50 rounded-lg border border-slate-700 p-4">
                  {/* Use the fallback checklist instead of SybilChecklist */}
                  <FallbackChecklist />
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 text-slate-300 border-slate-700 hover:bg-slate-700/50"
                  >
                    {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied!" : "Share Guide"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Removed wave divider and reduced spacing */}
      <div className="container mx-auto px-4 pt-0 pb-12">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Zap className="h-7 w-7 text-purple-400" />
          Step-by-Step Guide to Using the MegaETH Testnet
        </h2>

        {/* Steps */}
        <div className="space-y-12 mb-16">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 z-0 hidden md:block"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">Set Up Your Wallet</h3>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
                    <ol className="space-y-4 text-slate-300">
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mt-0.5">
                          1
                        </div>
                        <div>Use MetaMask or another EVM-compatible wallet.</div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mt-0.5">
                          2
                        </div>
                        <div>Open MetaMask.</div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mt-0.5">
                          3
                        </div>
                        <div>Click on the network dropdown, then "Add Network".</div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mt-0.5">
                          4
                        </div>
                        <div>Add the MegaETH Testnet manually:</div>
                      </li>
                    </ol>

                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-slate-700/30">
                            <th className="border border-slate-600 px-4 py-2 text-left">Field</th>
                            <th className="border border-slate-600 px-4 py-2 text-left">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-slate-600 px-4 py-2 font-medium">Network Name</td>
                            <td className="border border-slate-600 px-4 py-2">MegaETH Testnet</td>
                          </tr>
                          <tr className="bg-slate-700/20">
                            <td className="border border-slate-600 px-4 py-2 font-medium">New RPC URL</td>
                            <td className="border border-slate-600 px-4 py-2">https://rpc.testnet.megaeth.com</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-600 px-4 py-2 font-medium">Chain ID</td>
                            <td className="border border-slate-600 px-4 py-2">21816</td>
                          </tr>
                          <tr className="bg-slate-700/20">
                            <td className="border border-slate-600 px-4 py-2 font-medium">Currency Symbol</td>
                            <td className="border border-slate-600 px-4 py-2">ETH</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-600 px-4 py-2 font-medium">Block Explorer URL</td>
                            <td className="border border-slate-600 px-4 py-2">https://explorer.testnet.megaeth.com</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-xl p-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Wallet className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-400">Pro Tip</p>
                        <p className="text-slate-300">
                          Use multiple wallets if you want to increase your exposure (just make sure you don't act like
                          a clear sybil farmer — vary behavior).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 z-0 hidden md:block"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">Get Free Testnet ETH</h3>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <ol className="space-y-4 text-slate-300">
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mt-0.5">
                          1
                        </div>
                        <div className="flex items-center gap-2">
                          Visit the faucet:
                          <a
                            href="https://testnet.megaeth.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                          >
                            https://testnet.megaeth.com/
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mt-0.5">
                          2
                        </div>
                        <div>Connect your wallet.</div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mt-0.5">
                          3
                        </div>
                        <div>Click "Request ETH".</div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mt-0.5">
                          4
                        </div>
                        <div>You'll receive a small amount of MegaETH testnet ETH to interact with the network.</div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-green-600 flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">Interact With the Testnet</h3>

                  <p className="text-slate-300 mb-6">
                    MegaETH is still new, so available dApps may be limited. Here are things you can do to simulate real
                    usage:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                      {
                        name: "nfts2me.com",
                        description: "Create & mint your own NFT",
                        url: "https://nfts2me.com",
                      },
                      {
                        name: "conft.app",
                        description: "Create & mint NFTs, mint 5-10 and repeat this a few times a week",
                        url: "https://conft.app/",
                      },
                      {
                        name: "cap.app/testnet",
                        description: "Mint testnet USD, do this once a week",
                        url: "https://cap.app/testnet",
                      },
                      {
                        name: "testnet.gte.xyz",
                        description: "Swap & add liquidity with various tokens",
                        url: "https://testnet.gte.xyz/",
                      },
                      {
                        name: "bebop.xyz/trade",
                        description: "Swap & add liquidity",
                        url: "https://bebop.xyz/trade",
                      },
                      {
                        name: "testnet.teko.finance/earn",
                        description: "Mint test tokens, lend & borrow",
                        url: "https://testnet.teko.finance/earn",
                      },
                    ].map((dapp, index) => (
                      <Card
                        key={index}
                        className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all"
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{dapp.name}</CardTitle>
                          <CardDescription>{dapp.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <a
                            href={dapp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                          >
                            Visit dApp
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Info className="h-5 w-5 text-blue-400" />
                      <h4 className="text-lg font-medium">View all MegaETH dApps</h4>
                    </div>
                    <p className="text-slate-300 mb-4">
                      For a complete list of available dApps on the MegaETH testnet, visit:
                    </p>
                    <a
                      href="https://testnet.megaeth.com/#5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      https://testnet.megaeth.com/#5
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Plans */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">🔄 Future Plans: Keep an Eye Out for Testnet dApps</h2>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <p className="text-slate-300 mb-4">New apps and bridges may start launching on MegaETH. To stay ahead:</p>

            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Monitor their Discord or Twitter.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Try each new dApp as it appears.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">🛡 Best Practices to Maximize Your Chances</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-8">
              <thead>
                <tr className="bg-slate-700/30">
                  <th className="border border-slate-600 px-4 py-3 text-left">Action</th>
                  <th className="border border-slate-600 px-4 py-3 text-left">Why It Helps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-600 px-4 py-3 font-medium">Use multiple wallets</td>
                  <td className="border border-slate-600 px-4 py-3">More exposure if airdrop occurs</td>
                </tr>
                <tr className="bg-slate-700/20">
                  <td className="border border-slate-600 px-4 py-3 font-medium">Don't copy-paste behavior</td>
                  <td className="border border-slate-600 px-4 py-3">Avoids being flagged as a sybil farm</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 px-4 py-3 font-medium">Use multiple dApps</td>
                  <td className="border border-slate-600 px-4 py-3">Simulates real user behavior</td>
                </tr>
                <tr className="bg-slate-700/20">
                  <td className="border border-slate-600 px-4 py-3 font-medium">Participate in community</td>
                  <td className="border border-slate-600 px-4 py-3">Shows loyalty & interest</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 px-4 py-3 font-medium">Stay updated on Twitter + Discord</td>
                  <td className="border border-slate-600 px-4 py-3">Be the first to use new tools or dApps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">📌 Summary</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-8">
              <thead>
                <tr className="bg-slate-700/30">
                  <th className="border border-slate-600 px-4 py-3 text-left">Step</th>
                  <th className="border border-slate-600 px-4 py-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-600 px-4 py-3 font-medium">1. Set up MetaMask</td>
                  <td className="border border-slate-600 px-4 py-3">Add MegaETH Testnet RPC</td>
                </tr>
                <tr className="bg-slate-700/20">
                  <td className="border border-slate-600 px-4 py-3 font-medium">2. Get test ETH</td>
                  <td className="border border-slate-600 px-4 py-3">Use https://testnet.megaeth.com/</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 px-4 py-3 font-medium">3. Make transactions</td>
                  <td className="border border-slate-600 px-4 py-3">Transfer ETH, interact with contracts</td>
                </tr>
                <tr className="bg-slate-700/20">
                  <td className="border border-slate-600 px-4 py-3 font-medium">4. Repeat daily/weekly</td>
                  <td className="border border-slate-600 px-4 py-3">Stay active and consistent</td>
                </tr>
                <tr>
                  <td className="border border-slate-600 px-4 py-3 font-medium">5. Watch for new dApps</td>
                  <td className="border border-slate-600 px-4 py-3">Use them early and often</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-slate-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">💡 Final Thoughts</h2>

          <p className="text-slate-300 mb-4">
            Even if MegaETH says there's no guaranteed airdrop, the best way to "opt-in" if one ever comes is to:
          </p>

          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Use the testnet regularly</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Try any new tools or dApps, continuously increase your unique smart contract interactions</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Join the community early, claim discord roles if available</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>
                Complete superboard tasks:
                <a
                  href="https://superboard.xyz/campaign/megaeth-testnet-real-time-era"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 ml-1 inline-flex items-center gap-1"
                >
                  https://superboard.xyz/campaign/megaeth-testnet-real-time-era
                  <ExternalLink className="h-3 w-3" />
                </a>
              </span>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <p className="text-slate-300 italic">
              🧙‍♂️ Remember: The biggest airdrops in crypto history have gone to early testers — not just heavy users,
              but consistent, genuine ones with unique actions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
