"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GuideCard } from "@/components/guide-card"

export default function GetStartedPage() {
  const mainnets = [
    {
      id: "soneium",
      title: "Soneium Guide",
      description: "Learn how to get started with Soneium and position yourself for a potential airdrop.",
      image: "/images/soneium-logo-updated.jpg",
      category: "mainnet",
      difficulty: "beginner",
      url: "/guides/soneium",
    },
    {
      id: "unichain",
      title: "Unichain Guide",
      description: "Learn how to get started with Unichain and position yourself for a potential airdrop.",
      image: "/images/unichain-logo-updated-v2.jpg",
      category: "mainnet",
      difficulty: "beginner",
      url: "/guides/unichain",
    },
    {
      id: "ink",
      title: "INK Guide",
      description: "Learn how to get started with INK and position yourself for a potential airdrop.",
      image: "/images/ink-logo-updated.png",
      category: "mainnet",
      difficulty: "intermediate",
      url: "/guides/ink",
    },
  ]

  const testnets = [
    {
      id: "monad-testnet",
      title: "Monad Testnet Guide",
      description: "Learn how to participate in the Monad testnet and position yourself for a potential airdrop.",
      image: "/images/monad-logo.png",
      category: "testnet",
      difficulty: "beginner",
      url: "/guides/monad-testnet",
    },
    {
      id: "somnia",
      title: "Somnia Testnet Guide",
      description:
        "Complete guide to participating in the Somnia testnet to maximize your chances for their potential airdrop.",
      image: "/placeholder-dd0ml.png",
      category: "testnet",
      difficulty: "intermediate",
      url: "/guides/somnia",
    },
  ]

  const bridges = [
    {
      id: "layerzero-season-2",
      title: "LayerZero Season 2 Airdrop Guide",
      description: "Learn how to farm the potential LayerZero Season 2 airdrop with effective strategies.",
      image: "/placeholder-t0n0i.png",
      category: "bridge",
      difficulty: "intermediate",
      url: "/guides/layerzero-season-2",
    },
    {
      id: "relay-strategy",
      title: "Relay Strategy Guide",
      description: "Learn how to use Relay for cross-chain bridging and potential airdrop farming.",
      image: "/placeholder-ibbrz.png",
      category: "bridge",
      difficulty: "beginner",
      url: "/guides/relay-strategy",
    },
    {
      id: "wormhole",
      title: "Wormhole + Mayan Finance Guide",
      description: "Learn how to farm a potential second Wormhole airdrop and Mayan Finance token.",
      image: "/placeholder-sgw7w.png",
      category: "bridge",
      difficulty: "intermediate",
      url: "/guides/wormhole",
    },
  ]

  const tools = [
    {
      id: "wallet-tracker",
      title: "Wallet Tracker Guide",
      description: "Learn how to track your wallet activity and optimize for potential airdrops.",
      image: "/placeholder-c7gx0.png",
      category: "tool",
      difficulty: "beginner",
      url: "/guides/wallet-tracker",
    },
    {
      id: "airdrop-checker",
      title: "Airdrop Checker Guide",
      description: "Learn how to check if you're eligible for various airdrops.",
      image: "/placeholder.svg?height=200&width=400&query=Airdrop%20Checker",
      category: "tool",
      difficulty: "beginner",
      url: "/guides/airdrop-checker",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Get Started with LayerLeap</h1>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Mainnet Guides</h2>
          <Link href="/guides/mainnets" passHref>
            <Button variant="outline" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainnets.map((guide) => (
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
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Testnet Guides</h2>
          <Link href="/guides/testnets" passHref>
            <Button variant="outline" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testnets.map((guide) => (
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
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Bridge Guides</h2>
          <Link href="/guides/bridges" passHref>
            <Button variant="outline" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bridges.map((guide) => (
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
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Tool Guides</h2>
          <Link href="/guides/tools" passHref>
            <Button variant="outline" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((guide) => (
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
      </section>
    </div>
  )
}
