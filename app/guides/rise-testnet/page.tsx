import Link from "next/link"
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AirdropProgress } from "@/components/airdrop-progress"

export default function RiseTestnetGuidePage() {
  const tasks = [
    {
      id: "rise-task-1",
      title: "Add Rise Chain to your wallet",
      description: "Visit portal.risechain.com and add the network to MetaMask",
      completed: false,
    },
    {
      id: "rise-task-2",
      title: "Claim testnet tokens from faucet",
      description: "Request all 7 different tokens from the faucet",
      completed: false,
    },
    {
      id: "rise-task-3",
      title: "Swap tokens on Clober DEX",
      description: "Visit rise.clober.io and swap tokens (e.g., ETH → cUSDC)",
      completed: false,
    },
    {
      id: "rise-task-4",
      title: "Use Gaspump for swaps and liquidity",
      description: "Add liquidity using your test tokens on gaspump.network",
      completed: false,
    },
    {
      id: "rise-task-5",
      title: "Trade on B3x",
      description: "Long/short positions on testnet.b3x.ai",
      completed: false,
    },
    {
      id: "rise-task-6",
      title: "Lend and borrow on Inarifi",
      description: "Use lending protocol at inarifi.com",
      completed: false,
    },
    {
      id: "rise-task-7",
      title: "Create NFTs on Nfts2me",
      description: "Mint your own NFTs on the Rise Testnet",
      completed: false,
    },
    {
      id: "rise-task-8",
      title: "Deploy a smart contract",
      description: "Use OnChainGM to deploy a contract on Rise Testnet",
      completed: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="container mx-auto px-4 py-8">
        <Link href="/guides/testnets" passHref>
          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Testnet Guides
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-2/3">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-green-500">Testnet</Badge>
                <Badge className="bg-green-700">Beginner</Badge>
                <Badge className="bg-blue-600">Ethereum L2</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">🚀 Rise Chain Testnet Guide</h1>
              <p className="text-xl text-slate-300 mb-6">
                Farm the Rise Chain Testnet for a potential airdrop from this ultra-fast Ethereum L2 backed by Vitalik
                Buterin
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
                <div className="flex items-center gap-1">
                  <span>⏱️ 15-20 minutes</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>💰 $8M Funding</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>⚡ 10ms Latency</span>
                </div>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
                <h2 className="text-2xl font-bold mb-4">What is Rise Chain?</h2>
                <p>
                  Rise Chain is a next-generation Ethereum Layer 2 (L2) blockchain offering ultra-fast speeds (10ms
                  latency) while maintaining Ethereum-grade decentralization and security.
                </p>
                <p>
                  Backed by major players including Vitalik Buterin, Rise has already raised $8M across two funding
                  rounds and is gearing up for its next phase with early users likely eligible for a potential airdrop.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-6 mb-8 border border-blue-800/30">
                <h2 className="text-2xl font-bold mb-4">⚡️ Why Participate?</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Fast Ethereum L2 (10ms roundtrip)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Doesn't require real funds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Early testnet users may be rewarded</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Backed by top-tier investors including Vitalik Buterin</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-6">🧪 Step-by-Step: Interact With the Rise Testnet</h2>

              <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
                <h3 className="text-xl font-bold mb-4">🔹 Step 1: Add Rise Chain to Your Wallet</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Visit:{" "}
                    <a
                      href="https://portal.risechain.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                    >
                      portal.risechain.com <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>Click "Add Network"</li>
                  <li>Connect your Ethereum wallet (e.g., MetaMask)</li>
                  <li>Enter your wallet address</li>
                </ol>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
                <h3 className="text-xl font-bold mb-4">🔹 Step 2: Claim Tokens from the Faucet</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>On the same website, input your wallet address and request testnet tokens</li>
                  <li>There are 7 different tokens to choose from, claim them one at a time:</li>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>$ETH</li>
                    <li>$RISE</li>
                    <li>And 5 other tokens available in the faucet</li>
                  </ul>
                </ol>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
                <h3 className="text-xl font-bold mb-4">🔹 Step 3: Explore the Ecosystem DApps</h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-bold">🔁 Clober DEX</h4>
                    <p className="mb-2">
                      URL:{" "}
                      <a
                        href="https://rise.clober.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                      >
                        rise.clober.io <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Switch to Rise Sepolia</li>
                      <li>Swap tokens (e.g., $ETH → cUSDC)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-lg font-bold">🛠️ Gaspump</h4>
                    <p className="mb-2">
                      URL:{" "}
                      <a
                        href="https://gaspump.network/swap"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                      >
                        gaspump.network/swap <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Swap tokens</li>
                      <li>Add liquidity using your test tokens</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="text-lg font-bold">📉 B3x</h4>
                    <p className="mb-2">
                      URL:{" "}
                      <a
                        href="https://testnet.b3x.ai/#/trade"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                      >
                        testnet.b3x.ai <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Trade cryptocurrencies</li>
                      <li>Open long/short positions</li>
                      <li>Use the faucet for additional tokens</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="text-lg font-bold">💰 Inarifi</h4>
                    <p className="mb-2">
                      URL:{" "}
                      <a
                        href="https://www.inarifi.com/?marketName=proto_inari_rise"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                      >
                        inarifi.com <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Lend your tokens</li>
                      <li>Borrow against your collateral</li>
                      <li>Repay loans</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="text-lg font-bold">🎨 Nfts2me</h4>
                    <p className="mb-2">
                      URL:{" "}
                      <a
                        href="https://nfts2me.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                      >
                        nfts2me.com <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Create your own NFT collection</li>
                      <li>Mint NFTs on the Rise Testnet</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="text-lg font-bold">📝 OnChainGM</h4>
                    <p className="mb-2">
                      URL:{" "}
                      <a
                        href="https://onchaingm.com/deploy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                      >
                        onchaingm.com/deploy <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Deploy a smart contract on Rise Testnet</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-800/50">
                  <p className="font-medium">
                    Explore all Rise dApps here:{" "}
                    <a
                      href="https://portal.risechain.com/apps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                    >
                      portal.risechain.com/apps <ExternalLink className="h-3 w-3" />
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 rounded-xl p-6 mb-8 border border-red-800/30">
                <h3 className="text-xl font-bold mb-4">📢 Important Tips</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Start today to maximize your airdrop potential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>No real funds needed - just your wallet and a bit of time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Try to interact with as many dApps as possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Keep track of your activities for future reference</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-8">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Track Your Progress</h3>
                <AirdropProgress tasks={tasks} guideId="rise-testnet" />
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
