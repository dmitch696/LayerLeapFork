"use server"

import { createServerClient } from "@/lib/supabase"
import { v4 as uuidv4 } from "uuid"
import { sendWelcomeEmail } from "@/lib/email-service"

// Generate a unique unsubscribe token
export async function generateUnsubscribeToken(email: string) {
  const supabase = createServerClient()
  const token = uuidv4()

  const { error } = await supabase.from("email_subscriptions").update({ unsubscribe_token: token }).eq("email", email)

  if (error) {
    console.error("Error generating unsubscribe token:", error)
    return null
  }

  return token
}

// Handle unsubscribe request
export async function unsubscribeEmail(token: string) {
  const supabase = createServerClient()

  // First, find the subscription with this token
  const { data, error: findError } = await supabase
    .from("email_subscriptions")
    .select("email")
    .eq("unsubscribe_token", token)
    .single()

  if (findError || !data) {
    console.error("Error finding subscription:", findError)
    return { success: false, message: "Invalid or expired unsubscribe link." }
  }

  // Delete the subscription
  const { error: deleteError } = await supabase.from("email_subscriptions").delete().eq("unsubscribe_token", token)

  if (deleteError) {
    console.error("Error deleting subscription:", deleteError)
    return { success: false, message: "Failed to unsubscribe. Please try again." }
  }

  return {
    success: true,
    message: "You have been successfully unsubscribed.",
    email: data.email,
  }
}

// Subscribe with token generation and welcome email
export async function subscribeWithToken(email: string, userId: string | null = null) {
  const supabase = createServerClient()
  const token = uuidv4()

  const { error } = await supabase.from("email_subscriptions").upsert(
    {
      email,
      user_id: userId,
      unsubscribe_token: token,
      updated_at: new Date().toISOString(),
    },
    {
      onConflict: "email",
      ignoreDuplicates: false,
    },
  )

  if (error) {
    console.error("Error subscribing:", error)
    return { success: false, message: error.message || "Subscription failed" }
  }

  // Generate the unsubscribe URL
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  const unsubscribeUrl = `${baseUrl}/unsubscribe?token=${token}`

  // Send welcome email (this will just log it for now)
  await sendWelcomeEmail(email, unsubscribeUrl)

  return {
    success: true,
    message: "Subscription successful",
    token,
  }
}
