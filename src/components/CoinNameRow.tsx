import React from 'react'
import Image, { StaticImageData } from 'next/image'
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
  coinNameRow: `flex items-center`,
  buyButton: `bg-[#1a1f3a] text-[#6188ff] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
}
export default function CoinNameRow({ name, icon, clicked }: { name: string, icon: StaticImageData, clicked: () => void }) {
  const coinIcon = () => {
    switch (name) {
      case 'Bitcoin':
        return (
          <Image src={btc} className='rounded-full' alt={name} width={20} height={20} />
        )
      case 'Ethereum':
        return (
          <Image src={eth} className='rounded-full' alt={name} width={20} height={20} />
        )
      case 'Tether':
        return (
          <Image src={usdt} className='rounded-full' alt={name} width={20} height={20} />
        )
      case 'BNB':
        return (
          <Image src={bnb} className='rounded-full' alt={name} width={20} height={20} />
        )
      case 'USD Coin':
        return (
          <Image src={usdc} className='rounded-full' alt={name} width={20} height={20} />
        )
      case 'Terra':
        return (
          <Image src={tera} className='rounded-full' alt={name} width={20} height={20} />
        )
      case 'XRP':
        return (
          <Image src={xrp} className='rounded-full' alt={name} width={20} height={20} />
        )
      case 'Solana':
        return (
          <Image src={solana} className='rounded-full' alt={name} width={20} height={20} />
        )
      case 'Avalanche':
        return (
          <Image src={avalanche} className='rounded-full' alt={name} width={20} height={20} />
        )
      default:
        return (
          <Image src={btc} className='rounded-full' alt={name} width={20} height={20} />
        )
    }
  }
    return (
      <div className={styles.coinNameRow}>
        <div className='mr-3 flex' onClick={clicked}>
          <div className='MR-2'>{coinIcon()}</div>
          {name}
        </div>
        <p>
          {(name === "Bitcoin" || name === "Ethereum" || name === "Tether") ? (
            <span className={styles.buyButton}>Buy</span>
          ) : (
            <></>
          )}
        </p>
        {/* <Image src={icon} alt={name} width={20} height={20} />
      <p>{name}</p> */}
      </div>
    )
  }
