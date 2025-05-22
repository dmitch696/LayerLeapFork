import { NotificationPreview } from "@/components/notification-preview"

export default function EmailPreviewPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Email Preview</h1>

      <div className="bg-slate-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">About This Page</h2>
        <p>
          This page shows a preview of how notification emails would look when sent to subscribers. Currently, emails
          are only logged to the console instead of being sent.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Notification Email Preview</h2>
        <NotificationPreview
          subject="New Airdrop Opportunity: LayerZero Season 3"
          recipientEmail="user@example.com"
          unsubscribeUrl="/unsubscribe?token=example-token"
        />
      </div>
    </div>
  )
}
