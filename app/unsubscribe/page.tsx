"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { unsubscribeEmail } from "@/app/actions/email-actions"
import Link from "next/link"

export default function UnsubscribePage() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [status, setStatus] = useState<{
    loading: boolean
    success?: boolean
    message?: string
    email?: string
  }>({ loading: true })

  useEffect(() => {
    const processUnsubscribe = async () => {
      if (!token) {
        setStatus({
          loading: false,
          success: false,
          message: "Invalid unsubscribe link. No token provided.",
        })
        return
      }

      try {
        const result = await unsubscribeEmail(token)
        setStatus({
          loading: false,
          success: result.success,
          message: result.message,
          email: result.email,
        })
      } catch (error) {
        console.error("Error processing unsubscribe:", error)
        setStatus({
          loading: false,
          success: false,
          message: "An unexpected error occurred. Please try again.",
        })
      }
    }

    processUnsubscribe()
  }, [token])

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-md mx-auto bg-slate-800 rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Email Unsubscribe</h1>

        {status.loading ? (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4">Processing your unsubscribe request...</p>
          </div>
        ) : status.success ? (
          <div className="text-center py-4">
            <div className="bg-green-500/20 p-3 rounded-full inline-block mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Successfully Unsubscribed</h2>
            <p className="mb-4 text-slate-300">
              {status.email} will no longer receive notification emails from LayerLeap.
            </p>
            <p className="text-sm text-slate-400 mb-6">Changed your mind? You can always subscribe again later.</p>
            <Link href="/" className="text-primary hover:text-primary/80">
              Return to homepage
            </Link>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="bg-red-500/20 p-3 rounded-full inline-block mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Unsubscribe Failed</h2>
            <p className="mb-6 text-slate-300">{status.message}</p>
            <Link href="/" className="text-primary hover:text-primary/80">
              Return to homepage
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
