import { useState, useEffect } from "react"
import CoinDetails from "@/components/CoinDetails"
import Header from "@/components/Header"
import { useSearchParams } from "next/navigation"

const Price = () => {
    const searchParams = useSearchParams()
    const [coinName, setCoinName] = useState('')
    const [coinSymbol, setCoinSymbol] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setCoinName(searchParams.get('coin') || "");
        setPrice(Number(searchParams.get('price') || 0).toLocaleString());
        setCoinSymbol(searchParams.get('symbol') || "");
    }

    return (
        <div>
            <Header />
            <CoinDetails coinName={coinName} price={price} coinSymbol={coinSymbol} />
        </div>
    )
}
