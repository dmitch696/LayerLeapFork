import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GuideCard } from "@/components/guide-card"

const guides = [
  {
    id: "inco-testnet",
    title: "🚀 INCO Testnet Guide",
    description: "Farm the INCO airdrop ($10M+) - A modular L1 blockchain built on Fully Homomorphic Encryption (FHE)",
    category: "testnet",
    difficulty: "beginner",
    url: "/guides/inco-testnet",
    estimatedTime: "15-20 minutes",
    image: "/images/inco-logo.png",
  },
  {
    id: "camp-network-testnet",
    title: "🏕️ Camp Network Testnet Guide",
    description: "Farm the Camp Network testnet backed by $30M in funding - modernizing IP infrastructure for AI",
    category: "testnet",
    difficulty: "beginner",
    url: "/guides/camp-network-testnet",
    estimatedTime: "15-20 minutes",
    image: "/images/camp-network-logo.png",
  },
  {
    id: "n1-testnet",
    title: "🚜 N1Chain L1 Testnet Guide",
    description: "Complete the 01 Exchange testnet tasks to position yourself for a potential N1Chain airdrop",
    category: "testnet",
    difficulty: "beginner",
    url: "/guides/n1-testnet",
    estimatedTime: "15-20 minutes",
    image: "/n1chain-logo.png",
  },
  {
    id: "rise-testnet",
    title: "🚀 Rise Chain Testnet Guide",
    description:
      "Farm the Rise Chain Testnet for a potential airdrop from this ultra-fast Ethereum L2 backed by Vitalik Buterin",
    category: "testnet",
    difficulty: "beginner",
    url: "/guides/rise-testnet",
    estimatedTime: "15-20 minutes",
    image: "/images/rise-logo-neon.png",
  },
  {
    id: "monad-testnet",
    title: "🧪 Monad Testnet Guide",
    description: "Step-by-step guide to farming Monad testnet for potential airdrop eligibility",
    category: "testnet",
    difficulty: "intermediate",
    url: "/guides/monad-testnet",
    estimatedTime: "2-3 hours",
  },
  {
    id: "pharos-testnet",
    title: "🌠 Pharos Network Testnet Guide",
    description: "Farm Points | Test L1 Tech | Position Early for this $8M funded Layer 1 blockchain",
    category: "testnet",
    difficulty: "beginner",
    url: "/guides/pharos-testnet",
    estimatedTime: "10 minutes",
  },
  {
    id: "megaeth-testnet",
    title: "🧪 MegaETH Testnet Guide",
    description: "Learn how to participate in the MegaETH testnet to position yourself for a potential future airdrop",
    category: "testnet",
    difficulty: "beginner",
    url: "/guides/megaeth-testnet",
    estimatedTime: "15 minutes",
  },
  {
    id: "somnia-testnet",
    title: "Somnia Testnet",
    description:
      "Complete guide to participating in the Somnia testnet to maximize your chances for their potential airdrop.",
    category: "testnet",
    difficulty: "intermediate",
    url: "/guides/somnia",
    estimatedTime: "2-3 hours",
  },
  {
    id: "nexus-testnet",
    title: "🌉 Nexus Testnet Guide",
    description: "Farm the Nexus airdrop before it's too late - backed by $27M in funding with TGE confirmed for Q3",
    category: "testnet",
    difficulty: "beginner",
    url: "/guides/nexus-testnet",
    estimatedTime: "15 minutes",
  },
  {
    id: "talus-network",
    title: "🚀 Talus Network Airdrop Guide",
    description: "Farm Rewards from the AI-Focused Blockchain Backed by $9M in Funding",
    category: "testnet",
    difficulty: "beginner",
    url: "/guides/talus-network",
    estimatedTime: "10 minutes",
  },
]

export default function TestnetGuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="container mx-auto px-4 py-8">
        <Link href="/get-started" passHref>
          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Get Started
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mt-4">All Testnet Guides</h1>
        <p className="text-slate-300 mt-2">
          Comprehensive guides for participating in testnet activities to maximize your airdrop potential
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
              image={guide.image}
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
