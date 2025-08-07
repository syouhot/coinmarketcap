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
import Image from 'next/image'
import { cmcpriceConverterInterface } from '@/moduleInterface/module'

const styles = {
    converter: `flex  items-center justify-between bg-[#171924] border border-gray-500/10 px-5 py-5 rounded-xl`,
    converButton: `bg-[#1d4ed8] p-2 px-5 w-min rounded-xl mt-5 cursor-pointer hover:opacity-60`,

}

export default function CMCpriceConverter({ from, to, fromSymbol, toSymbol, fromLogo, toLogo, price }: cmcpriceConverterInterface) {

    const coinIcon = () => {
        switch (from) {
            case 'Bitcoin':
                return (
                    <Image src={btc} className='rounded-full' alt={from} width={50} height={50} />
                )
            case 'Ethereum':
                return (
                    <Image src={eth} className='rounded-full' alt={from} width={50} height={50} />
                )
            case 'Tether':
                return (
                    <Image src={usdt} className='rounded-full' alt={from} width={50} height={50} />
                )
            case 'BNB':
                return (
                    <Image src={bnb} className='rounded-full' alt={from} width={50} height={50} />
                )
            case 'USD Coin':
                return (
                    <Image src={usdc} className='rounded-full' alt={from} width={50} height={50} />
                )
            case 'Terra':
                return (
                    <Image src={tera} className='rounded-full' alt={from} width={50} height={50} />
                )
            case 'XRP':
                return (
                    <Image src={xrp} className='rounded-full' alt={from} width={50} height={50} />
                )
            case 'Solana':
                return (
                    <Image src={solana} className='rounded-full' alt={from} width={50} height={50} />
                )
            case 'Avalanche':
                return (
                    <Image src={avalanche} className='rounded-full' alt={from} width={50} height={50} />
                )
            default:
                return (
                    <Image src={btc} className='rounded-full' alt={from} width={50} height={50} />
                )
        }
    }
    return (
        <div>
            <h2>{fromSymbol} to {toSymbol} Converter</h2>
            <br />
            <div className={styles.converter}>

                <div className='flex'>
                    <div className='avatar-container'>
                        {fromLogo && fromLogo ? coinIcon() : <div></div>}
                    </div>
                    &nbsp;&nbsp;
                    <div>
                        <p>{fromSymbol}</p>
                        <h4>{from}</h4>
                    </div>
                </div>
                <div className='flex'>
                    <p className='text-3xl'>1</p>
                    &nbsp;&nbsp;
                    <div>
                        <Image alt='' src={converter} width={40} height={40} />
                    </div>
                    &nbsp;&nbsp;
                    <div className='flex'>
                        {toLogo}
                        &nbsp;&nbsp;
                        <div>
                            <p>{toSymbol}</p>
                            <h4>{to}</h4>
                        </div>
                    </div>
                </div>
                <p className='text-3xl'>${price}</p>

            </div>
            <div className={styles.converButton} >Convert</div>
        </div>
    )
}
