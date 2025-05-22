"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User, CheckCircle2, Shield, BarChart3, FileSpreadsheet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AirdropProgress } from "@/components/airdrop-progress"

// Wallet Tracker guide data
const guide = {
  id: "wallet-tracker",
  title: "📊 How to Use Wallet Tracking Tools for Airdrop Farming",
  description:
    "Learn how to use zkcodex.com and wenser.xyz to track your wallet activity and maximize your airdrop opportunities.",
  category: "tool",
  difficulty: "beginner",
  author: "Crypto Guide",
  date: "May 13, 2025",
  readTime: "7 min read",
  content: `
📊 How to Use Wallet Tracking Tools for Airdrop Farming

💡 Why Use Wallet Trackers?
When you're farming multiple airdrop opportunities across chains, tracking your wallet activity is essential. Tools like https://zkcodex.com and https://wenser.xyz help you monitor which chains and protocols you've interacted with, how many days/weeks/months you have been active on them, how much volume you've transacted with, how many unique smart contract interactions you have and many other very important metrics.

🔍 ZKCodex & Wenser
ZKCodex and Wenser both allow you to import your wallet address and check the stats for:
Protocols you've interacted with
Your relative score or positioning
Whether your activity meets requirements that existed for previous airdrops

How to Use:
Go to https://zkcodex.com or https://wenser.xyz 
Connect your wallet (or copy and paste your wallet address)
Select the protocol/chain that you want to see your stats for
Explore the protocols and activities that they recommend for each chain, try to use as many of them as possible to increase your onchain activity and airdrop rewards.
Log those stats into a spreadsheet and continue to update it using these tools weekly (or whatever you have the time for)
many networks
Completed tasks vs pending ones
Personalized airdrop checklists

✅ Tips for Using Trackers Effectively
Use multiple wallets and track each one separately
Document what you've done and when
Update trackers weekly to catch new opportunities
Have an organized spreadsheet that keeps track of your active days, weeks, months, transaction count, volume, and unique smart contract interactions.

🔐 Safety Reminder
Always use the official versions of these tools. Don't sign messages or approve tokens unless you trust the site 100%. To avoid any risk it is better to not connect your wallet to these sites at all, you can fully use these tools without any wallet connection.

🎯 Final Thoughts
Tools like zkcodex and wenser make it easier to stay organized and strategic while farming airdrops. Use them regularly to position yourself better than other users.
`,
  tasks: [
    {
      id: "wallet-task-1",
      title: "Set up tracking spreadsheet",
      description: "Create a spreadsheet to track your wallet activity",
      completed: false,
    },
    {
      id: "wallet-task-2",
      title: "Check ZKCodex stats",
      description: "View your wallet stats on ZKCodex",
      completed: false,
    },
    {
      id: "wallet-task-3",
      title: "Check Wenser stats",
      description: "View your wallet stats on Wenser",
      completed: false,
    },
    {
      id: "wallet-task-4",
      title: "Document active days",
      description: "Record your active days on each chain",
      completed: false,
    },
    {
      id: "wallet-task-5",
      title: "Document transaction volume",
      description: "Record your transaction volume on each chain",
      completed: false,
    },
    {
      id: "wallet-task-6",
      title: "Document unique contracts",
      description: "Record your unique smart contract interactions",
      completed: false,
    },
    {
      id: "wallet-task-7",
      title: "Set up weekly check-ins",
      description: "Schedule time to review your wallet activity weekly",
      completed: false,
    },
    {
      id: "wallet-task-8",
      title: "Explore recommended protocols",
      description: "Try protocols recommended by the tracking tools",
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

export default function WalletTrackerGuidePage() {
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

            <div className="space-y-8">
              {/* Title Section */}
              <div className="bg-gradient-to-r from-amber-600/20 to-amber-800/20 p-6 rounded-xl border-l-4 border-amber-500">
                <h1 className="text-3xl font-bold text-amber-400">
                  📊 How to Use Wallet Tracking Tools for Airdrop Farming
                </h1>
              </div>

              {/* Why Use Wallet Trackers Section */}
              <div className="bg-slate-800/70 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-400">💡 Why Use Wallet Trackers?</h2>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  When you're farming multiple airdrop opportunities across chains, tracking your wallet activity is
                  essential. Tools like{" "}
                  <a
                    href="https://zkcodex.com"
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://zkcodex.com
                  </a>{" "}
                  and
                  <a
                    href="https://wenser.xyz"
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    https://wenser.xyz
                  </a>{" "}
                  help you monitor which chains and protocols you've interacted with, how many days/weeks/months you
                  have been active on them, how much volume you've transacted with, how many unique smart contract
                  interactions you have and many other very important metrics.
                </p>
              </div>

              {/* ZKCodex & Wenser Section */}
              <div className="bg-slate-800/70 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 p-2 rounded-full">
                    <FileSpreadsheet className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-purple-400">🔍 ZKCodex & Wenser</h2>
                </div>
                <p className="text-slate-200 leading-relaxed mb-4">
                  ZKCodex and Wenser both allow you to import your wallet address and check the stats for:
                </p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Protocols you've interacted with</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Your relative score or positioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Whether your activity meets requirements that existed for previous airdrops</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-purple-300 mb-3">How to Use:</h3>
                <ol className="space-y-2 mb-6 pl-6 list-decimal">
                  <li className="pl-2">
                    Go to{" "}
                    <a
                      href="https://zkcodex.com"
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://zkcodex.com
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://wenser.xyz"
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://wenser.xyz
                    </a>
                  </li>
                  <li className="pl-2">Connect your wallet (or copy and paste your wallet address)</li>
                  <li className="pl-2">Select the protocol/chain that you want to see your stats for</li>
                  <li className="pl-2">
                    Explore the protocols and activities that they recommend for each chain, try to use as many of them
                    as possible to increase your onchain activity and airdrop rewards
                  </li>
                  <li className="pl-2">
                    Log those stats into a spreadsheet and continue to update it using these tools weekly (or whatever
                    you have the time for)
                  </li>
                </ol>

                <p className="text-slate-200 leading-relaxed">
                  Both tools provide insights across many networks, completed tasks vs pending ones, and personalized
                  airdrop checklists.
                </p>
              </div>

              {/* Tips Section */}
              <div className="bg-slate-800/70 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 p-2 rounded-full">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-green-400">✅ Tips for Using Trackers Effectively</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 bg-slate-700/30 p-3 rounded-lg">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Use multiple wallets and track each one separately</span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-700/30 p-3 rounded-lg">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Document what you've done and when</span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-700/30 p-3 rounded-lg">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Update trackers weekly to catch new opportunities</span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-700/30 p-3 rounded-lg">
                    <span className="text-green-400 mt-1">•</span>
                    <span>
                      Have an organized spreadsheet that keeps track of your active days, weeks, months, transaction
                      count, volume, and unique smart contract interactions
                    </span>
                  </li>
                </ul>
              </div>

              {/* Safety Section */}
              <div className="bg-red-900/20 border border-red-700/50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 p-2 rounded-full">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-red-400">🔐 Safety Reminder</h2>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  Always use the official versions of these tools. Don't sign messages or approve tokens unless you
                  trust the site 100%. To avoid any risk it is better to not connect your wallet to these sites at all,
                  you can fully use these tools without any wallet connection.
                </p>
              </div>

              {/* Final Thoughts */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-xl border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold text-blue-400 mb-3">🎯 Final Thoughts</h2>
                <p className="text-slate-200 leading-relaxed">
                  Tools like zkcodex and wenser make it easier to stay organized and strategic while farming airdrops.
                  Use them regularly to position yourself better than other users.
                </p>
              </div>
            </div>

            {/* ZKCodex Screenshot */}
            <div className="mt-8 mb-8 rounded-lg overflow-hidden border border-slate-700 shadow-lg">
              <Image
                src="https://sjc.microlink.io/Tz6rUnboCRUOj1dD6awqfWNfSs0_Plh630-FhbG_IrzVzd3StuhIULPX54ktvfLibKD1pASYq5rS2E12FHR3vw.jpeg"
                alt="ZKCodex interface showing supported chains and search functionality"
                width={1200}
                height={675}
                className="w-full"
              />
              <div className="bg-slate-800 p-3 text-sm text-slate-400 text-center">
                ZKCodex interface for tracking wallet activity across ZK rollups
              </div>
            </div>

            {/* Wenser Screenshot */}
            <div className="mb-8 rounded-lg overflow-hidden border border-slate-700 shadow-lg">
              <Image
                src="https://sjc.microlink.io/O3lzTCSxlpVDZB6jQqQ0xuJziBqFmNlJlMNpCREFwoX3PCa3rXRB7dftVcMaDTzwZOu6Z79CAfQZ6p1So8PdYg.jpeg"
                alt="Wenser.xyz interface showing wallet tracking functionality"
                width={1200}
                height={675}
                className="w-full"
              />
              <div className="bg-slate-800 p-3 text-sm text-slate-400 text-center">
                Wenser.xyz interface for comprehensive wallet tracking and airdrop eligibility checking
              </div>
            </div>

            <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-amber-400 mb-3">Pro Tip</h3>
              <p className="text-slate-200">
                For maximum safety, consider using these tools without connecting your wallet. Simply copy and paste
                your wallet address into the search field. This way, you can still get all the valuable insights without
                any security risks. Remember to track key metrics like active days, transaction count, volume, and
                unique contract interactions in your spreadsheet.
              </p>
            </div>
          </article>

          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-8">
              <AirdropProgress airdropId={guide.id} airdropName="Wallet Tracking Tools" tasks={guide.tasks} />

              <div className="mt-6 p-6 bg-slate-800 border border-slate-700 rounded-xl shadow-md">
                <h3 className="font-medium text-lg mb-3">Get Notified</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Receive updates when new wallet tracking tools become available or when existing ones add new
                  features.
                </p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Enable Notifications</Button>
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

              <div className="mt-6 p-6 bg-slate-800 border border-slate-700 rounded-xl shadow-md">
                <h3 className="font-medium text-lg mb-3">Related Tools</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/guides/sybil-avoidance" className="text-blue-400 hover:underline">
                      Advanced Sybil Avoidance
                    </Link>
                    <p className="text-sm text-slate-400 mt-1">
                      Learn how to avoid being flagged as a Sybil attacker while using multiple wallets.
                    </p>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-400 hover:underline">
                      Gas Optimization Guide
                    </Link>
                    <p className="text-sm text-slate-400 mt-1">
                      Minimize transaction costs while farming airdrops across multiple chains.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
