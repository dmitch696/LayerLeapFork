"use client"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Wallet,
  ArrowRightLeft,
  LayoutGrid,
  MessageCircle,
  BrainCircuit,
  ExternalLink,
  CheckCircle2,
  Globe,
  Twitter,
  MessagesSquare,
  Award,
  AlertTriangle,
  Rocket,
  Repeat,
  Layers,
  DollarSign,
  Landmark,
  PenTool,
  Gamepad2,
  BarChart3,
  Banknote,
  Shuffle,
  ShoppingBag,
  Briefcase,
  CalendarCheck,
  MessageSquarePlus,
  FileCode,
} from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AirdropProgress } from "@/components/airdrop-progress"

// Guide metadata
const guide = {
  id: "soneium",
  title: "🌐 Soneium Airdrop Farming Guide",
  description:
    "Learn how to participate in Soneium's ecosystem to position yourself for potential token distributions.",
  category: "mainnet",
  difficulty: "intermediate",
  author: "Crypto Guide",
  date: "May 15, 2023",
  readTime: "12 min read",
  tasks: [
    {
      id: "soneium-task-1",
      title: "Set up wallet for Soneium",
      description: "Install MetaMask and add Soneium network",
      completed: false,
    },
    {
      id: "soneium-task-2",
      title: "Bridge ETH to Soneium via Relay.link",
      description: "Bridge at least 0.01 ETH to Soneium",
      completed: false,
    },
    {
      id: "soneium-task-3",
      title: "Swap tokens on Soneium DEX",
      description: "Use Kyo Finance or SoneFi to swap tokens",
      completed: false,
    },
    {
      id: "soneium-task-4",
      title: "Provide liquidity on Soneium",
      description: "Add liquidity to a pool on Soneium",
      completed: false,
    },
    {
      id: "soneium-task-5",
      title: "Follow Soneium on Twitter",
      description: "Follow @soneium on Twitter/X",
      completed: false,
    },
    {
      id: "soneium-task-6",
      title: "Join Soneium Discord",
      description: "Join and participate in the Discord community",
      completed: false,
    },
    {
      id: "soneium-task-7",
      title: "Complete Galxe/Layer3 tasks",
      description: "Participate in community campaigns",
      completed: false,
    },
    {
      id: "soneium-task-8",
      title: "Maintain activity for 30+ days",
      description: "Interact with the protocol consistently for a month",
      completed: false,
    },
  ],
}

// Ecosystem platforms with icons
const ecosystemPlatforms = [
  {
    name: "Kyo Finance",
    url: "https://www.kyo.finance/",
    description: "Swap and add liquidity",
    icon: <Shuffle className="h-4 w-4" />,
  },
  {
    name: "SoneFi",
    url: "https://sonefi.xyz",
    description: "Swap, perps, liquidity, and memecoins",
    icon: <DollarSign className="h-4 w-4" />,
  },
  { name: "Biru", url: "https://biru.gg", description: "Buy Soneium NFTs", icon: <ShoppingBag className="h-4 w-4" /> },
  {
    name: "NFTs2Me",
    url: "https://nfts2me.com",
    description: "Create and mint your own NFT",
    icon: <PenTool className="h-4 w-4" />,
  },
  {
    name: "Owlto Finance",
    url: "https://owlto.finance",
    description: "Bridge, deploy contracts, daily check-in",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "QuickSwap",
    url: "https://quickswap.exchange",
    description: "Swap and provide liquidity",
    icon: <Repeat className="h-4 w-4" />,
  },
  {
    name: "Sonex",
    url: "https://app.sonex.so/swap",
    description: "Swap and add liquidity",
    icon: <Layers className="h-4 w-4" />,
  },
  {
    name: "Untitled Bank",
    url: "https://app.untitledbank.co/",
    description: "Lend and borrow assets",
    icon: <Landmark className="h-4 w-4" />,
  },
  {
    name: "WaveX",
    url: "https://app.wavex.fi/",
    description: "Trade, swap and provide liquidity",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    name: "Sonus Exchange",
    url: "https://sonus.exchange/#/swap",
    description: "Swap and add liquidity",
    icon: <Banknote className="h-4 w-4" />,
  },
  {
    name: "Sonova",
    url: "https://sonova.one/soneium/collections",
    description: "Buy Soneium NFTs",
    icon: <Gamepad2 className="h-4 w-4" />,
  },
  {
    name: "Rhino.fi",
    url: "https://rhino.fi",
    description: "Bridge to and from Soneium",
    icon: <ArrowRightLeft className="h-4 w-4" />,
  },
  {
    name: "Earn3",
    url: "https://earn3.app/checkin/soneium",
    description: "Check in with Soneium daily",
    icon: <CalendarCheck className="h-4 w-4" />,
  },
  {
    name: "OnchainGM",
    url: "https://onchaingm.com",
    description: "Say GM with Soneium",
    icon: <MessageSquarePlus className="h-4 w-4" />,
  },
  {
    name: "MintAir",
    url: "https://contracts.mintair.xyz/",
    description: "Deploy a smart contract on Soneium",
    icon: <FileCode className="h-4 w-4" />,
  },
]

// Community platforms
const communityPlatforms = [
  { name: "Galxe", url: "#", icon: <Award className="h-4 w-4" /> },
  { name: "Layer3", url: "https://app.layer3.xyz/communities/soneium", icon: <Layers className="h-4 w-4" /> },
  {
    name: "Superboard",
    url: "https://superboard.xyz/campaign/assemble-on-soneium",
    icon: <LayoutGrid className="h-4 w-4" />,
  },
]

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

export default function SoneiumGuidePage() {
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
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 mb-8 border border-blue-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 rounded-full p-2">
                  <img src="/images/soneium-logo.png" alt="Soneium Logo" className="h-10 w-10" />
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge className={categoryColors[guide.category]}>
                      {guide.category.charAt(0).toUpperCase() + guide.category.slice(1)}
                    </Badge>
                    <Badge className={difficultyColors[guide.difficulty]}>
                      {guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
                    </Badge>
                  </div>
                  <h1 className="text-3xl font-bold">{guide.title}</h1>
                </div>
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

            {/* Introduction Section */}
            <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl p-6 mb-6 border border-blue-800/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Globe className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">🌟 Why Soneium?</h2>
              </div>

              <p className="text-slate-300 mb-4">
                Soneium is a Layer 2 blockchain built with the OP Stack and backed by Sony. It's optimized for
                scalability and ultra-low fees, making it ideal for on-chain interactions. Given the hype around its
                ecosystem and major backers, there's growing speculation that Soneium could reward early users with a
                retroactive airdrop.
              </p>

              <div className="bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 mb-2">
                      Before beginning to farm Soneium, keep in mind that you are no longer an early user if you are
                      starting now. Being rewarded may still be possible, but "badges" were given to many users. Badges
                      were given for users who had a certain amount of transactions before a certain date and to users
                      who used certain protocols and completed tasks.
                    </p>
                    <p className="text-slate-300">
                      It may not be too late to farm Soneium, but unless you started farming it earlier and are looking
                      to continue farming it and stand out, it may be best to focus on other chains/protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wallet Setup Section */}
            <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-xl p-6 mb-6 border border-indigo-800/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-600 p-2 rounded-full">
                  <Wallet className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">👜 Step 1: Set Up Your Wallet</h2>
              </div>

              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-2">
                  <div className="bg-indigo-700 text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <span className="text-slate-300">Install MetaMask or any EVM-compatible wallet.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-indigo-700 text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <span className="text-slate-300">
                    Add the Soneium Mainnet manually or use Chainlist for one-click setup.
                  </span>
                </li>
              </ul>

              <div className="bg-slate-800 rounded-lg p-4 mb-4">
                <h3 className="font-bold text-lg mb-2">Soneium Network Details:</h3>
                <ul className="space-y-2">
                  <li className="text-slate-300 font-mono text-sm">Network Name: Soneium Mainnet</li>
                  <li className="text-slate-300 font-mono text-sm">RPC URL: https://rpc.mainnet.soneium.org</li>
                  <li className="text-slate-300 font-mono text-sm">Chain ID: 1946</li>
                  <li className="text-slate-300 font-mono text-sm">Currency Symbol: ETH</li>
                  <li className="text-slate-300 font-mono text-sm">Explorer: explorer.soneium.org</li>
                </ul>
              </div>
            </div>

            {/* Bridging Section */}
            <div className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 rounded-xl p-6 mb-6 border border-purple-800/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600 p-2 rounded-full">
                  <ArrowRightLeft className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">🔁 Step 2: Bridge ETH Using Relay.link</h2>
              </div>

              <p className="text-slate-300 mb-4">
                Relay.link allows you to bridge to Soneium with extremely low fees and may also reward users in the
                future.
              </p>

              <ol className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="bg-purple-700 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="text-slate-300">Visit relay.link and connect your wallet.</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-purple-700 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="text-slate-300">Choose your source chain and bridge to Soneium.</div>
                </li>
              </ol>

              <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">
                    I recommend bridging at least 0.01 ETH, sometimes there could be a minimum threshold of volume
                    bridged/swapped to be considered for an airdrop.
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-slate-700 mb-4">
                <Image
                  src="https://sjc.microlink.io/Clkz54zj_ZtRVxSReQYtmySwA_YfanyTKwsCPnJNf3jsBQck7cX59Lhj5x7-iULYL87FP6sl7B25vslHHc-EfA.jpeg"
                  alt="Relay.link interface showing the bridge functionality for Soneium"
                  width={1200}
                  height={675}
                  className="w-full"
                />
                <div className="bg-slate-800 p-3 text-sm text-slate-400 text-center">
                  Relay.link bridge interface for sending assets to Soneium
                </div>
              </div>
            </div>

            {/* Ecosystem Section */}
            <div className="bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 rounded-xl p-6 mb-6 border border-violet-800/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-violet-600 p-2 rounded-full">
                  <LayoutGrid className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">⚙️ Step 3: Interact With the Ecosystem</h2>
              </div>

              <p className="text-slate-300 mb-4">
                To increase your chance of qualifying for a future airdrop, perform real on-chain actions:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {ecosystemPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-violet-500/50 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-violet-700/70 text-white rounded-full p-1.5 group-hover:bg-violet-600 transition-colors">
                        {platform.icon}
                      </div>
                      <h3 className="font-bold text-violet-400">{platform.name}</h3>
                    </div>
                    <p className="text-slate-300 text-sm mb-2">{platform.description}</p>
                    <div className="flex items-center text-xs text-violet-400 group-hover:text-violet-300">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      <span>Visit Platform</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Community Section */}
            <div className="bg-gradient-to-r from-fuchsia-900/20 to-pink-900/20 rounded-xl p-6 mb-6 border border-fuchsia-800/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-fuchsia-600 p-2 rounded-full">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">📣 Step 4: Join Community Campaigns</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-fuchsia-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-fuchsia-700/70 text-white rounded-full p-1.5">
                      <Twitter className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-fuchsia-400">Twitter/X</h3>
                  </div>
                  <p className="text-slate-300 mb-2">Follow @soneium on X for news.</p>
                  <a href="https://x.com/soneium" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Follow on Twitter
                    </Button>
                  </a>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-fuchsia-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-fuchsia-700/70 text-white rounded-full p-1.5">
                      <MessagesSquare className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-fuchsia-400">Discord</h3>
                  </div>
                  <p className="text-slate-300 mb-2">
                    Join the Soneium Discord to engage with the community and claim discord roles.
                  </p>
                  <a
                    href="https://discord.com/invite/soneium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Join Discord
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 mb-4">
                <h3 className="font-bold text-fuchsia-400 mb-3">🌟 Complete quests on platforms like:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {communityPlatforms.map((platform, index) => (
                    <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" size="sm" className="w-full flex items-center gap-1">
                        {platform.icon}
                        <span>{platform.name}</span>
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Conclusion Section */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 mb-6 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-full">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">🧠 Final Thoughts</h2>
              </div>

              <p className="text-slate-300 mb-4">
                Even though the ecosystem badge campaigns are over, on-chain interaction on the mainnet still matters.
                Airdrops often reward real users who transact and engage, so:
              </p>

              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    Be consistent, use platforms that allow you to do "check ins" (mentioned above) in order to have
                    daily transactions that will cost you usually around $0.01.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    Keep records (put your wallet stats in a spreadsheet and use tools like zkcodex.com)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Watch for updates on Twitter/X and Discord</span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-lg p-4 border border-blue-500/30">
                <div className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-blue-400" />
                  <p className="text-slate-200 font-medium">
                    Stay active—Soneium could be one of the next big retroactive rewarders! 🚀
                  </p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Important Note</h3>
              <p className="text-slate-200">
                Always verify the official Soneium contract addresses before interacting with any protocol. The
                ecosystem is still developing, and staying safe should be your top priority. Start with small amounts to
                test each protocol before committing larger funds.
              </p>
            </div>
          </article>

          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-8">
              {/* Airdrop Progress */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                  <h3 className="font-bold text-white">Airdrop Progress Tracker</h3>
                </div>
                <div className="p-4">
                  <AirdropProgress airdropId={guide.id} airdropName={guide.title} tasks={guide.tasks} />
                </div>
              </div>

              {/* Soneium Resources */}
              <div className="mt-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700">
                <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-4">
                  <h3 className="font-bold text-white">Soneium Resources</h3>
                </div>
                <div className="p-4 space-y-3">
                  <a href="https://soneium.org/en/" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Official Website
                    </Button>
                  </a>
                  <a href="https://docs.soneium.org/" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Documentation
                    </Button>
                  </a>
                  <a
                    href="https://soneium.blockscout.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Block Explorer
                    </Button>
                  </a>
                </div>
              </div>

              {/* Notifications */}
              <div className="mt-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700">
                <div className="p-4">
                  <h3 className="font-medium mb-2">Get Notified</h3>
                  <p className="text-sm text-slate-400 mb-4">
                    Receive updates when this guide changes or when important deadlines approach.
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Enable Notifications</Button>
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700">
                <div className="p-4">
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
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
