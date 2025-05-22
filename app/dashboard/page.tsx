"use client"

import { Badge } from "@/components/ui/badge"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2, CheckCircle, Clock } from "lucide-react"

// Map of guide IDs to their display names and task counts
const guideInfo: Record<string, { name: string; taskCount: number }> = {
  ink: {
    name: "INK Protocol Guide",
    taskCount: 10, // Update this to match the actual number of tasks in the INK guide
  },
  soneium: {
    name: "Soneium Guide",
    taskCount: 8,
  },
  unichain: {
    name: "Unichain Guide",
    taskCount: 8,
  },
  "arbitrum-odyssey": {
    name: "Arbitrum Odyssey Guide",
    taskCount: 8,
  },
  "relay-strategy": {
    name: "Relay Strategy Guide",
    taskCount: 6,
  },
  "wallet-tracker": {
    name: "Wallet Tracker Guide",
    taskCount: 5,
  },
}

interface GuideProgress {
  guideId: string
  guideName: string
  totalTasks: number
  completedTasks: number
  lastUpdated: string
  isCompleted: boolean
}

export default function DashboardPage() {
  const { user, isLoading, supabase } = useAuth()
  const router = useRouter()
  const [inProgressGuides, setInProgressGuides] = useState<GuideProgress[]>([])
  const [completedGuides, setCompletedGuides] = useState<GuideProgress[]>([])
  const [isLoadingProgress, setIsLoadingProgress] = useState(true)
  const [stats, setStats] = useState({
    totalTasksCompleted: 0,
    totalGuidesStarted: 0,
    totalGuidesCompleted: 0,
    overallProgressPercentage: 0,
  })

  useEffect(() => {
    // If not loading and no user, redirect to sign in
    if (!isLoading && !user) {
      router.push("/auth/sign-in")
    }
  }, [user, isLoading, router])

  useEffect(() => {
    // Fetch real user progress data from Supabase
    const fetchProgress = async () => {
      if (!user || !supabase) return

      try {
        setIsLoadingProgress(true)
        console.log("Fetching progress data...")

        // Get all task progress for this user
        const { data: progressData, error } = await supabase.from("task_progress").select("*").eq("user_id", user.id)

        if (error) {
          console.error("Error fetching progress:", error)
          setIsLoadingProgress(false)
          return
        }

        console.log("Progress data:", progressData)

        // Group progress by guide
        const progressByGuide: Record<
          string,
          {
            completed: string[]
            lastUpdated: string
          }
        > = {}

        // Process the raw progress data
        progressData?.forEach((item) => {
          if (!progressByGuide[item.guide_id]) {
            progressByGuide[item.guide_id] = {
              completed: [],
              lastUpdated: item.updated_at,
            }
          }

          // If completed, add to completed tasks
          if (item.completed) {
            progressByGuide[item.guide_id].completed.push(item.task_id)
          }

          // Update last updated time if this is more recent
          if (new Date(item.updated_at) > new Date(progressByGuide[item.guide_id].lastUpdated)) {
            progressByGuide[item.guide_id].lastUpdated = item.updated_at
          }
        })

        console.log("Progress by guide:", progressByGuide)

        // Convert to our GuideProgress format
        const allGuideProgress: GuideProgress[] = Object.entries(progressByGuide).map(([guideId, data]) => {
          const info = guideInfo[guideId] || { name: guideId, taskCount: data.completed.length }
          const completedCount = data.completed.length
          const isCompleted = completedCount >= info.taskCount

          return {
            guideId,
            guideName: info.name,
            totalTasks: info.taskCount,
            completedTasks: completedCount,
            lastUpdated: data.lastUpdated,
            isCompleted,
          }
        })

        console.log("All guide progress:", allGuideProgress)

        // Separate in-progress and completed guides
        const inProgress: GuideProgress[] = []
        const completed: GuideProgress[] = []

        allGuideProgress.forEach((guide) => {
          if (guide.isCompleted) {
            completed.push(guide)
          } else {
            inProgress.push(guide)
          }
        })

        // Sort by last updated
        inProgress.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
        completed.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())

        // Calculate overall stats
        const totalTasksCompleted = allGuideProgress.reduce((sum, guide) => sum + guide.completedTasks, 0)
        const totalGuidesStarted = allGuideProgress.length
        const totalGuidesCompleted = completed.length

        const totalPossibleTasks = allGuideProgress.reduce((sum, guide) => sum + guide.totalTasks, 0)
        const overallProgressPercentage =
          totalPossibleTasks > 0 ? Math.round((totalTasksCompleted / totalPossibleTasks) * 100) : 0

        setInProgressGuides(inProgress)
        setCompletedGuides(completed)
        setStats({
          totalTasksCompleted,
          totalGuidesStarted,
          totalGuidesCompleted,
          overallProgressPercentage,
        })

        console.log("Dashboard state updated:", {
          inProgress,
          completed,
          stats: {
            totalTasksCompleted,
            totalGuidesStarted,
            totalGuidesCompleted,
            overallProgressPercentage,
          },
        })
      } catch (error) {
        console.error("Error processing progress data:", error)
      } finally {
        setIsLoadingProgress(false)
      }
    }

    if (user && supabase) {
      fetchProgress()
    }
  }, [user, supabase])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
      </div>
    )
  }

  if (!user) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Guides Started</CardTitle>
            <CardDescription>Total airdrop guides you've started</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalGuidesStarted}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Guides Completed</CardTitle>
            <CardDescription>Guides you've finished all tasks for</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalGuidesCompleted}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tasks Completed</CardTitle>
            <CardDescription>Total tasks you've finished</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalTasksCompleted}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Overall Progress</CardTitle>
            <CardDescription>Your airdrop farming progress</CardDescription>
          </CardHeader>
          <CardContent>
            {stats.totalGuidesStarted > 0 ? (
              <>
                <Progress value={stats.overallProgressPercentage} className="h-2 mb-2" />
                <p className="text-sm text-slate-400">{stats.overallProgressPercentage}% complete</p>
              </>
            ) : (
              <p className="text-sm text-slate-400">No guides started yet</p>
            )}
          </CardContent>
        </Card>
      </div>

      {isLoadingProgress ? (
        <div className="flex items-center justify-center h-40">
          <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
        </div>
      ) : (
        <>
          {completedGuides.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Completed Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {completedGuides.map((guide) => (
                  <Card key={guide.guideId} className="border-green-500/20">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle>{guide.guideName}</CardTitle>
                        <Badge className="bg-green-600">Completed</Badge>
                      </div>
                      <CardDescription>
                        {guide.completedTasks} of {guide.totalTasks} tasks completed
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Progress value={100} className="h-2 mb-4 bg-slate-700" />
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-slate-400">
                          Completed on: {new Date(guide.lastUpdated).toLocaleDateString()}
                        </p>
                        <Link href={`/guides/${guide.guideId}`}>
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            View Guide
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {inProgressGuides.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-500" />
                In Progress
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inProgressGuides.map((guide) => (
                  <Card key={guide.guideId}>
                    <CardHeader className="pb-2">
                      <CardTitle>{guide.guideName}</CardTitle>
                      <CardDescription>
                        {guide.completedTasks} of {guide.totalTasks} tasks completed
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Progress
                        value={(guide.completedTasks / guide.totalTasks) * 100}
                        className="h-2 mb-4 bg-slate-700"
                      />
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-slate-400">
                          Last updated: {new Date(guide.lastUpdated).toLocaleDateString()}
                        </p>
                        <Link href={`/guides/${guide.guideId}`}>
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            Continue
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : stats.totalGuidesStarted === 0 ? (
            <Card>
              <CardContent className="py-6">
                <div className="text-center">
                  <p className="text-slate-400 mb-4">You haven't started any guides yet.</p>
                  <Link href="/guides">
                    <Button>Browse Guides</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : null}
        </>
      )}
    </div>
  )
}
