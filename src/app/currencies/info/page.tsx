"use client"
import React from 'react'
import Header from '@/components/Header'
import solana from '../../../../public/assets/solana.png'
import Usd from '../../../../public/assets/svg/usd'
import { useEffect, useState } from "react"
import { Params } from 'next/dist/server/request/params'
import { useSearchParams } from 'next/navigation'
import CMCpriceConverter from '@/components/CMCpriceConverter'
import Graph from '@/components/Graph'
import Chat from '@/components/Chat'

const styles = {
    activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
    tabItem: "px-2",
    tabContainer: "items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm flex",
    info: "min-h-screen",
    main: "text-white mx-auto max-w-screen-2xl",
    flexStart: "flex items-start",
    flexBetween: "flex justify-between",
    flexBetweenCenter: "flex justify-between items-center",
    tabContainerWrapper: "p-10 pl-0 pr-0 w-2/3",
    flexCenter: "flex items-center"
}
export default function page() {
    const searchParams = useSearchParams()

    const [coinName, setCoinName] = useState('')
    const [coinSymbol, setCoinSymbol] = useState('')
    const [price, setPrice] = useState("")


    const getURLData = async () => {
        setCoinName(searchParams.get('coin') || "")
        setCoinSymbol(searchParams.get('symbol') || "")
        setPrice(searchParams.get('price')?.toLocaleString() || "")
    }
    useEffect(() => {
        getURLData()
    }, [])

    return (
        <div className={styles.info}>
            <Header />
            <main className={styles.main}>
                <div className={styles.flexStart}>
                    <div className={styles.tabContainerWrapper}>
                        <div className={styles.flexBetween}>
                            <div className={styles.tabContainer}>
                                <p className={ styles.activeTab}>Price</p>
                                <p className={ styles.tabItem}>Market Cap</p>
                                <p className={ styles.tabItem}>Trading View</p>
                                <p className={ styles.tabItem}>History</p>
                            </div>
                            <div className={styles.tabContainer}>
                                <p className={styles.activeTab}>1D</p>
                                <p className={styles.tabItem}>2D</p>
                                <p className={styles.tabItem}>1M</p>
                                <p className={styles.tabItem}>3M</p>
                                <p className={styles.tabItem}>1Y</p>
                                <p className={styles.tabItem}>YTD</p>
                                <p className={styles.tabItem}>ALL</p>
                                <p className={styles.tabItem}>LOG</p>
                            </div>
                        </div>
                        <br />
                        <Graph />
                        <br />
                        <div className={styles.flexBetweenCenter}>
                            <div className='flex'>
                                <div className={styles.flexCenter}>
                                    <input type="checkbox" className='outline-none ' /> &nbsp; USD
                                </div>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <div className={styles.flexCenter}>
                                    <input type="checkbox" className='outline-none ' /> &nbsp; BTC
                                </div>
                            </div>
                            <p>
                                Want more data?{' '}
                                <span className='text-[#6188ff]'>Check out our API</span>
                            </p>
                        </div>
                        <br />
                        <br />
                        <CMCpriceConverter
                            from={coinName}
                            fromSymbol={coinSymbol}
                            fromLogo={solana}
                            toLogo={<Usd />}
                            price={price}
                            to="Uinted States Dollars"
                            toSymbol={"USD"}
                        />
                    </div>
                    <div className='pt-10 ml-5'>
                        <Chat />
                    </div>
                </div>
            </main>
        </div>
    )
}
