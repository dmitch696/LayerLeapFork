export function NotificationPreview({
  subject = "New Airdrop Opportunity: LayerZero Season 3",
  recipientEmail = "user@example.com",
  unsubscribeUrl = "#",
}) {
  return (
    <div className="border border-slate-700 rounded-lg p-6 max-w-2xl mx-auto bg-slate-900">
      <div className="mb-4 pb-4 border-b border-slate-700">
        <div className="text-sm text-slate-400 mb-1">From: notifications@layerleap.com</div>
        <div className="text-sm text-slate-400 mb-1">To: {recipientEmail}</div>
        <div className="text-sm text-slate-400 mb-1">Subject: {subject}</div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h1 style={{ color: "#3b82f6" }}>{subject}</h1>

        <p>Hey there!</p>

        <p>We've just spotted a new airdrop opportunity you might be interested in:</p>

        <div className="bg-slate-800 p-4 rounded-md my-4">
          <h3>LayerZero Season 3 is Live!</h3>
          <p>LayerZero has announced their Season 3 campaign with potential airdrop rewards for participants.</p>
          <ul>
            <li>Bridge assets across multiple chains</li>
            <li>Use LayerZero-powered applications</li>
            <li>Complete quests on their official campaign page</li>
          </ul>
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Read our complete guide →
          </a>
        </div>

        <p>Happy airdrop farming!</p>

        <p>The LayerLeap Team</p>

        <hr style={{ borderColor: "#374151", margin: "20px 0" }} />

        <p style={{ fontSize: "12px", color: "#6b7280" }}>
          You're receiving this email because you subscribed to LayerLeap notifications.
          <a href={unsubscribeUrl} style={{ color: "#3b82f6", marginLeft: "5px" }}>
            Unsubscribe here
          </a>
        </p>
      </div>
    </div>
  )
}
