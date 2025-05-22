import { createServerClient } from "@/lib/supabase"
import Link from "next/link"

export default async function NotificationsAdminPage() {
  const supabase = createServerClient()

  // Get all subscriptions
  const { data: subscriptions, error } = await supabase
    .from("email_subscriptions")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching subscriptions:", error)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Email Notification Management</h1>

      <div className="bg-slate-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">About This Feature</h2>
        <p className="mb-4">
          This is a simplified notification management system. Currently, emails are only logged to the console instead
          of being sent. To implement actual email sending, you'll need to integrate with an email service like
          SendGrid, Mailchimp, Amazon SES, or another provider.
        </p>
        <p>The unsubscribe functionality is fully implemented and working with the database.</p>
      </div>

      <div className="bg-slate-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Subscribers ({subscriptions?.length || 0})</h2>

        {subscriptions && subscriptions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-2 px-4">Email</th>
                  <th className="text-left py-2 px-4">Subscribed On</th>
                  <th className="text-left py-2 px-4">User ID</th>
                  <th className="text-left py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub) => (
                  <tr key={sub.id} className="border-b border-slate-700">
                    <td className="py-2 px-4">{sub.email}</td>
                    <td className="py-2 px-4">{new Date(sub.created_at).toLocaleString()}</td>
                    <td className="py-2 px-4">{sub.user_id || "Not logged in"}</td>
                    <td className="py-2 px-4">
                      <Link
                        href={`/unsubscribe?token=${sub.unsubscribe_token}`}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Unsubscribe
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No subscribers yet.</p>
        )}
      </div>

      <div className="bg-slate-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Integrate with an email service provider</li>
          <li>Create email templates for different notification types</li>
          <li>Add a form to send batch notifications</li>
          <li>Implement notification preferences</li>
        </ul>
      </div>
    </div>
  )
}
