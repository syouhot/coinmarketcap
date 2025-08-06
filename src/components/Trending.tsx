"use client"
import React, { useState } from 'react'
import fire from '../../public/assets/fire.png'
import btc from '../../public/assets/btc.png'
import usdt from '../../public/assets/usdt.png'
import gainers from '../../public/assets/gainers.png'
import recent from '../../public/assets/recent.png'
import ReactSwitch from "react-switch"
import Rate from "@/components/cmc-table/Rate"
import TrendingCard from './TrendingCard'
const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1:"text-3xl font-bold",
    flexCenter: `flex items-center`
}
const trendingData = [
    {
        number:1,
        symbol:"BTC",
        name:"Bitcoin",
        icon:btc,
        isIncrement:true,
        rate:"2.34%"
    },
    {
        number:2,
        symbol:"USDT",
        name:"Tether",
        icon:usdt,
        isIncrement:false,
        rate:"9.23%"
    },
    {
        number:3,
        symbol:"BTC",
        name:"Bitcoin",
        icon:btc,
        isIncrement:true,
        rate:"2.34%"
    },
]
export default function Trending() {
    const [checked, setChecked] = useState(false)
    return (
        <div className='text-white px-4'>
            <div className={styles.trendingWrapper}>
                <div className='flex justify-between'>
                    <h1 className={styles.h1}>Todays Crytocurrency Price by Market Cap</h1>
                    <div className='flex'>
                        <p className='text-gray-400'>Highlights &nbsp;</p>
                        <ReactSwitch
                            checked={checked} 
                            onChange={() => { setChecked(!checked) }}
                        />
                    </div>
                </div>
                <br />
                <div className='flex'>
                    <p className='text-gray-400'>The global crypto market cap is $1.74T, a</p>
                    <span>
                        <Rate isIncrement={true} rate="0.53"/>
                    </span>
                    <p className='text-gray-400'> &nbsp; decrease over the last day. <span className='underline'>Read More</span></p>
                </div>
                <br />
                <div className={styles.flexCenter}>
                    <TrendingCard title="Trending" icon={fire} trendingData={trendingData}/>
                    <TrendingCard title="Biggest Gainers" icon={gainers} trendingData={trendingData}/>
                    <TrendingCard title="Recently Added" icon={recent} trendingData={trendingData}/>
                </div>
            </div>
        </div>
    )
}
