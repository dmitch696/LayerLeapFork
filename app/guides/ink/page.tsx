"use client"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ExternalLink,
  Repeat,
  Wallet,
  ArrowRightLeft,
  Shield,
  Info,
  CheckCircle2,
  Lightbulb,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AirdropProgress } from "@/components/airdrop-progress"

// Update the guide content with the new information while maintaining the formatting structure
const guide = {
  id: "ink",
  title: "🖋️ INK Blockchain Airdrop Farming Guide (2025)",
  description: "Learn how to position yourself for a potential INK token airdrop.",
  category: "mainnet",
  difficulty: "intermediate",
  author: "Crypto Guide",
  date: "May 20, 2023",
  readTime: "8 min read",
  content: {
    intro: "How to Farm the INK Blockchain for a Potential Airdrop",
    why: {
      title: "Why INK?",
      content: [
        "INK is a rising modular Layer 2 blockchain known for its incredibly low fees and high scalability. Many speculate that INK could reward early users similarly to other L2s like Arbitrum or Optimism.",
        "Ink is also the blockchain created by the Kraken exchange, so they have strong backing and incentive to reward early users.",
      ],
    },
    steps: [
      {
        title: "Set Up Your Wallet",
        content:
          "Set up a wallet using Metamask, this is my go to option. There are also options like Rabby, Trust wallet etc, but Metamask is a good basic choice. I recommend starting with ETH on the Ethereum blockchain, you can also use ETH on base, optimism, or the Arbitrum blockchains for lower fees, but for airdrops you tend to need to have some activity on the Ethereum blockchain.",
      },
      {
        title: "Bridge to INK using Relay bridge",
        content: [
          "Relay.link supports INK and has extremely low fees. Plus, using it might make you eligible for a Relay airdrop in the future.",
          "Go to relay.link, select Ethereum as the source chain & Ink as the destination chain. Bridge ETH to ink. Check the gas fees, don't do this during a time when gas fees are super high.",
          "After you get some activity on the ethereum blockchain you can use the chains that we mentioned before in order to save money on the gas fees.",
        ],
      },
      {
        title: "Add INK to Your Wallet",
        content: "Use Chainlist.org to find and add INK automatically.",
      },
      {
        title: "Interact with INK Ecosystem",
        content: "Explore the various DApps, DEXs, and NFT platforms in the INK ecosystem.",
      },
      {
        title: "Join the Community",
        links: [
          {
            text: "Follow INK on Twitter/X",
            url: "https://x.com/inkonchain",
          },
          {
            text: "Join their Discord and claim roles",
            url: "https://discord.gg/inkchain",
          },
          {
            text: "Find more dApps on the official site",
            url: "https://inkonchain.com/",
          },
        ],
      },
    ],
    bonus: {
      title: "Try Multiple Wallets",
      content: "Repeat actions with multiple wallets to increase your odds (but avoid bot behavior).",
      tips: [
        "Do not do the same transactions in the same day, space it out and make it look unique!",
        "Do not deposit funds into your different wallets from the same source wallet. Use different centralized exchanges, binance, kucoin, mexc, coinbase, gemini etc.",
      ],
    },
    safety: {
      title: "Safety Tips",
      tips: [
        "Always verify links via INK's official social accounts",
        "Consider using a hardware wallet for larger funds",
      ],
    },
    conclusion: {
      title: "Final Thoughts",
      content:
        "With low fees, active development, and backing from Kraken exchange, INK could reward early users massively. Don't miss the opportunity to be positioned for a potential airdrop!",
    },
  },
  tasks: [
    {
      id: "ink-task-1",
      title: "Set up Metamask wallet",
      description: "Create a Metamask wallet and add ETH from Ethereum mainnet",
      completed: false,
    },
    {
      id: "ink-task-2",
      title: "Bridge to INK via Relay.link",
      description: "Bridge ETH from Ethereum to INK during low gas fees",
      completed: false,
    },
    {
      id: "ink-task-3",
      title: "Add INK Network to wallet",
      description: "Use Chainlist.org to add INK network to your wallet",
      completed: false,
    },
    {
      id: "ink-task-4",
      title: "Swap tokens on InkySwap",
      description: "Perform token swaps on InkySwap DEX",
      completed: false,
    },
    {
      id: "ink-task-5",
      title: "Add liquidity to a pool",
      description: "Add a small amount to a liquidity pool on any INK DEX",
      completed: false,
    },
    {
      id: "ink-task-6",
      title: "Use the official INK bridge",
      description: "Bridge using the official inkonchain.com bridge at least once",
      completed: false,
    },
    {
      id: "ink-task-7",
      title: "Create an NFT on INK",
      description: "Mint an NFT using NFTs2Me or CoNFT",
      completed: false,
    },
    {
      id: "ink-task-8",
      title: "Join INK community",
      description: "Follow on Twitter and join Discord with role claims",
      completed: false,
    },
    {
      id: "ink-task-9",
      title: "Set up multiple wallets",
      description: "Create additional wallets with unique transaction patterns",
      completed: false,
    },
    {
      id: "ink-task-10",
      title: "Bridge back to Ethereum",
      description: "Show two-way activity by bridging some funds back",
      completed: false,
    },
  ],
  ecosystem: {
    dexs: [
      {
        name: "InkySwap",
        url: "https://inkyswap.com/swap",
        description: "Swap and add a small amount to liquidity pools",
      },
      {
        name: "InkyPump",
        url: "https://inkypump.com/",
        description:
          "Buy and sell memecoins with very small amounts of ETH, this will increase your smart contract interactions at almost zero cost",
      },
      {
        name: "DYORSwap",
        url: "https://dyorswap.finance/swap/?chainId=57073",
        description: "Swap and add a small amount to liquidity pools",
      },
      {
        name: "Dinero",
        url: "https://dinero.xyz",
        description: "DeFi platform",
      },
      {
        name: "Reservoir Swap",
        url: "https://swap.reservoir.tools/#/swap",
        description: "Swap and add a small amount to liquidity pools",
      },
      {
        name: "Velodrome Finance",
        url: "https://velodrome.finance/",
        description: "Swap, deposit, add to liquidity pools",
      },
    ],
    nfts: [
      {
        name: "NFTs2Me",
        url: "https://nfts2me.com/",
        description: "Create and mint your own NFT",
      },
      {
        name: "CoNFT",
        url: "https://conft.app/",
        description: "Create your own and mint cheap NFTs",
      },
    ],
    other: [
      {
        name: "OnChainGM",
        url: "https://onchaingm.com?ref=0xf137724797C3a3086F1dc16e070e465eB5ad35f0",
        description: "Deploy smart contract and say GM on INK",
      },
    ],
    bridges: [
      {
        name: "Relay.link",
        url: "https://relay.link",
        description: "Bridge from Ink to other chains, and then back to Ink",
      },
      {
        name: "Owlto Finance",
        url: "https://owlto.finance/?ref=0xD6e0Ff67E9B9C48e60dD209cb2B15f491d7bEc9B",
        description: "Bridge service",
      },
      {
        name: "Rhino.fi",
        url: "https://rhino.fi",
        description: "Bridge service",
      },
      {
        name: "Official INK Bridge",
        url: "https://inkonchain.com/",
        description: "May be a requirement for the airdrop, use at least once. Multiple times is better.",
        important: true,
      },
    ],
  },
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

export default function InkGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="container mx-auto px-4 py-8">
        <Link href="/" passHref>
          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-2/3">
            {/* Hero Section with Gradient Background */}
            <div className="mb-8 rounded-xl bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-purple-900/50 p-6 border border-blue-700/50">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={categoryColors[guide.category]}>
                  {guide.category.charAt(0).toUpperCase() + guide.category.slice(1)}
                </Badge>
                <Badge className={difficultyColors[guide.difficulty]}>
                  {guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
                </Badge>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 rounded-full p-2">
                  <img src="/images/ink-logo.png" alt="INK Logo" className="h-10 w-10" />
                </div>
                <h1 className="text-4xl font-bold">{guide.title}</h1>
              </div>

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

            {/* Introduction */}
            <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-lg p-6 mb-8 border-l-4 border-blue-500">
              <h1 className="text-3xl font-bold mb-0 flex items-center gap-3">
                <span className="text-blue-400">🖋️</span>
                {guide.content.intro}
              </h1>
            </div>

            {/* Why INK Section */}
            <div className="bg-indigo-900/20 rounded-lg p-6 mb-6 border border-indigo-700/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-indigo-700 rounded-full p-2">
                  <Info className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold mb-0">{guide.content.why.title}</h2>
              </div>
              {guide.content.why.content.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 mb-2 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Steps */}
            {guide.content.steps.map((step, index) => {
              if (index === 3) {
                // Special handling for Step 4: Interact with INK Ecosystem
                return (
                  <div key={index} className="bg-blue-900/20 rounded-lg p-6 mb-6 border border-blue-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-700 rounded-full p-2">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <h2 className="text-2xl font-bold mb-0">
                        Step {index + 1}: {step.title}
                      </h2>
                    </div>

                    {/* DEXs Section */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <ArrowRightLeft className="h-5 w-5 mr-2 text-blue-400" />
                        DEXs & Swaps
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {guide.ecosystem.dexs.map((dex, i) => (
                          <a
                            key={i}
                            href={dex.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-white">{dex.name}</h4>
                              <ExternalLink className="h-4 w-4 text-blue-400" />
                            </div>
                            <p className="text-sm text-slate-300">{dex.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* NFTs Section */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <Wallet className="h-5 w-5 mr-2 text-purple-400" />
                        NFT Platforms
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {guide.ecosystem.nfts.map((nft, i) => (
                          <a
                            key={i}
                            href={nft.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 hover:border-purple-500 transition-all"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-white">{nft.name}</h4>
                              <ExternalLink className="h-4 w-4 text-purple-400" />
                            </div>
                            <p className="text-sm text-slate-300">{nft.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Other DApps Section */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <Wallet className="h-5 w-5 mr-2 text-green-400" />
                        Other DApps
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {guide.ecosystem.other.map((dapp, i) => (
                          <a
                            key={i}
                            href={dapp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 hover:border-green-500 transition-all"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-white">{dapp.name}</h4>
                              <ExternalLink className="h-4 w-4 text-green-400" />
                            </div>
                            <p className="text-sm text-slate-300">{dapp.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Bridges Section */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <Repeat className="h-5 w-5 mr-2 text-amber-400" />
                        Bridges
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {guide.ecosystem.bridges.map((bridge, i) => (
                          <a
                            key={i}
                            href={bridge.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-col p-4 rounded-lg border transition-all ${
                              bridge.important
                                ? "bg-blue-900/30 border-blue-700 hover:bg-blue-900/50 hover:border-blue-500"
                                : "bg-slate-800/50 border-slate-700 hover:bg-slate-800 hover:border-amber-500"
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-white flex items-center">
                                {bridge.name}
                                {bridge.important && <Badge className="ml-2 bg-blue-600">Recommended</Badge>}
                              </h4>
                              <ExternalLink className="h-4 w-4 text-amber-400" />
                            </div>
                            <p className="text-sm text-slate-300">{bridge.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              } else if (index === 4) {
                // Special handling for Step 5: Join the Community
                return (
                  <div key={index} className="bg-blue-900/20 rounded-lg p-6 mb-6 border border-blue-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-700 rounded-full p-2">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <h2 className="text-2xl font-bold mb-0">
                        Step {index + 1}: {step.title}
                      </h2>
                    </div>
                    <ul className="list-none space-y-3 pl-0">
                      {step.links.map((link, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors"
                        >
                          <ExternalLink
                            className={`h-5 w-5 flex-shrink-0 ${i === 0 ? "text-blue-400" : i === 1 ? "text-indigo-400" : "text-purple-400"}`}
                          />
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${i === 0 ? "text-blue-400" : i === 1 ? "text-indigo-400" : "text-purple-400"} hover:underline`}
                          >
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              } else if (index === 2) {
                // Step 3: Add INK to Your Wallet (with link)
                return (
                  <div key={index} className="bg-blue-900/20 rounded-lg p-6 mb-6 border border-blue-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-700 rounded-full p-2">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <h2 className="text-2xl font-bold mb-0">
                        Step {index + 1}: {step.title}
                      </h2>
                    </div>
                    <p className="text-slate-300">
                      Use{" "}
                      <a
                        href="https://chainlist.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        Chainlist.org
                      </a>{" "}
                      to find and add INK automatically.
                    </p>
                  </div>
                )
              } else {
                // Regular steps
                return (
                  <div key={index} className="bg-blue-900/20 rounded-lg p-6 mb-6 border border-blue-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-700 rounded-full p-2">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <h2 className="text-2xl font-bold mb-0">
                        Step {index + 1}: {step.title}
                      </h2>
                    </div>
                    {Array.isArray(step.content) ? (
                      step.content.map((paragraph, idx) => (
                        <p key={idx} className="text-slate-300 mb-2 last:mb-0">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-slate-300">{step.content}</p>
                    )}
                  </div>
                )
              }
            })}

            {/* Bonus Section */}
            <div className="bg-purple-900/20 rounded-lg p-6 mb-6 border border-purple-700/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-700 rounded-full p-2">
                  <Repeat className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold mb-0">Bonus: {guide.content.bonus.title}</h2>
              </div>
              <p className="text-slate-300 mb-4">{guide.content.bonus.content}</p>
              <ul className="list-none space-y-2">
                {guide.content.bonus.tips.map((tip, i) => (
                  <li key={i} className="flex items-center gap-2 bg-slate-800/30 p-3 rounded-lg">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety Tips */}
            <div className="bg-red-900/20 rounded-lg p-6 mb-6 border border-red-700/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-700 rounded-full p-2">
                  <Shield className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold mb-0">{guide.content.safety.title}</h2>
              </div>
              <ul className="list-none space-y-2">
                {guide.content.safety.tips.map((tip, i) => (
                  <li key={i} className="flex items-center gap-2 bg-slate-800/30 p-3 rounded-lg">
                    <span className="text-red-400 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Final Thoughts */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 mb-6 border border-blue-700/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold mb-0">{guide.content.conclusion.title}</h2>
              </div>
              <p className="text-slate-300">{guide.content.conclusion.content}</p>
            </div>
          </article>

          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-8">
              <div className="bg-gradient-to-r from-slate-800 to-slate-800/80 rounded-xl border border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-4 border-b border-slate-700">
                  <h3 className="font-bold text-xl">Airdrop Progress</h3>
                </div>
                <div className="p-4">
                  <AirdropProgress airdropId={guide.id} airdropName={guide.title} tasks={guide.tasks} />
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-slate-800 to-slate-800/80 rounded-xl border border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-4 border-b border-slate-700">
                  <h3 className="font-bold text-xl">Get Notified</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-400 mb-4">
                    Receive updates when this guide changes or when important deadlines approach.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">
                    Enable Notifications
                  </Button>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-slate-800 to-slate-800/80 rounded-xl border border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-4 border-b border-slate-700">
                  <h3 className="font-bold text-xl">Share This Guide</h3>
                </div>
                <div className="p-4">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-slate-600 hover:bg-slate-700 hover:text-white"
                    >
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-slate-600 hover:bg-slate-700 hover:text-white"
                    >
                      Discord
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-slate-600 hover:bg-slate-700 hover:text-white"
                    >
                      Copy Link
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-slate-800 to-slate-800/80 rounded-xl border border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 p-4 border-b border-slate-700">
                  <h3 className="font-bold text-xl">INK Resources</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <a
                      href="https://inkonchain.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <span>Official Website</span>
                      <ExternalLink className="h-4 w-4 text-slate-400" />
                    </a>
                    <a
                      href="https://docs.inkonchain.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <span>Documentation</span>
                      <ExternalLink className="h-4 w-4 text-slate-400" />
                    </a>
                    <a
                      href="https://explorer.inkonchain.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <span>Block Explorer</span>
                      <ExternalLink className="h-4 w-4 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
