"use client"

import { useState, useEffect } from "react"
import { CheckCircle2, Circle, RotateCcw, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ChecklistItem {
  id: string
  category: string
  title: string
  description?: string
}

export interface ChecklistCategory {
  name: string
  items: ChecklistItem[]
  color: string
}

interface SybilChecklistProps {
  categories: ChecklistCategory[]
}

export function SybilChecklist({ categories }: SybilChecklistProps) {
  const [completedItems, setCompletedItems] = useState<string[]>([])
  const [expanded, setExpanded] = useState<string[]>(categories.map((cat) => cat.name))

  // Calculate total items and completed items
  const totalItems = categories.reduce((acc, category) => acc + category.items.length, 0)
  const completionPercentage = totalItems > 0 ? Math.round((completedItems.length / totalItems) * 100) : 0

  // Load saved progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem("sybil-checklist-progress")
    if (savedProgress) {
      try {
        setCompletedItems(JSON.parse(savedProgress))
      } catch (e) {
        console.error("Error parsing saved progress:", e)
      }
    }
  }, [])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("sybil-checklist-progress", JSON.stringify(completedItems))
  }, [completedItems])

  // Toggle item completion
  const toggleItem = (itemId: string) => {
    setCompletedItems((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId)
      } else {
        return [...prev, itemId]
      }
    })
  }

  // Reset all progress
  const resetProgress = () => {
    setCompletedItems([])
  }

  // Toggle category expansion
  const toggleCategory = (categoryName: string) => {
    setExpanded((prev) => {
      if (prev.includes(categoryName)) {
        return prev.filter((name) => name !== categoryName)
      } else {
        return [...prev, categoryName]
      }
    })
  }

  // Get completed items count for a category
  const getCategoryCompletedCount = (category: ChecklistCategory) => {
    return category.items.filter((item) => completedItems.includes(item.id)).length
  }

  return (
    <div className="space-y-6 rounded-xl bg-muted p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Sybil Avoidance Progress</h3>
        <Button variant="ghost" size="sm" onClick={resetProgress} className="h-8 gap-1 text-xs">
          <RotateCcw className="h-3 w-3" />
          Reset
        </Button>
      </div>

      {/* Overall progress */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-medium">Overall Progress</span>
            {completionPercentage === 100 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Trophy className="h-4 w-4 text-yellow-500" />
              </motion.div>
            )}
          </div>
          <span className="font-medium">{completionPercentage}%</span>
        </div>
        <Progress
          value={completionPercentage}
          className="h-2.5"
          indicatorClassName={cn(completionPercentage === 100 ? "bg-gradient-to-r from-green-500 to-emerald-500" : "")}
        />
      </div>

      <Separator />

      {/* Categories */}
      <div className="space-y-4">
        {categories.map((category) => {
          const categoryCompleted = getCategoryCompletedCount(category)
          const isExpanded = expanded.includes(category.name)

          return (
            <div key={category.name} className="space-y-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full`} style={{ backgroundColor: category.color }} />
                  <span className="font-medium">{category.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">
                    {categoryCompleted}/{category.items.length}
                  </span>
                  <svg
                    className={`h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <Progress
                value={(categoryCompleted / category.items.length) * 100}
                className="h-1.5"
                indicatorClassName={`bg-[${category.color}]`}
              />

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 space-y-1.5 pl-5"
                >
                  {category.items.map((item) => {
                    const isCompleted = completedItems.includes(item.id)

                    return (
                      <motion.div
                        key={item.id}
                        className={`flex items-start gap-2 rounded-md p-2 transition-colors ${
                          isCompleted ? "bg-green-500/10" : "hover:bg-accent"
                        }`}
                        onClick={() => toggleItem(item.id)}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="mt-0.5 cursor-pointer">
                          {isCompleted ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <p className={`font-medium ${isCompleted ? "text-green-600 dark:text-green-400" : ""}`}>
                            {item.title}
                          </p>
                          {item.description && (
                            <p
                              className={`text-xs text-muted-foreground ${isCompleted ? "line-through opacity-70" : ""}`}
                            >
                              {item.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              )}
            </div>
          )
        })}
      </div>

      {completionPercentage === 100 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 text-center"
        >
          <p className="font-medium text-green-700 dark:text-green-300">
            Congratulations! You've completed all sybil avoidance tasks.
          </p>
        </motion.div>
      )}
    </div>
  )
}
