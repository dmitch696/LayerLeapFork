"use client"

import React from "react"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Copy, Check, Wallet, Globe, MessageSquare, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function LensGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <Link href="/guides/mainnets" passHref>
          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Mainnet Guides
          </Button>
        </Link>

        <div className="mt-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-white p-6 shadow-lg">
              <img
                src="/images/lens-logo-official.png"
                alt="Lens Protocol Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-black hover:bg-gray-800">Mainnet</Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                $46M Funding
              </Badge>
              <Badge variant="outline" className="border-slate-600">
                Intermediate
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">Lens Protocol Airdrop Guide</h1>
            <p className="text-slate-300 text-lg">
              Lens Chain has officially entered the mainnet phase after ~6 months of testnet. With $46M in funding from
              Circle, ConsenSys, Delphi Ventures, and only 450K transactions so far, this could be the final push before
              a major airdrop.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-slate-800/50 rounded-xl p-6 mb-10 border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold">Why Farm Lens Protocol?</h2>
          </div>
          <p className="text-slate-300">
            Lens Protocol has strong funding and relatively low competition. If you farmed the testnet, it's crucial to
            now participate in the mainnet. Take action while you're still early - you don't need a lot of funds and the
            potential rewards can be massive. There are also numerous Discord roles that few users are claiming, which
            could be a great way to stand out.
          </p>
        </div>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="bg-slate-800 rounded-xl overflow-hidden">
            <div className="bg-black py-4 px-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="flex items-center justify-center bg-white text-black rounded-full w-8 h-8 font-bold">
                  1
                </span>
                Add Lens Chain Mainnet
              </h2>
            </div>

            <div className="p-6">
              <p className="mb-4 text-slate-300">Manually add the network to your wallet with these details:</p>

              <div className="space-y-4">
                <NetworkDetail label="Network Name" value="Lens Chain Mainnet" />
                <NetworkDetail label="RPC URL" value="https://rpc.lens.xyz" />
                <NetworkDetail label="Chain ID" value="232" />
                <NetworkDetail label="Currency Symbol" value="GHO" />
                <NetworkDetail label="Block Explorer" value="explorer.lens.xyz" />
              </div>

              <div className="mt-6 flex items-center gap-2 text-gray-300">
                <Wallet className="h-5 w-5" />
                <span>
                  Tip: Add this network to multiple wallets to increase your chances of qualifying for the airdrop.
                </span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-800 rounded-xl overflow-hidden">
            <div className="bg-black py-4 px-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="flex items-center justify-center bg-white text-black rounded-full w-8 h-8 font-bold">
                  2
                </span>
                Use All Available dApps
              </h2>
            </div>

            <div className="p-6">
              <p className="mb-6 text-slate-300">
                Interact with as many dApps as possible to increase your on-chain activity. Here are the key platforms
                to use:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DappCard
                  title="Across Protocol"
                  url="https://app.across.to/bridge"
                  description="Bridge to and from Lens Chain"
                />

                <DappCard
                  title="Jumper Exchange"
                  url="https://jumper.exchange/"
                  description="Bridge to Lens, wrap and unwrap GHO token"
                />

                <DappCard
                  title="OnChain GM"
                  url="https://onchaingm.com?ref=0xD6e0Ff67E9B9C48e60dD209cb2B15f491d7bEc9B"
                  description="Deploy contracts daily to increase unique smart contract interactions"
                />

                <DappCard
                  title="Lens Onboarding"
                  url="https://onboarding.lens.xyz"
                  description="Create your free Lens account"
                />

                <DappCard
                  title="Hey.xyz"
                  url="https://hey.xyz"
                  description="Create an account, make posts, complete on-chain activities"
                />

                <DappCard
                  title="Rekt News"
                  url="https://rekt.news/"
                  description="Connect wallet, make small tips on articles periodically"
                />
              </div>

              <div className="mt-8 p-4 bg-slate-700/50 rounded-lg">
                <p className="flex items-center gap-2 font-medium text-gray-300 mb-2">
                  <Globe className="h-5 w-5" />
                  Explore the entire ecosystem:
                </p>
                <a
                  href="https://onboarding.lens.xyz/explore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-1 hover:text-gray-300 transition-colors"
                >
                  https://onboarding.lens.xyz/explore
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-800 rounded-xl overflow-hidden">
            <div className="bg-black py-4 px-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="flex items-center justify-center bg-white text-black rounded-full w-8 h-8 font-bold">
                  3
                </span>
                Complete Lens Quests & Join Discord
              </h2>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 bg-slate-700/30 p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    Layer3 Quests
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Head over to Layer3 and engage with Lens-related quests to increase your chances of qualifying for
                    the airdrop.
                  </p>
                  <a
                    href="https://layer3.xyz/quests?search=lens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    View Lens Quests
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="w-full md:w-1/2 bg-slate-700/30 p-5 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-gray-300" />
                    Discord Community
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Join the Lens Discord and claim as many roles as possible. This is an excellent way to stand out
                    from other users.
                  </p>
                  <a
                    href="https://discord.gg/lensprotocol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Join Discord
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Insights */}
        <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-xl p-6 border-l-4 border-gray-500">
          <h2 className="text-2xl font-bold mb-4">🧠 Farming Strategy Insights</h2>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-slate-300">
                <span className="text-white font-medium">Strong funding, low competition:</span> With $46M in backing
                and only 450K transactions, the opportunity-to-competition ratio is excellent.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-slate-300">
                <span className="text-white font-medium">Testnet farmers must continue:</span> If you participated in
                the testnet, it's crucial to maintain your activity on the mainnet to maximize your airdrop potential.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-slate-300">
                <span className="text-white font-medium">Low capital requirement:</span> You don't need significant
                funds to effectively farm this opportunity, making it accessible to most users.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-slate-300">
                <span className="text-white font-medium">Discord role advantage:</span> Many users aren't claiming
                available Discord roles, giving you an easy way to differentiate yourself.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

// Helper Components
function NetworkDetail({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-slate-700">
      <span className="font-medium text-white w-full sm:w-1/3">{label}:</span>
      <div className="w-full sm:w-2/3 flex items-center justify-between mt-1 sm:mt-0">
        <span className="text-slate-300">{value}</span>
        <button
          onClick={copyToClipboard}
          className="text-slate-400 hover:text-white transition-colors"
          aria-label={`Copy ${label}`}
        >
          {copied ? <Check className="h-4 w-4 text-white" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  )
}

function DappCard({ title, url, description }: { title: string; url: string; description: string }) {
  return (
    <div className="bg-slate-700/30 rounded-lg p-4">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-slate-300 text-sm mb-3">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 text-sm flex items-center gap-1 hover:text-white transition-colors"
      >
        {url.replace(/(^\w+:|^)\/\//, "").split("/")[0]}
        <ExternalLink className="h-3 w-3" />
      </a>
    </div>
  )
}
