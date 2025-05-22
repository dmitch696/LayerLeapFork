"use client"

import { useState, useEffect } from "react"
import { Check, Circle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

interface AirdropProgressProps {
  tasks: string[] | { id: string; title: string; description: string; completed: boolean }[]
  guideId: string
  airdropName?: string
}

export function AirdropProgress({ tasks, guideId, airdropName }: AirdropProgressProps) {
  const [completedTasks, setCompletedTasks] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Format tasks to ensure consistent structure
  const formattedTasks = Array.isArray(tasks)
    ? tasks.map((task, index) => {
        if (typeof task === "string") {
          return {
            id: `task-${index}`,
            title: task,
            description: "",
            completed: completedTasks.includes(index),
          }
        }
        return {
          ...task,
          completed: completedTasks.includes(index),
        }
      })
    : []

  // Calculate progress
  const progressPercentage =
    formattedTasks.length > 0 ? Math.round((completedTasks.length / formattedTasks.length) * 100) : 0

  const toggleTask = (index: number) => {
    let newCompletedTasks = [...completedTasks]

    if (newCompletedTasks.includes(index)) {
      newCompletedTasks = newCompletedTasks.filter((taskIndex) => taskIndex !== index)
    } else {
      newCompletedTasks.push(index)
    }

    setCompletedTasks(newCompletedTasks)

    // In a real app, we would save this to the database
    // For now, we'll just update the local state
    localStorage.setItem(`${guideId}-progress`, JSON.stringify(newCompletedTasks))
  }

  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(`${guideId}-progress`)
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress)
        if (Array.isArray(parsed)) {
          setCompletedTasks(parsed)
        }
      } catch (e) {
        console.error("Error parsing saved progress:", e)
      }
    }
    setIsLoading(false)
  }, [guideId])

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-4 bg-slate-700 rounded animate-pulse"></div>
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-8 bg-slate-700 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">
          {completedTasks.length} of {formattedTasks.length} tasks completed
        </span>
        <span className="text-sm font-medium">{progressPercentage}%</span>
      </div>

      <Progress value={progressPercentage} className="h-2" />

      <div className="space-y-2 mt-4">
        {formattedTasks.map((task, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`w-full justify-start text-left p-2 h-auto ${
              completedTasks.includes(index) ? "bg-green-900/20 hover:bg-green-900/30" : "hover:bg-slate-700"
            }`}
            onClick={() => toggleTask(index)}
          >
            <div className="flex items-start gap-2">
              <div className="mt-0.5">
                {completedTasks.includes(index) ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Circle className="h-4 w-4 text-slate-400" />
                )}
              </div>
              <span
                className={`text-sm ${completedTasks.includes(index) ? "line-through text-slate-400" : "text-slate-200"}`}
              >
                {typeof task === "string" ? task : task.title}
              </span>
            </div>
          </Button>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setCompletedTasks([])
            localStorage.removeItem(`${guideId}-progress`)
          }}
          className="text-xs"
        >
          Reset All
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const allIndices = formattedTasks.map((_, index) => index)
            setCompletedTasks(allIndices)
            localStorage.setItem(`${guideId}-progress`, JSON.stringify(allIndices))
          }}
          className="text-xs"
        >
          Complete All
        </Button>
      </div>
    </div>
  )
}
