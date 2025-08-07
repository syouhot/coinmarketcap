import { StaticImageData } from "next/image";

export interface trendingDataInterface {
    number: number,
    symbol: string,
    name: string,
    icon?: StaticImageData,
    isIncrement: boolean,
    rate: string
}


export interface cmcTableDataInterface {
    startNum: number,
    coinSymbol: string,
    coinName: string,
    coinIcon: StaticImageData,
    showBuy: boolean,
    hRate: number | string,
    dRate: number | string,
    hRateIsIncrement: boolean,
    dRateIsIncrement: boolean,
    price: string,
    marketCapValue: string,
    valumeCryptoValue: string,
    volumeValue: string,
    circulatingSupply: string
}
// export interface cmcDataInterface {
//     cmc_rank: number,
//     name: string,
//     symbol: string,
//     quote: {
//         USD: {
//             price: string,
//             market_cap: string,
//             volume_24h: string,
//             percent_change_7d: number,
//             percent_change_24H: number,
//         }
//     }
//     total_supply:string,
//     circulating_supply: string
// } 
export interface cmcDataInterface {
    cmc_rank: number,
    name: string,
    symbol: string,
    quote: {
        USD: {}
    }
    total_supply: string,
    circulating_supply: string
}

export interface cmcpriceConverterInterface {
    from: string,
    to: string,
    fromSymbol: string,
    toSymbol: string,
    fromLogo: StaticImageData,
    toLogo: React.JSX.Element,
    price:string
}
export interface chatCardInterface { 
    content: string,
    timestamp: string,
    sender: string,
    bullish: boolean,
    senderAvatar: StaticImageData,
    likes: number,
    comments: number
}
export interface coinDetailsInterface { 
    coinName: string,
    price: string,
    coinSymbol: string
}