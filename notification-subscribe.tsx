"use client"

import type React from "react"
import { useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { subscribeWithToken } from "@/app/actions/email-actions"

export function NotificationSubscribe() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Use the server action to subscribe with token generation
      const result = await subscribeWithToken(email, user?.id || null)

      if (!result.success) {
        toast({
          title: "Subscription failed",
          description: result.message || "There was an error subscribing. Please try again.",
          variant: "destructive",
        })
      } else {
        setShowSuccess(true)
        toast({
          title: "Subscription successful!",
          description: "You'll now receive notifications about new airdrop opportunities.",
        })
        setEmail("")
      }
    } catch (err) {
      console.error("Error in subscription process:", err)
      toast({
        title: "Subscription failed",
        description: "There was an unexpected error. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showSuccess) {
    return (
      <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-xl p-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-500/20 p-3 rounded-full">
              <Bell className="h-6 w-6 text-green-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">You're Subscribed!</h2>
          <p className="text-slate-300 mb-6">
            Thanks for subscribing to LayerLeap notifications. You'll now receive updates about new airdrop
            opportunities, guide updates, and tips directly to your inbox.
          </p>
          <div className="bg-slate-800/50 p-4 rounded-lg mb-6 max-w-md mx-auto">
            <p className="text-sm text-slate-300">
              <span className="font-semibold">Note:</span> In the current development version, emails are logged to the
              console instead of being sent. The subscription is still saved in the database.
            </p>
          </div>
          <Button onClick={() => setShowSuccess(false)} className="bg-blue-600 hover:bg-blue-700">
            Subscribe another email
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-xl p-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-500/20 p-3 rounded-full">
            <Bell className="h-6 w-6 text-blue-400" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4">Stay Updated on Airdrop Opportunities</h2>
        <p className="text-slate-300 mb-6">
          Subscribe to our notification service to receive the latest airdrop farming opportunities, guides, and tips
          directly to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 flex-grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <p className="text-xs text-slate-400 mt-4">
          By subscribing, you agree to receive notifications about new airdrop opportunities. You can unsubscribe at any
          time.
        </p>
      </div>
    </div>
  )
}
