import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AirdropProgress } from "@/components/airdrop-progress"

export default function PharosTestnetGuidePage() {
  // Tasks for the airdrop progress component
  const tasks = [
    {
      id: "pharos-task-1",
      title: "Sign up & connect wallet",
      description: "Visit the Pharos testnet site and connect your wallet",
      completed: false,
    },
    {
      id: "pharos-task-2",
      title: "Link social accounts",
      description: "Connect Twitter, Discord, and other social accounts",
      completed: false,
    },
    {
      id: "pharos-task-3",
      title: "Claim Discord roles",
      description: "Join Discord and claim all available roles",
      completed: false,
    },
    {
      id: "pharos-task-4",
      title: "Complete social tasks",
      description: "Follow, like, and retweet Pharos content",
      completed: false,
    },
    {
      id: "pharos-task-5",
      title: "Daily check-in",
      description: "Perform daily check-ins on the dashboard",
      completed: false,
    },
    {
      id: "pharos-task-6",
      title: "Claim testnet tokens",
      description: "Use the faucet to claim testnet tokens",
      completed: false,
    },
    {
      id: "pharos-task-7",
      title: "Perform swaps",
      description: "Execute token swaps on the testnet",
      completed: false,
    },
    {
      id: "pharos-task-8",
      title: "Add liquidity",
      description: "Provide liquidity to testnet pools",
      completed: false,
    },
    {
      id: "pharos-task-9",
      title: "Send tokens",
      description: "Transfer tokens to other addresses",
      completed: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/guides/testnets" passHref>
          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Testnet Guides
          </Button>
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-green-500">Testnet</Badge>
                <Badge className="bg-green-700">Beginner</Badge>
                <Badge className="bg-blue-600">Layer 1</Badge>
              </div>

              <h1 className="text-4xl font-bold mb-4">🌠 Pharos Network Testnet Airdrop Guide</h1>
              <p className="text-xl text-slate-300 mb-6">Farm Points | Test L1 Tech | Position Early</p>

              <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>10 minutes</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Updated May 2025</span>
                </div>
              </div>

              {/* Enhanced Hero Section */}
              <div className="relative rounded-xl overflow-hidden mb-8">
                <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo Section */}
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative">
                        {/* Glow effect behind logo */}
                        <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full"></div>
                        <img
                          src="/images/pharos-logo.jpg"
                          alt="Pharos Network"
                          className="relative z-10 w-48 h-48 object-contain"
                        />
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2 text-center md:text-left">
                      <div className="space-y-4">
                        <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-1 rounded-full text-sm font-medium">
                          LAYER 1 BLOCKCHAIN
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            $8M Raised
                          </span>
                        </h2>
                        <p className="text-xl text-blue-100">Position yourself early for potential rewards</p>
                        <div className="pt-2">
                          <a
                            href="https://testnet.pharosnetwork.xyz/experience?inviteCode=xbRXXWYYA8rvU77N"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Join Testnet Now</Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    {/* Stars/particles effect */}
                    <div className="absolute top-4 left-8 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                    <div className="absolute top-12 right-12 w-1 h-1 bg-blue-300 rounded-full opacity-40"></div>
                    <div className="absolute bottom-8 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-50"></div>
                    <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-200 rounded-full opacity-30"></div>
                    <div className="absolute bottom-12 right-8 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-invert prose-lg max-w-none mb-8">
                <p>
                  Pharos Network is a next-generation Layer 1 blockchain focused on scalability and simplicity — and
                  they've already raised $8 million to back it. This testnet is 100% free to participate in, and may be
                  leading toward a future airdrop for early users.
                </p>
                <p>If you're serious about airdrop farming, this is one L1 you don't want to skip.</p>
              </div>

              {/* Why Pharos */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">🚀 Why Pharos?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4">
                      <p className="text-lg">💸 $8M raised from strong backers</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4">
                      <p className="text-lg">🧪 Testnet is live — and free</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4">
                      <p className="text-lg">🔗 Layer 1 chain = high potential airdrop</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4">
                      <p className="text-lg">📉 Low farming competition (for now)</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800 border-slate-700 md:col-span-2">
                    <CardContent className="p-4">
                      <p className="text-lg">🔥 Social + on-chain tasks = easy to farm</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* How to Join */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">✅ How to Join the Pharos Testnet</h2>

                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold mb-4">Step 1: Sign Up & Connect</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="mr-2">🔗</span>
                        <div>
                          <span>Visit: </span>
                          <a
                            href="https://testnet.pharosnetwork.xyz/experience?inviteCode=xbRXXWYYA8rvU77N"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                          >
                            testnet.pharosnetwork.xyz
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🔌</span>
                        <span>Connect your wallet</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">📲</span>
                        <span>
                          Link your social accounts (Twitter, Discord, etc.) Claim all available Discord roles!
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold mb-4">Step 2: Complete Social Tasks</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="mr-2">💬</span>
                        <span>Follow, like, retweet, and claim all available discord roles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🎯</span>
                        <span>These tasks boost your profile score (likely tracked for airdrop)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-bold mb-4">Step 3: Daily Check-In</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="mr-2">📅</span>
                        <span>Go to the Dashboard every day</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✅</span>
                        <span>Tap "Check-In" — it only takes a second</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🧠</span>
                        <span>Do your best to do it daily to stay active and consistent</span>
                      </li>
                    </ul>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-amber-500">
                    <h3 className="text-xl font-bold mb-4">Step 4: On-Chain Testnet Actions</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="mr-2">💧</span>
                        <span>Go to the Home tab</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🪙</span>
                        <span>Claim testnet tokens from the faucet</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🔁</span>
                        <span>Perform swaps</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">💼</span>
                        <span>Add liquidity to pools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">📤</span>
                        <span>Send tokens to other addresses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">📌</span>
                        <span>Mix up your interactions to show real usage</span>
                      </li>
                    </ul>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-bold mb-4">Step 5: Repeat Regularly</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="mr-2">🔁</span>
                        <span>Return daily for check-ins</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🔄</span>
                        <span>Keep doing swaps, LP, and transfers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">🌱</span>
                        <span>This builds long-term activity and maximizes your airdrop profile</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pro Tips */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">💡 Pro Tips</h2>
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Use real wallets (avoid sybil patterns)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Engage with Pharos on X and Discord (claim all roles)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Track your activity in a spreadsheet</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Stay active until the testnet ends or snapshot is announced</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Why This Matters */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">🧠 Why This Matters</h2>
                <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-6">
                  <p className="text-lg">
                    Pharos is early-stage with solid funding and an accessible testnet. This funding can increase as
                    well. Projects like this often reward the first wave of users — especially those who engage both
                    on-chain and socially. This is how you secure high-value airdrops before the crowd shows up.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center py-8">
                <a
                  href="https://testnet.pharosnetwork.xyz/experience?inviteCode=xbRXXWYYA8rvU77N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto"
                  >
                    Join Pharos Testnet Now
                  </Button>
                </a>
                <p className="text-slate-400 mt-4">Start farming before it's too late!</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-6">
              {/* Progress Tracker */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Track Your Progress</h3>
                <AirdropProgress tasks={tasks} guideId="pharos-testnet" />
              </div>

              {/* Quick Links */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://testnet.pharosnetwork.xyz/experience?inviteCode=xbRXXWYYA8rvU77N"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      <span>Pharos Testnet</span>
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/pharos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      <span>Discord Community</span>
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/PharosNetwork"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      <span>Twitter/X</span>
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Estimated Rewards */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Estimated Effort</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Initial Setup</span>
                      <span>10 minutes</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Daily Maintenance</span>
                      <span>2 minutes</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Weekly Tasks</span>
                      <span>15 minutes</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="font-medium mb-4">Share This Guide</h3>
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
          </div>
        </div>
      </div>
    </div>
  )
}
