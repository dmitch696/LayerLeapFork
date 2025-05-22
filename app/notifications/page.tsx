"use client"

import Link from "next/link"
import { ArrowLeft, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NotificationPreferences } from "@/components/notification-preferences"

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" passHref>
              <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white p-0 mr-4">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <Award className="h-8 w-8 text-purple-500" />
            <h1 className="text-2xl font-bold">LayerLeap</h1>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">My Account</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Notification Settings</h1>
            <p className="text-slate-300">Manage how you receive updates about airdrop opportunities</p>
          </div>

          <div className="space-y-8">
            <NotificationPreferences />

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Email Subscription</CardTitle>
                <CardDescription>Update your email address for notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-md bg-slate-700 border border-slate-600 flex-grow"
                    defaultValue="user@example.com"
                  />
                  <Button className="bg-purple-600 hover:bg-purple-700">Update Email</Button>
                </div>
                <div className="text-sm text-slate-400">
                  You can unsubscribe from email notifications at any time by clicking the unsubscribe link in any
                  email.
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Browser Notifications</CardTitle>
                <CardDescription>Enable or disable browser push notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Browser Notifications Status</h3>
                      <p className="text-sm text-slate-400">Notifications are currently enabled for this browser</p>
                    </div>
                    <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10">
                      Disable
                    </Button>
                  </div>
                  <p className="text-sm text-slate-400">
                    Browser notifications allow you to receive alerts about new airdrops and updates even when you're
                    not on the LayerLeap website.
                  </p>
                </div>
                <div className="text-sm text-slate-400">
                  Note: You may need to allow notifications in your browser settings for this feature to work properly.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
