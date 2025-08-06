"use client"
import React ,{useState,useEffect,useCallback} from 'react'
import {useCoinmarketContext} from "@/context/context"
import btc from "../../../public/assets/btc.png"

export default function CMCTable() {
    const { getTopTenCoins } = useCoinmarketContext()
    let [coinData,setCoinData] = useState([null])


    useEffect(()=>{
        setData()
    },[])
    const setData = useCallback(async ()=>{
        try {
            let apiResponse = await getTopTenCoins()
            let filteredResponse = []

            for (let i = 0; i < apiResponse.length; i++) {
                const element = apiResponse[i];
                if(element.cmc_rank<=10){
                    filteredResponse.push(element)
                }
            }
            setCoinData(filteredResponse)
        } catch (error) {
            console.log(error);
            
        }
    },[getTopTenCoins])
    console.log(coinData,2222);
    
  return (
    <div>CMCTable</div>
  )
}
