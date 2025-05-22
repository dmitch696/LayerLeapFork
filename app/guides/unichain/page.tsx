"use client"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  User,
  Award,
  CheckCircle,
  Shield,
  Zap,
  Users,
  Layers,
  Gift,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AirdropProgress } from "@/components/airdrop-progress"

// Unichain guide data
const guide = {
  id: "unichain",
  title: "🦄 Unichain Blockchain Airdrop Farming Guide (2025)",
  description: "Learn how to position yourself for a potential Unichain token airdrop.",
  category: "mainnet",
  difficulty: "intermediate",
  author: "Crypto Guide",
  date: "May 22, 2023",
  readTime: "10 min read",
  tasks: [
    {
      id: "unichain-task-1",
      title: "Set up a wallet using Metamask",
      description: "Create and fund a Metamask wallet with ETH",
      completed: false,
    },
    {
      id: "unichain-task-2",
      title: "Bridge to Unichain via Relay.link",
      description: "Bridge ETH from Ethereum to Unichain",
      completed: false,
    },
    {
      id: "unichain-task-3",
      title: "Bridge using Uniswap bridge",
      description: "Use the official Uniswap bridge to Unichain",
      completed: false,
    },
    {
      id: "unichain-task-4",
      title: "Add Unichain network to wallet",
      description: "Add Unichain network using Chainlist.org",
      completed: false,
    },
    {
      id: "unichain-task-5",
      title: "Swap tokens on Unichain DEX",
      description: "Perform token swaps on Uniswap or other DEXs",
      completed: false,
    },
    {
      id: "unichain-task-6",
      title: "Provide liquidity on Unichain",
      description: "Add liquidity to a pool (e.g., ETH/USDC)",
      completed: false,
    },
    {
      id: "unichain-task-7",
      title: "Use multiple dApps on Unichain",
      description: "Interact with NFTs, bridges, and other dApps",
      completed: false,
    },
    {
      id: "unichain-task-8",
      title: "Join Unichain community",
      description: "Follow on Twitter, join Discord, and participate in campaigns",
      completed: false,
    },
    {
      id: "unichain-task-9",
      title: "Track all activity",
      description: "Create a log of all your Unichain interactions",
      completed: false,
    },
    {
      id: "unichain-task-10",
      title: "Set up multiple wallets (optional)",
      description: "Repeat actions with 2-4 wallets with unique patterns",
      completed: false,
    },
  ],
}

// Structured content to avoid repetition
const content = {
  intro: [
    "Unichain is gaining attention as an emerging blockchain focused on performance and interoperability. With its name and branding reminiscent of Uniswap, many are speculating that early users of Unichain could be rewarded, just like what happened with the historic Uniswap airdrop in 2020, where users received 400 UNI tokens (~$1,200 at the time) just for using the protocol.",
    "While there's no official confirmation of an airdrop, it's smart to position yourself early.",
  ],
  steps: [
    {
      title: "Set Up a Wallet",
      icon: <CheckCircle className="h-6 w-6 text-green-400" />,
      content:
        "Set up a wallet using Metamask, this is my go to option. There are also options like Rabby, Trust wallet etc, but Metamask is a good basic choice. I recommend starting with ETH on the Ethereum blockchain, you can also use ETH on base, optimism, or the Arbitrum blockchains for lower fees, but for airdrops you tend to need to have some activity on the Ethereum blockchain.",
    },
    {
      title: "Bridge to Unichain Using Relay.link & The Official Uniswap bridge",
      icon: <Layers className="h-6 w-6 text-purple-400" />,
      content: [
        "Unichain is available on Relay.link, a cross-chain bridge known for:",
        ["⚡ Low fees", "🢂 A possible Relay airdrop of its own", "🌐 Easy support for new L2s and sidechains"],
        "How to Bridge:",
        [
          "Visit https://www.relay.link",
          "Connect your wallet.",
          "I recommend selecting either Arbitrum, Optimism or Base chain as the source, you can use Ethereum during times when gas fees are low if you need more activity on the Ethereum blockchain. Set Unichain as the destination.",
          "Bridge ETH",
          "Wait for the transaction to complete.",
        ],
        "Now we want to bridge using the official Uniswap bridge:",
        "https://app.uniswap.org/swap?outputChain=unichain&outputCurrency=NATIVE&inputCurrency=NATIVE&utm_source=unichain&utm_medium=web&utm_campaign=uc-bridging",
        "Bridge from multiple chains to Unichain using the official bridge, I'd recommend using Ethereum at least once and bridge a minimum of 0.01 ETH. Try to bridge back and forth with Optimism, Arbitrum, and Base at least once as well.",
        "Explore and use other Unichain bridges recommended by Unichain:",
        "https://www.unichain.org/bridge",
      ],
    },
    {
      title: "Add Unichain to Your Wallet",
      icon: <CheckCircle className="h-6 w-6 text-green-400" />,
      content:
        'If not added automatically, get the network details from chainlist.org. Connect your wallet to the site and look up "Unichain".',
    },
    {
      title: "Interact With the Unichain Ecosystem",
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      content: "Explore the various dApps and services in the Unichain ecosystem.",
    },
  ],
  ecosystem: {
    mainActions: [
      {
        title: "🔁 Swap Tokens",
        description: "Use a Unichain-native DEX.",
        link: "https://app.uniswap.org/",
        linkText: "app.uniswap.org",
      },
      {
        title: "💧 Provide Liquidity",
        description: "Add to liquidity pools (e.g., ETH/USDC).",
        link: "",
        linkText: "",
      },
      {
        title: "💳 Bridge In and Out",
        description: "Use Relay.link to show real user behavior.",
        link: "https://www.relay.link",
        linkText: "relay.link",
      },
    ],
    dapps: [
      {
        title: "nfts2me.com",
        description: "Create and mint your own NFTs",
        link: "https://nfts2me.com",
      },
      {
        title: "onchaingm.com",
        description: "Deploy smart contract and say GM on Unichain",
        link: "https://onchaingm.com?ref=0xf137724797C3a3086F1dc16e070e465eB5ad35f0",
      },
      {
        title: "owlto.finance",
        description: "Bridge to and from Unichain, deploy a smart contract",
        link: "https://owlto.finance/?ref=0xD6e0Ff67E9B9C48e60dD209cb2B15f491d7bEc9B",
      },
      {
        title: "rhino.fi",
        description: "Bridge to and from Unichain",
        link: "https://rhino.fi",
      },
      {
        title: "Stargate.finance",
        description: "Bridge using Layerzero technology",
        link: "https://stargate.finance",
      },
      {
        title: "atlasprotocol.io",
        description: "Mint NFTs and bridge them using Hyperlane",
        link: "https://atlasprotocol.io",
      },
      {
        title: "astropump.fun",
        description: "Launch a memecoin, buy and sell other memecoins",
        link: "https://astropump.fun/launch",
      },
      {
        title: "morkie.xyz",
        description: "Mint Unichain NFTs",
        link: "https://morkie.xyz/",
      },
      {
        title: "Revoke.cash",
        description: "Remove allowances on Unichain if possible",
        link: "https://revoke.cash",
      },
    ],
    allDapps: "View all dapps here: https://www.unichain.org/explore",
  },
  community: {
    title: "Join the Unichain Community",
    icon: <Users className="h-6 w-6 text-blue-400" />,
    links: [
      {
        text: "Follow Unichain on Twitter/X",
        url: "https://twitter.com/unichain",
      },
      {
        text: "Join the Unichain Discord",
        url: "https://discord.gg/unichain",
      },
      {
        text: "Participate in campaigns on Galxe",
        url: "https://galxe.com/",
      },
      {
        text: "Zealy",
        url: "https://zealy.io/",
      },
      {
        text: "Layer3",
        url: "https://layer3.xyz/",
      },
    ],
  },
  tracking: {
    title: "Track Your Activity",
    icon: <CheckCircle className="h-6 w-6 text-green-400" />,
    items: [
      "Wallet address used",
      "Active days and number of smart contract interactions",
      "dApps and protocols interacted with",
      "Campaigns joined",
      "Discord roles (if applicable)",
    ],
  },
  bonus: {
    title: "Multi-Wallet Strategy (Optional)",
    icon: <Gift className="h-6 w-6 text-purple-400" />,
    content:
      "Repeat the process on 2–4 wallets for a higher chance of rewards, but keep activity organic and avoid bot behavior.",
  },
  safety: {
    title: "Safety Tips",
    icon: <Shield className="h-6 w-6 text-red-400" />,
    items: [
      "Verify all links through Unichain's official Twitter or Discord.",
      "Use a hardware wallet if you're transferring larger funds.",
      "Avoid suspicious or unaudited contracts.",
    ],
  },
  conclusion: [
    "Early Uniswap users were rewarded unexpectedly and generously, Unichain may surprise early adopters. Even if no airdrop happens, you'll gain experience with a promising blockchain and be well-positioned for future opportunities. All on-chain activity is valuable for airdrops!",
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

export default function UnichainGuidePage() {
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
          <article className="lg:w-2/3 bg-slate-800/50 rounded-xl p-8 shadow-lg">
            {/* Guide Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={categoryColors[guide.category]}>
                  {guide.category.charAt(0).toUpperCase() + guide.category.slice(1)}
                </Badge>
                <Badge className={difficultyColors[guide.difficulty]}>
                  {guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
                </Badge>
              </div>

              {/* Title Section with Logo */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-600 rounded-full p-2">
                  <img src="/images/unichain-logo.png" alt="Unichain Logo" className="h-10 w-10" />
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

            <div className="prose prose-invert prose-lg max-w-none">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-6 mb-8 border border-purple-700/30 shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-white">
                  🦄 How to Farm the Unichain Blockchain for a Potential Airdrop (2025 Guide)
                </h1>

                <h2 className="text-2xl font-bold mt-4 mb-4 flex items-center gap-2">
                  <div className="bg-blue-600 rounded-full p-1">
                    <Zap className="h-5 w-5" />
                  </div>
                  <span>Why Farm Unichain?</span>
                </h2>

                {content.intro.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-slate-200">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Steps */}
              {content.steps.map((step, index) => (
                <div
                  key={index}
                  className={`bg-slate-800 rounded-xl p-6 mb-6 border border-slate-700 shadow-md hover:border-slate-600 transition-all ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-slate-800 to-slate-800/70"
                      : "bg-gradient-to-r from-slate-800/70 to-slate-800"
                  }`}
                >
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <div className="bg-blue-600 rounded-full p-1">{step.icon}</div>
                    <span>
                      Step {index + 1}: {step.title}
                    </span>
                  </h2>

                  {Array.isArray(step.content) ? (
                    <>
                      {step.content.map((item, i) =>
                        Array.isArray(item) ? (
                          <ul key={i} className="list-disc pl-6 my-4 space-y-2">
                            {item.map((listItem, li) => (
                              <li key={li} className="mb-2 text-slate-300">
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p key={i} className="mb-4 text-slate-300">
                            {item}
                          </p>
                        ),
                      )}
                    </>
                  ) : (
                    <p className="text-slate-300">{step.content}</p>
                  )}
                </div>
              ))}

              {/* Ecosystem Section */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 mb-6 border border-blue-700/30 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="bg-blue-600 rounded-full p-1">
                    <Zap className="h-5 w-5 text-yellow-400" />
                  </div>
                  <span>⚙️ Unichain Ecosystem</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {content.ecosystem.mainActions.map((action, index) => (
                    <div
                      key={index}
                      className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:border-purple-500 transition-all shadow-md"
                    >
                      <h3 className="font-bold text-lg mb-2">{action.title}</h3>
                      <p className="text-slate-300 mb-2">{action.description}</p>
                      {action.link && (
                        <a
                          href={action.link}
                          className="text-blue-400 hover:underline flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {action.linkText} <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mt-6 mb-4 flex items-center gap-2">
                  <div className="bg-purple-600 rounded-full p-1">
                    <Layers className="h-5 w-5 text-white" />
                  </div>
                  <span>Popular dApps on Unichain</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {content.ecosystem.dapps.map((dapp, index) => (
                    <div
                      key={index}
                      className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:border-blue-500 transition-all shadow-md"
                    >
                      <a
                        href={dapp.link}
                        className="text-blue-400 hover:underline flex items-center font-bold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {dapp.title} <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                      <p className="text-slate-300 mt-2">{dapp.description}</p>
                    </div>
                  ))}
                </div>

                <p className="mb-6 text-slate-300">{content.ecosystem.allDapps}</p>
              </div>

              {/* Community Section */}
              <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl p-6 mb-6 border border-blue-700/30 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="bg-blue-600 rounded-full p-1">{content.community.icon}</div>
                  <span>Step 5: {content.community.title}</span>
                </h2>

                <ul className="list-disc pl-6 my-4 space-y-3">
                  {content.community.links.map((link, index) => (
                    <li key={index} className="mb-2 text-slate-300">
                      {link.text}{" "}
                      <a
                        href={link.url}
                        className="text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.url}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tracking Section */}
              <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-xl p-6 mb-6 border border-green-700/30 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="bg-green-600 rounded-full p-1">{content.tracking.icon}</div>
                  <span>Step 6: {content.tracking.title}</span>
                </h2>

                <p className="mb-4 text-slate-300">Keep a log of:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  {content.tracking.items.map((item, index) => (
                    <li key={index} className="mb-2 text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonus Section */}
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 mb-6 border border-purple-700/30 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="bg-purple-600 rounded-full p-1">{content.bonus.icon}</div>
                  <span>🫲 Bonus: {content.bonus.title}</span>
                </h2>

                <p className="mb-4 text-slate-300">{content.bonus.content}</p>
              </div>

              {/* Safety Section */}
              <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-6 mb-6 border border-red-700/30 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="bg-red-600 rounded-full p-1">{content.safety.icon}</div>
                  <span>🔐 {content.safety.title}</span>
                </h2>

                <ul className="list-disc pl-6 my-4 space-y-2">
                  {content.safety.items.map((item, index) => (
                    <li key={index} className="mb-2 text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Final Thoughts */}
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 mb-6 border border-blue-700/30 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="bg-blue-600 rounded-full p-1">
                    <Award className="h-5 w-5 text-yellow-400" />
                  </div>
                  <span>🧠 Final Thoughts</span>
                </h2>

                {content.conclusion.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-8">
              {/* Airdrop Progress */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-4">
                  <h3 className="font-bold text-xl text-white">Track Your Progress</h3>
                </div>
                <div className="p-4">
                  <AirdropProgress airdropId={guide.id} airdropName={guide.title} tasks={guide.tasks} />
                </div>
              </div>

              {/* Unichain Resources */}
              <div className="mt-6 bg-slate-800 border border-slate-700 rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-4">
                  <h3 className="font-bold text-xl text-white">Unichain Resources</h3>
                </div>
                <div className="p-4 space-y-3">
                  <a
                    href="https://www.unichain.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>Official Website</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://docs.unichain.org/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>Documentation</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://uniscan.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>Block Explorer</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://x.com/unichain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>Twitter/X</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://discord.com/invite/uniswap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <span>Discord Community</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Notifications */}
              <div className="mt-6 p-6 bg-slate-800 border border-slate-700 rounded-xl shadow-md">
                <h3 className="font-medium text-lg mb-3">Get Notified</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Receive updates when this guide changes or when important deadlines approach.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Enable Notifications</Button>
              </div>

              {/* Share */}
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
