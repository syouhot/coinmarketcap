import { coinDetailsInterface } from '@/moduleInterface/module'
import React from 'react'
import converter from '../../public/assets/converter.png'
import btc from '../../public/assets/btc.png'
import eth from '../../public/assets/eth.png'
import usdc from '../../public/assets/usdc.png'
import usdt from '../../public/assets/usdt.png'
import cardano from '../../public/assets/cardano.png'
import xrp from '../../public/assets/xrp.png'
import tera from '../../public/assets/tera.png'
import solana from '../../public/assets/solana.png'
import avalanche from '../../public/assets/avalanche.png'
import bnb from '../../public/assets/bnb.png'


const styles = {
    coinDetails: `min-h-screen text-white`,
    coinDetailsLinks: `flex mt-3 flex-wrap`,
    greyBtn: `mr-3 mb-3 bg-slate-800 px-3 py-1 rounded-xl`,
    borderLeft: `ml-10 pl-5 w-full border-l border-gray-800`,
    title: `text-gray-400 whitespace-nowrap mr-2`,
    coinDetailsWrapper: `coin-details flex max-w-screen-2xl m-auto pt-20`,
    coinSymbol: `bg-slate-800 flex items-center px-2 rounded-xl`,
    coinInfo: `flex justify-between mt-10 p-4 border-t border-gray-800`,
    coinRates: `w-full flex items-start justify-between`,
    flexBetween: `flex justify-between`,
}
export default function CoinDetails({ coinName = '', coinSymbol = '', price }: coinDetailsInterface) {
    return (
        <div>CoinDetails</div>
    )
}
