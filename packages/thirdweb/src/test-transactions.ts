import { type MintActionParams } from '@rabbitholegg/questdk'
import {
  createTestCase,
  type TestParams,
} from '@rabbitholegg/questdk-plugin-utils'

export const MINT_721: TestParams<MintActionParams> = {
  transaction: {
    chainId: 8453,
    from: '0xd3630ebe1225fd074106fb09260ba4d4cbd30f74',
    hash: '0xfa2097f242bdf8bf231f8e23c83a5051ca15c6a0ae6684824d9c2ee8bfef890c',
    input:
      '0x84bb1e42000000000000000000000000d3630ebe1225fd074106fb09260ba4d4cbd30f740000000000000000000000000000000000000000000000000000000000000001000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000002c2ad68fd900000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000080ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000002c2ad68fd9000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    to: '0xc7ded9c1bd13a19a877d196eeea9222ff6d40736',
    value: '777000000000000',
  },
  params: {
    chainId: 8453,
    contractAddress: '0xc7ded9c1bd13a19a877d196eeea9222ff6d40736',
    recipient: '0xd3630ebe1225fd074106fb09260ba4d4cbd30f74',
  },
}

export const MINT_1155: TestParams<MintActionParams> = {
  transaction: {
    chainId: 80001,
    from: '0x462E235e34A830Ea9ceb176E383A6ED7652DF944',
    hash: '0x6271a978d4f904c3ebbe5f5e9506620d98e4a1328cfb7f2a70303d1e557be64f',
    input:
      '0x57bc3d78000000000000000000000000462e235e34a830ea9ceb176e383a6ed7652df94400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    to: '0xDC8017E1E20BFF80a49B0B92F719f00170013B4F',
    value: '0',
  },
  params: {
    chainId: 80001,
    contractAddress: '0xDC8017E1E20BFF80a49B0B92F719f00170013B4F',
    recipient: '0x462E235e34A830Ea9ceb176E383A6ED7652DF944',
    tokenId: 0,
  },
}

export const passingTestCases = [
  createTestCase(MINT_721, 'when mint ERC721'),
  createTestCase(MINT_1155, 'when mint ERC1155'),
]

export const failingTestCases = [
  createTestCase(MINT_721, 'when chainId is not correct', { chainId: 10 }),
  createTestCase(MINT_1155, 'when tokenId is not correct', { tokenId: 1 }),
]
