import { Chains, type TestParams, createTestCase } from './utils'
import {
  GreaterThanOrEqual,
  type MintActionParams,
} from '@rabbitholegg/questdk'

const OP_SUPERMINTER: TestParams<MintActionParams> = {
  transaction: {
    chainId: 10,
    from: '0x6fdab5224d98f396eca460838a2ef1a219767bb7',
    to: '0x0000000000cf4558c36229ac0026ee16d3ae35cd',
    hash: '0x29635c012e7b62b918281ac6745b00055e5edc0c2a23d24589192f814a2341e0',
    input:
      '0x4a04a1c9000000000000000000000000000000000000000000000000000000000000002000000000000000000000000077570069ef75035b9d0a433c1627f7372b08939e000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000006fdab5224d98f396eca460838a2ef1a219767bb70000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    value: '777000000000000',
  },
  params: {
    chainId: Chains.OPTIMISM,
    contractAddress: '0x77570069ef75035b9d0a433c1627f7372b08939e',
    recipient: '0x6fdab5224d98f396eca460838a2ef1a219767bb7',
    amount: GreaterThanOrEqual(1),
  },
}

export const OP_SUPERMINTER_V2: TestParams<MintActionParams> = {
  transaction: {
    chainId: 10,
    from: '0xe8b8679c248307a37a2bd35dd43d2278ba346138',
    to: '0x000000000001a36777f9930aaeff623771b13e70',
    hash: '0x8700a2cd751f28f98ae62e0bceba075bc2be9353000569dadd1ff117b8575907',
    input:
      '0x4a04a1c900000000000000000000000000000000000000000000000000000000000000200000000000000000000000006112f85c9a804b3aeebb71a82040461d55b4e0e300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e8b8679c248307a37a2bd35dd43d2278ba3461380000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    value: '777000000000000',
  },
  params: {
    chainId: Chains.OPTIMISM,
    contractAddress: '0x6112f85c9a804b3aeebb71a82040461d55b4e0e3',
    recipient: '0xe8b8679c248307a37a2bd35dd43d2278ba346138',
    amount: GreaterThanOrEqual(1),
  },
}

export const OP_LIMITED_MINT: TestParams<MintActionParams> = {
  // https://www.tdly.co/shared/simulation/0672cdfa-00f8-4f17-ba4f-007531bb2dcf
  transaction: {
    chainId: 10,
    from: '0xa99f898530df1514a566f1a6562d62809e99557d',
    to: '0x000000000001a36777f9930aaeff623771b13e70',
    input:
      '0x4a04a1c90000000000000000000000000000000000000000000000000000000000000020000000000000000000000000cc1ec4b54b67600a253c55f494a16b75a1f31e5a00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    value: '2777000000000000',
  },
  params: {
    chainId: Chains.OPTIMISM,
    contractAddress: '0xcc1ec4b54b67600a253c55f494a16b75a1f31e5a',
    recipient: '0xa99f898530df1514a566f1a6562d62809e99557d',
    amount: GreaterThanOrEqual(1),
    tokenId: 1,
  },
}

export const TEST_MINT: TestParams<MintActionParams> = {
  // https://www.tdly.co/shared/simulation/0672cdfa-00f8-4f17-ba4f-007531bb2dcf
  transaction: {
    chainId: 8453,
    from: '0xE1031A49087B66C0E018382Ef2C879bD659694DB',
    to: '0x000000000001a36777f9930aaeff623771b13e70',
    hash: '0xc7439df5240b65647aa9146acc8e5696e689668da5a09a72f0e41c3b1bd080c9',
    input:
      '0x4a04a1c900000000000000000000000000000000000000000000000000000000000000200000000000000000000000008c45c0bac5ddecea7f7c8ed7bba1cb2d1bc2df4700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e1031a49087b66c0e018382ef2c879bd659694db0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    value: '777000000000000',
  },
  params: {
    chainId: Chains.BASE,
    contractAddress: '0x8C45C0bAC5DdEceA7F7C8eD7bBA1cb2D1Bc2df47',
    recipient: '0xE1031A49087B66C0E018382Ef2C879bD659694DB',
    amount: GreaterThanOrEqual(1),
  },
}


export const passingTestCases = [
  createTestCase(OP_SUPERMINTER, 'when minting superminter v1 contract'),
  createTestCase(OP_SUPERMINTER_V2, 'when minting superminter v2 contract'),
  createTestCase(OP_LIMITED_MINT, 'when minting limited edition'),
  createTestCase(TEST_MINT, 'when minting limited edition'),
]

export const failingTestCases = [
  createTestCase(OP_SUPERMINTER, 'when chainId is incorrect', {
    chainId: Chains.ARBITRUM_ONE,
  }),
  createTestCase(OP_SUPERMINTER_V2, 'when contractAddress is not correct', {
    contractAddress: '0x6806411765Af15Bddd26f8f544A34cC40cb9838B',
  }),
  createTestCase(OP_SUPERMINTER_V2, 'when amount is insufficient', {
    amount: GreaterThanOrEqual(10),
  }),
  createTestCase(
    OP_SUPERMINTER_V2,
    'when mint is limited and free edition is minted',
    {
      tokenId: 1,
    },
  ),
]

export const EXPECTED_ENCODED_DATA =
  '0x4a04a1c90000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000001a36777f9930aaeff623771b13e70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006ecbe1db9ef729cbe972c83fb886247691fb6beb000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000'
