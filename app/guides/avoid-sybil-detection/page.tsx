import Link from "next/link"
import {
  ArrowLeft,
  Copy,
  Twitter,
  Shield,
  Wallet,
  Globe,
  Clock,
  FileSpreadsheet,
  User,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Fingerprint,
  Network,
  Layers,
  Shuffle,
  Calendar,
  BarChart3,
  ExternalLink,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SybilChecklist, type ChecklistCategory } from "@/components/sybil-checklist"

export default function AvoidSybilDetectionGuide() {
  // Define checklist categories and items
  const checklistCategories: ChecklistCategory[] = [
    {
      name: "Unique Funding Sources",
      color: "#3b82f6", // blue-500
      items: [
        {
          id: "funding-1",
          category: "Unique Funding Sources",
          title: "Use different CEXs for funding",
          description: "Fund wallets from different centralized exchanges",
        },
        {
          id: "funding-2",
          category: "Unique Funding Sources",
          title: "Bridge from different chains",
          description: "Use various chains as funding sources",
        },
        {
          id: "funding-3",
          category: "Unique Funding Sources",
          title: "Stagger funding timing",
          description: "Fund wallets on different days",
        },
      ],
    },
    {
      name: "Varied Transaction Patterns",
      color: "#8b5cf6", // violet-500
      items: [
        {
          id: "patterns-1",
          category: "Varied Transaction Patterns",
          title: "Use different dApps per wallet",
          description: "Each wallet should interact with different protocols",
        },
        {
          id: "patterns-2",
          category: "Varied Transaction Patterns",
          title: "Vary transaction amounts",
          description: "Don't use the same amounts across wallets",
        },
        {
          id: "patterns-3",
          category: "Varied Transaction Patterns",
          title: "Stagger transaction timing",
          description: "Don't transact at the same time across wallets",
        },
        {
          id: "patterns-4",
          category: "Varied Transaction Patterns",
          title: "10+ Ethereum mainnet transactions",
          description: "Each wallet should have substantial mainnet activity",
        },
      ],
    },
    {
      name: "Identity Establishment",
      color: "#6366f1", // indigo-500
      items: [
        {
          id: "identity-1",
          category: "Identity Establishment",
          title: "Set up ENS or other on-chain identity",
          description: "At least for your main wallet",
        },
        {
          id: "identity-2",
          category: "Identity Establishment",
          title: "Get Gitcoin Passport",
          description: "Score of 20+ recommended",
        },
        {
          id: "identity-3",
          category: "Identity Establishment",
          title: "Make NFT purchases",
          description: "Shows organic wallet activity",
        },
      ],
    },
    {
      name: "Wallet Tracking",
      color: "#ec4899", // pink-500
      items: [
        {
          id: "tracking-1",
          category: "Wallet Tracking",
          title: "Set up tracking spreadsheet",
          description: "Document all wallet activity",
        },
        {
          id: "tracking-2",
          category: "Wallet Tracking",
          title: "Use wallet tracking tools",
          description: "zkCodex, Wenser, or DeBank",
        },
        {
          id: "tracking-3",
          category: "Wallet Tracking",
          title: "Document funding sources",
          description: "Keep records of where funds came from",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <Link href="/get-started" className="flex items-center text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Guides
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Copy className="h-4 w-4" />
            Copy Link
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Twitter className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 p-8 mb-12 text-white">
        <div className="relative flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md mb-4">
              <Shield className="h-4 w-4" />
              <span>Airdrop Strategy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Managing Multiple Wallets <span className="text-purple-300">Without</span> Being Labeled a Sybil
            </h1>
            <p className="text-lg text-indigo-100 mb-6 max-w-3xl">
              Airdrop farming can be highly profitable, but running multiple wallets comes with risk. Learn how to
              minimize sybil detection and maximize your chances of receiving airdrops across multiple accounts.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                Wallet Management
              </Badge>
              <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                Airdrop Farming
              </Badge>
              <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                Security
              </Badge>
              <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                Beginner Friendly
              </Badge>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-lg">
              <Fingerprint className="h-24 w-24 text-white" strokeWidth={1.25} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2 space-y-10">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Running multiple wallets for airdrop farming is a common strategy, but it comes with significant risks.
              This guide will show you how to manage multiple wallets effectively while minimizing the risk of being
              flagged as a sybil attacker.
            </p>
          </section>

          {/* What is a Sybil Attack Section */}
          <section>
            <Card className="overflow-hidden border-none shadow-md">
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-red-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">What is a Sybil Attack?</h2>
                    <p className="text-muted-foreground">And why you should avoid looking like one</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg">
                    A sybil attack refers to creating a large number of fake identities to manipulate a system. In
                    crypto airdrops, this means using many wallets to unfairly farm rewards.
                  </p>

                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-medium mb-3">Airdrop teams use these sybil detection tools:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-start gap-3">
                        <Network className="h-5 w-5 text-red-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Wallet clustering</p>
                          <p className="text-sm text-muted-foreground">Tracking wallets that behave similarly</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-orange-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Transaction timing</p>
                          <p className="text-sm text-muted-foreground">Analyzing when transactions occur</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Layers className="h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Funding source tracing</p>
                          <p className="text-sm text-muted-foreground">Following money trails between wallets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Strategy 1: Fund Wallets Uniquely */}
          <section>
            <Card className="overflow-hidden border-none shadow-md">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">1. Fund Wallets Uniquely</h2>
                    <p className="text-muted-foreground">Create distinct funding patterns for each wallet</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-red-500/10 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <p className="font-medium">
                      Avoid funding all your wallets from one central wallet or CEX. That's an instant sybil flag.
                    </p>
                  </div>

                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-medium mb-4">Do this instead:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                        <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                          <Shuffle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <p className="font-medium">Use different funding paths</p>
                        <p className="text-sm text-muted-foreground">
                          Vary between exchanges, bridges, and other sources
                        </p>
                      </div>
                      <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-cyan-50 dark:bg-cyan-900/20">
                        <div className="bg-cyan-100 dark:bg-cyan-900/50 p-3 rounded-full">
                          <Layers className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <p className="font-medium">Bridge from different chains</p>
                        <p className="text-sm text-muted-foreground">Use various chains as funding sources</p>
                      </div>
                      <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-sky-50 dark:bg-sky-900/20">
                        <div className="bg-sky-100 dark:bg-sky-900/50 p-3 rounded-full">
                          <Calendar className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                        </div>
                        <p className="font-medium">Delay transactions</p>
                        <p className="text-sm text-muted-foreground">Don't fund all wallets on the same day</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-4">Where to get source funds from</h3>
                    <p className="mb-4">
                      The best way to fund your wallets with zero connection is to use different centralized exchanges.
                      When you send funds from a centralized exchange, it's usually not traceable back to you
                      specifically.
                    </p>
                    <div className="flex items-center gap-4 p-4 bg-amber-500/10 rounded-lg mb-4">
                      <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0" />
                      <p>
                        <span className="font-medium">Warning:</span> Don't withdraw similar amounts at the same time
                        from the same exchange to multiple wallets.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <p>
                        <span className="font-medium">Good practice:</span> Withdraw 0.02 ETH from Kucoin and then 0.034
                        ETH from MEXC at separate times throughout the day.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Recommended exchanges for funding wallets</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <a
                        href="https://t.co/X2iaRKsr3T"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-accent transition-colors"
                      >
                        <div>
                          <span className="font-medium">Gemini</span>
                          <p className="text-xs text-muted-foreground">$75 bonus for new users</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </a>
                      <a
                        href="https://promote.mexc.com/r/Z6k9kQvG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-accent transition-colors"
                      >
                        <span className="font-medium">MEXC</span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </a>
                      <a
                        href="https://www.kucoin.com/r/rf/FNFD2QXC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-accent transition-colors"
                      >
                        <span className="font-medium">Kucoin</span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Strategy 2: Use VPNs or Proxies */}
          <section>
            <Card className="overflow-hidden border-none shadow-md">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">2. Use VPNs or Proxies</h2>
                    <p className="text-muted-foreground">When necessary to simulate geographic diversity</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">When you need a VPN</h3>
                        <p className="mb-2">
                          Most airdrops don't track IP addresses for small-scale farming (3-5 wallets). However,
                          consider using VPNs or proxies when:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                          <li>Managing 10+ wallets</li>
                          <li>Claiming airdrops with geographic restrictions</li>
                          <li>Participating in high-value airdrops with strict anti-sybil measures</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 dark:bg-amber-900/50 p-2 rounded-full mt-1">
                        <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Important considerations</h3>
                        <p>
                          If you're farming 10-100+ wallets, you'll need to be more careful about covering your tracks
                          with proxies and VPNs. Some airdrops won't let users claim based on location, in those
                          situations you will need a quality VPN or proxy to claim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Strategy 3: Vary Transaction Behavior */}
          <section>
            <Card className="overflow-hidden border-none shadow-md">
              <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-violet-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">3. Vary Transaction Behavior</h2>
                    <p className="text-muted-foreground">Create unique patterns for each wallet</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-red-500/10 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <p className="font-medium">
                      Don't copy-paste the same actions across wallets. This is a clear sybil indicator.
                    </p>
                  </div>

                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-medium mb-4">Create unique behavior patterns:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="font-medium">Use dApps differently</p>
                          <p className="text-sm text-muted-foreground">
                            One wallet mints, another lends, another bridges
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="font-medium">Stagger protocol usage</p>
                          <p className="text-sm text-muted-foreground">
                            Wait days or weeks before using the same protocols on different wallets
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="font-medium">Stagger activity times</p>
                          <p className="text-sm text-muted-foreground">Use wallets at different times of day</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="font-medium">Change token amounts</p>
                          <p className="text-sm text-muted-foreground">Vary the amounts, chains, and methods used</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-violet-100 dark:bg-violet-900/50 p-2 rounded-full mt-1">
                        <Fingerprint className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Think like a real user</h3>
                        <p className="mb-4">
                          Each wallet should look like a real human with its own usage pattern. Try to get a Gitcoin
                          Passport on as many wallets as possible, as this may be a criteria for certain airdrops.
                        </p>
                        <p className="font-medium">
                          Each wallet needs to have activity on Ethereum mainnet, the more transactions the better, but
                          10+ transactions is crucial. Try to complete these transactions at times when gas fees are
                          low.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Strategy 4: Spread Activity Over Time */}
          <section>
            <Card className="overflow-hidden border-none shadow-md">
              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">4. Spread Activity Over Time</h2>
                    <p className="text-muted-foreground">Consistency is more important than volume</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-amber-100 dark:bg-amber-900/50 p-3 rounded-full">
                        <BarChart3 className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Consistency is better than Volume</h3>
                        <p className="text-muted-foreground">Rather than spamming all wallets at once</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20">
                        <div className="bg-amber-100 dark:bg-amber-900/50 p-3 rounded-full">
                          <Calendar className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <p className="font-medium">Perform actions weekly</p>
                        <p className="text-sm text-muted-foreground">Regular, consistent activity is key</p>
                      </div>
                      <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                        <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-full">
                          <Shuffle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <p className="font-medium">Schedule different days</p>
                        <p className="text-sm text-muted-foreground">Use different wallets on different days</p>
                      </div>
                      <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20">
                        <div className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-full">
                          <Layers className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <p className="font-medium">Interact over months</p>
                        <p className="text-sm text-muted-foreground">Multiple months of activity is crucial</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 dark:bg-amber-900/50 p-2 rounded-full mt-1">
                        <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Pro tip: Use old wallets</h3>
                        <p>
                          Long-term wallets are trusted more than recently created ones. If you have any old wallets
                          with real activity that you haven't used in a while, these are great to start airdrop farming.
                          Just make sure they don't have the same source of funds as any of your other airdrop farming
                          wallets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Strategy 5: Track Your Wallets Carefully */}
          <section>
            <Card className="overflow-hidden border-none shadow-md">
              <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <FileSpreadsheet className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">5. Track Your Wallets Carefully</h2>
                    <p className="text-muted-foreground">Keep detailed records of all wallet activity</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-medium mb-4">Recommended tracking tools:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a
                        href="https://zkcodex.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-lg bg-pink-50 dark:bg-pink-900/20 hover:shadow-md transition-all"
                      >
                        <div>
                          <span className="font-medium text-lg">zkCodex</span>
                          <p className="text-sm text-muted-foreground">Track wallet activity and interactions</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-pink-500" />
                      </a>
                      <a
                        href="https://wenser.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-lg bg-rose-50 dark:bg-rose-900/20 hover:shadow-md transition-all"
                      >
                        <div>
                          <span className="font-medium text-lg">Wenser</span>
                          <p className="text-sm text-muted-foreground">Airdrop eligibility checker</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-rose-500" />
                      </a>
                      <a
                        href="https://debank.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-lg bg-pink-50 dark:bg-pink-900/20 hover:shadow-md transition-all"
                      >
                        <div>
                          <span className="font-medium text-lg">DeBank</span>
                          <p className="text-sm text-muted-foreground">Portfolio & activity tracker</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-pink-500" />
                      </a>
                      <a
                        href="https://sheets.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-lg bg-rose-50 dark:bg-rose-900/20 hover:shadow-md transition-all"
                      >
                        <div>
                          <span className="font-medium text-lg">Google Sheets</span>
                          <p className="text-sm text-muted-foreground">Custom tracking spreadsheets</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-rose-500" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-4">Keep detailed notes on:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-rose-100 dark:bg-rose-900/50 p-2 rounded-full mt-1">
                          <Calendar className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                        </div>
                        <div>
                          <p className="font-medium">Wallet creation date</p>
                          <p className="text-sm text-muted-foreground">When each wallet was created</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-rose-100 dark:bg-rose-900/50 p-2 rounded-full mt-1">
                          <Wallet className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                        </div>
                        <div>
                          <p className="font-medium">Funding source</p>
                          <p className="text-sm text-muted-foreground">Where funds came from</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-rose-100 dark:bg-rose-900/50 p-2 rounded-full mt-1">
                          <Clock className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                        </div>
                        <div>
                          <p className="font-medium">Daily/weekly activity</p>
                          <p className="text-sm text-muted-foreground">Transaction patterns</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Strategy 6: Establish Identity in Main Wallet */}
          <section>
            <Card className="overflow-hidden border-none shadow-md">
              <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-indigo-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">6. Establish Identity in Main Wallet</h2>
                    <p className="text-muted-foreground">Create a strong on-chain identity for your primary wallet</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-medium mb-4">Your "main wallet" should have:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <p className="font-medium">ENS, Farcaster, or Lens</p>
                          <p className="text-sm text-muted-foreground">On-chain identity verification</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <p className="font-medium">Gitcoin Passport score of 20+</p>
                          <p className="text-sm text-muted-foreground">
                            <a
                              href="https://app.passport.xyz/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              https://app.passport.xyz/
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <p className="font-medium">NFT purchases on Ethereum</p>
                          <p className="text-sm text-muted-foreground">
                            Using
                            <a
                              href="https://opensea.io"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline ml-1"
                            >
                              Opensea.io
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <p className="font-medium">Long-term organic activity</p>
                          <p className="text-sm text-muted-foreground">Consistent usage over time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Red Flags to Avoid */}
          <section>
            <Card className="overflow-hidden border-none shadow-md">
              <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-red-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Red Flags to Avoid</h2>
                    <p className="text-muted-foreground">Behaviors that trigger sybil detection</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Copying identical actions</p>
                      <p className="text-sm text-muted-foreground">
                        Don't perform the same actions across multiple wallets
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Zero variety in behavior</p>
                      <p className="text-sm text-muted-foreground">Each wallet should have its own unique pattern</p>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">One wallet funding many addresses</p>
                      <p className="text-sm text-muted-foreground">Don't fund 10+ new addresses from a single source</p>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Identical bridging patterns</p>
                      <p className="text-sm text-muted-foreground">Don't use same path, token, value, and day</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Final Thoughts */}
          <section className="mt-10">
            <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white">
              <div className="relative">
                <h2 className="text-3xl font-bold mb-4">Final Thoughts</h2>
                <p className="text-lg mb-4 text-slate-200">
                  Running multiple wallets can be safe, effective, and profitable—but you need to do it right. If your
                  wallets all look like clones, your effort may be for nothing.
                </p>
                <p className="text-lg mb-4 text-slate-200">
                  Approach each wallet as a separate user with its own habits, timing, and footprint.
                </p>
                <p className="text-lg font-medium text-slate-100">
                  Do this right, and you'll significantly increase your odds of qualifying for airdrops without getting
                  flagged.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Airdrop Progress */}
          <div className="sticky top-6">
            <SybilChecklist categories={checklistCategories} />
          </div>

          {/* Wallet Tracking Tools */}
          <div className="bg-muted rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Wallet Tracking Tools</h3>
            <div className="space-y-3">
              <a
                href="https://zkcodex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <span className="block font-medium">zkCodex</span>
                  <span className="text-xs text-muted-foreground">Track wallet activity</span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://wenser.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <span className="block font-medium">Wenser</span>
                  <span className="text-xs text-muted-foreground">Airdrop eligibility checker</span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://debank.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <span className="block font-medium">DeBank</span>
                  <span className="text-xs text-muted-foreground">Portfolio & activity tracker</span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://app.passport.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <span className="block font-medium">Gitcoin Passport</span>
                  <span className="text-xs text-muted-foreground">Identity verification</span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Related Guides */}
          <div className="bg-muted rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Related Guides</h3>
            <div className="space-y-3">
              <Link
                href="/guides/wallet-tracker"
                className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <span className="block font-medium">Wallet Tracker Guide</span>
                  <span className="text-xs text-muted-foreground">Track your wallet activity</span>
                </div>
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
              <Link
                href="/guides/layerzero-season-2"
                className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <span className="block font-medium">LayerZero Season 2 Guide</span>
                  <span className="text-xs text-muted-foreground">Farm the LayerZero airdrop</span>
                </div>
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
