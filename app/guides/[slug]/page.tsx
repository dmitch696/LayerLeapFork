"use client"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AirdropProgress } from "@/components/airdrop-progress"

// This would normally come from a CMS or database
const guides = {
  "arbitrum-odyssey": {
    id: "arbitrum-odyssey",
    title: "Arbitrum Odyssey Guide",
    description: "Complete transactions on Arbitrum to potentially qualify for their next token distribution phase.",
    category: "mainnet",
    difficulty: "beginner",
    author: "Crypto Guide",
    date: "May 1, 2023",
    readTime: "10 min read",
    content: `
      # Arbitrum Odyssey Guide
      
      Arbitrum is a Layer 2 scaling solution for Ethereum that offers faster transactions and lower fees. The Arbitrum Odyssey program rewards users for participating in various activities on the network.
      
      ## What is Arbitrum?
      
      Arbitrum is an optimistic rollup solution that processes transactions off-chain and then posts the results to Ethereum, inheriting Ethereum's security while improving scalability.
      
      ## Why Farm Arbitrum?
      
      Arbitrum has already conducted one airdrop (ARB token) to early users, and there's speculation about potential future airdrops or rewards programs. By being active on the network now, you position yourself for possible future distributions.
      
      ## Step-by-Step Guide
      
      1. **Set up MetaMask for Arbitrum**
         - Add Arbitrum network to MetaMask
         - Bridge some ETH to Arbitrum (0.01-0.05 ETH is sufficient for multiple transactions)
      
      2. **Interact with Key Protocols**
         - Swap tokens on GMX, Uniswap, or SushiSwap
         - Provide liquidity to a pool (even a small amount)
         - Try lending platforms like Aave on Arbitrum
      
      3. **Use Arbitrum-Native Projects**
         - Interact with Arbitrum-native projects like GMX, Dopex, or Radiant
         - These projects might have their own token launches or reward early users
      
      4. **Maintain Regular Activity**
         - Make transactions at least once a month
         - Vary your activities rather than repeating the same transaction
      
      ## Recommended Protocols
      
      - **GMX**: Leading decentralized perpetual exchange on Arbitrum
      - **Camelot**: Arbitrum-native DEX with unique features
      - **Radiant Capital**: Lending protocol built specifically for Arbitrum
      - **Dopex**: Options trading protocol
      
      ## Cost Considerations
      
      Arbitrum has relatively low fees compared to Ethereum mainnet, but you should still budget approximately:
      
      - Bridge to Arbitrum: $2-5
      - Swaps: $0.50-2 each
      - Other interactions: $0.50-3 each
      
      A total budget of $20-30 should be sufficient for a comprehensive farming strategy.
      
      ## Risk Management
      
      - Start with small amounts to test each protocol
      - Be wary of new, unaudited protocols
      - Never invest more than you can afford to lose
      
      ## Tracking Your Activity
      
      Use [Arbiscan](https://arbiscan.io/) to monitor your on-chain activity and ensure your transactions are being recorded properly.
    `,
    tasks: [
      {
        id: "arb-task-1",
        title: "Set up MetaMask for Arbitrum",
        description: "Add Arbitrum network to MetaMask and bridge some ETH",
        completed: false,
      },
      {
        id: "arb-task-2",
        title: "Swap tokens on GMX",
        description: "Complete at least one token swap on GMX",
        completed: false,
      },
      {
        id: "arb-task-3",
        title: "Provide liquidity on Camelot",
        description: "Add liquidity to a pool on Camelot DEX",
        completed: false,
      },
      {
        id: "arb-task-4",
        title: "Try Radiant Capital lending",
        description: "Deposit funds or borrow from Radiant Capital",
        completed: false,
      },
      {
        id: "arb-task-5",
        title: "Interact with Dopex options",
        description: "Explore Dopex options trading platform",
        completed: false,
      },
      {
        id: "arb-task-6",
        title: "Bridge tokens to another network",
        description: "Use Arbitrum bridge to send tokens to another network",
        completed: false,
      },
      {
        id: "arb-task-7",
        title: "Use an NFT marketplace",
        description: "Explore NFT marketplaces on Arbitrum",
        completed: false,
      },
      {
        id: "arb-task-8",
        title: "Set up recurring transactions",
        description: "Plan for regular activity on the network",
        completed: false,
      },
    ],
  },
  "camp-network-testnet": {
    id: "camp-network-testnet",
    title: "🏕️ Camp Network Testnet Guide",
    description: "Farm the Camp Network testnet backed by $30M in funding - modernizing IP infrastructure for AI",
    category: "testnet",
    difficulty: "beginner",
    author: "LayerLeap Team",
    date: "May 29, 2025",
    readTime: "15-20 minutes",
    content: `
      # 🏕️ Camp Network Testnet Guide
      
      Camp Network is a next-gen Layer-1 blockchain built to modernize IP infrastructure and support future AI agents with verifiable intellectual property systems. With $30M in funding, this project has significant backing and potential for a valuable airdrop.
      
      ## What is Camp Network?
      
      Camp Network aims to revolutionize how intellectual property is managed on the blockchain, creating infrastructure specifically designed to support AI systems with verifiable IP. Their testnet provides an opportunity to engage early with this innovative platform.
      
      ## Step-by-Step Guide
      
      ### 🔧 Step 1: Join the Camp Loyalty Program
      
      Start by joining the official loyalty program:
      
      - Visit the loyalty hub: [https://loyalty.campnetwork.xyz/loyalty?referral_code=YA73272X](https://loyalty.campnetwork.xyz/loyalty?referral_code=YA73272X)
      - Connect your wallet (any EVM-compatible wallet like MetaMask)
      - Complete all available tasks (these may include following social accounts, inviting friends, engaging with content, etc.)
      
      ### 🎮 Step 2: Complete Camp Quests
      
      Next, engage with the testnet quest portal:
      
      - Visit the testnet quest portal: [http://campstaging.snag-render.com/home2](http://campstaging.snag-render.com/home2)
      - Connect your EVM wallet
      - Complete all listed quests (tasks vary but usually include interacting with testnet dApps, exploring the ecosystem, and more)
      
      ### 💧 Step 3: Get Testnet Tokens
      
      You'll need CAMP testnet tokens to perform actions:
      
      - Use the faucet here: [http://faucet.campnetwork.xyz](http://faucet.campnetwork.xyz)
      - Enter your EVM wallet address and receive test tokens instantly
      
      ### 🛠️ Step 4: Deploy a Smart Contract
      
      Show advanced engagement and stand out by deploying a contract:
      
      - Go to OnChain GM's contract deployment tool: [https://onchaingm.com?ref=0xd859E2EeD8e3E7F262a93738105731da737C445B](https://onchaingm.com?ref=0xd859E2EeD8e3E7F262a93738105731da737C445B)
      - Connect your wallet and select the Camp Network
      - Deploy a basic contract, do this daily or as often as you can!
      
      This step demonstrates higher-level interaction and could increase your airdrop eligibility.
      
      ## Maximizing Your Airdrop Potential
      
      - **Daily Engagement**: Return to the platform daily to show consistent activity
      - **Multiple Wallets**: Consider using different wallets to multiply your rewards (carefully manage these to avoid Sybil detection)
      - **Social Engagement**: Actively participate in the Camp Network community on Discord and Twitter
      - **Contract Deployment**: Deploy different types of contracts to show varied engagement
      - **Stay Updated**: Keep an eye out for new tasks and opportunities
      
      ## Final Tips
      
      By completing all the above steps, you're now actively participating in the Camp Network testnet—positioning yourself for a share of a potential future airdrop. Remember to check back regularly for new tasks and opportunities to engage with the platform.
    `,
    tasks: [
      {
        id: "camp-task-1",
        title: "Join the Camp Loyalty Program",
        description: "Visit the loyalty hub and connect your wallet",
        completed: false,
      },
      {
        id: "camp-task-2",
        title: "Complete social tasks",
        description: "Follow, like, and engage with Camp Network social accounts",
        completed: false,
      },
      {
        id: "camp-task-3",
        title: "Complete Camp Quests",
        description: "Visit the testnet quest portal and complete listed quests",
        completed: false,
      },
      {
        id: "camp-task-4",
        title: "Get testnet tokens",
        description: "Use the faucet to claim CAMP testnet tokens",
        completed: false,
      },
      {
        id: "camp-task-5",
        title: "Deploy a smart contract",
        description: "Use OnChain GM to deploy a contract on Camp Network",
        completed: false,
      },
      {
        id: "camp-task-6",
        title: "Engage daily",
        description: "Return to the platform daily for consistent activity",
        completed: false,
      },
      {
        id: "camp-task-7",
        title: "Set up multiple wallets",
        description: "Create additional wallets to multiply rewards",
        completed: false,
      },
    ],
  },
  "n1-testnet": {
    id: "n1-testnet",
    title: "🚜 N1Chain L1 Testnet Guide",
    description: "Complete the 01 Exchange testnet tasks to position yourself for a potential N1Chain airdrop",
    category: "testnet",
    difficulty: "beginner",
    author: "LayerLeap Team",
    date: "May 29, 2025",
    readTime: "15-20 minutes",
    content: `
      # 🚜 N1Chain L1 Testnet Guide
      
      Currently only 1 task available – follow all steps carefully to ensure eligibility.
      
      ## What is N1Chain?
      
      N1Chain is an emerging Layer 1 blockchain focused on scalability and interoperability. The testnet is currently running through the 01 Exchange platform, allowing users to test trading functionality.
      
      ## Step-by-Step Guide
      
      ### ✅ Step 1: Prepare Your Wallet
      
      Install Phantom Wallet (if you haven't already):
      - 👉 https://phantom.app/
      
      Open Phantom and enable Devnet mode:
      - Go to Settings > Developer Settings > Devnet
      
      Copy your Solana Devnet wallet address.
      
      ### 💧 Step 2: Get Devnet SOL (for gas)
      
      Go to the Solana faucet:
      - 👉 https://faucet.solana.com
      
      Log in with GitHub and request SOL:
      - You'll receive 5 SOL on Devnet
      
      ⚠️ Note: New GitHub accounts may face errors—use an older one if possible.
      
      ### 🧪 Step 3: Use 01 Exchange Testnet
      
      Visit:
      - 👉 https://01.xyz
      
      Access the Private Testnet:
      - Click "Private Testnet"
      - Password: 01relaunchTime
      
      Once inside:
      - Connect your Phantom wallet
      - Select "N Devnet" as the network
      - Click "Get 100 USDC" to fund your account
      
      ### 📈 Step 4: Complete the Perp DEX Task
      
      Now perform some trading actions:
      - Open a Long and Short position 
      - Try to execute a few buy/sell transactions to simulate trading behavior (10+ minimum)
      - Come back a few times a week if you have the time, try to be active at least 5-10 days total.
      
      💡 You don't need to be profitable—just show activity.
      
      ## 🏁 Done!
      
      You've now completed the only available task for the N1Chain testnet via 01 Exchange. Stay active and keep checking for future tasks to stay eligible for potential airdrops.
    `,
    tasks: [
      {
        id: "n1-task-1",
        title: "Install Phantom Wallet",
        description: "Download and set up the Phantom wallet",
        completed: false,
      },
      {
        id: "n1-task-2",
        title: "Enable Devnet mode",
        description: "Enable Devnet mode in Phantom wallet settings",
        completed: false,
      },
      {
        id: "n1-task-3",
        title: "Get Devnet SOL",
        description: "Use the Solana faucet to get Devnet SOL",
        completed: false,
      },
      {
        id: "n1-task-4",
        title: "Open Long position",
        description: "Open a Long position on 01 Exchange",
        completed: false,
      },
      {
        id: "n1-task-5",
        title: "Open Short position",
        description: "Open a Short position on 01 Exchange",
        completed: false,
      },
      {
        id: "n1-task-6",
        title: "Execute 10+ transactions",
        description: "Perform at least 10 buy/sell transactions",
        completed: false,
      },
      {
        id: "n1-task-7",
        title: "Maintain activity",
        description: "Return to the platform regularly over 5-10 days",
        completed: false,
      },
    ],
  },
  soneium: {
    id: "soneium",
    title: "Soneium Protocol Guide",
    description:
      "Learn how to participate in Soneium's ecosystem and position yourself for potential token distributions.",
    category: "mainnet",
    difficulty: "intermediate",
    author: "LayerLeap Team",
    date: "May 15, 2023",
    readTime: "12 min read",
    content: `
      # Soneium Protocol Guide
      
      Soneium is an innovative Layer 2 scaling solution that aims to provide fast, secure, and low-cost transactions for Ethereum users.
      
      ## What is Soneium?
      
      Soneium uses a unique approach to scaling that combines optimistic rollups with zero-knowledge proofs, offering the best of both worlds in terms of security and performance.
      
      ## Why Farm Soneium?
      
      While Soneium hasn't officially announced a token, many Layer 2 solutions eventually launch their own governance tokens and reward early users. By establishing a presence on Soneium now, you position yourself for potential future airdrops.
      
      ## Step-by-Step Guide
      
      1. **Set up Your Wallet for Soneium**
         - Add Soneium network to MetaMask
         - Bridge ETH to Soneium (0.01-0.05 ETH is sufficient)
      
      2. **Interact with Key Protocols**
         - Use Soneium's native DEX for token swaps
         - Provide liquidity to pools
         - Try out lending and borrowing platforms
      
      3. **Participate in Governance**
         - Join the Soneium DAO
         - Vote on proposals (even test proposals)
         - Provide feedback in community forums
      
      4. **Maintain Regular Activity**
         - Make transactions at least once a week
         - Vary your activities across different protocols
      
      ## Recommended Protocols
      
      - **SoneSwap**: Soneium's native decentralized exchange
      - **SoneLend**: Lending and borrowing platform
      - **SoneVault**: Yield aggregator for optimized returns
      
      ## Cost Considerations
      
      Soneium offers very low transaction fees:
      
      - Bridge to Soneium: $1-3
      - Swaps: $0.10-0.50 each
      - Other interactions: $0.10-1.00 each
      
      A budget of $10-20 should be sufficient for a comprehensive farming strategy.
      
      ## Risk Management
      
      - Start with small amounts
      - Diversify your activities
      - Stay updated with official announcements
      
      ## Tracking Your Activity
      
      Use Soneium's block explorer to monitor your on-chain activity and ensure your transactions are being recorded properly.
    `,
    tasks: [
      "Set up MetaMask for Soneium",
      "Bridge ETH to Soneium",
      "Swap tokens on SoneSwap",
      "Provide liquidity to a pool",
      "Try SoneLend for lending/borrowing",
      "Join the Soneium DAO",
      "Vote on at least one proposal",
      "Participate in community discussions",
      "Make at least 10 transactions",
      "Interact with at least 3 different protocols",
    ],
  },
  unichain: {
    id: "unichain",
    title: "Unichain Network Guide",
    description:
      "Discover how to effectively interact with Unichain's mainnet features to maximize your chances of qualifying for their anticipated airdrop.",
    category: "mainnet",
    difficulty: "intermediate",
    author: "LayerLeap Team",
    date: "May 22, 2023",
    readTime: "10 min read",
    content: `
      # Unichain Network Guide
      
      Unichain is a next-generation blockchain platform focused on interoperability and cross-chain communication.
      
      ## What is Unichain?
      
      Unichain uses a novel consensus mechanism that allows for seamless communication between different blockchain networks, enabling assets and data to flow freely across the ecosystem.
      
      ## Why Farm Unichain?
      
      Unichain has announced plans for a token launch in the future, with airdrops targeted at early adopters and active users. By establishing a presence now, you position yourself for these potential rewards.
      
      ## Step-by-Step Guide
      
      1. **Set up Your Wallet for Unichain**
         - Add Unichain network to MetaMask
         - Bridge assets to Unichain
      
      2. **Interact with Key Protocols**
         - Use Unichain's native DEX
         - Try cross-chain bridges
         - Explore DeFi applications
      
      3. **Participate in Ecosystem Development**
         - Test new features and provide feedback
         - Join the developer community
         - Contribute to documentation or tutorials
      
      4. **Maintain Regular Activity**
         - Make transactions regularly
         - Participate in community events
      
      ## Recommended Protocols
      
      - **UniBridge**: Cross-chain bridge for asset transfers
      - **UniSwap**: Unichain's native decentralized exchange
      - **UniLend**: Lending and borrowing platform
      
      ## Cost Considerations
      
      Unichain offers competitive transaction fees:
      
      - Bridge to Unichain: $2-4
      - Swaps: $0.20-0.80 each
      - Cross-chain transfers: $1-3 each
      
      A budget of $15-25 should be sufficient for a comprehensive farming strategy.
      
      ## Risk Management
      
      - Start with small amounts
      - Be cautious with new protocols
      - Keep private keys secure
      
      ## Tracking Your Activity
      
      Use Unichain's block explorer to monitor your on-chain activity and ensure your transactions are being recorded properly.
    `,
    tasks: [
      "Set up MetaMask for Unichain",
      "Bridge assets to Unichain",
      "Swap tokens on UniSwap",
      "Use UniBridge for cross-chain transfers",
      "Try UniLend for lending/borrowing",
      "Participate in a community event",
      "Test a new feature and provide feedback",
      "Make at least 15 transactions",
      "Interact with at least 5 different protocols",
      "Join the developer community",
    ],
  },
  ink: {
    id: "ink",
    title: "Ink Protocol Guide",
    description:
      "Step-by-step instructions on how to engage with Ink Protocol's key features and establish a meaningful on-chain presence before token launch.",
    category: "mainnet",
    difficulty: "intermediate",
    author: "LayerLeap Team",
    date: "May 20, 2023",
    readTime: "8 min read",
    content: `
      # Ink Protocol Guide
      
      Ink Protocol is a Layer 2 solution focused on smart contract functionality and developer experience.
      
      ## What is Ink Protocol?
      
      Ink Protocol uses a unique approach to smart contracts that makes them more efficient, secure, and easier to develop. It's built on top of Ethereum and inherits its security while improving scalability.
      
      ## Why Farm Ink Protocol?
      
      Ink Protocol has hinted at a future token launch with rewards for early adopters. By engaging with the platform now, you position yourself for potential airdrops or other rewards.
      
      ## Step-by-Step Guide
      
      1. **Set up Your Wallet for Ink Protocol**
         - Add Ink Protocol network to MetaMask
         - Bridge ETH to Ink Protocol
      
      2. **Interact with Smart Contracts**
         - Deploy a simple smart contract
         - Interact with existing contracts
         - Use Ink's developer tools
      
      3. **Participate in the Ecosystem**
         - Join the developer community
         - Test new features
         - Provide feedback
      
      4. **Maintain Regular Activity**
         - Make transactions regularly
         - Deploy or interact with different types of contracts
      
      ## Recommended Tools
      
      - **InkScan**: Block explorer for Ink Protocol
      - **InkIDE**: Integrated development environment for smart contracts
      - **InkBridge**: Bridge for transferring assets to and from Ink Protocol
      
      ## Cost Considerations
      
      Ink Protocol offers very low transaction fees:
      
      - Bridge to Ink Protocol: $1-3
      - Contract deployment: $0.50-2.00
      - Contract interactions: $0.10-0.50 each
      
      A budget of $10-20 should be sufficient for a comprehensive farming strategy.
      
      ## Risk Management
      
      - Start with simple contracts
      - Test thoroughly before deploying
      - Keep private keys secure
      
      ## Tracking Your Activity
      
      Use InkScan to monitor your on-chain activity and ensure your transactions are being recorded properly.
    `,
    tasks: [
      "Set up MetaMask for Ink Protocol",
      "Bridge ETH to Ink Protocol",
      "Deploy a simple smart contract",
      "Interact with at least 3 existing contracts",
      "Use InkIDE to modify a contract",
      "Join the developer community",
      "Test a new feature and provide feedback",
      "Make at least 20 transactions",
      "Deploy at least 3 different types of contracts",
      "Participate in a community event",
    ],
  },
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const [guide, setGuide] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Get the guide data based on the slug
    const guideData = guides[params.slug as keyof typeof guides]

    if (guideData) {
      setGuide(guideData)
    } else {
      setError(true)
    }

    setLoading(false)
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-300">Loading guide...</p>
        </div>
      </div>
    )
  }

  if (error || !guide) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Guide Not Found</h1>
          <p className="mt-4 text-slate-300">The guide you're looking for doesn't exist or has been moved.</p>
          <Link href="/guides" passHref>
            <Button className="mt-6">Back to Guides</Button>
          </Link>
        </div>
      </div>
    )
  }

  const categoryColors: Record<string, string> = {
    mainnet: "bg-blue-500",
    testnet: "bg-green-500",
    bridge: "bg-purple-500",
    tool: "bg-amber-500",
  }

  const difficultyColors: Record<string, string> = {
    beginner: "bg-green-700",
    intermediate: "bg-amber-700",
    advanced: "bg-red-700",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="container mx-auto px-4 py-8">
        <Link href="/guides" passHref>
          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Guides
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-2/3">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={categoryColors[guide.category as keyof typeof categoryColors]}>
                  {guide.category.charAt(0).toUpperCase() + guide.category.slice(1)}
                </Badge>
                <Badge className={difficultyColors[guide.difficulty as keyof typeof difficultyColors]}>
                  {guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
                </Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">{guide.title}</h1>
              <p className="text-xl text-slate-300 mb-6">{guide.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{guide.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{guide.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{guide.readTime}</span>
                </div>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              {guide.content.split("\n\n").map((paragraph: string, index: number) => {
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                      {paragraph.replace("# ", "")}
                    </h1>
                  )
                } else if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                } else if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-5 mb-2">
                      {paragraph.replace("### ", "")}
                    </h3>
                  )
                } else if (paragraph.startsWith("- ")) {
                  return (
                    <ul key={index} className="list-disc pl-6 my-4">
                      {paragraph.split("\n").map((item, i) => (
                        <li key={i} className="mb-2">
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  )
                } else if (
                  paragraph.startsWith("✅") ||
                  paragraph.startsWith("🏦") ||
                  paragraph.startsWith("📤") ||
                  paragraph.startsWith("💰") ||
                  paragraph.startsWith("💸") ||
                  paragraph.startsWith("⚠️") ||
                  paragraph.startsWith("💹") ||
                  paragraph.startsWith("🧠") ||
                  paragraph.startsWith("📈") ||
                  paragraph.startsWith("💡")
                ) {
                  return (
                    <p key={index} className="mb-1 ml-6">
                      {paragraph}
                    </p>
                  )
                } else if (paragraph.startsWith("[Sign up with")) {
                  return (
                    <p key={index} className="mb-4 ml-6">
                      <a
                        href={paragraph.match(/$$(.*?)$$/)?.[1] || "#"}
                        className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                      >
                        {paragraph.match(/\[(.*?)\]/)?.[1]}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-external-link"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" x2="21" y1="14" y2="3" />
                        </svg>
                      </a>
                    </p>
                  )
                } else {
                  return (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  )
                }
              })}
            </div>
          </article>

          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-8">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Track Your Progress</h3>
                <AirdropProgress tasks={guide.tasks} guideId={guide.id} />
              </div>

              <div className="mt-6 p-4 bg-slate-800 border border-slate-700 rounded-lg">
                <h3 className="font-medium mb-2">Get Notified</h3>
                <p className="text-sm text-slate-400 mb-4">
                  Receive updates when this guide changes or when important deadlines approach.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Enable Notifications</Button>
              </div>

              <div className="mt-6 p-4 bg-slate-800 border border-slate-700 rounded-lg">
                <h3 className="font-medium mb-2">Share This Guide</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Discord
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Copy Link
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
