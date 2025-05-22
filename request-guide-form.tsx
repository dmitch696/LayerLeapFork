"use client"

import type React from "react"

import { useState } from "react"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

interface RequestGuideFormProps {
  title?: string
  description?: string
}

export function RequestGuideForm({
  title = "Request a Guide",
  description = "Is there a specific project or blockchain you'd like us to create a guide for? Let us know!",
}: RequestGuideFormProps) {
  const [projectName, setProjectName] = useState("")
  const [reason, setReason] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real app, this would send data to a backend or form service
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Request submitted!",
        description: "Thanks for your suggestion. We'll review it and get back to you soon.",
      })
      setProjectName("")
      setReason("")
      setEmail("")
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-xl p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-500/20 p-3 rounded-full">
            <FileText className="h-6 w-6 text-blue-400" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-slate-300 mb-6 text-center">{description}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="projectName" className="block text-sm font-medium text-slate-300 mb-1">
              Project/Blockchain Name*
            </label>
            <Input
              id="projectName"
              placeholder="e.g., Arbitrum, LayerZero, zkSync"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="bg-slate-700 border-slate-600"
              required
            />
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-slate-300 mb-1">
              Why are you interested in this guide?*
            </label>
            <Textarea
              id="reason"
              placeholder="Tell us why you think this would be valuable..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="bg-slate-700 border-slate-600 min-h-[100px]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
              Email (Optional)
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-700 border-slate-600"
            />
            <p className="text-xs text-slate-400 mt-1">We'll notify you when we publish this guide.</p>
          </div>
          <div className="pt-2">
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
