import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface GuideCardProps {
  guide?: {
    id: string
    title: string
    description: string
    category: string
    difficulty: string
    url: string
    image?: string
  }
  title?: string
  description?: string
  category?: string
  difficulty?: string
  link?: string
  image?: string
}

export function GuideCard(props: GuideCardProps) {
  // Handle both prop formats and provide defaults
  const guide = props.guide || null
  const title = guide?.title || props.title || "Guide"
  const description = guide?.description || props.description || "Guide description"
  const category = guide?.category || props.category || "guide"
  const difficulty = guide?.difficulty || props.difficulty || "beginner"
  const url = guide?.url || props.link || "#"
  const image = guide?.image || props.image

  return (
    <Link href={url} className="block">
      <div className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-colors duration-200 h-full flex flex-col">
        <div className="w-full h-48 overflow-hidden bg-slate-900">
          <img
            src={image || `/placeholder.svg?height=200&width=400&query=${encodeURIComponent(title)}`}
            alt={`${title} illustration`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex gap-2 mb-2">
            <Badge variant="outline" className="text-xs text-slate-300 border-slate-600">
              {category}
            </Badge>
            <Badge variant="outline" className="text-xs text-slate-300 border-slate-600">
              {difficulty}
            </Badge>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-slate-300 text-sm flex-grow">{description}</p>
        </div>
      </div>
    </Link>
  )
}
