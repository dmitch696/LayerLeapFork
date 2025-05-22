"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ExternalLink,
  Zap,
  Repeat,
  Shield,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  Wallet,
  Layers,
  Activity,
  Award,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AirdropProgress } from "@/components/airdrop-progress"
import { Card, CardContent } from "@/components/ui/card"

// LayerZero guide data
const guide = {
  id: "layerzero-season-2",
  title: "🛠️ How to Farm the LayerZero Season 2 Airdrop",
  description: "Learn the best strategies to position yourself for the potential LayerZero Season 2 airdrop.",
  category: "bridge",
  difficulty: "intermediate",
  author: "LayerLeap",
  date: "May 13, 2023",
  readTime: "7 min read",
  tasks: [
    {
      id: "layerzero-task-1",
      title: "Bridge tokens using Stargate Finance",
      description: "Complete at least 5 bridge transactions on Stargate",
      completed: false,
    },
    {
      id: "layerzero-task-2",
      title: "Bridge to/from Aptos",
      description: "Use LiquidSwap to bridge tokens to and from Aptos",
      completed: false,
    },
    {
      id: "layerzero-task-3",
      title: "Use Jumper Exchange",
      description: "Bridge tokens using the LayerZero option on Jumper",
      completed: false,
    },
    {
      id: "layerzero-task-4",
      title: "Mint and bridge NFTs",
      description: "Mint and bridge NFTs using LayerZero protocols",
      completed: false,
    },
    {
      id: "layerzero-task-5",
      title: "Purchase and stake STG",
      description: "Buy and stake STG token on stargate.finance",
      completed: false,
    },
    {
      id: "layerzero-task-6",
      title: "Participate in governance",
      description: "Vote in Stargate governance proposals",
      completed: false,
    },
    {
      id: "layerzero-task-7",
      title: "Bridge consistently",
      description: "Bridge tokens at least once a week for 4+ weeks",
      completed: false,
    },
    {
      id: "layerzero-task-8",
      title: "Use multiple chains",
      description: "Bridge between at least 4 different chains",
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

export default function LayerZeroGuidePage() {
  // Content sections
  const content = {
    intro: {
      title: "Introduction",
      content:
        "LayerZero previously gave a very generous airdrop, and we have very good reason to believe that the second airdrop may drop soon. This guide covers strategies to position yourself for potential eligibility.",
      icon: <Layers className="h-6 w-6 text-purple-400" />,
    },
    overview: {
      title: "Overview",
      content:
        "This is a relatively straightforward airdrop to farm because we know the requirements for the first airdrop. We'll be repeating many of these strategies, but the main focus should be on volume transferred through LayerZero bridges.",
      icon: <BrainCircuit className="h-6 w-6 text-blue-400" />,
    },
    bridging: {
      title: "1. Bridge Tokens Using LayerZero-Powered Bridges",
      content:
        "Regular bridging across LayerZero-enabled dApps is a core farming strategy. Prioritize these platforms:",
      items: [
        {
          name: "Stargate Finance",
          description: "LayerZero's flagship bridging dApp",
          url: "https://stargate.finance",
        },
        {
          name: "LiquidSwap",
          description: "In the first airdrop, bridging to and from Aptos using LayerZero was rewarded",
          url: "https://bridge.liquidswap.com/",
        },
        {
          name: "Jumper Exchange",
          description:
            "Select the LayerZero option when bridging between different chains. Recommended for Base, Optimism, and Arbitrum. You'll also earn points for a potential Jumper airdrop",
          url: "https://jumper.exchange/",
        },
      ],
      tips: [
        "Bridge consistently. Aim for transactions of $500-2000 and try to do 5-10 transactions a day. Volume was very important for the last LayerZero airdrop.",
        "Vary your source and destination chains.",
        "Vary the bridges that you use, don't always use only one bridge.",
      ],
      icon: <Repeat className="h-6 w-6 text-green-400" />,
    },
    nfts: {
      title: "2. Mint LayerZero NFTs and Bridge to Other Chains",
      content:
        "There are multiple protocols that let you mint NFTs for ~$0.50-$1 that you can bridge back and forth between different chains using LayerZero. If you don't have a lot of ETH but want to generate many active days using LayerZero and a high transaction/smart contract interaction count, then these protocols are great to use. Note that using just these protocols will likely not get you too much of a reward though.",
      items: [
        {
          name: "LayerZero NFT",
          url: "https://mint.nft.layerzero.network/",
        },
        {
          name: "L2 Marathon",
          url: "https://l2marathon.com/",
        },
        {
          name: "Merkly",
          url: "https://minter.merkly.com/",
        },
        {
          name: "Atlas Protocol",
          url: "https://atlasprotocol.io/",
        },
        {
          name: "ZeroWay",
          url: "https://zeroway.io/",
        },
      ],
      icon: <Award className="h-6 w-6 text-amber-400" />,
    },
    consistency: {
      title: "3. Stay Active and Consistent",
      content: "Although volume is likely the most important criteria, LayerZero also appears to value:",
      items: ["Consistent usage over time", "Activity on multiple chains", "Real Users"],
      tips: [
        "Use your main wallet (especially if it received the first airdrop) and keep it active across different weeks.",
      ],
      icon: <Activity className="h-6 w-6 text-red-400" />,
    },
    staking: {
      title: "4. Purchase and Stake STG",
      content:
        "Purchase and stake a small amount of $STG, the governance token for stargate.finance. Vote in any governance votes that come up, this may be a multiplier for the airdrop.",
      steps: [
        "Purchase STG on Optimism, Arbitrum, Base and other chains using sushi.finance",
        "Stake it on stargate.finance",
        "Participate in governance votes when available",
      ],
      icon: <Wallet className="h-6 w-6 text-indigo-400" />,
    },
    bestPractices: {
      title: "Best Practices",
      items: [
        "Use 1-3 wallets maximum to avoid sybil risk.",
        "Participate in the LayerZero community on Twitter and Discord to stay updated on new integrations and potential quests.",
      ],
      icon: <Shield className="h-6 w-6 text-cyan-400" />,
    },
    finalThoughts: {
      title: "Final Thoughts",
      content:
        "LayerZero's first airdrop heavily favored real, consistent users. Season 2 is likely to follow a similar pattern. With a possible snapshot this summer, now is the best time to:",
      items: [
        "Start bridging multiple times weekly",
        "Use LayerZero-enabled dApps",
        "Engage across multiple chains",
        "Stake a small amount of $STG",
      ],
      conclusion:
        "Farming this early and honestly gives you the best shot at securing a valuable Season 2 $ZRO airdrop.",
      icon: <BrainCircuit className="h-6 w-6 text-violet-400" />,
    },
  }

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
                src="/placeholder.svg?key=w6di7"
                alt="LayerZero bridge interface"
                width={1200}
                height={675}
                className="w-full"
              />
              <div className="bg-slate-800 p-3 text-sm text-slate-400 text-center">
                LayerZero powers cross-chain bridging across multiple protocols
              </div>
            </div>

            {/* Introduction */}
            <Card className="mb-8 bg-gradient-to-br from-slate-800 to-slate-800/70 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {content.intro.icon}
                  <h2 className="text-2xl font-bold">{content.intro.title}</h2>
                </div>
                <p className="text-slate-300">{content.intro.content}</p>
              </CardContent>
            </Card>

            {/* Overview */}
            <Card className="mb-8 bg-gradient-to-br from-slate-800 to-slate-800/70 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {content.overview.icon}
                  <h2 className="text-2xl font-bold">{content.overview.title}</h2>
                </div>
                <p className="text-slate-300">{content.overview.content}</p>
              </CardContent>
            </Card>

            {/* Bridging */}
            <Card className="mb-8 bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-800/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {content.bridging.icon}
                  <h2 className="text-2xl font-bold">{content.bridging.title}</h2>
                </div>
                <p className="text-slate-300 mb-4">{content.bridging.content}</p>

                <div className="space-y-4 mb-6">
                  {content.bridging.items.map((item, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-lg text-white">{item.name}</h3>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                        >
                          Visit <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <p className="text-slate-300 text-sm mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <h3 className="font-medium text-lg text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    Tips
                  </h3>
                  <ul className="space-y-2">
                    {content.bridging.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300">
                        <ArrowRight className="h-4 w-4 mt-1 text-green-400 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* NFTs */}
            <Card className="mb-8 bg-gradient-to-br from-amber-900/20 to-amber-800/10 border-amber-800/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {content.nfts.icon}
                  <h2 className="text-2xl font-bold">{content.nfts.title}</h2>
                </div>
                <p className="text-slate-300 mb-4">{content.nfts.content}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {content.nfts.items.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:bg-slate-700/50 transition-colors flex justify-between items-center"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ExternalLink className="h-4 w-4 text-blue-400" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Consistency */}
            <Card className="mb-8 bg-gradient-to-br from-red-900/20 to-red-800/10 border-red-800/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {content.consistency.icon}
                  <h2 className="text-2xl font-bold">{content.consistency.title}</h2>
                </div>
                <p className="text-slate-300 mb-4">{content.consistency.content}</p>

                <ul className="space-y-2 mb-4">
                  {content.consistency.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 text-red-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <h3 className="font-medium text-lg text-white mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    Tip
                  </h3>
                  <p className="text-slate-300">{content.consistency.tips[0]}</p>
                </div>
              </CardContent>
            </Card>

            {/* Staking */}
            <Card className="mb-8 bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 border-indigo-800/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {content.staking.icon}
                  <h2 className="text-2xl font-bold">{content.staking.title}</h2>
                </div>
                <p className="text-slate-300 mb-4">{content.staking.content}</p>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <h3 className="font-medium text-lg text-white mb-2">Steps:</h3>
                  <ol className="space-y-2 list-decimal list-inside">
                    {content.staking.steps.map((step, index) => (
                      <li key={index} className="text-slate-300">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Best Practices */}
            <Card className="mb-8 bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 border-cyan-800/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {content.bestPractices.icon}
                  <h2 className="text-2xl font-bold">{content.bestPractices.title}</h2>
                </div>

                <ul className="space-y-3">
                  {content.bestPractices.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <Shield className="h-5 w-5 mt-0.5 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Final Thoughts */}
            <Card className="mb-8 bg-gradient-to-br from-violet-900/20 to-violet-800/10 border-violet-800/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {content.finalThoughts.icon}
                  <h2 className="text-2xl font-bold">{content.finalThoughts.title}</h2>
                </div>
                <p className="text-slate-300 mb-4">{content.finalThoughts.content}</p>

                <ul className="space-y-2 mb-4">
                  {content.finalThoughts.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <ArrowRight className="h-4 w-4 mt-1 text-violet-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-lg font-medium text-white">{content.finalThoughts.conclusion}</p>
              </CardContent>
            </Card>
          </article>

          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-8">
              <AirdropProgress airdropId={guide.id} airdropName={guide.title} tasks={guide.tasks} />

              <div className="mt-6 p-6 bg-slate-800 border border-slate-700 rounded-xl shadow-md">
                <h3 className="font-medium text-lg mb-3">LayerZero Resources</h3>
                <div className="space-y-3">
                  <a
                    href="https://layerzero.network/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>Official Website</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://docs.layerzero.network/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>Documentation</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://layerzeroscan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>LayerZero Explorer</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://stargate.finance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>Stargate Finance</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="mt-6 p-6 bg-slate-800 border border-slate-700 rounded-xl shadow-md">
                <h3 className="font-medium text-lg mb-3">Community</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://x.com/LayerZero_Labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://discord.com/invite/layerzerolabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    Discord
                  </a>
                </div>
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
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
