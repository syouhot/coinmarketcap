"use client"
import { darkTheme, lightTheme, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { mainnet, polygon, sepolia, optimism, arbitrum, base } from 'viem/chains';
import { WagmiProvider } from 'wagmi'
import { MoralisProvider } from 'react-moralis';
import { CoinmarketProvider } from "@/context/context"


const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, sepolia, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
export default function RainbowKitConfigProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    // <WagmiProvider config={config}>
    //   <QueryClientProvider client={queryClient}>
    //     <RainbowKitProvider theme={{
    //       lightMode: lightTheme(
    //         {
    //           accentColor: "#edf1f7",
    //           accentColorForeground: '#7f8fa2',
    //           borderRadius: 'large',
    //         }
    //       ),
    //       darkMode: darkTheme()
    //     }}>
    //       {children}
    //     </RainbowKitProvider>
    //   </QueryClientProvider>
    // </WagmiProvider >




    <MoralisProvider serverUrl={
      process.env.NEXT_PUBLIC_SERVER!}
      appId={process.env.NEXT_PUBLIC_APP_ID!}>
      <CoinmarketProvider>
        {children}
      </CoinmarketProvider>
    </MoralisProvider>
  )
}

