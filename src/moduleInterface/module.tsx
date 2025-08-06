import { StaticImageData } from "next/image";

export interface trendingDataInterface {
    number: number,
    symbol: string,
    name: string,
    icon?: StaticImageData,
    isIncrement: boolean,
    rate: string
} 


