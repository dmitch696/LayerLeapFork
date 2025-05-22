import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import {
  Rocket,
  Brain,
  Check,
  Zap,
  Repeat,
  Globe,
  Target,
  Lock,
  Wallet,
  MessageSquare,
  PaintbrushIcon as PaintBrush,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { AirdropProgress } from "@/components/airdrop-progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SomniaGuidePage() {
  const guide = {
    id: "somnia",
    title: "🌌 Somnia Testnet Airdrop Farming Guide",
    date: "May 15, 2025",
    author: "LayerLeap Team",
    category: "testnet",
    difficulty: "intermediate",
    estimatedTime: "2-3 hours",
    tasks: [
      "Set up MetaMask wallet for Somnia Testnet",
      "Join Somnia Quest Portal and complete profile",
      "Link social accounts (Discord, Telegram, X)",
      "Request STT tokens from the faucet",
      "Perform daily GM check-ins for at least 7 days",
      "Deploy a smart contract on Somnia",
      "Create and mint NFTs on nfts2me.com",
      "Mint NFTs on conft.app (5-10 cheap NFTs)",
      "Send on-chain messages using Quills",
      "Make swaps and add liquidity on QuickSwap",
      "Complete at least 3 quests on Galxe or Zealy",
      "Follow Somnia on social media and join Discord",
      "Achieve 50+ unique smart contract interactions",
      "Set up multiple wallets with unique activity patterns",
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/guides/testnets" passHref>
          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Testnet Guides
          </Button>
        </Link>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 rounded-lg p-8">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Badge
                  variant="outline"
                  className="uppercase text-xs font-semibold tracking-wider border-primary text-primary"
                >
                  {guide.category}
                </Badge>
                <span className="text-sm text-slate-400">{guide.date}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{guide.title}</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-1 text-slate-300">
                  <span className="text-sm">Difficulty:</span>
                  <span className="text-sm font-medium">{guide.difficulty}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-300">
                  <span className="text-sm">Time:</span>
                  <span className="text-sm font-medium">{guide.estimatedTime}</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                {/* What Is Somnia Network? */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                    <Brain className="h-6 w-6 text-primary" />🧠 What Is Somnia Network?
                  </h2>
                  <p className="my-4 text-slate-300 leading-relaxed">
                    Somnia is a high-performance Layer 1 blockchain designed for metaverse-scale applications, boasting
                    capabilities like processing over 1 million transactions per second with sub-second finality.
                    Developed by the Virtual Society Foundation and backed by Improbable, Somnia aims to power immersive
                    virtual experiences and interconnected digital worlds.
                  </p>
                  <p className="my-4 text-slate-300 leading-relaxed">
                    While an official airdrop hasn't been confirmed, Somnia has $270 million in funding, if they do have
                    an airdrop, the rewards can be massive. Active participation in the testnet and community
                    initiatives could position you for potential rewards.
                  </p>
                </div>

                {/* Step-by-Step Guide */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                    <Rocket className="h-6 w-6 text-primary" />🚀 Step-by-Step: How to Farm the Somnia Airdrop
                  </h2>

                  {/* Step 1 */}
                  <div className="mb-6 bg-slate-700/50 rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-primary" />
                      1. 🛠️ Join the Somnia Testnet
                    </h3>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Visit the Somnia Quest Portal:</span>{" "}
                          <a
                            href="https://quest.somnia.network/referrals/2BE84BCD"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                          >
                            quest.somnia.network
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Connect your Ethereum-compatible wallet</span> (e.g., MetaMask)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Add the Somnia Testnet network</span> to your wallet when
                          prompted
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Step 2 */}
                  <div className="mb-6 bg-slate-700/50 rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      2. 🧑‍💼 Complete Your Profile
                    </h3>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Set a username</span> and upload a profile picture
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Link your social accounts</span> (Discord, Telegram, and X)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Perform daily "GM" check-ins</span> to earn points
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Share your unique referral link</span> to invite others and
                          boost your points (You can refer your other wallets after creating your first account and
                          completing tasks)
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Step 3 */}
                  <div className="mb-6 bg-slate-700/50 rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      3. 💧 Request Test Tokens
                    </h3>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Navigate to the Somnia Testnet Faucet</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Request STT (Somnia Test Tokens)</span> to use for transactions
                          on the testnet
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Step 4 */}
                  <div className="mb-6 bg-slate-700/50 rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Repeat className="h-5 w-5 text-primary" />
                      4. 🔄 Engage in Testnet Activities
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Smart Contracts */}
                      <Card className="bg-slate-700 border-slate-600">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center gap-2">
                            <Zap className="h-4 w-4 text-primary" />
                            Smart Contracts
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="list-none space-y-2 text-sm">
                            <li>
                              <a
                                href="https://onchaingm.com?ref=0xf137724797C3a3086F1dc16e070e465eB5ad35f0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-1"
                              >
                                onchaingm.com
                                <ExternalLink className="h-3 w-3" />
                              </a>{" "}
                              (Deploy smart contract and say GM)
                            </li>
                            <li>
                              <a
                                href="https://contracts.mintair.xyz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-1"
                              >
                                contracts.mintair.xyz
                                <ExternalLink className="h-3 w-3" />
                              </a>{" "}
                              (Deploy smart contract)
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Swaps & Tokens */}
                      <Card className="bg-slate-700 border-slate-600">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center gap-2">
                            <Repeat className="h-4 w-4 text-primary" />
                            Swaps & Tokens
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="list-none space-y-2 text-sm">
                            <li>
                              <a
                                href="https://testnet.somnia.network/swap"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-1"
                              >
                                testnet.somnia.network/swap
                                <ExternalLink className="h-3 w-3" />
                              </a>{" "}
                              (Swap and create tokens)
                            </li>
                            <li>
                              <a
                                href="https://dapp.quickswap.exchange/swap"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-1"
                              >
                                quickswap.exchange
                                <ExternalLink className="h-3 w-3" />
                              </a>{" "}
                              (Make swaps and add liquidity)
                            </li>
                            <li>
                              <a
                                href="https://testnet.somnia.network/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-1"
                              >
                                testnet.somnia.network
                                <ExternalLink className="h-3 w-3" />
                              </a>{" "}
                              (Use faucet, send tokens, complete quests)
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* NFTs */}
                      <Card className="bg-slate-700 border-slate-600">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center gap-2">
                            <PaintBrush className="h-4 w-4 text-primary" />
                            NFTs
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="list-none space-y-2 text-sm">
                            <li>
                              <a
                                href="http://nfts2me.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-1"
                              >
                                nfts2me.com
                                <ExternalLink className="h-3 w-3" />
                              </a>{" "}
                              (Create and mint your own NFTs)
                            </li>
                            <li>
                              <a
                                href="http://conft.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-1"
                              >
                                conft.app
                                <ExternalLink className="h-3 w-3" />
                              </a>{" "}
                              (Mint 5-10 cheap NFTs multiple times a week)
                            </li>
                            <li>
                              <a
                                href="https://www.nerzo.xyz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-1"
                              >
                                nerzo.xyz
                                <ExternalLink className="h-3 w-3" />
                              </a>{" "}
                              (Mint NFTs on Somnia)
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Messaging */}
                      <Card className="bg-slate-700 border-slate-600">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-primary" />
                            Messaging
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="list-none space-y-2 text-sm">
                            <li>
                              <a
                                href="https://quills.fun/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-1"
                              >
                                quills.fun
                                <ExternalLink className="h-3 w-3" />
                              </a>{" "}
                              (Send an on-chain message)
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="mb-6 bg-slate-700/50 rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      5. 🌐 Engage with Community Platforms
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Quests */}
                      <Card className="bg-slate-700 border-slate-600">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Galxe, Zealy, Guild and Superboard</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="list-none space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <div className="text-sm">Complete quests and tasks if available</div>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Social Media */}
                      <Card className="bg-slate-700 border-slate-600">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Social Media</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="list-none space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <div className="text-sm">Follow @Somnia_Network on X</div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <div className="text-sm">Join the Somnia Discord Server. Claim roles if applicable</div>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Tips Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />🎯 Tips to Maximize Your Airdrop Potential
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Card className="bg-slate-700 border-slate-600">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          Consistency
                        </h4>
                        <p className="text-sm text-slate-300">
                          🗓️ Engage daily with the platform to accumulate points steadily.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700 border-slate-600">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          Diversity
                        </h4>
                        <p className="text-sm text-slate-300">
                          🎨 Interact with various dApps and features to showcase broad participation.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700 border-slate-600">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          Referrals
                        </h4>
                        <p className="text-sm text-slate-300">
                          👥 Invite others using your referral link to boost your points.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700 border-slate-600">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          Community Engagement
                        </h4>
                        <p className="text-sm text-slate-300">
                          🗣️ Stay active on social platforms and participate in discussions. Claim discord roles if
                          available.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700 border-slate-600 md:col-span-2">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          Increase Smart Contract Interactions
                        </h4>
                        <p className="text-sm text-slate-300">
                          Mint multiple NFTs on platforms like conft.app every week, the goal is to get 100+ unique
                          smart contract interactions.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-slate-700/30 rounded-lg p-5 border-l-4 border-primary">
                    <p className="text-slate-300 leading-relaxed">
                      By following this guide and maintaining active participation, you'll position yourself favorably
                      for any potential Somnia Network airdrop. To maintain active participation you can use some of the
                      provided dapps to complete daily activities.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-4">
                      Somnia has $270 million in funding, so the potential for this airdrop is massive. Having multiple
                      wallets farming Somnia is crucial, but completing quests with multiple wallets is highly
                      difficult. Try to complete as many quests as possible, have many active days on the network,
                      activity on the ethereum mainnet, and consistently add new unique smart contract interactions.
                      This is how you stand on and get the maximum reward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Airdrop Progress */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Track Your Progress</h3>
              <AirdropProgress tasks={guide.tasks} guideId={guide.id} />
            </div>

            {/* Related Guides */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Related Guides</h3>
              <div className="space-y-4">
                <Card className="bg-slate-700 border-slate-600">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">Wallet Tracker Setup</h4>
                    <p className="text-sm text-slate-300 mb-2">Track your on-chain activity across multiple wallets</p>
                    <Link href="/guides/wallet-tracker" passHref>
                      <Button variant="link" className="p-0 h-auto text-primary">
                        Read Guide
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700 border-slate-600">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">Advanced Sybil Avoidance</h4>
                    <p className="text-sm text-slate-300 mb-2">
                      Ensure your farming activities don't trigger detection
                    </p>
                    <Link href="/guides/relay-strategy" passHref>
                      <Button variant="link" className="p-0 h-auto text-primary">
                        Read Guide
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Safety Tips
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2 text-slate-300">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span>Always verify links through official channels</span>
                </li>
                <li className="flex gap-2 text-slate-300">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span>Use a hardware wallet for larger funds</span>
                </li>
                <li className="flex gap-2 text-slate-300">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span>Never share your private keys or seed phrase</span>
                </li>
                <li className="flex gap-2 text-slate-300">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span>Be cautious with smart contracts from unknown sources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
