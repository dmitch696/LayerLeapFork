import Link from "next/link"
import Image from "next/image"
import { Wallet, Coins, AppWindow, CheckSquare, Clock, ExternalLink, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AirdropProgress } from "@/components/airdrop-progress"
import { NotificationSubscribe } from "@/components/notification-subscribe"

export default function MonadTestnetGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Image src="/images/monad-logo.png" alt="Monad Logo" width={48} height={48} className="rounded-md" />
          <h1 className="text-3xl font-bold">🧪 Monad Testnet Guide</h1>
        </div>
        <p className="text-xl text-slate-400 max-w-3xl text-center mb-6">
          Step-by-step guide to farming the Monad testnet for potential airdrops
        </p>
        <div className="flex gap-3 mb-8">
          <Badge className="bg-green-700">Testnet</Badge>
          <Badge className="bg-blue-700">Active</Badge>
          <Badge className="bg-amber-700">Medium Difficulty</Badge>
        </div>
        <div className="w-full max-w-2xl">
          <AirdropProgress
            steps={[
              "Set up wallet",
              "Add Monad testnet",
              "Claim testnet tokens",
              "Swap on Uniswap",
              "Stake on Kintsu",
              "Mint NFT",
              "Buy domain",
              "Bridge tokens",
              "Add liquidity",
              "Complete Layer3 tasks",
              "Complete Talentum quests",
              "Stay active",
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Step 1: Set Up Your Wallet */}
          <section id="wallet-setup" className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-900/30 p-2 rounded-lg">
                <Wallet className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">1. Set Up Your Wallet</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Choose a Wallet:</h3>
                <p className="text-slate-300">
                  Use an EVM-compatible wallet such as MetaMask. This will allow you to interact with the Monad testnet.
                </p>
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Add Monad Testnet:</h3>
                <p className="text-slate-300 mb-3">
                  For wallets like MetaMask, manually add the Monad testnet RPC. This can be done by searching "Monad"
                  on Chainlist.
                </p>
                <Link href="https://chainlist.org" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Visit Chainlist <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
                <p className="text-slate-400 mt-3 text-sm">
                  Note: For Phantom and OKX Wallet, the network is added automatically when visiting testnet.monad.xyz
                </p>
              </div>
            </div>
          </section>

          {/* Step 2: Claim Testnet Tokens */}
          <section id="claim-tokens" className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-900/30 p-2 rounded-lg">
                <Coins className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">2. Claim Testnet $MON Tokens</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Official Monad Faucet:</h3>
                <p className="text-slate-300 mb-3">
                  Visit testnet.monad.xyz and connect your wallet. Token distribution is as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 mb-3">
                  <li>
                    <span className="font-medium">5 MON:</span> If you have the "Full Access" role on Monad's Discord.
                  </li>
                  <li>
                    <span className="font-medium">2 MON:</span> If your wallet holds at least 0.01 ETH on Ethereum
                    Mainnet with a prior outgoing transaction.
                  </li>
                  <li>
                    <span className="font-medium">0.05 MON:</span> For all other users.
                  </li>
                </ul>
                <Link href="https://testnet.monad.xyz" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Visit Official Faucet <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Alternative Faucets:</h3>
                <p className="text-slate-300 mb-3">Due to high demand, consider using these additional faucets:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <Card className="bg-slate-700/50 border-slate-600">
                    <CardHeader className="py-3 px-4">
                      <CardTitle className="text-sm">Gas.zip Faucet</CardTitle>
                    </CardHeader>
                    <CardContent className="py-2 px-4">
                      <p className="text-xs text-slate-300">
                        Requires prior transactions and ETH balance. You can also pay $0.25 to purchase testnet tokens.
                      </p>
                    </CardContent>
                    <CardFooter className="py-2 px-4">
                      <Link href="https://gas.zip" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="secondary" size="sm" className="w-full text-xs">
                          Visit
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="bg-slate-700/50 border-slate-600">
                    <CardHeader className="py-3 px-4">
                      <CardTitle className="text-sm">ThirdWeb Faucet</CardTitle>
                    </CardHeader>
                    <CardContent className="py-2 px-4">
                      <p className="text-xs text-slate-300">Alternative faucet for Monad testnet tokens.</p>
                    </CardContent>
                    <CardFooter className="py-2 px-4">
                      <Link
                        href="https://thirdweb.com/monad-testnet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button variant="secondary" size="sm" className="w-full text-xs">
                          Visit
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>

                <Link
                  href="https://stake.apr.io/faucet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Apriori Faucet <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Step 3: Engage with Monad Ecosystem dApps */}
          <section id="ecosystem-dapps" className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-900/30 p-2 rounded-lg">
                <AppWindow className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">3. Engage with Monad Ecosystem dApps</h2>
            </div>

            <p className="text-slate-300 mb-4">
              Interacting with various dApps is necessary to stand out. The more smart contract interactions and daily
              activities you have, the more likely you are to receive an airdrop.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-500 transition-colors">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-sm">Uniswap</CardTitle>
                  <CardDescription className="text-xs">DEX</CardDescription>
                </CardHeader>
                <CardContent className="py-2 px-4">
                  <p className="text-xs text-slate-300">
                    Swap different tokens on Monad testnet, complete 10+ transactions and add liquidity.
                  </p>
                </CardContent>
                <CardFooter className="py-2 px-4">
                  <Link href="https://app.uniswap.org" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="secondary" size="sm" className="w-full text-xs">
                      Visit
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-500 transition-colors">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-sm">Kintsu</CardTitle>
                  <CardDescription className="text-xs">Staking</CardDescription>
                </CardHeader>
                <CardContent className="py-2 px-4">
                  <p className="text-xs text-slate-300">
                    Stake Monad, unstake a small amount, and claim at a later point.
                  </p>
                </CardContent>
                <CardFooter className="py-2 px-4">
                  <Link href="https://kintsu.xyz/staking" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="secondary" size="sm" className="w-full text-xs">
                      Visit
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-500 transition-colors">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-sm">NFTs2Me</CardTitle>
                  <CardDescription className="text-xs">NFT Creation</CardDescription>
                </CardHeader>
                <CardContent className="py-2 px-4">
                  <p className="text-xs text-slate-300">Create and mint your own Monad NFTs.</p>
                </CardContent>
                <CardFooter className="py-2 px-4">
                  <Link href="https://nfts2me.com" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="secondary" size="sm" className="w-full text-xs">
                      Visit
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-500 transition-colors">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-sm">Magic Eden</CardTitle>
                  <CardDescription className="text-xs">NFT Marketplace</CardDescription>
                </CardHeader>
                <CardContent className="py-2 px-4">
                  <p className="text-xs text-slate-300">
                    Mint free Monad NFTs, each mint gives you a unique smart contract interaction.
                  </p>
                </CardContent>
                <CardFooter className="py-2 px-4">
                  <Link
                    href="https://magiceden.io/mint-terminal/monad-testnet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="secondary" size="sm" className="w-full text-xs">
                      Visit
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-500 transition-colors">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-sm">Conft</CardTitle>
                  <CardDescription className="text-xs">NFT Launchpad</CardDescription>
                </CardHeader>
                <CardContent className="py-2 px-4">
                  <p className="text-xs text-slate-300">
                    Create and mint free NFTs on Monad, easy way to get unique smart contract interactions.
                  </p>
                </CardContent>
                <CardFooter className="py-2 px-4">
                  <Link
                    href="https://conft.app/launchpad/explore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="secondary" size="sm" className="w-full text-xs">
                      Visit
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-500 transition-colors">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-sm">ZNS</CardTitle>
                  <CardDescription className="text-xs">Domain Service</CardDescription>
                </CardHeader>
                <CardContent className="py-2 px-4">
                  <p className="text-xs text-slate-300">Buy a domain on Monad.</p>
                </CardContent>
                <CardFooter className="py-2 px-4">
                  <Link href="https://zns.bio/" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="secondary" size="sm" className="w-full text-xs">
                      Visit
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Additional dApps to Explore:</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
                <li>
                  <Link
                    href="https://testnet.orbiter.finance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Orbiter Finance
                  </Link>{" "}
                  - Bridge to and from Monad using Ethereum testnets
                </li>
                <li>
                  <Link
                    href="https://app.purps.xyz/stake"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Purps
                  </Link>{" "}
                  - Swap and add liquidity, stake Monad
                </li>
                <li>
                  <Link
                    href="https://octo.exchange/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Octo Exchange
                  </Link>{" "}
                  - Swap and add liquidity
                </li>
                <li>
                  <Link
                    href="https://monad.alldomains.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    AllDomains
                  </Link>{" "}
                  - Buy Monad domain
                </li>
                <li>
                  <Link
                    href="https://www.zkswap.finance/swap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    zkSwap
                  </Link>{" "}
                  - Swap and add liquidity
                </li>
                <li>
                  <Link
                    href="https://monad.ambient.finance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Ambient Finance
                  </Link>{" "}
                  - Trade and add liquidity
                </li>
                <li>
                  <Link
                    href="https://pandaria.lfj.gg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Pandaria
                  </Link>{" "}
                  - Trade and add liquidity
                </li>
                <li>
                  <Link
                    href="https://pancakeswap.finance/swap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    PancakeSwap
                  </Link>{" "}
                  - Trade and add liquidity
                </li>
                <li>
                  <Link
                    href="https://app.atlantisdex.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    AtlantisDEX
                  </Link>{" "}
                  - Swap, add liquidity, stake, and earn
                </li>
              </ul>
            </div>
          </section>

          {/* Step 4: Participate in Quests and Tasks */}
          <section id="quests-tasks" className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-900/30 p-2 rounded-lg">
                <CheckSquare className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">4. Participate in Quests and Tasks</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Layer3 Campaigns:</h3>
                <p className="text-slate-300 mb-3">Complete tasks on Layer3 to earn rewards and increase activity.</p>
                <Link href="https://layer3.xyz" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Visit Layer3 <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Talentum Quests:</h3>
                <p className="text-slate-300 mb-3">
                  Sign up on Talentum and complete various tasks to earn MON and other rewards.
                </p>
                <Link href="https://talentum.xyz" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Visit Talentum <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Superboard Quests:</h3>
                <p className="text-slate-300 mb-3">Complete quests on Superboard to increase your activity.</p>
                <Link href="https://superboard.xyz/campaign/nads-on-testnet" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Visit Superboard <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Step 5: Stay Active and Consistent */}
          <section id="stay-active" className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-900/30 p-2 rounded-lg">
                <Clock className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">5. Stay Active and Consistent</h2>
            </div>

            <p className="text-slate-300 mb-4">
              Regular interaction with the Monad testnet and its ecosystem projects can enhance your eligibility for
              potential airdrops. Consistency is key.
            </p>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <p className="text-slate-300">
                By following this guide and actively participating in the Monad testnet, you position yourself favorably
                for any future airdrop opportunities. Stay engaged and monitor official Monad channels for updates.
              </p>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Protocol Type</span>
                <span className="font-medium">Layer 1 Blockchain</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Testnet Status</span>
                <Badge className="bg-green-700">Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Funding</span>
                <span className="font-medium">$200M+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Airdrop Potential</span>
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★</span>
                  <span className="text-slate-600">★</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Time Required</span>
                <span className="font-medium">2-3 hours</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle>Official Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link
                href="https://monad.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:text-primary transition-colors"
              >
                <span>Website</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com/monad_xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:text-primary transition-colors"
              >
                <span>Twitter</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://discord.gg/monad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:text-primary transition-colors"
              >
                <span>Discord</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://docs.monad.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:text-primary transition-colors"
              >
                <span>Documentation</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/monad-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:text-primary transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle>Share This Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" /> Twitter
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" /> Discord
                </Button>
              </div>
            </CardContent>
          </Card>

          <NotificationSubscribe />
        </div>
      </div>
    </div>
  )
}
