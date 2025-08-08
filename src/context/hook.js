import { providers } from "ethers"
import { useMemo } from "react"
import { useClient, useConnectorClient } from "wagmi"


export function useEthersProvider({ chainId } = {}) {
    const client = useClient({ chainId })
    return useMemo(() => {
        return client ? clientToProvider(client) : undefined
    }, [client])
}

export function clientToProvider(client) {
    const { chain, transport } = client
    const network = {
        chainId: chain.id,
        name: chain.name,
    }
    return new providers.JsonRpcProvider(transport.url, network);
}
export function clientToSigner(client) {
    const {chain, transport, account} = client
    const network = {
        chainId: chain.id,
        name: chain.name,
    }
    const provider = new providers.JsonRpcProvider(transport.url, network);
    return provider.getSigner(account.address)
}

export function useEthersSigner({ chainId } = {}) {
    const {data:client} = useConnectorClient({ chainId })
    return useMemo(() => {
        return client ? clientToSigner(client) : undefined
    }, [client])
}

// export function clientToSigner(client) {
//     const { account, chain, transport } = client;
//     const network = {
//         chainId: chain.id,
//         name: chain.name,
//     }
//     const provider = new providers.Web3Provider(transport, network);
//     const signer = provider.getSigner(account.address);
//     return signer;
// }