"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { useAccount, useConnect, useChainId, useBalance } from "wagmi";
import { ethers } from "ethers";
import {
    dogeAbi,
    daiAbi,
    linkAbi,
    usdcAbi,
    swapAbi,
    dogeAddress,
    linkAddress,
    daiAddress,
    usdcAddress,
    swapAddress,
    coins,
} from '../lib/constants'
import { useEthersProvider, useEthersSigner } from "./hook";

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
    const { address, isConnected } = useAccount();
    const chainId = useChainId()
    const provider = useEthersProvider({chainId})
    const signer = useEthersSigner({chainId})

    const [currentAccount, setCurrentAccount] = useState('')
    const [openBuyCryptoModal, setOpenBuyCryptoModal] = useState(false)
    const [fromToken, setFromToken] = useState('ETH')
    const [toToken, setToToken] = useState(coins[0].name)
    const [amount, setAmount] = useState('')

    const openModal = ()=>{
        console.log(1111);
        
        setOpenBuyCryptoModal(true)
    }
    useEffect(()=>{
        console.log(provider,111)
        console.log(signer,222)
    },[provider,signer])
    useEffect(() => {
        console.log("链接地址", address);
        console.log(isConnected);
        if (isConnected) {
            setCurrentAccount(address)
        }

    }, [address, isConnected])

    const getContractAddress = () => {
        if (fromToken === 'Dai') return daiAddress
        if (fromToken === 'DogeCoin') return dogeAddress
        if (fromToken === 'Link') return linkAddress
        if (fromToken === 'Usdc') return usdcAddress
    }
    const getFromAbi = () => {
        if (fromToken === 'Dai') return daiAbi
        if (fromToken === 'DogeCoin') return dogeAbi
        if (fromToken === 'Link') return linkAbi
        if (fromToken === 'Usdc') return usdcAbi
    }
    const getToAddress = () => {
        if (toToken === 'Dai') return daiAddress
        if (toToken === 'DogeCoin') return dogeAddress
        if (toToken === 'Link') return linkAddress
        if (toToken === 'Usdc') return usdcAddress
    }

    const getToAbi = () => {
        if (toToken === 'Dai') return daiAbi
        if (toToken === 'DogeCoin') return dogeAbi
        if (toToken === 'Link') return linkAbi
        if (toToken === 'Usdc') return usdcAbi
    }

    const mint = async () => {
        if (!isConnected) return
        try {
            if (fromToken === 'ETH') {//铸币
                const contractAddress = getToAddress()
                const abi = getToAbi()
                const contract = new ethers.Contract(contractAddress, abi, signer);
                const tx = await contract.mint(address,ethers.utils.parseEther(amount.toString()))
                const receipt = await tx.wait()
                if(receipt.status===1){
                    console.log("mint操作成功");    
                }
            } else {
                swapTokens()
            }
        } catch (error) {
            console.log(error.message);

        }
    }
    const swapTokens =async ()=>{
        try {
            if (!isConnected) return
            if (fromToken == toToken) return alert("You cannot swap the same token")
            const fromAddress = getContractAddress()
            const toAddress = getToAddress()
            
            const fromContract = new ethers.Contract(fromAddress,getFromAbi(),signer)
            const swapAmount = ethers.utils.parseEther(amount.toString())

            const swapContract = new ethers.Contract(swapAddress,swapAbi,signer)
            const tx  = await swapContract.swap(fromAddress,toAddress,swapAmount)
            const receipt = await tx.wait()
            if(receipt.status===1){
                console.log("swap操作成功");    
            }
            //授权
            // const txApprove = await fromContract.approve(swapAddress,swapAmount)
            // const approveReceipt = await txApprove.wait()
            // if(approveReceipt.status===1){
            //     console.log("approve操作成功");    
            //     const swapContract = new ethers.Contract(swapAddress,swapAbi,signer)
            //     const tx = await swapContract.swap(address,fromAddress,toAddress,swapAmount,swapAmount)
            //     const receipt = await tx.wait()
            //         if(receipt.status===1){
            //             console.log("swap操作成功");    
            //         }
            // }
            

        } catch (error) {
            console.log(error.message)
        }
    }
    const value = {
        getContractAddress,
        getFromAbi,
        getToAddress,
        getToAbi,
        mint,
        swapTokens,
        setFromToken,
        setToToken,
        amount,
        setAmount,
        openModal,
        openBuyCryptoModal,
        setOpenBuyCryptoModal

    }
    return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>
}

export const useWeb3 = () => {
    const context = useContext(Web3Context)
    if (context === undefined) {
        throw new Error("useWeb3 must be used within a Web3Provider");
    }
    return context;
}