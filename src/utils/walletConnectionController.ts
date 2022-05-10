import Web3 from "web3"
import HttpService from "../utils/HttpService"
import {
    MetaMask,
} from "../utils/connector/EthConnector"
import { AbstractConnector } from "@web3-react/abstract-connector"

const allProviders = [
    {
        key: "MetaMask",
        provider: MetaMask,
        type: "Ethereum",
    },
]

export class walletConnectionController {
    private httpservice
    private web3React
    constructor(web3React: any) {
        this.httpservice = new HttpService()
        this.web3React = web3React

        // if (typeof window.ethereum !== "undefined") {
        //     const { ethereum } = window
        //     ethereum.on("chainChanged", () => {
        //       window.location.reload()
        //     })
        //   }
    }

    async intialize() {

        try {
            const currentwallet = JSON.parse(
                localStorage.getItem("BLOCKCHAIN_STATE") || "{}"
            )
            const getProvider: any = allProviders.find(
                (item) => item.key === currentwallet.walletConnectionType
            )
            this.web3React.activate(getProvider.provider, undefined, true)
                .then(() => {
                    const currentProvider: any = allProviders.find(
                        (item) => item.provider === getProvider.provider
                    )
                    const blockchainState = {
                        BLOCKCHAIN_STATE: currentProvider.type,
                        walletConnectionType: currentProvider.key,
                    }
                })
                .catch((error: any) => {
                    console.error("error on intialize wallet", error)
                })
        } catch (error) {
            console.error("error on intialize wallet", error)
        }
    }

    async connect(provider: AbstractConnector) {
        try {
            await this.web3React.activate(provider)
            const currentProvider = allProviders.find(
                (item) => item.provider === provider
            )

            try {
                if (provider === MetaMask) {
                    await window.ethereum
                        .request({
                            method: "wallet_switchEthereumChain",
                            params: [{ chainId: "0x4" }],
                        })
                        .catch(async (error) => {
                            if (error.code === 4902) {
                                const chainId = Web3.utils.toHex(4)
                                const addChainEthereum = [
                                    {
                                        chainId,
                                        chainName: "Rinkeby",
                                        nativeCurrency: {
                                            name: "Ethereum",
                                            symbol: "ETH",
                                            decimals: 18,
                                        },
                                        rpcUrls: [
                                            "https://rinkeby.infura.io/v3/beb64dbe597141fcbcd23f61f10cfac0",
                                        ],
                                        blockExplorerUrls: [""],
                                    },
                                ]

                                await window.ethereum.request({
                                    method: "wallet_addEthereumChain",
                                    params: addChainEthereum,
                                })
                            }
                        })
                }
            } catch (error) {
                console.log(error)
            }

            const blockchainState = {
                BLOCKCHAIN_STATE: currentProvider?.type,
                walletConnectionType: currentProvider?.key,
            }
            localStorage.setItem("BLOCKCHAIN_STATE", JSON.stringify(blockchainState))
            //   if (window.ethereum.selectedAddress !== null) {
            //     await storeUserToserver(window.ethereum.selectedAddress)
            //   }
        } catch (ex) {
            return false
        }
    }

    async deactive() {
        try {
            this.web3React.deactivate()
            localStorage.removeItem("BLOCKCHAIN_STATE")
        } catch (ex) {
            console.log(ex)
        }
    }
}