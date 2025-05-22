"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Copy, CheckCircle, ExternalLink, Info, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export default function VRAStakingGuidePage() {
  const { toast } = useToast()
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({
    buyVRA: false,
    setupWallet: false,
    stakeTokens: false,
    followUpdates: false,
  })

  const totalSteps = Object.keys(completedSteps).length
  const completedCount = Object.values(completedSteps).filter(Boolean).length
  const progress = totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0

  const toggleStep = (step: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [step]: !prev[step],
    }))
  }

  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: message,
    })
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 p-6 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        <div className="sticky top-6">
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
            <Progress value={progress} className="h-2 mb-2" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {completedCount} of {totalSteps} tasks completed
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Quick Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Difficulty:</span>
                <span className="font-medium">Easy</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Cost:</span>
                <span className="font-medium">Variable (VRA purchase)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Potential:</span>
                <span className="font-medium text-green-600">High</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Time needed:</span>
                <span className="font-medium">~15 minutes</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Pro Tips</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <AlertCircle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Stake for at least 3 months before major announcements</span>
              </li>
              <li className="flex gap-2">
                <AlertCircle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Enable notifications for Verasity's official channels</span>
              </li>
              <li className="flex gap-2">
                <AlertCircle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Consider dollar-cost averaging into VRA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 px-4 py-8 md:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/guides/mainnets"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Mainnet Guides
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-md">
            <Image src="/images/vra-logo.png" alt="VRA Logo" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">VRA Staking Airdrops Guide</h1>
            <div className="flex gap-2 mt-1">
              <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Mainnet
              </Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Passive Income
              </Badge>
              <Badge
                variant="outline"
                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
              >
                Multiple Airdrops
              </Badge>
            </div>
          </div>
        </div>

        <div className="prose prose-blue dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-4">
              <span className="inline-block p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </span>
              Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Verasity (VRA) is building cutting-edge video infrastructure and ad-fraud prevention tech — and it also
              has the potential for airdrop farming. By simply holding and staking VRA, you could qualify for:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-2xl">🪂</span>
                <span>
                  The POV token airdrop during its migration to the Tron blockchain (migration is supposed to begin Q2
                  2025)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">🪂</span>
                <span>A potential $MAIV airdrop via VRA's official partnership with Maiv Finance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">🪂</span>
                <span>Other future drops from projects building in the VRA ecosystem</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">💸</span>
                <span>Plus, you earn staking rewards (~15% APY) while you wait</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold flex items-center gap-2 text-amber-800 dark:text-amber-300">
                <Info className="h-4 w-4" />
                Official Source for the MAIV Airdrop
              </h4>
              <p className="mt-2 text-amber-700 dark:text-amber-300">
                <a
                  href="https://x.com/verasitytech/status/1918244080858939568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  VRA x Maiv Finance tweet (April 23, 2024) <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <br />
                <span className="italic mt-2 block">
                  "for $VRA and $MAIV holders, stay tuned—a $MAIV airdrop opportunity is on the horizon"
                </span>
              </p>
            </div>
          </div>

          {/* Step 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <button
                  onClick={() => toggleStep("buyVRA")}
                  className="h-8 w-8 rounded-full flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  {completedSteps.buyVRA ? (
                    <CheckCircle className="h-7 w-7 text-green-500" />
                  ) : (
                    <span className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                  )}
                </button>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Step 1: Buy VRA</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You can grab VRA on both centralized and decentralized exchanges.
                </p>
                <h4 className="font-semibold mb-2">Top platforms:</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">KuCoin</span>
                      <span className="text-gray-500 dark:text-gray-400">– Easiest and most liquid</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => window.open("https://www.kucoin.com/", "_blank")}
                    >
                      <ExternalLink className="h-3 w-3" />
                      Visit
                    </Button>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Gate.io</span>
                      <span className="text-gray-500 dark:text-gray-400">– Another solid option</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => window.open("https://www.gate.io/", "_blank")}
                    >
                      <ExternalLink className="h-3 w-3" />
                      Visit
                    </Button>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Uniswap (ERC-20)</span>
                      <span className="text-gray-500 dark:text-gray-400">– Buy with ETH or USDC</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => window.open("https://app.uniswap.org/", "_blank")}
                    >
                      <ExternalLink className="h-3 w-3" />
                      Visit
                    </Button>
                  </li>
                </ul>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-300 flex items-start gap-2">
                    <Info className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>
                      Make sure you're buying ERC-20 VRA, since staking is only available for that version. This is only
                      something to pay attention to if you're buying on a DEX.
                    </span>
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">VRA ERC-20 contract address:</span>
                    <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      0xf411903cbc70a74d22900a5de66a2dda66507255
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() =>
                        copyToClipboard(
                          "0xf411903cbc70a74d22900a5de66a2dda66507255",
                          "Contract address copied to clipboard",
                        )
                      }
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <button
                  onClick={() => toggleStep("setupWallet")}
                  className="h-8 w-8 rounded-full flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  {completedSteps.setupWallet ? (
                    <CheckCircle className="h-7 w-7 text-green-500" />
                  ) : (
                    <span className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                  )}
                </button>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Step 2: Set Up VeraWallet</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To stake VRA and track rewards, use the official Verasity wallet.
                </p>
                <ol className="list-decimal list-inside space-y-4 mb-6">
                  <li className="text-gray-700 dark:text-gray-300">
                    Visit{" "}
                    <a
                      href="https://verawallet.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    >
                      verawallet.io <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">Sign up and verify email</li>
                  <li className="text-gray-700 dark:text-gray-300">Enable 2FA for security</li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Transfer your VRA from the exchange to your wallet address, then begin staking
                  </li>
                </ol>
                <p className="text-gray-700 dark:text-gray-300">
                  That's it — you're earning ~15% APY in VRA. Unstaking is possible, but has a cooldown period, so only
                  stake what you don't need immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <button
                  onClick={() => toggleStep("stakeTokens")}
                  className="h-8 w-8 rounded-full flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  {completedSteps.stakeTokens ? (
                    <CheckCircle className="h-7 w-7 text-green-500" />
                  ) : (
                    <span className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                  )}
                </button>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  Step 3: Get Ready for Airdrops
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Now that you're a staker, here's what you're in line for:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-2xl">🪂</span>
                    <div>
                      <span className="font-medium">POV Token Airdrop</span>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        As VRA migrates its Proof-of-View token system to the Tron blockchain, stakers are expected to
                        receive POV tokens
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-2xl">🪂</span>
                    <div>
                      <span className="font-medium">$MAIV Token Airdrop</span>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Thanks to VRA's official partnership with Maiv Finance, VRA holders may be included in upcoming
                        Maiv token distributions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-2xl">🪂</span>
                    <div>
                      <span className="font-medium">Future Airdrops From Partners</span>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        As the Verasity ecosystem expands, other project partnerships could reward loyal VRA stakers
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-300 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    <span className="font-semibold">Important: Make sure your tokens are staked!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <button
                  onClick={() => toggleStep("followUpdates")}
                  className="h-8 w-8 rounded-full flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  {completedSteps.followUpdates ? (
                    <CheckCircle className="h-7 w-7 text-green-500" />
                  ) : (
                    <span className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                  )}
                </button>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  Why VRA Staking Makes Sense for Farmers
                </h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Earn passive rewards just by staking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Get early exposure to multiple potential airdrops (POV, MAIV, and more)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Be part of a growing adtech + video + DeFi ecosystem</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Stay ahead of snapshot dates with zero extra effort</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Potential to profit off of the VRA token if price increases</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">Pro Tips</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Follow{" "}
                      <a
                        href="https://twitter.com/verasitytech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                      >
                        @verasitytech on X <ExternalLink className="h-3 w-3 ml-1" />
                      </a>{" "}
                      for snapshot and airdrop announcements
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Keep your tokens staked and avoid moving them before key dates (when announced)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* TL;DR */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 shadow-md mb-8 text-white">
            <h2 className="text-2xl font-bold mb-4">TL;DR</h2>
            <p className="text-lg">
              Buy VRA → Stake in VeraWallet → Earn passive rewards + qualify for POV, MAIV, and future ecosystem
              airdrops.
              <br />
              <span className="font-bold">Low effort. High potential. Get in early.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
