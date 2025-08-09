"use client"
import { useWeb3 } from '@/context/web3Provider'
import React from 'react'
import { coins } from '@/lib/constants'

const styles = {
    modal: `w-screen h-screen bg-gray-900/90 z-10 fixed top-0 left-0 flex items-center justify-center`,
    modalContent: `bg-white rounded-lg p-3 w-max w-1/3`,
    input: `w-full p-2 border rounded-lg mb-5 border-gray-600/50 outline-none`,
    button: `bg-[#6188FF] p-2 px-5 rounded-lg text-white hover:opacity-50`,
    label: `font-bold text-3xl`,
    closeModalButton: `hover:text-red-300 text-gray-600 cursor-pointer`,
}
export default function SwapCryptoModal() {
    const {
        openBuyCryptoModal,
        setOpenBuyCryptoModal,
        mint,
        amount,
        setAmount,
        fromToken,
        setFromToken,
        toToken,
        setToToken,
    } = useWeb3()
    return (
        openBuyCryptoModal && (
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className='flex items-center justify-between'>
                        <p className={styles.label}>Swap your crypto</p>
                        <p className={styles.closeModalButton} onClick={() => {
                            setOpenBuyCryptoModal(false)
                            setAmount(0)
                            setFromToken('')
                            setToToken('')
                        }}
                        >close &times;</p>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="fromToken" className='block mb-2 ml-2'>From</label>
                        <select name="fromToken" className={styles.input} onChange={(e) => setFromToken(e.target.value)} aria-placeholder='Token to swap' value={fromToken}>
                            {coins.map((coin, index) => (
                                <option key={index} value={coin.name}>{coin.name}</option>
                            ))}
                            <option value={"ETH"}>ETH</option>
                        </select>
                        <label htmlFor="toToken" className='block mb-2 ml-2'>To</label>
                        <select name="toToken" className={styles.input} onChange={(e) => setToToken(e.target.value)} aria-placeholder='Token to swap' value={toToken}>
                            {coins.map((coin, index) => (
                                <option key={index} value={coin.name}>{coin.name}</option>
                            ))}
                        </select>
                        <input type="number" name="amount" className={styles.input} onChange={(e) => setAmount(parseFloat(e.target.value))} value={amount} />
                        <button className={styles.button} onClick={mint}>Swap</button>
                    </div>
                </div>
            </div>
        )
    )
}
