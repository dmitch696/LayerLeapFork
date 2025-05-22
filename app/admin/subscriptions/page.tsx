"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { getSupabaseBrowserClient } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface Subscription {
  id: string
  email: string
  created_at: string
  user_id: string | null
}

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  // Simple admin check - in a real app, you'd use a more robust role system
  const isAdmin = user?.email === "admin@layerleap.com" // Replace with your admin email

  useEffect(() => {
    const fetchSubscriptions = async () => {
      if (!user || !isAdmin) return

      try {
        const supabase = getSupabaseBrowserClient()
        const { data, error } = await supabase
          .from("email_subscriptions")
          .select("*")
          .order("created_at", { ascending: false })

        if (error) throw error
        setSubscriptions(data || [])
      } catch (err) {
        console.error("Error fetching subscriptions:", err)
        toast({
          title: "Error",
          description: "Failed to load subscriptions",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchSubscriptions()
  }, [user, isAdmin])

  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Email,Created At\n" +
      subscriptions.map((sub) => `${sub.email},"${new Date(sub.created_at).toLocaleString()}"`).join("\n")

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "email_subscriptions.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!user) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-6">Please sign in to access this page</h1>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-6">Access denied</h1>
        <p>You don't have permission to view this page.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Email Subscriptions</h1>
        <Button onClick={handleExport} disabled={subscriptions.length === 0}>
          Export CSV
        </Button>
      </div>

      {loading ? (
        <p>Loading subscriptions...</p>
      ) : subscriptions.length === 0 ? (
        <p>No subscriptions found.</p>
      ) : (
        <div className="bg-slate-800 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-slate-700">
            <thead className="bg-slate-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  Subscribed On
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  User ID
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {subscriptions.map((subscription) => (
                <tr key={subscription.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">{subscription.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    {new Date(subscription.created_at).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    {subscription.user_id ? subscription.user_id.substring(0, 8) + "..." : "Not logged in"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
