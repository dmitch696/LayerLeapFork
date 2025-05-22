"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeftRight, ChevronDown, ExternalLink, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { WalletConnect } from "@/components/wallet-connect"
import { toast } from "@/components/ui/use-toast"

// LayerZero contract addresses by chain
const LAYERZERO_CONTRACTS = {
  ethereum: "0x0000000000000000000000000000000000000000", // Placeholder - replace with actual contract
  arbitrum: "0x9dB10F880726D87780afaf55f9144CC43FF8d567", // User's provided Arbitrum contract
  optimism: "0x2e04dD2F88AA6a88259c5006FD4C28312D5867B6", // Existing Optimism contract
  base: "0xEc47B2a848eE1b0AcB96b408A131058dcac7E7f3", // New Base contract
  zksync: "0x0000000000000000000000000000000000000000", // Placeholder - replace with actual contract
}

// Chain IDs for LayerZero
const CHAIN_IDS = {
  ethereum: 101,
  arbitrum: 110,
  optimism: 111,
  base: 184,
  zksync: 165,
}

// Special address for native ETH
const ETH_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"

// Token addresses by chain
const TOKEN_ADDRESSES = {
  ethereum: {
    ETH: ETH_ADDRESS,
    WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    WBTC: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  },
  arbitrum: {
    ETH: ETH_ADDRESS,
    WETH: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    USDC: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    USDT: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    WBTC: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
  },
  optimism: {
    ETH: ETH_ADDRESS,
    WETH: "0x4200000000000000000000000000000000000006",
    USDC: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    USDT: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    WBTC: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
  },
  base: {
    ETH: ETH_ADDRESS,
    WETH: "0x4200000000000000000000000000000000000006",
    USDC: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
    USDT: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    WBTC: "0x77852193BD608A5Db3Ff229A3BF77F5c7D667b9C",
  },
  zksync: {
    ETH: ETH_ADDRESS,
    WETH: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
    USDC: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
    USDT: "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C",
    WBTC: "0xBBeB516fb02a01611cBBE0453Fe3c580D7281011",
  },
}

// Network mapping - using decimal strings for proper comparison
const NETWORK_MAPPING = {
  ethereum: "1",
  arbitrum: "42161",
  optimism: "10",
  base: "8453",
  zksync: "324",
}

export default function BridgePage() {
  const [sourceChain, setSourceChain] = useState("arbitrum") // Default to Arbitrum since we have that contract
  const [destinationChain, setDestinationChain] = useState("base") // Default to Base since we have that contract
  const [amount, setAmount] = useState("")
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [selectedToken, setSelectedToken] = useState("WETH") // Default to WETH for compatibility
  const [bridgeProvider, setBridgeProvider] = useState("layerzero")
  const [txHash, setTxHash] = useState<string | null>(null)
  const [txStatus, setTxStatus] = useState<"pending" | "success" | "error" | null>(null)
  const [balance, setBalance] = useState<string>("0")
  const [currentChainId, setCurrentChainId] = useState<string>("")
  const [isApproving, setIsApproving] = useState(false)
  const [errorDetails, setErrorDetails] = useState<string | null>(null)
  const [debugMode, setDebugMode] = useState(false)

  // Check if we're on the correct network for the selected source chain
  const isCorrectNetwork = useCallback(() => {
    if (!currentChainId || !sourceChain) return false

    // Convert hex chainId to decimal for comparison
    const decimalChainId = Number.parseInt(currentChainId, 16).toString()
    return decimalChainId === NETWORK_MAPPING[sourceChain as keyof typeof NETWORK_MAPPING]
  }, [currentChainId, sourceChain])

  // Handle network switching
  const switchNetwork = async () => {
    if (!window.ethereum) return

    const networkParams: Record<string, any> = {
      ethereum: {
        chainId: "0x1",
      },
      arbitrum: {
        chainId: "0xa4b1", // 42161
        chainName: "Arbitrum One",
        nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://arb1.arbitrum.io/rpc"],
        blockExplorerUrls: ["https://arbiscan.io/"],
      },
      optimism: {
        chainId: "0xa", // 10
        chainName: "Optimism",
        nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://mainnet.optimism.io"],
        blockExplorerUrls: ["https://optimistic.etherscan.io/"],
      },
      base: {
        chainId: "0x2105", // 8453
        chainName: "Base",
        nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://mainnet.base.org"],
        blockExplorerUrls: ["https://basescan.org/"],
      },
      zksync: {
        chainId: "0x144", // 324
        chainName: "zkSync Era",
        nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://mainnet.era.zksync.io"],
        blockExplorerUrls: ["https://explorer.zksync.io/"],
      },
    }

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: networkParams[sourceChain].chainId }],
      })
    } catch (error: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[sourceChain]],
          })
        } catch (addError) {
          console.error(addError)
        }
      }
      console.error(error)
    }
  }

  const handleSwapChains = () => {
    const temp = sourceChain
    setSourceChain(destinationChain)
    setDestinationChain(temp)
  }

  const handleConnect = (address: string) => {
    setIsWalletConnected(true)
    setWalletAddress(address)
  }

  const handleDisconnect = () => {
    setIsWalletConnected(false)
    setWalletAddress("")
    setBalance("0")
  }

  // Fetch balance using Web3
  const fetchBalance = async () => {
    if (!window.ethereum || !walletAddress) {
      setBalance("0")
      return
    }

    try {
      // Check if we're on the correct network
      const chainId = await window.ethereum.request({ method: "eth_chainId" })
      const decimalChainId = Number.parseInt(chainId, 16).toString()
      const expectedChainId = NETWORK_MAPPING[sourceChain as keyof typeof NETWORK_MAPPING]

      if (decimalChainId !== expectedChainId) {
        console.log(`Wrong network. Expected: ${expectedChainId}, Got: ${decimalChainId}`)
        setBalance("0")
        return
      }

      // Get the token address for the selected token on the current chain
      const tokenAddress =
        TOKEN_ADDRESSES[sourceChain as keyof typeof TOKEN_ADDRESSES]?.[
          selectedToken as keyof (typeof TOKEN_ADDRESSES)[keyof typeof TOKEN_ADDRESSES]
        ]

      if (!tokenAddress) {
        console.error("Token address not found")
        setBalance("0")
        return
      }

      // If the token is ETH, fetch the native balance
      if (selectedToken === "ETH") {
        const balanceHex = await window.ethereum.request({
          method: "eth_getBalance",
          params: [walletAddress, "latest"],
        })

        // Convert hex balance to decimal
        const balanceWei = Number.parseInt(balanceHex, 16)
        const balanceEth = balanceWei / 1e18
        setBalance(balanceEth.toString())
        return
      }

      // For ERC20 tokens
      // Function signature for balanceOf(address)
      const balanceOfSignature = "0x70a08231"
      // Pad the address to 32 bytes (remove 0x prefix, pad with zeros, add back 0x)
      const paddedAddress = "0x" + walletAddress.slice(2).padStart(64, "0")

      // Create the data for the eth_call
      const data = balanceOfSignature + paddedAddress

      // Call the balanceOf function
      const balanceHex = await window.ethereum.request({
        method: "eth_call",
        params: [
          {
            to: tokenAddress,
            data,
          },
          "latest",
        ],
      })

      // Convert hex balance to decimal
      const balanceWei = Number.parseInt(balanceHex, 16)

      // Get token decimals (most tokens use 18, but USDC uses 6, etc.)
      let decimals = 18
      if (selectedToken === "USDC" || selectedToken === "USDT") {
        decimals = 6
      }

      const balanceToken = balanceWei / Math.pow(10, decimals)
      setBalance(balanceToken.toString())
    } catch (error) {
      console.error("Error fetching balance:", error)
      setBalance("0")
    }
  }

  // Update balance when relevant states change
  useEffect(() => {
    if (isWalletConnected && walletAddress) {
      fetchBalance()
    } else {
      setBalance("0")
    }
  }, [isWalletConnected, walletAddress, sourceChain, selectedToken, currentChainId])

  // Listen for chain changes
  useEffect(() => {
    if (window.ethereum) {
      const handleChainChanged = (chainId: string) => {
        console.log("Chain changed to:", chainId)
        setCurrentChainId(chainId)
      }

      // Get current chain ID
      window.ethereum
        .request({ method: "eth_chainId" })
        .then((chainId: string) => {
          console.log("Current chain ID:", chainId)
          setCurrentChainId(chainId)
        })
        .catch((error) => {
          console.error("Error getting chain ID:", error)
        })

      window.ethereum.on("chainChanged", handleChainChanged)

      return () => {
        window.ethereum.removeListener("chainChanged", handleChainChanged)
      }
    }
  }, [])

  // Wait for transaction to be mined
  const waitForTransaction = async (txHash: string) => {
    return new Promise((resolve, reject) => {
      const checkReceipt = async () => {
        try {
          const receipt = await window.ethereum.request({
            method: "eth_getTransactionReceipt",
            params: [txHash],
          })

          if (receipt) {
            resolve(receipt)
          } else {
            setTimeout(checkReceipt, 2000) // Check again in 2 seconds
          }
        } catch (error) {
          reject(error)
        }
      }

      checkReceipt()
    })
  }

  // Function to estimate gas for a transaction
  const estimateGas = async (txParams: any) => {
    try {
      const gasEstimate = await window.ethereum.request({
        method: "eth_estimateGas",
        params: [txParams],
      })
      return gasEstimate
    } catch (error) {
      console.error("Gas estimation error:", error)
      // If gas estimation fails, return a default high gas limit
      return "0x1000000" // 16,777,216 gas
    }
  }

  const handleBridge = async () => {
    console.log("Bridge function called")
    setErrorDetails(null)

    if (!isWalletConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to continue",
        variant: "destructive",
      })
      return
    }

    if (!amount || Number.parseFloat(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to bridge",
        variant: "destructive",
      })
      return
    }

    if (!isCorrectNetwork()) {
      toast({
        title: "Wrong network",
        description: `Please switch to ${getChainName(sourceChain)} network`,
        variant: "destructive",
      })
      return
    }

    // Get contract addresses
    const sourceContract = LAYERZERO_CONTRACTS[sourceChain as keyof typeof LAYERZERO_CONTRACTS]
    const destChainId = CHAIN_IDS[destinationChain as keyof typeof CHAIN_IDS]
    const tokenAddress =
      TOKEN_ADDRESSES[sourceChain as keyof typeof TOKEN_ADDRESSES]?.[
        selectedToken as keyof (typeof TOKEN_ADDRESSES)[keyof typeof TOKEN_ADDRESSES]
      ]

    if (sourceContract === "0x0000000000000000000000000000000000000000") {
      toast({
        title: "Contract not deployed",
        description: `The bridge contract is not yet deployed on ${getChainName(sourceChain)}`,
        variant: "destructive",
      })
      return
    }

    if (!tokenAddress) {
      toast({
        title: "Token not supported",
        description: `${selectedToken} is not supported on ${getChainName(sourceChain)}`,
        variant: "destructive",
      })
      return
    }

    try {
      setTxStatus("pending")

      // Convert amount to wei
      let decimals = 18
      if (selectedToken === "USDC" || selectedToken === "USDT") {
        decimals = 6
      }
      const amountInWei = BigInt(Math.floor(Number.parseFloat(amount) * 10 ** decimals)).toString()

      // For tokens other than ETH, we need to approve the contract first
      if (selectedToken !== "ETH") {
        setIsApproving(true)

        try {
          // Check current allowance
          const allowanceCall = {
            to: tokenAddress,
            data:
              "0xdd62ed3e" + // allowance(address,address)
              walletAddress.slice(2).padStart(64, "0") + // owner
              sourceContract.slice(2).padStart(64, "0"), // spender
          }

          const allowanceResult = await window.ethereum.request({
            method: "eth_call",
            params: [allowanceCall, "latest"],
          })

          const currentAllowance = BigInt(allowanceResult)

          if (debugMode) {
            console.log("Current allowance:", currentAllowance.toString())
            console.log("Required amount:", amountInWei)
          }

          if (currentAllowance < BigInt(amountInWei)) {
            // Need to approve
            // Use max uint256 for unlimited approval
            const maxUint256 = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

            const approveTx = {
              from: walletAddress,
              to: tokenAddress,
              data:
                "0x095ea7b3" + // approve(address,uint256)
                sourceContract.slice(2).padStart(64, "0") + // spender
                maxUint256.slice(2), // amount (max uint256)
            }

            const approveTxHash = await window.ethereum.request({
              method: "eth_sendTransaction",
              params: [approveTx],
            })

            toast({
              title: "Approval Pending",
              description: "Please confirm the approval transaction in your wallet",
            })

            // Wait for approval to be mined
            let approvalConfirmed = false
            while (!approvalConfirmed) {
              await new Promise((resolve) => setTimeout(resolve, 2000))
              const receipt = await window.ethereum.request({
                method: "eth_getTransactionReceipt",
                params: [approveTxHash],
              })

              if (receipt && receipt.status === "0x1") {
                approvalConfirmed = true
              } else if (receipt && receipt.status === "0x0") {
                throw new Error("Approval transaction failed")
              }
            }

            toast({
              title: "Approval Successful",
              description: "Token approved for bridging",
            })
          }
        } catch (error) {
          console.error("Approval error:", error)
          setTxStatus(null)
          setIsApproving(false)
          toast({
            title: "Approval Failed",
            description: error.message || "Failed to approve token for bridging",
            variant: "destructive",
          })
          return
        }

        setIsApproving(false)
      }

      // Fixed bridge fee (0.0003 ETH)
      const bridgeFee = BigInt(Math.floor(0.0003 * 10 ** 18))

      // Calculate total value to send
      let totalValue
      if (selectedToken === "ETH") {
        // For native ETH, we need to send both the bridge fee and the amount
        totalValue = bridgeFee + BigInt(amountInWei)
      } else {
        // For tokens, we only need to send the bridge fee
        totalValue = bridgeFee
      }

      // Try multiple function signatures to see which one works
      // These are common function signatures for different bridge implementations
      const possibleFunctionSignatures = [
        // Try a simpler bridge function first (common in many bridges)
        {
          name: "bridge(uint16,address,uint256)",
          signature: "0x0e5c0250",
          data: () =>
            "0x0e5c0250" +
            destChainId.toString(16).padStart(64, "0") +
            walletAddress.slice(2).padStart(64, "0") +
            BigInt(amountInWei).toString(16).padStart(64, "0"),
        },
        // Try a standard OFT bridge function
        {
          name: "sendFrom(address,uint16,bytes32,uint256)",
          signature: "0x9f3ce55a",
          data: () =>
            "0x9f3ce55a" +
            walletAddress.slice(2).padStart(64, "0") +
            destChainId.toString(16).padStart(64, "0") +
            walletAddress.slice(2).padStart(64, "0") +
            BigInt(amountInWei).toString(16).padStart(64, "0"),
        },
        // Try the function we were using before
        {
          name: "sendFrom(uint16,bytes,address,uint256,address)",
          signature: "0xd73d0b4e",
          data: () => {
            const adapterParams = "0x00010000000000000000000000000000000000000000000000000000000000989680"

            const encodedDestChainId = destChainId.toString(16).padStart(64, "0")
            const encodedRecipient = walletAddress.slice(2).padStart(64, "0")
            const encodedAmount = BigInt(amountInWei).toString(16).padStart(64, "0")
            const encodedRefundAddress = walletAddress.slice(2).padStart(64, "0")
            const adapterParamsOffset = "00000000000000000000000000000000000000000000000000000000000000a0"
            const adapterParamsLength = "0000000000000000000000000000000000000000000000000000000000000022"
            const adapterParamsData = adapterParams.slice(2)

            return (
              "0xd73d0b4e" +
              encodedDestChainId +
              encodedRecipient +
              encodedAmount +
              encodedRefundAddress +
              adapterParamsOffset +
              adapterParamsLength +
              adapterParamsData
            )
          },
        },
      ]

      // Use the first function signature by default
      const selectedFunctionData = possibleFunctionSignatures[0].data()

      if (debugMode) {
        console.log("Using function:", possibleFunctionSignatures[0].name)
        console.log("Function signature:", possibleFunctionSignatures[0].signature)
        console.log("Transaction value:", totalValue.toString())
        console.log("Token amount in wei:", amountInWei)
      }

      // Set appropriate gas limits based on the network
      let gasLimit
      switch (sourceChain) {
        case "arbitrum":
          gasLimit = "0x2000000" // Higher gas limit for Arbitrum (33,554,432)
          break
        case "optimism":
          gasLimit = "0x1000000" // Medium gas limit for Optimism (16,777,216)
          break
        default:
          gasLimit = "0x800000" // Default gas limit (8,388,608)
      }

      // Prepare the bridge transaction
      const bridgeTx = {
        from: walletAddress,
        to: sourceContract,
        value: "0x" + totalValue.toString(16), // Bridge fee only for tokens, bridge fee + amount for ETH
        data: selectedFunctionData,
        gas: gasLimit,
      }

      if (debugMode) {
        console.log("Final transaction:", bridgeTx)
      }

      // Try to estimate gas first to catch any potential errors
      try {
        const estimatedGas = await estimateGas(bridgeTx)
        bridgeTx.gas = estimatedGas

        if (debugMode) {
          console.log("Estimated gas:", estimatedGas)
        }
      } catch (error) {
        console.warn("Gas estimation failed, using default gas limit:", error)
        // Continue with the default gas limit

        if (debugMode) {
          console.error("Gas estimation error details:", error)
        }
      }

      // Send the transaction
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [bridgeTx],
      })

      setTxHash(txHash)

      toast({
        title: "Bridge Transaction Sent",
        description: "Your transaction has been submitted to the blockchain",
      })

      // Wait for transaction to be mined
      const receipt = await waitForTransaction(txHash)

      if (receipt.status === "0x1") {
        setTxStatus("success")
        toast({
          title: "Bridge Successful",
          description: `Your ${amount} ${selectedToken} is being bridged to ${getChainName(destinationChain)}`,
        })
      } else {
        setTxStatus("error")
        toast({
          title: "Bridge Failed",
          description: "Transaction was mined but failed. Please check the explorer for details.",
          variant: "destructive",
        })
      }

      console.log(
        `Bridging ${amount} ${selectedToken} from ${sourceChain} (${sourceContract}) to ${destinationChain} using ${bridgeProvider}`,
      )
    } catch (error) {
      console.error("Bridge error:", error)
      setTxStatus("error")

      // Extract and display more detailed error information
      let errorMessage = "Failed to send bridge transaction"
      if (error.message) {
        errorMessage = error.message

        // Try to extract more detailed error information
        if (error.data) {
          setErrorDetails(error.data)
        } else if (typeof error === "object") {
          setErrorDetails(JSON.stringify(error, null, 2))
        }
      }

      toast({
        title: "Bridge Failed",
        description: errorMessage,
        variant: "destructive",
      })
    }
  }

  const getChainLogo = (chain: string) => {
    switch (chain) {
      case "ethereum":
        return "/images/eth.png"
      case "arbitrum":
        return "/images/arb.png"
      case "optimism":
        return "/images/op.png"
      case "base":
        return "/images/base.png"
      case "zksync":
        return "/images/zkSync.png"
      default:
        return "/images/eth.png"
    }
  }

  const getChainName = (chain: string) => {
    switch (chain) {
      case "ethereum":
        return "Ethereum"
      case "arbitrum":
        return "Arbitrum"
      case "optimism":
        return "Optimism"
      case "base":
        return "Base"
      case "zksync":
        return "zkSync"
      default:
        return "Ethereum"
    }
  }

  const getExplorerUrl = (chain: string, hash: string) => {
    switch (chain) {
      case "ethereum":
        return `https://etherscan.io/tx/${hash}`
      case "arbitrum":
        return `https://arbiscan.io/tx/${hash}`
      case "optimism":
        return `https://optimistic.etherscan.io/tx/${hash}`
      case "base":
        return `https://basescan.org/tx/${hash}`
      case "zksync":
        return `https://explorer.zksync.io/tx/${hash}`
      default:
        return `https://etherscan.io/tx/${hash}`
    }
  }

  const hasContractForChain = (chain: string) => {
    const address = LAYERZERO_CONTRACTS[chain as keyof typeof LAYERZERO_CONTRACTS]
    return address && address !== "0x0000000000000000000000000000000000000000"
  }

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white">
      <header className="flex justify-between items-center px-10 py-4 bg-[#0d1224] border-b border-gray-800">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="LayerLeap Logo" width={160} height={40} className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDebugMode(!debugMode)}
            className={`${debugMode ? "bg-blue-900/30" : "bg-transparent"} text-xs`}
          >
            Debug Mode {debugMode ? "ON" : "OFF"}
          </Button>
          <WalletConnect isConnected={isWalletConnected} onConnect={handleConnect} onDisconnect={handleDisconnect} />
        </div>
      </header>

      <main className="container max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Cross-Chain Bridge</h1>

        <Tabs defaultValue="layerzero" className="w-full" onValueChange={setBridgeProvider}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="layerzero" className="text-lg py-3">
              <div className="flex items-center gap-2">
                <ArrowLeftRight className="h-5 w-5" />
                LayerZero Bridge
              </div>
            </TabsTrigger>
            <TabsTrigger value="hyperlane" className="text-lg py-3">
              <div className="flex items-center gap-2">
                <ArrowLeftRight className="h-5 w-5" />
                Hyperlane Bridge
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="layerzero" className="mt-0">
            <Card className="bg-[#1a2238] border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 w-5/12">
                      <label className="text-sm text-gray-400">Source Chain</label>
                      <Select value={sourceChain} onValueChange={setSourceChain}>
                        <SelectTrigger className="bg-[#0d1224] border-gray-700">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <Image
                                src={getChainLogo(sourceChain) || "/placeholder.svg"}
                                alt={getChainName(sourceChain)}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              {getChainName(sourceChain)}
                              {hasContractForChain(sourceChain) && (
                                <span className="ml-1 text-xs text-green-500">✓</span>
                              )}
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d1224] border-gray-700">
                          <SelectItem value="ethereum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/eth.png"
                                alt="Ethereum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Ethereum
                            </div>
                          </SelectItem>
                          <SelectItem value="arbitrum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/arb.png"
                                alt="Arbitrum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Arbitrum
                              <span className="ml-1 text-xs text-green-500">✓</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="optimism">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/op.png"
                                alt="Optimism"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Optimism
                              <span className="ml-1 text-xs text-green-500">✓</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="base">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/base.png"
                                alt="Base"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Base
                              <span className="ml-1 text-xs text-green-500">✓</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="zksync">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/zkSync.png"
                                alt="zkSync"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              zkSync
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleSwapChains}
                      className="rounded-full bg-[#0d1224] p-2 hover:bg-[#2563eb]/20"
                    >
                      <ArrowLeftRight className="h-6 w-6" />
                    </Button>

                    <div className="space-y-2 w-5/12">
                      <label className="text-sm text-gray-400">Destination Chain</label>
                      <Select value={destinationChain} onValueChange={setDestinationChain}>
                        <SelectTrigger className="bg-[#0d1224] border-gray-700">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <Image
                                src={getChainLogo(destinationChain) || "/placeholder.svg"}
                                alt={getChainName(destinationChain)}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              {getChainName(destinationChain)}
                              {hasContractForChain(destinationChain) && (
                                <span className="ml-1 text-xs text-green-500">✓</span>
                              )}
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d1224] border-gray-700">
                          <SelectItem value="ethereum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/eth.png"
                                alt="Ethereum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Ethereum
                            </div>
                          </SelectItem>
                          <SelectItem value="arbitrum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/arb.png"
                                alt="Arbitrum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Arbitrum
                            </div>
                          </SelectItem>
                          <SelectItem value="optimism">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/op.png"
                                alt="Optimism"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Optimism
                            </div>
                          </SelectItem>
                          <SelectItem value="base">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/base.png"
                                alt="Base"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Base
                            </div>
                          </SelectItem>
                          <SelectItem value="zksync">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/zkSync.png"
                                alt="zkSync"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              zkSync
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm text-gray-400">Select Token</label>
                      <div className="text-sm text-gray-400">
                        Balance:{" "}
                        {isWalletConnected
                          ? isCorrectNetwork()
                            ? `${Number.parseFloat(balance).toFixed(6)} ${selectedToken}`
                            : "Wrong Network"
                          : "-.--"}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="bg-[#0d1224] border-gray-700 flex-shrink-0">
                            {selectedToken}
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#0d1224] border-gray-700">
                          <DropdownMenuItem onClick={() => setSelectedToken("ETH")}>ETH</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("WETH")}>WETH</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("USDC")}>USDC</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("USDT")}>USDT</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("WBTC")}>WBTC</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <div className="relative flex-grow">
                        <input
                          type="text"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="0.00"
                          className="w-full p-3 bg-[#0d1224] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-500 font-medium"
                          onClick={() => isWalletConnected && setAmount(balance)}
                          disabled={!isWalletConnected || balance === "0"}
                        >
                          MAX
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Contract information */}
                  <div className="p-4 bg-[#0d1224] rounded-lg border border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Contract Information</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-[#0d1224] border-gray-700">
                            <p className="max-w-xs">
                              These are the LayerZero contracts that will handle your cross-chain transaction
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Source Contract:</span>
                        <div className="flex items-center">
                          <span className="font-mono">
                            {LAYERZERO_CONTRACTS[sourceChain as keyof typeof LAYERZERO_CONTRACTS].substring(0, 6)}...
                            {LAYERZERO_CONTRACTS[sourceChain as keyof typeof LAYERZERO_CONTRACTS].substring(38)}
                          </span>
                          {hasContractForChain(sourceChain) ? (
                            <span className="ml-1 text-green-500">✓</span>
                          ) : (
                            <span className="ml-1 text-yellow-500">⚠</span>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Destination Contract:</span>
                        <div className="flex items-center">
                          <span className="font-mono">
                            {LAYERZERO_CONTRACTS[destinationChain as keyof typeof LAYERZERO_CONTRACTS].substring(0, 6)}
                            ...
                            {LAYERZERO_CONTRACTS[destinationChain as keyof typeof LAYERZERO_CONTRACTS].substring(38)}
                          </span>
                          {hasContractForChain(destinationChain) ? (
                            <span className="ml-1 text-green-500">✓</span>
                          ) : (
                            <span className="ml-1 text-yellow-500">⚠</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {(!hasContractForChain(sourceChain) || !hasContractForChain(destinationChain)) && (
                      <div className="mt-2 text-xs text-yellow-500">
                        Warning: Some contracts are not yet deployed. Bridge functionality may be limited.
                      </div>
                    )}
                  </div>

                  {/* LayerZero specific parameters */}
                  <div className="space-y-4 p-4 bg-[#0d1224] rounded-lg border border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">LayerZero Parameters</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-[#0d1224] border-gray-700">
                              <p className="max-w-xs">
                                These parameters configure how your cross-chain transaction is processed
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 text-xs text-blue-500">
                        Advanced
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400">Gas on Destination</label>
                        <Select defaultValue="recommended">
                          <SelectTrigger className="h-8 text-xs bg-[#1a2238] border-gray-700">
                            <SelectValue placeholder="Select gas option" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0d1224] border-gray-700">
                            <SelectItem value="low">Low (Slower)</SelectItem>
                            <SelectItem value="recommended">Recommended</SelectItem>
                            <SelectItem value="high">High (Faster)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400">Slippage Tolerance</label>
                        <Select defaultValue="0.5">
                          <SelectTrigger className="h-8 text-xs bg-[#1a2238] border-gray-700">
                            <SelectValue placeholder="Select slippage" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0d1224] border-gray-700">
                            <SelectItem value="0.1">0.1%</SelectItem>
                            <SelectItem value="0.5">0.5%</SelectItem>
                            <SelectItem value="1.0">1.0%</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 p-4 bg-[#0d1224] rounded-lg border border-gray-700">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Bridge Fee</span>
                      <span className="text-sm">0.0003 ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Estimated Gas</span>
                      <span className="text-sm">0.002 ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Estimated Time</span>
                      <span className="text-sm">~15 minutes</span>
                    </div>
                  </div>

                  {selectedToken === "ETH" && (
                    <div className="p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg text-sm">
                      <p className="font-medium text-yellow-400">Native ETH Bridging</p>
                      <p className="text-gray-300 mt-1">
                        When bridging native ETH, the transaction value will include both the bridge fee (0.0003 ETH)
                        and your bridged amount ({amount} ETH).
                      </p>
                    </div>
                  )}

                  {txStatus && (
                    <div
                      className={`p-4 rounded-lg border ${
                        txStatus === "pending"
                          ? "bg-yellow-900/20 border-yellow-700"
                          : txStatus === "success"
                            ? "bg-green-900/20 border-green-700"
                            : "bg-red-900/20 border-red-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium mb-1">
                            {txStatus === "pending"
                              ? "Transaction Pending"
                              : txStatus === "success"
                                ? "Transaction Successful"
                                : "Transaction Failed"}
                          </p>
                          {txHash && (
                            <p className="text-xs text-gray-400">
                              Transaction Hash: {txHash.substring(0, 6)}...{txHash.substring(62)}
                            </p>
                          )}
                        </div>
                        {txHash && (
                          <a
                            href={getExplorerUrl(sourceChain, txHash)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs text-blue-400 hover:text-blue-300"
                          >
                            View <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        )}
                      </div>

                      {errorDetails && (
                        <div className="mt-2 p-2 bg-red-900/20 rounded border border-red-700 text-xs overflow-auto max-h-32">
                          <p className="font-medium mb-1">Error Details:</p>
                          <pre className="whitespace-pre-wrap">{errorDetails}</pre>
                        </div>
                      )}
                    </div>
                  )}

                  {isWalletConnected && !isCorrectNetwork() && (
                    <Button
                      className="w-full py-6 text-lg font-bold bg-[#2563eb] hover:bg-[#1d4ed8]"
                      onClick={switchNetwork}
                    >
                      Switch to {getChainName(sourceChain)} Network
                    </Button>
                  )}

                  {(!isWalletConnected || isCorrectNetwork()) && (
                    <Button
                      className="w-full py-6 text-lg font-bold bg-[#2563eb] hover:bg-[#1d4ed8]"
                      disabled={
                        !isWalletConnected ||
                        !amount ||
                        txStatus === "pending" ||
                        isApproving ||
                        !hasContractForChain(sourceChain) ||
                        !hasContractForChain(destinationChain)
                      }
                      onClick={handleBridge}
                    >
                      {!isWalletConnected
                        ? "Connect Wallet"
                        : !amount
                          ? "Enter Amount"
                          : isApproving
                            ? "Approving..."
                            : txStatus === "pending"
                              ? "Processing..."
                              : `Bridge ${selectedToken} to ${getChainName(destinationChain)}`}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hyperlane tab content remains the same */}
          <TabsContent value="hyperlane" className="mt-0">
            {/* Hyperlane content remains unchanged */}
            <Card className="bg-[#1a2238] border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 w-5/12">
                      <label className="text-sm text-gray-400">Source Chain</label>
                      <Select value={sourceChain} onValueChange={setSourceChain}>
                        <SelectTrigger className="bg-[#0d1224] border-gray-700">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <Image
                                src={getChainLogo(sourceChain) || "/placeholder.svg"}
                                alt={getChainName(sourceChain)}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              {getChainName(sourceChain)}
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d1224] border-gray-700">
                          <SelectItem value="ethereum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/eth.png"
                                alt="Ethereum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Ethereum
                            </div>
                          </SelectItem>
                          <SelectItem value="arbitrum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/arb.png"
                                alt="Arbitrum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Arbitrum
                            </div>
                          </SelectItem>
                          <SelectItem value="optimism">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/op.png"
                                alt="Optimism"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Optimism
                            </div>
                          </SelectItem>
                          <SelectItem value="base">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/base.png"
                                alt="Base"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Base
                            </div>
                          </SelectItem>
                          <SelectItem value="zksync">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/zkSync.png"
                                alt="zkSync"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              zkSync
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleSwapChains}
                      className="rounded-full bg-[#0d1224] p-2 hover:bg-[#2563eb]/20"
                    >
                      <ArrowLeftRight className="h-6 w-6" />
                    </Button>

                    <div className="space-y-2 w-5/12">
                      <label className="text-sm text-gray-400">Destination Chain</label>
                      <Select value={destinationChain} onValueChange={setDestinationChain}>
                        <SelectTrigger className="bg-[#0d1224] border-gray-700">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <Image
                                src={getChainLogo(destinationChain) || "/placeholder.svg"}
                                alt={getChainName(destinationChain)}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              {getChainName(destinationChain)}
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d1224] border-gray-700">
                          <SelectItem value="ethereum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/eth.png"
                                alt="Ethereum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Ethereum
                            </div>
                          </SelectItem>
                          <SelectItem value="arbitrum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/arb.png"
                                alt="Arbitrum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Arbitrum
                            </div>
                          </SelectItem>
                          <SelectItem value="optimism">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/op.png"
                                alt="Optimism"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Optimism
                            </div>
                          </SelectItem>
                          <SelectItem value="base">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/base.png"
                                alt="Base"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Base
                            </div>
                          </SelectItem>
                          <SelectItem value="zksync">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/zkSync.png"
                                alt="zkSync"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              zkSync
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm text-gray-400">Select Token</label>
                      <div className="text-sm text-gray-400">
                        Balance: {isWalletConnected ? balance : "-.--"} {selectedToken}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="bg-[#0d1224] border-gray-700 flex-shrink-0">
                            {selectedToken}
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#0d1224] border-gray-700">
                          <DropdownMenuItem onClick={() => setSelectedToken("ETH")}>ETH</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("WETH")}>WETH</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("USDC")}>USDC</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("USDT")}>USDT</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("WBTC")}>WBTC</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <div className="relative flex-grow">
                        <input
                          type="text"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="0.00"
                          className="w-full p-3 bg-[#0d1224] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-500 font-medium"
                          onClick={() => isWalletConnected && setAmount(balance)}
                        >
                          MAX
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Hyperlane specific parameters */}
                  <div className="space-y-4 p-4 bg-[#0d1224] rounded-lg border border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">Hyperlane Parameters</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-[#0d1224] border-gray-700">
                              <p className="max-w-xs">
                                These parameters configure how your cross-chain transaction is processed
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 text-xs text-blue-500">
                        Advanced
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400">Interchain Security Module</label>
                        <Select defaultValue="default">
                          <SelectTrigger className="h-8 text-xs bg-[#1a2238] border-gray-700">
                            <SelectValue placeholder="Select ISM" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0d1224] border-gray-700">
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="optimistic">Optimistic</SelectItem>
                            <SelectItem value="multisig">Multisig</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400">Gas Payment</label>
                        <Select defaultValue="default">
                          <SelectTrigger className="h-8 text-xs bg-[#1a2238] border-gray-700">
                            <SelectValue placeholder="Select gas payment" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0d1224] border-gray-700">
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 p-4 bg-[#0d1224] rounded-lg border border-gray-700">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Bridge Fee</span>
                      <span className="text-sm">0.0003 ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Estimated Gas</span>
                      <span className="text-sm">0.0015 ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Estimated Time</span>
                      <span className="text-sm">~10 minutes</span>
                    </div>
                  </div>
                  <Button
                    className="w-full py-6 text-lg font-bold bg-[#2563eb] hover:bg-[#1d4ed8]"
                    disabled={!isWalletConnected || !amount || txStatus === "pending"}
                    onClick={handleBridge}
                  >
                    {!isWalletConnected
                      ? "Connect Wallet"
                      : !amount
                        ? "Enter Amount"
                        : txStatus === "pending"
                          ? "Processing..."
                          : `Bridge ${selectedToken} to ${getChainName(destinationChain)}`}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-[#0d1224] py-5 px-5 text-center text-[#a0aec0] text-sm mt-auto">
        &copy; 2025 LayerLeap. All rights reserved.
      </footer>
    </div>
  )
}
