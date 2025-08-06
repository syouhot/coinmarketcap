import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { trendingDataInterface } from '@/moduleInterface/module'
import MoreButton from './MoreButton'
import TrendingCardRow from './TrendingCardRow'

const styles = {
    trendingCard: "w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3",
    trendingCardWrapper:"flex items-center justify-between",
}
interface TrendingCardInterface {
    title: string,
    icon: StaticImageData,
    trendingData: trendingDataInterface[]
}
export default function TrendingCard({ title, icon, trendingData }: TrendingCardInterface) {
    return (
        <div className={styles.trendingCard}>
            <div className={styles.trendingCardWrapper}>
                <div className='flex'>
                    {icon && <Image src={icon} width={27} height={27} alt='icon' />}
                    &nbsp;&nbsp;
                    <p className='font-bold'>{title}</p>
                </div>
                <MoreButton/>
            </div>
            <br />
            {trendingData.map((item,index)=>(
                <TrendingCardRow key={index} number={item.number} symbol={item.symbol} name={item.name} icon={item.icon} isIncrement={item.isIncrement} rate={item.rate}/>
            ))}
        </div>
    )
}
