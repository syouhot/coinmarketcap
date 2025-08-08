"use client"
import { darkTheme, lightTheme, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { mainnet, polygon, sepolia, optimism, arbitrum, base, hardhat } from 'viem/chains';
import { WagmiProvider } from 'wagmi'
import { MoralisProvider } from 'react-moralis';
import { CoinmarketProvider } from "@/context/context"
import { Web3Provider } from "@/context/web3Provider"

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: '68e753dff86fd5f078a9f4cba672b339',
  chains: [mainnet, polygon, sepolia, optimism, arbitrum, base, hardhat],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
export default function RainbowKitConfigProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={{
          lightMode: lightTheme(
            {
              accentColor: "#edf1f7",
              accentColorForeground: '#7f8fa2',
              borderRadius: 'large',
            }
          ),
          darkMode: darkTheme()
        }}>
          <Web3Provider>
            <CoinmarketProvider>
              {children}
            </CoinmarketProvider>
          </Web3Provider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider >




    //   <MoralisProvider serverUrl={
    //     process.env.NEXT_PUBLIC_SERVER!}
    //     appId={process.env.NEXT_PUBLIC_APP_ID!}>
    //     <CoinmarketProvider>
    //       {children}
    //     </CoinmarketProvider>
    //   </MoralisProvider>
  )
}

