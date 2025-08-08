import { createContext, useContext, useEffect, useState } from "react"
import { useAccount, useConnect, useChainId, useBalance } from "wagmi";
import {
    dogeAbi,
    daiAbi,
    linkAbi,
    usdcAbi,
    dogeAddress,
    linkAddress,
    daiAddress,
    usdcAddress,
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
    const [toToken, setToToken] = useState('')
    const [amount, setAmount] = useState('')


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
                const amount = ethers.utils.parseEther("0.01")
                const tx = await contract.mint(amount)
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
    const swapTokens = ()=>{
        try {
            if (!isConnected) return
            if (fromToken == toToken) return alert("You cannot swap the same token")
            const fromAddress = getContractAddress()
            const toAddress = getToAddress()
            
            // const fromContract = new ethers.Contract(fromAddress,getFromAbi(),signer)
            // //授权
            // await fromContract.approve()
            
            

        } catch (error) {
            console.log(error.message)
        }
    }
    const value = {

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