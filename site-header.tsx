"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { User, LogOut, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { User as SupabaseUser } from "@supabase/supabase-js"

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClientComponentClient()

  // Handle authentication directly in this component
  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true)
        const { data } = await supabase.auth.getUser()
        setUser(data.user)
      } catch (error) {
        console.error("Error fetching user:", error)
      } finally {
        setIsLoading(false)
      }
    }

    getUser()

    // Set up auth state change listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        setUser(session.user)
      } else if (event === "SIGNED_OUT") {
        setUser(null)
      }
    })

    // Clean up listener on unmount
    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  // Sign out function
  const signOut = async () => {
    try {
      await supabase.auth.signOut()
      // No need to setUser(null) here as the onAuthStateChange listener will handle it
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/images/logo.png" alt="LayerLeap Logo" className="h-8 w-auto mr-2" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex ml-6 space-x-4">
              <Link
                href="/guides"
                className={`text-sm ${pathname?.startsWith("/guides") ? "text-white font-medium" : "text-slate-400 hover:text-white"}`}
              >
                Guides
              </Link>
              <Link
                href="/waitlists"
                className={`text-sm ${pathname?.startsWith("/waitlists") ? "text-white font-medium" : "text-slate-400 hover:text-white"}`}
              >
                Waitlists
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isLoading ? (
              <div className="animate-pulse h-8 w-20 bg-slate-800 rounded"></div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="flex items-center text-sm text-slate-400 hover:text-white">
                  <User className="h-4 w-4 mr-1" />
                  {user.email?.split("@")[0]}
                </Link>
                <Button variant="ghost" size="sm" onClick={() => signOut()} className="text-slate-400 hover:text-white">
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link href="/auth/sign-in">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/sign-up">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 pb-4">
          <div className="pt-2 border-t border-slate-800 px-4">
            {/* Mobile Navigation Links */}
            <nav className="py-2">
              <Link
                href="/guides"
                className={`block py-2 text-sm ${pathname?.startsWith("/guides") ? "text-white font-medium" : "text-slate-400"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Guides
              </Link>
              <Link
                href="/waitlists"
                className={`block py-2 text-sm ${pathname?.startsWith("/waitlists") ? "text-white font-medium" : "text-slate-400"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Waitlists
              </Link>
            </nav>

            {isLoading ? (
              <div className="animate-pulse h-8 w-full bg-slate-800 rounded"></div>
            ) : user ? (
              <div className="space-y-2">
                <Link
                  href="/dashboard"
                  className="flex items-center text-sm text-slate-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    signOut()
                    setMobileMenuOpen(false)
                  }}
                  className="text-slate-400 w-full justify-start"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link href="/auth/sign-in" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/sign-up" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
