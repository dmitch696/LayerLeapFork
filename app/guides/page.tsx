"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { GuideCard } from "@/components/guide-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RequestGuideForm } from "@/components/request-guide-form"

// Guide data - in a real app, this would come from a database or API
const guides = [
  {
    id: "soneium",
    title: "Soneium Protocol",
    description:
      "Learn how to participate in Soneium's ecosystem, from liquidity provision to governance, and position yourself for potential token distributions.",
    category: "mainnet",
    difficulty: "intermediate",
    estimatedTime: "12 min read",
    tags: ["L2", "DeFi", "Governance"],
    date: "2023-05-15",
  },
  {
    id: "unichain",
    title: "Unichain Network",
    description:
      "Discover how to effectively interact with Unichain's mainnet features to maximize your chances of qualifying for their anticipated airdrop.",
    category: "mainnet",
    difficulty: "intermediate",
    estimatedTime: "10 min read",
    tags: ["L2", "Interoperability"],
    date: "2023-05-22",
  },
  {
    id: "ink",
    title: "Ink Protocol",
    description:
      "Step-by-step instructions on how to engage with Ink Protocol's key features and establish a meaningful on-chain presence before token launch.",
    category: "mainnet",
    difficulty: "intermediate",
    estimatedTime: "8 min read",
    tags: ["L2", "Smart Contracts"],
    date: "2023-05-20",
  },
  {
    id: "layerzero-bridging",
    title: "LayerZero Bridging",
    description:
      "Learn how to use LayerZero bridges effectively to maximize your chances of qualifying for an airdrop.",
    category: "bridge",
    difficulty: "intermediate",
    estimatedTime: "1-2 hours",
    tags: ["Bridge", "Cross-chain"],
    date: "2023-05-18",
  },
  {
    id: "relay-strategy",
    title: "Relay.link Strategy",
    description: "Optimize your cross-chain activity using Relay.link to position for potential token rewards.",
    category: "bridge",
    difficulty: "intermediate",
    estimatedTime: "1 hour",
    tags: ["Bridge", "Cross-chain"],
    date: "2023-05-25",
  },
  {
    id: "hop-protocol",
    title: "Hop Protocol",
    description:
      "Utilize Hop Protocol for cross-chain transfers and liquidity provision to qualify for potential airdrops.",
    category: "bridge",
    difficulty: "intermediate",
    estimatedTime: "1 hour",
    tags: ["Bridge", "Cross-chain", "Liquidity"],
    date: "2023-05-10",
  },
  {
    id: "wallet-tracker",
    title: "Wallet Tracker Setup",
    description:
      "Set up tools to track your on-chain activity and potential airdrop eligibility across multiple wallets.",
    category: "tool",
    difficulty: "beginner",
    estimatedTime: "30 minutes",
    tags: ["Tools", "Tracking"],
    date: "2023-05-28",
  },
  {
    id: "sybil-avoidance",
    title: "Advanced Sybil Avoidance",
    description:
      "Learn sophisticated techniques to ensure your airdrop farming activities don't trigger Sybil detection.",
    category: "tool",
    difficulty: "advanced",
    estimatedTime: "1 hour",
    tags: ["Security", "Best Practices"],
    date: "2023-05-05",
  },
]

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("newest")
  const [filteredGuides, setFilteredGuides] = useState(guides)

  // Extract all unique tags from guides
  const allTags = Array.from(new Set(guides.flatMap((guide) => guide.tags)))

  // Apply filters and search
  useEffect(() => {
    let result = [...guides]

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (guide) =>
          guide.title.toLowerCase().includes(query) ||
          guide.description.toLowerCase().includes(query) ||
          guide.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply category filter
    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter((guide) => guide.category === selectedCategory)
    }

    // Apply difficulty filter
    if (selectedDifficulty && selectedDifficulty !== "all") {
      result = result.filter((guide) => guide.difficulty === selectedDifficulty)
    }

    // Apply tag filter
    if (selectedTag && selectedTag !== "all") {
      result = result.filter((guide) => guide.tags.includes(selectedTag))
    }

    // Apply sorting
    if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortBy === "oldest") {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }

    setFilteredGuides(result)
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedTag, sortBy])

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory(null)
    setSelectedDifficulty(null)
    setSelectedTag(null)
    setSortBy("newest")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" passHref>
            <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/tools" passHref>
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                View Tools
              </Button>
            </Link>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Airdrop Guides</h1>
        <p className="text-xl text-slate-300 mb-8">Browse our comprehensive collection of airdrop farming guides</p>

        {/* Search and Filter Bar */}
        <div className="bg-slate-800 p-4 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input
                type="text"
                placeholder="Search guides..."
                className="pl-10 bg-slate-700 border-slate-600 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select
                value={selectedCategory || "all"}
                onValueChange={(value) => setSelectedCategory(value === "all" ? null : value)}
              >
                <SelectTrigger className="w-[150px] bg-slate-700 border-slate-600">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="mainnet">Mainnet</SelectItem>
                  <SelectItem value="testnet">Testnet</SelectItem>
                  <SelectItem value="bridge">Bridge</SelectItem>
                  <SelectItem value="tool">Tool</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={selectedDifficulty || "all"}
                onValueChange={(value) => setSelectedDifficulty(value === "all" ? null : value)}
              >
                <SelectTrigger className="w-[150px] bg-slate-700 border-slate-600">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={selectedTag || "all"}
                onValueChange={(value) => setSelectedTag(value === "all" ? null : value)}
              >
                <SelectTrigger className="w-[150px] bg-slate-700 border-slate-600">
                  <SelectValue placeholder="Tag" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="all">All Tags</SelectItem>
                  {allTags.map((tag) => (
                    <SelectItem key={tag} value={tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger className="w-[150px] bg-slate-700 border-slate-600">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active filters */}
          {(selectedCategory || selectedDifficulty || selectedTag || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-slate-400">Active filters:</span>
              {selectedCategory && (
                <Badge
                  className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 cursor-pointer"
                  onClick={() => setSelectedCategory(null)}
                >
                  Category: {selectedCategory} <X className="ml-1 h-3 w-3" />
                </Badge>
              )}
              {selectedDifficulty && (
                <Badge
                  className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 cursor-pointer"
                  onClick={() => setSelectedDifficulty(null)}
                >
                  Difficulty: {selectedDifficulty} <X className="ml-1 h-3 w-3" />
                </Badge>
              )}
              {selectedTag && (
                <Badge
                  className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 cursor-pointer"
                  onClick={() => setSelectedTag(null)}
                >
                  Tag: {selectedTag} <X className="ml-1 h-3 w-3" />
                </Badge>
              )}
              {searchQuery && (
                <Badge
                  className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 cursor-pointer"
                  onClick={() => setSearchQuery("")}
                >
                  Search: {searchQuery} <X className="ml-1 h-3 w-3" />
                </Badge>
              )}
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white" onClick={resetFilters}>
                Clear all
              </Button>
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => (
              <div key={guide.id} className="flex flex-col h-full">
                <GuideCard
                  title={guide.title}
                  description={guide.description}
                  category={guide.category as any}
                  difficulty={guide.difficulty as any}
                  estimatedTime={guide.estimatedTime}
                  link={`/guides/${guide.id}`}
                />
                <div className="mt-2 flex flex-wrap gap-1">
                  {guide.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-slate-700 hover:bg-slate-600 cursor-pointer"
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-800 rounded-lg border border-slate-700">
            <div className="text-slate-400 mb-2">No guides found matching your criteria</div>
            <Button variant="outline" onClick={resetFilters}>
              Clear filters
            </Button>
          </div>
        )}

        {/* Request a Guide Form */}
        <div className="mt-16">
          <RequestGuideForm />
        </div>
      </main>

      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2023 LayerLeap. All rights reserved.</p>
          <p className="mt-2">Disclaimer: Airdrop farming carries risks. Always do your own research.</p>
        </div>
      </footer>
    </div>
  )
}
