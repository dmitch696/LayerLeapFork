"use client"

import { useState } from "react"
import { Bell, Mail, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NotificationPreferences() {
  const [emailNotifications, setEmailNotifications] = useState({
    newAirdrops: true,
    deadlineReminders: true,
    guideUpdates: true,
    weeklyDigest: false,
  })

  const [browserNotifications, setBrowserNotifications] = useState({
    newAirdrops: true,
    deadlineReminders: true,
    guideUpdates: false,
    loginAlerts: true,
  })

  const [pushNotifications, setPushNotifications] = useState({
    newAirdrops: false,
    deadlineReminders: false,
    guideUpdates: false,
    loginAlerts: false,
  })

  const handleEmailChange = (key: keyof typeof emailNotifications) => {
    setEmailNotifications({
      ...emailNotifications,
      [key]: !emailNotifications[key],
    })
  }

  const handleBrowserChange = (key: keyof typeof browserNotifications) => {
    setBrowserNotifications({
      ...browserNotifications,
      [key]: !browserNotifications[key],
    })
  }

  const handlePushChange = (key: keyof typeof pushNotifications) => {
    setPushNotifications({
      ...pushNotifications,
      [key]: !pushNotifications[key],
    })
  }

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-purple-500" />
          Notification Preferences
        </CardTitle>
        <CardDescription>Customize how and when you receive notifications about airdrop opportunities</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="email">
          <TabsList className="bg-slate-700 mb-4">
            <TabsTrigger value="email" className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              Email
            </TabsTrigger>
            <TabsTrigger value="browser" className="flex items-center gap-1">
              <Bell className="h-4 w-4" />
              Browser
            </TabsTrigger>
            <TabsTrigger value="push" className="flex items-center gap-1">
              <Smartphone className="h-4 w-4" />
              Push
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-new-airdrops">New Airdrop Opportunities</Label>
                  <p className="text-sm text-slate-400">
                    Receive notifications when new airdrop opportunities are added
                  </p>
                </div>
                <Switch
                  id="email-new-airdrops"
                  checked={emailNotifications.newAirdrops}
                  onCheckedChange={() => handleEmailChange("newAirdrops")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-deadline-reminders">Deadline Reminders</Label>
                  <p className="text-sm text-slate-400">Get reminded when airdrop deadlines are approaching</p>
                </div>
                <Switch
                  id="email-deadline-reminders"
                  checked={emailNotifications.deadlineReminders}
                  onCheckedChange={() => handleEmailChange("deadlineReminders")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-guide-updates">Guide Updates</Label>
                  <p className="text-sm text-slate-400">Be notified when guides are updated with new information</p>
                </div>
                <Switch
                  id="email-guide-updates"
                  checked={emailNotifications.guideUpdates}
                  onCheckedChange={() => handleEmailChange("guideUpdates")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-weekly-digest">Weekly Digest</Label>
                  <p className="text-sm text-slate-400">
                    Receive a weekly summary of airdrop opportunities and updates
                  </p>
                </div>
                <Switch
                  id="email-weekly-digest"
                  checked={emailNotifications.weeklyDigest}
                  onCheckedChange={() => handleEmailChange("weeklyDigest")}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="browser" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="browser-new-airdrops">New Airdrop Opportunities</Label>
                  <p className="text-sm text-slate-400">
                    Receive browser notifications when new airdrop opportunities are added
                  </p>
                </div>
                <Switch
                  id="browser-new-airdrops"
                  checked={browserNotifications.newAirdrops}
                  onCheckedChange={() => handleBrowserChange("newAirdrops")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="browser-deadline-reminders">Deadline Reminders</Label>
                  <p className="text-sm text-slate-400">Get browser alerts when airdrop deadlines are approaching</p>
                </div>
                <Switch
                  id="browser-deadline-reminders"
                  checked={browserNotifications.deadlineReminders}
                  onCheckedChange={() => handleBrowserChange("deadlineReminders")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="browser-guide-updates">Guide Updates</Label>
                  <p className="text-sm text-slate-400">
                    Be notified in browser when guides are updated with new information
                  </p>
                </div>
                <Switch
                  id="browser-guide-updates"
                  checked={browserNotifications.guideUpdates}
                  onCheckedChange={() => handleBrowserChange("guideUpdates")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="browser-login-alerts">Login Alerts</Label>
                  <p className="text-sm text-slate-400">Receive notifications when your account is logged in</p>
                </div>
                <Switch
                  id="browser-login-alerts"
                  checked={browserNotifications.loginAlerts}
                  onCheckedChange={() => handleBrowserChange("loginAlerts")}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="push" className="space-y-4">
            <div className="p-4 bg-slate-700 rounded-lg mb-4">
              <p className="text-sm">
                Push notifications are currently in beta. Enable browser notifications to receive alerts on your
                desktop.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-new-airdrops">New Airdrop Opportunities</Label>
                  <p className="text-sm text-slate-400">
                    Receive push notifications when new airdrop opportunities are added
                  </p>
                </div>
                <Switch
                  id="push-new-airdrops"
                  checked={pushNotifications.newAirdrops}
                  onCheckedChange={() => handlePushChange("newAirdrops")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-deadline-reminders">Deadline Reminders</Label>
                  <p className="text-sm text-slate-400">Get push alerts when airdrop deadlines are approaching</p>
                </div>
                <Switch
                  id="push-deadline-reminders"
                  checked={pushNotifications.deadlineReminders}
                  onCheckedChange={() => handlePushChange("deadlineReminders")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-guide-updates">Guide Updates</Label>
                  <p className="text-sm text-slate-400">
                    Be notified via push when guides are updated with new information
                  </p>
                </div>
                <Switch
                  id="push-guide-updates"
                  checked={pushNotifications.guideUpdates}
                  onCheckedChange={() => handlePushChange("guideUpdates")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-login-alerts">Login Alerts</Label>
                  <p className="text-sm text-slate-400">Receive push notifications when your account is logged in</p>
                </div>
                <Switch
                  id="push-login-alerts"
                  checked={pushNotifications.loginAlerts}
                  onCheckedChange={() => handlePushChange("loginAlerts")}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-purple-600 hover:bg-purple-700">Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}
