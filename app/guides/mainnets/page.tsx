import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GuideCard } from "@/components/guide-card"

export default function MainnetsPage() {
  const guides = [
    {
      title: "VRA Staking Airdrops",
      description: "How to stake VRA and farm upcoming airdrops (POV, MAIV & more)",
      image: "/images/vra-logo.png",
      link: "/guides/vra-staking",
      tags: ["New", "Hot"],
    },
    {
      title: "Lens Protocol",
      description: "Complete guide to farming the Lens Protocol mainnet for potential airdrop rewards",
      image: "/images/lens-logo-official.png",
      link: "/guides/lens",
      tags: ["Popular"],
    },
    {
      title: "Soneium",
      description: "Complete guide to farming the Soneium mainnet for potential airdrop rewards",
      image: "/images/soneium-logo.png",
      link: "/guides/soneium",
      tags: ["Popular"],
    },
    {
      title: "Unichain",
      description: "Complete guide to farming the Unichain mainnet for potential airdrop rewards",
      image: "/images/unichain-logo.png",
      link: "/guides/unichain",
      tags: ["Popular"],
    },
    {
      title: "Ink Protocol",
      description: "Complete guide to farming the Ink Protocol mainnet for potential airdrop rewards",
      image: "/images/ink-logo.png",
      link: "/guides/ink",
      tags: ["New"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Mainnet Guides</h1>
        <Link href="/guides" passHref>
          <Button variant="outline" className="flex items-center gap-2">
            All Guides
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <GuideCard
            key={guide.title}
            title={guide.title}
            description={guide.description}
            image={guide.image}
            link={guide.link}
            tags={guide.tags}
          />
        ))}
      </div>
    </div>
  )
}
