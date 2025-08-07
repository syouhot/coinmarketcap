"use client"
import React, { useState, useEffect, useCallback } from 'react'
import { useCoinmarketContext } from "@/context/context"
import btc from "../../../public/assets/btc.png"
import data from "@/utils/data"
import CMCTableHeader from './CMCTableHeader'
import dynamic from 'next/dynamic';
import { cmcDataInterface } from '@/moduleInterface/module'
const CMCTableRow = dynamic(
    () => import('./CMCTableRow'),
    { ssr: false } // 禁用服务端渲染
);
export default function CMCTable() {
    const { getTopTenCoins } = useCoinmarketContext()
    let [coinData, setCoinData] = useState([{ quote: { USD: { } } }])


    useEffect(() => {
        setData()
    }, [])
    const setData = useCallback(async () => {
        try {
            let apiResponse = await getTopTenCoins()
            // let apiResponse = data.data
            // console.log(apiResponse);

            let filteredResponse = []

            for (let i = 0; i < apiResponse.length; i++) {
                const element = apiResponse[i];
                if (element.cmc_rank <= 10) {
                    filteredResponse.push(element)
                }
            }
            setCoinData(filteredResponse)
        } catch (error) {
            console.log(error);

        }
    }, [getTopTenCoins])
    console.log(coinData, 2222);

    return (
        <div className='text-white font-bold'>
            <div className='mx-auto max-w-screen-2xl'>
                <table className='w-full'>
                    <CMCTableHeader />
                    {coinData && coinData ? (coinData.map((coin, index) => (
                            <CMCTableRow key={index} startNum={coin.cmc_rank} coinName={coin.name} coinSymbol={coin.symbol} coinIcon={btc} showBuy={true} hRate={coin.quote.USD.percent_change_24h} dRate={coin.quote.USD.percent_change_7d} hRateIsIncrement={true} dRateIsIncrement={true} price={coin.quote.USD.price} marketCapValue={coin.quote.USD.market_cap} valumeCryptoValue={coin.quote.USD.volume_24h} volumeValue={coin.total_supply} circulatingSupply={coin.circulating_supply} />
                    )
                    )) : (
                        <></>
                    )}
                </table>
            </div>
        </div>
    )
}
