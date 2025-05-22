import type React from "react"

interface EmailTemplateProps {
  firstName?: string
  unsubscribeUrl: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName = "there", unsubscribeUrl }) => (
  <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
    <div style={{ background: "#1e293b", color: "white", padding: "20px", borderRadius: "8px 8px 0 0" }}>
      <h1 style={{ margin: "0", fontSize: "24px" }}>LayerLeap</h1>
    </div>

    <div style={{ background: "#0f172a", color: "#e2e8f0", padding: "30px", borderRadius: "0 0 8px 8px" }}>
      <h2 style={{ fontSize: "20px", marginTop: "0" }}>New Airdrop Opportunity Alert</h2>

      <p>Hi {firstName},</p>

      <p>We've just added a new guide on farming the latest airdrop opportunity. Check it out on LayerLeap!</p>

      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <a
          href="https://layerleap.com/guides"
          style={{
            background: "#3b82f6",
            color: "white",
            padding: "12px 24px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          View New Guides
        </a>
      </div>

      <p>Happy airdrop farming!</p>
      <p>The LayerLeap Team</p>

      <hr style={{ border: "1px solid #2d3748", margin: "30px 0" }} />

      <p style={{ fontSize: "12px", color: "#94a3b8", textAlign: "center" }}>
        If you no longer wish to receive these emails, you can
        <a href={unsubscribeUrl} style={{ color: "#60a5fa", textDecoration: "underline", marginLeft: "5px" }}>
          unsubscribe here
        </a>
        .
      </p>
    </div>
  </div>
)
