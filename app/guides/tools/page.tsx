import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GuideCard } from "@/components/guide-card"

const guides = [
  {
    id: "wallet-tracker",
    title: "Wallet Tracker Setup",
    description:
      "Set up tools to track your on-chain activity and potential airdrop eligibility across multiple wallets.",
    category: "tool",
    difficulty: "beginner",
    url: "/guides/wallet-tracker",
  },
  {
    id: "sybil-avoidance",
    title: "Advanced Sybil Avoidance",
    description:
      "Learn sophisticated techniques to ensure your airdrop farming activities don't trigger Sybil detection.",
    category: "tool",
    difficulty: "advanced",
    url: "/guides/sybil-avoidance",
  },
  {
    id: "exchanges",
    title: "Anonymous Funding Exchanges",
    description:
      "Discover exchanges that allow you to fund your airdrop farming wallets anonymously without creating connections between them.",
    category: "tool",
    difficulty: "intermediate",
    url: "/guides/exchanges",
  },
]

export default function ToolsGuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="container mx-auto px-4 py-8">
        <Link href="/get-started" passHref>
          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Get Started
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mt-4">Wallet Tracking Tools</h1>
        <p className="text-slate-300 mt-2">
          Essential tools to help you track and manage your airdrop farming activities
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <GuideCard
              key={guide.id}
              title={guide.title}
              description={guide.description}
              category={guide.category}
              difficulty={guide.difficulty}
              link={guide.url}
            />
          ))}
        </div>
      </main>

      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2025 LayerLeap. All rights reserved.</p>
          <p className="mt-2">Disclaimer: Airdrop farming carries risks. Always do your own research.</p>
        </div>
      </footer>
    </div>
  )
}
