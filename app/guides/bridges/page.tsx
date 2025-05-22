"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GuideCard } from "@/components/guide-card"

export default function BridgesGuidesPage() {
  const guides = [
    {
      id: "layerzero-season-2",
      title: "LayerZero Season 2 Airdrop Guide",
      description: "Learn how to farm the potential LayerZero Season 2 airdrop with effective strategies.",
      image: "/placeholder.svg?key=dgxr5",
      category: "bridge",
      difficulty: "intermediate",
      url: "/guides/layerzero-season-2",
    },
    {
      id: "relay-strategy",
      title: "Relay Strategy Guide",
      description: "Learn how to use Relay for cross-chain bridging and potential airdrop farming.",
      image: "/placeholder.svg?key=oxjul",
      category: "bridge",
      difficulty: "beginner",
      url: "/guides/relay-strategy",
    },
    {
      id: "wormhole",
      title: "Wormhole + Mayan Finance Guide",
      description: "Learn how to farm a potential second Wormhole airdrop and Mayan Finance token.",
      image: "/placeholder.svg?key=wormhole",
      category: "bridge",
      difficulty: "intermediate",
      url: "/guides/wormhole",
    },
    {
      id: "hyperlane",
      title: "Hyperlane Expansion Rewards Guide",
      description: "Learn how to farm Hyperlane's ongoing quarterly rewards with effective strategies.",
      image: "/placeholder-4nouz.png",
      category: "bridge",
      difficulty: "beginner",
      url: "/guides/hyperlane",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <Link href="/get-started" passHref>
          <Button variant="ghost" className="flex items-center gap-2 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Get Started
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mb-2">Bridge Guides</h1>
        <p className="text-muted-foreground">
          Learn how to use various cross-chain bridges and position yourself for potential airdrops.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  )
}
