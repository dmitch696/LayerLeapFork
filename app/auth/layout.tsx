import type React from "react"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}
