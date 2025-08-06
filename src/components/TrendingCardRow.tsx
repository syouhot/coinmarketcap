import React from 'react'
import Rate from "@/components/cmc-table/Rate"
import Image from "next/image"
import { trendingDataInterface } from '@/moduleInterface/module'

const styles = {
trendingCardRow:"flex items-center justify-between mb-5 text-[0.93rem]",

}

export default function TrendingCardRow({number,symbol,name,icon,isIncrement,rate}:trendingDataInterface) {
  return (
    <div className={styles.trendingCardRow}>
        <p className='opacity-40'>{number}</p>
        <div className='w-full flex'>
            <div className='mx-5'>
                {icon && <Image src={icon} width={20} height={20} alt="icon"/>}
            </div>
            <p className='font-bold'>
                {name}
                <span className='text-gray-400 ml-1'>{symbol}</span>
            </p>
        </div>
        <Rate isIncrement={isIncrement} rate={rate}/>
    </div>
  )
}
