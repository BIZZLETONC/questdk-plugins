import { type MintActionParams } from '@rabbitholegg/questdk'
import { Chains, type TestParams } from '@rabbitholegg/questdk-plugin-utils'

export const COOP_MINT: TestParams<MintActionParams> = {
  transaction: {
    chainId: 8453, // BASE
    from: '0x3c2736f995535b5a755f3ce2beb754362820671e',
    hash: '0x99e6b386a7d7eb36f1a6a7f5a60b7b3de53dc6ad0a23dc0a35a4c46ac054e339',
    input:
      '0x359f130200000000000000000000000004e2516a2c207e84a1839755675dfd8ef6302f0a0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000512b55b00d744fc2edb8474f223a7498c3e5a7ce00000000000000000000000000000000000000000000000000000000000000200000000000000000000000003c2736f995535b5a755f3ce2beb754362820671e',
    to: '0x7cac19a3ac8ad29f2c1cea4ad0a16135b969c52c',
    value: '8000000000000000', // 0.004 ETH
  },
  params: {
    chainId: Chains.BASE,
    contractAddress: '0x7cac19a3ac8ad29f2c1cea4ad0a16135b969c52c',
    recipient: '0x3c2736f995535b5a755f3ce2beb754362820671e',
    tokenId: 1,
    amount: 2,
  },
}

export const EXPECTED_ENCODED_DATA_1155 =
  ''
