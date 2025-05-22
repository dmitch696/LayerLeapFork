"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, ExternalLink, CheckCircle, AlertTriangle, Rocket, CheckSquare, Square } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function N1TestnetGuidePage() {
  // State for tracking checklist items - removed the three items as requested
  const [checkedItems, setCheckedItems] = useState({
    installWallet: false,
    enableDevnet: false,
    getSol: false,
    visit01Exchange: false,
    // Removed: accessTestnet: false,
    // Removed: connectWallet: false,
    // Removed: getUsdc: false,
    openPositions: false,
    executeTransactions: false,
    stayActive: false,
  })

  const toggleCheckedItem = (item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }))
  }

  // Calculate progress percentage
  const totalItems = Object.keys(checkedItems).length
  const completedItems = Object.values(checkedItems).filter(Boolean).length
  const progressPercentage = Math.round((completedItems / totalItems) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/guides/testnets" passHref>
          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Testnet Guides
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-70"></div>
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 flex items-center justify-center">
                <img src="/n1chain-logo.png" alt="N1Chain Logo" className="h-20 w-20" />
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-purple-700 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                    L1 TESTNET
                  </span>
                  <span className="bg-blue-700 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                    SOLANA ECOSYSTEM
                  </span>
                  <span className="bg-green-700 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">ACTIVE</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">🚜 N1Chain L1 Testnet Guide</h1>
                <p className="text-lg text-slate-300">
                  Complete the 01 Exchange testnet tasks to position yourself for a potential N1Chain airdrop
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-bold mb-4">Overview</h2>
              <p className="text-slate-300">
                This guide covers the currently available task for the N1Chain L1 Testnet via 01 Exchange. Follow all
                steps carefully to ensure eligibility for potential future airdrops.
              </p>
              <div className="mt-4 bg-yellow-900/30 border border-yellow-800/50 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-200">
                  Currently only 1 task is available. Complete it thoroughly and stay active to maximize your chances.
                </p>
              </div>
            </div>

            {/* Step 1 */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-900 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-xl font-bold">Prepare Your Wallet</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Install Phantom Wallet (if you haven't already):</h3>
                    <button
                      onClick={() => toggleCheckedItem("installWallet")}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {checkedItems.installWallet ? (
                        <CheckSquare className="h-5 w-5 text-green-500" />
                      ) : (
                        <Square className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <a
                    href="https://phantom.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-2"
                  >
                    👉 https://phantom.app/ <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Open Phantom and enable Devnet mode:</h3>
                    <button
                      onClick={() => toggleCheckedItem("enableDevnet")}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {checkedItems.enableDevnet ? (
                        <CheckSquare className="h-5 w-5 text-green-500" />
                      ) : (
                        <Square className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300 mt-2">
                    <li>Go to Settings</li>
                    <li>Navigate to Developer Settings</li>
                    <li>Enable Devnet</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-900 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-xl font-bold">Get Devnet SOL (for gas)</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Go to the Solana faucet and get SOL:</h3>
                    <button
                      onClick={() => toggleCheckedItem("getSol")}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {checkedItems.getSol ? (
                        <CheckSquare className="h-5 w-5 text-green-500" />
                      ) : (
                        <Square className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <a
                    href="https://faucet.solana.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-2"
                  >
                    👉 https://faucet.solana.com <ExternalLink className="h-4 w-4" />
                  </a>
                  <p className="text-slate-300 mt-2">
                    Log in with GitHub and request SOL. You'll receive 5 SOL on Devnet.
                  </p>
                </div>

                <div className="bg-yellow-900/30 border border-yellow-800/50 rounded-lg p-4 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-200">
                    New GitHub accounts may face errors—use an older one if possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-900 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                  3
                </div>
                <h2 className="text-xl font-bold">Use 01 Exchange Testnet</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Visit 01 Exchange:</h3>
                    <button
                      onClick={() => toggleCheckedItem("visit01Exchange")}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {checkedItems.visit01Exchange ? (
                        <CheckSquare className="h-5 w-5 text-green-500" />
                      ) : (
                        <Square className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <a
                    href="https://01.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-2"
                  >
                    👉 https://01.xyz <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Access the Private Testnet:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>Click "Private Testnet"</li>
                    <li>
                      Password:
                      <div className="inline-flex items-center gap-2 bg-slate-600/50 rounded px-2 py-1 ml-2">
                        <code>01relaunchTime</code>
                        <button
                          className="text-slate-400 hover:text-white transition-colors"
                          onClick={() => {
                            navigator.clipboard.writeText("01relaunchTime")
                          }}
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Once inside:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>Connect your Phantom wallet</li>
                    <li>Select "N Devnet" as the network</li>
                    <li>Click "Get 100 USDC" to fund your account</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-900 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                  4
                </div>
                <h2 className="text-xl font-bold">Complete the Perp DEX Task</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Now perform some trading actions:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">• Open a Long and Short position</span>
                      <button
                        onClick={() => toggleCheckedItem("openPositions")}
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        {checkedItems.openPositions ? (
                          <CheckSquare className="h-5 w-5 text-green-500" />
                        ) : (
                          <Square className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">• Execute 10+ buy/sell transactions</span>
                      <button
                        onClick={() => toggleCheckedItem("executeTransactions")}
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        {checkedItems.executeTransactions ? (
                          <CheckSquare className="h-5 w-5 text-green-500" />
                        ) : (
                          <Square className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">• Stay active 5-10 days total</span>
                      <button
                        onClick={() => toggleCheckedItem("stayActive")}
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        {checkedItems.stayActive ? (
                          <CheckSquare className="h-5 w-5 text-green-500" />
                        ) : (
                          <Square className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/30 border border-blue-800/50 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-200">You don't need to be profitable—just show activity.</p>
                </div>
              </div>
            </div>

            {/* Completion */}
            <div className="bg-green-900/20 rounded-xl p-6 border border-green-800/30">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-6 w-6 text-green-400" />
                <h2 className="text-xl font-bold">🏁 Done!</h2>
              </div>

              <p className="text-slate-300">
                You've now completed the only available task for the N1Chain testnet via 01 Exchange. Stay active and
                keep checking for future tasks to stay eligible for potential airdrops.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Tracker */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 sticky top-4">
              <h3 className="text-lg font-bold mb-4">Your Progress</h3>
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm text-slate-300">Completion</span>
                <span className="text-sm font-medium">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-300 mb-2">Task Checklist</h4>

                <div className="space-y-2">
                  <button
                    onClick={() => toggleCheckedItem("installWallet")}
                    className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-sm">Install Phantom Wallet</span>
                    {checkedItems.installWallet ? (
                      <CheckSquare className="h-4 w-4 text-green-500" />
                    ) : (
                      <Square className="h-4 w-4" />
                    )}
                  </button>

                  <button
                    onClick={() => toggleCheckedItem("enableDevnet")}
                    className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-sm">Enable Devnet Mode</span>
                    {checkedItems.enableDevnet ? (
                      <CheckSquare className="h-4 w-4 text-green-500" />
                    ) : (
                      <Square className="h-4 w-4" />
                    )}
                  </button>

                  <button
                    onClick={() => toggleCheckedItem("getSol")}
                    className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-sm">Get Devnet SOL</span>
                    {checkedItems.getSol ? (
                      <CheckSquare className="h-4 w-4 text-green-500" />
                    ) : (
                      <Square className="h-4 w-4" />
                    )}
                  </button>

                  <button
                    onClick={() => toggleCheckedItem("visit01Exchange")}
                    className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-sm">Visit 01 Exchange</span>
                    {checkedItems.visit01Exchange ? (
                      <CheckSquare className="h-4 w-4 text-green-500" />
                    ) : (
                      <Square className="h-4 w-4" />
                    )}
                  </button>

                  {/* Removed the three items as requested */}
                  {/* accessTestnet item removed */}
                  {/* connectWallet item removed */}
                  {/* getUsdc item removed */}

                  <button
                    onClick={() => toggleCheckedItem("openPositions")}
                    className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-sm">Open Long/Short Positions</span>
                    {checkedItems.openPositions ? (
                      <CheckSquare className="h-4 w-4 text-green-500" />
                    ) : (
                      <Square className="h-4 w-4" />
                    )}
                  </button>

                  <button
                    onClick={() => toggleCheckedItem("executeTransactions")}
                    className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-sm">Execute 10+ Transactions</span>
                    {checkedItems.executeTransactions ? (
                      <CheckSquare className="h-4 w-4 text-green-500" />
                    ) : (
                      <Square className="h-4 w-4" />
                    )}
                  </button>

                  <button
                    onClick={() => toggleCheckedItem("stayActive")}
                    className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-sm">Stay Active 5-10 Days</span>
                    {checkedItems.stayActive ? (
                      <CheckSquare className="h-4 w-4 text-green-500" />
                    ) : (
                      <Square className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Difficulty:</span>
                  <span className="font-medium">Beginner</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Time:</span>
                  <span className="font-medium">15-20 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Network:</span>
                  <span className="font-medium">Solana Devnet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Wallet Required:</span>
                  <span className="font-medium">Phantom</span>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold mb-4">Requirements</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Phantom Wallet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>GitHub Account</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Basic trading knowledge</span>
                </li>
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold mb-4">Pro Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="bg-blue-900/50 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-sm">Spread your activity over multiple days rather than all at once</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-blue-900/50 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-sm">Try different trading pairs to show diverse activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-blue-900/50 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-sm">Follow N1Chain on Twitter for updates on new testnet tasks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
