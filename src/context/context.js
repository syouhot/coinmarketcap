import React, { createContext,useState,useEffect, useContext } from "react"

const CoinmarketContext = createContext()

export const CoinmarketProvider = ({children})=>{
    const getTopTenCoins = async ()=>{
        try {
            const res = await fetch("/api/getTopTen",{next:{revalidate:3600}})
            const data = await res.json() 
            
            return data.data.data
        } catch (error) {
            console.log(error.message);
            
        }
    }
    const value = {
        getTopTenCoins
    }
    return (
        <CoinmarketContext.Provider value={value}>
            {children}
        </CoinmarketContext.Provider>
    )
}
export const useCoinmarketContext = ()=>{
    const context = useContext(CoinmarketContext)
    return context
}