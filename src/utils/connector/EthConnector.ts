import { InjectedConnector } from "@web3-react/injected-connector"

const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/76a9bced16a247ad90be013274c3107b",
  4: "https://rinkeby.infura.io/v3/76a9bced16a247ad90be013274c3107b",
}

export const MetaMask = new InjectedConnector({
  supportedChainIds: [1, 4],
})