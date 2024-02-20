import { type OptionsActionParams, OrderType } from "@rabbitholegg/questdk";
import { GreaterThanOrEqual } from "@rabbitholegg/questdk";
import { Chains, createTestCase, type TestParams } from "./utils";
import { parseEther, parseUnits, zeroAddress } from "viem";

export const MUX_ETH_MARKET_LONG: TestParams<OptionsActionParams> = {
  // https://www.tdly.co/shared/simulation/6932c3e3-8f9a-4a30-acc2-8959f1ae7554
  transaction: {
    chainId: 42161,
    to: "0xa19fd5ab6c8dcffa2a295f78a5bb4ac543aaf5e3",
    from: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    input:
      "0x4786055f865c301c46d64de5c9b124ec1a97ef1efc1bcbd1030a0100000000000000000000000000000000000000000000000000000000000000000000038d7ea4c680000000000000000000000000000000000000000000000000009fbd82c3c72240000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000065c6b238",
    value: "1000000000000000",
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: zeroAddress,
    amount: GreaterThanOrEqual(parseEther("0.001")),
    recipient: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    orderType: OrderType.Market,
  },
};

const MUX_ARB_LIMIT_LONG: TestParams<OptionsActionParams> = {
  // https://www.tdly.co/shared/simulation/86b65c63-b6ca-4384-b21d-9dbe87034c24
  transaction: {
    chainId: 42161,
    to: "0xa19fd5ab6c8dcffa2a295f78a5bb4ac543aaf5e3",
    from: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    input:
      "0x4786055f865c301c46d64de5c9b124ec1a97ef1efc1bcbd10a0301000000000000000000000000000000000000000000000000000000000000000000016345785d8a0000000000000000000000000000000000000000000000000000000775f05a07400000000000000000000000000000000000000000000000008b7b8c4ba968140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000065c6b5eb00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000065c6b5eb",
    value: "0",
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    amount: GreaterThanOrEqual(parseUnits("0.1", 18)),
    recipient: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    orderType: OrderType.Limit,
  },
};

const MUX_DAI_MARKET_SHORT: TestParams<OptionsActionParams> = {
  // https://www.tdly.co/shared/simulation/a64188ca-0feb-4ee2-b192-ed017e043727
  transaction: {
    chainId: 42161,
    to: "0xa19fd5ab6c8dcffa2a295f78a5bb4ac543aaf5e3",
    from: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    input:
      "0x4786055f865c301c46d64de5c9b124ec1a97ef1efc1bcbd10203000000000000000000000000000000000000000000000000000000000000000000004a1b7db51c960000000000000000000000000000000000000000000000000000009f295cd5f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000065c6b8c3",
    value: "0",
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    amount: GreaterThanOrEqual(parseUnits("5.34", 18)),
    recipient: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    orderType: OrderType.Market,
  },
};

const GMX_V1_MARKET_ETH_LONG: TestParams<OptionsActionParams> = {
  // https://www.tdly.co/shared/simulation/db0b23d1-a67a-472c-bd3c-4f872964e043
  transaction: {
    chainId: 42161,
    to: "0x2ff2f1d9826ae2410979ae19b88c361073ab0918",
    from: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    input:
      "0x92644c39000000000000000000000000000000000000000000000000000000000000000100000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab100000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1000000000000000000000000000000000000000000000000000fa1c6d5030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000071afd498d000000000000000000000000000000000000000000000000003846bd518406d0300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000",
    value: "4580000000000001",
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: zeroAddress, // ETH
    amount: GreaterThanOrEqual(parseEther("0.0044")),
    recipient: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    orderType: OrderType.Market,
  },
};

const GMX_V2_MARKET_USDCE_LONG: TestParams<OptionsActionParams> = {
  // https://www.tdly.co/shared/simulation/db0b23d1-a67a-472c-bd3c-4f872964e043
  transaction: {
    chainId: 42161,
    to: "0x2ff2f1d9826ae2410979ae19b88c361073ab0918",
    from: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    input:
      "0x92644c39000000000000000000000000000000000000000000000000000000000000000100000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab100000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab10000000000000000000000000000000000000000000000000000000000000001000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc80000000000000000000000000000000000000000000000000000000000a7d8c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c34a9fdf9acb000000000000000000000000000000000000000000000005dea4fd6ddfdc32a400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000",
    value: "180000000000000",
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8", // USDC.e
    amount: GreaterThanOrEqual(parseUnits("11", 6)),
    recipient: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    orderType: OrderType.Market,
  },
};

const GMX_V2_LIMIT_WBTC_LONG: TestParams<OptionsActionParams> = {
  // https://arbiscan.io/tx/0x9fb4a0394ff01c7a5ed180272970b50fddee509baced24d6667fb8e944a6790b
  transaction: {
    chainId: 42161,
    to: "0x2ff2f1d9826ae2410979ae19b88c361073ab0918",
    from: "0xa83cc006e2800f9e9f07c8f8f5b82e771835f4e6",
    hash: "0x9fb4a0394ff01c7a5ed180272970b50fddee509baced24d6667fb8e944a6790b",
    input:
      "0x92644c3900000000000000000000000000000000000000000000000000000000000000010000000000000000000000002f2a2543b76a4166549f7aab2e75bef0aefc5b0f0000000000000000000000002f2a2543b76a4166549f7aab2e75bef0aefc5b0f00000000000000000000000000000000000000000000000000000000000000010000000000000000000000002f2a2543b76a4166549f7aab2e75bef0aefc5b0f0000000000000000000000000000000000000000000000000000000005f5e1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000095989200000000000000000000000000000000000000000000bad652a98addfdcc8c8c00000000000000000000000000000000000000000000098758b21e60d35800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000",
    value: "180000000000000",
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f", // WBTC
    amount: GreaterThanOrEqual(parseUnits("1", 8)),
    recipient: "0xa83cc006e2800f9e9f07c8f8f5b82e771835f4e6",
    orderType: OrderType.Limit,
  },
};

const GMX_V2_MULTICALL_USDCE_MARKET: TestParams<OptionsActionParams> = {
  // https://www.tdly.co/shared/simulation/e6715cc8-6242-4dc8-aed7-587ab8088e52
  transaction: {
    chainId: 42161,
    to: "0x2ff2f1d9826ae2410979ae19b88c361073ab0918",
    from: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    input:
      "0xac9650d80000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000c4606c70120000000000000000000000000000000000000000000000000000000000000002000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000070d95587d40a2caf56bd97485ab3eec10bee63360000000000000000000000000000000000000000000000000000000000000001000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc800000000000000000000000000000000000000000000000000000000026232f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a4b8444d820000000000000000000000000000000000000000000000000000000000000002000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000070d95587d40a2caf56bd97485ab3eec10bee633600000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000005543df729c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003242393236300000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000070d95587d40a2caf56bd97485ab3eec10bee633600000000000000000000000000000000000000000000000000000000000000016d757870726f746f636f6c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001e45102a7080000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000026232f000000000000000000000000000000000000000000000000000000000025c18d400000000000000000000000000000000000000000000000000000000011d4393000000000000000000000000000000000000b858710425e477bbdf0c7a7dd000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000093d5b805587e50000000000000000000000000000000000000000000000000005543df729c000000000000000000000000000000000000000000000000000000000000007a12000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000042ff970a61a04b1ca14834a43f5de4533ebddb5cc80001f42f2a2543b76a4166549f7aab2e75bef0aefc5b0f000bb8af88d065e77c8cc2239327c5edb3a432268e58310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    value: "1500000000000000",
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8", // USDC.e
    amount: GreaterThanOrEqual(parseUnits("39.99", 6)),
    orderType: OrderType.Market,
  },
};

const GMX_V2_MULTICALL_USDCE_LIMIT: TestParams<OptionsActionParams> = {
  // https://www.tdly.co/shared/simulation/c5e11752-691e-4e40-805a-cb60133db283
  transaction: {
    chainId: 42161,
    to: "0x2ff2f1d9826ae2410979ae19b88c361073ab0918",
    from: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    input:
      "0xac9650d80000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000c4606c70120000000000000000000000000000000000000000000000000000000000000002000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000070d95587d40a2caf56bd97485ab3eec10bee63360000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc80000000000000000000000000000000000000000000000000000000001312d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a4b8444d820000000000000000000000000000000000000000000000000000000000000002000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000070d95587d40a2caf56bd97485ab3eec10bee633600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005543df729c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003042393236300000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e583100000000000000000000000070d95587d40a2caf56bd97485ab3eec10bee633600000000000000000000000000000000000000000000000000000000000000006d757870726f746f636f6c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001c45102a708000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000001312d0000000000000000000000000000000000000000000000000000000000012e1fc0000000000000000000000000000000000000000000000000000000000021327f0000000000000000000000000000000000001573731da25af9d52ebf3c43e800000000000000000000000000000000000000000000000000000940f5fa3f180000000000000000000000000000000000000000000000000000092945701062000000000000000000000000000000000000000000000000000005543df729c000000000000000000000000000000000000000000000000000000000000007a1200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000002bff970a61a04b1ca14834a43f5de4533ebddb5cc8000064af88d065e77c8cc2239327c5edb3a432268e58310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    value: "1500000000000000",
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8", // USDC.e
    amount: GreaterThanOrEqual(parseUnits("20", 6)),
    orderType: OrderType.Limit,
  },
};

const GNS_MARKET_LONG: TestParams<OptionsActionParams> = {
  // https://www.tdly.co/shared/simulation/a77b2ad9-36d1-44ef-a718-73080d8c0c97
  transaction: {
    chainId: 42161,
    to: "0x2c7e82641f03fa077f88833213210a86027f15dc",
    from: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    input:
      "0xfb4b71bb000000000000000000000000865c301c46d64de5c9b124ec1a97ef1efc1bcbd1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c0b6ccf4be560000000000000000000000000000000000000000000000000000000017c2b31879e0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000960000000000000000000000000000000000000000000000000000192d156281c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002540be40000000000000000000000000010c2cbfe29f4f5e4c24d54d36c8f283a61eb0c2f",
    value: "0",
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1", // DAI
    amount: GreaterThanOrEqual(parseUnits("50.78", 18)),
    recipient: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    orderType: OrderType.Market,
  },
};

const GNS_LIMIT_SHORT: TestParams<OptionsActionParams> = {
  // https://www.tdly.co/shared/simulation/4f1ddbbd-ee59-4859-a3b3-a25346149689
  transaction: {
    chainId: 42161,
    to: "0x2c7e82641f03fa077f88833213210a86027f15dc",
    from: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    input:
      "0xfb4b71bb000000000000000000000000865c301c46d64de5c9b124ec1a97ef1efc1bcbd1000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c0b6ccf4be560000000000000000000000000000000000000000000000000000000017c1895250000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009600000000000000000000000000000000000000000000000000001654a4ec18000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000002540be40000000000000000000000000010c2cbfe29f4f5e4c24d54d36c8f283a61eb0c2f",
    value: "0",
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    token: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1", // DAI
    amount: GreaterThanOrEqual(parseUnits("50.78", 18)),
    recipient: "0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1",
    orderType: OrderType.Limit,
  },
};

export const passingTestCases = [
  createTestCase(MUX_ETH_MARKET_LONG, "when market long ETH on mux"),
  createTestCase(MUX_ARB_LIMIT_LONG, "when limit long ARB on mux"),
  createTestCase(MUX_DAI_MARKET_SHORT, "when market short DAI on mux"),
  createTestCase(MUX_ETH_MARKET_LONG, 'when token is "any" on mux', {
    token: undefined,
  }),
  createTestCase(MUX_ETH_MARKET_LONG, 'when amount is "any" on mux', {
    amount: undefined,
  }),
  createTestCase(MUX_ARB_LIMIT_LONG, 'when recipient is "any" on mux', {
    recipient: undefined,
  }),
  createTestCase(MUX_ETH_MARKET_LONG, 'when orderType is "any" on mux', {
    orderType: undefined,
  }),
  createTestCase(MUX_DAI_MARKET_SHORT, 'when all are "any" on mux', {
    token: undefined,
    amount: undefined,
    recipient: undefined,
    orderType: undefined,
  }),
  createTestCase(GMX_V1_MARKET_ETH_LONG, "when market long ETH on GMXv1"),
  createTestCase(GMX_V2_MARKET_USDCE_LONG, "when market long USDC.e on GMXv2"),
  createTestCase(GMX_V2_LIMIT_WBTC_LONG, "when limit long WBTC on GMXv2"),
  createTestCase(GMX_V2_MARKET_USDCE_LONG, 'when token is "any" on GMXv2', {
    token: undefined,
  }),
  createTestCase(GMX_V2_LIMIT_WBTC_LONG, 'when amount is "any" on GMXv2', {
    amount: undefined,
  }),
  createTestCase(GMX_V2_MARKET_USDCE_LONG, 'when orderType is "any" on GMXv2', {
    orderType: undefined,
  }),
  createTestCase(GMX_V2_LIMIT_WBTC_LONG, 'when all are "any" on GMXv2', {
    token: undefined,
    amount: undefined,
    orderType: undefined,
  }),
  createTestCase(
    GMX_V2_MULTICALL_USDCE_MARKET,
    "when market long USDC.e on GMXv2 with multicall",
  ),
  createTestCase(
    GMX_V2_MULTICALL_USDCE_LIMIT,
    "when limit long USDC.e on GMXv2 with multicall",
  ),
  createTestCase(
    GMX_V2_MULTICALL_USDCE_LIMIT,
    'when token is "any" on GMXv2 with multicall',
    {
      token: undefined,
    },
  ),
  createTestCase(
    GMX_V2_MULTICALL_USDCE_LIMIT,
    'when amount is "any" on GMXv2 with multicall',
    {
      amount: undefined,
    },
  ),
  createTestCase(
    GMX_V2_MULTICALL_USDCE_LIMIT,
    'when orderType is "any" on GMXv2 with multicall',
    {
      orderType: undefined,
    },
  ),
  createTestCase(
    GMX_V2_MULTICALL_USDCE_LIMIT,
    'when all are "any" on GMXv2 with multicall',
    {
      token: undefined,
      amount: undefined,
      orderType: undefined,
    },
  ),
  createTestCase(GNS_MARKET_LONG, "when market long DAI on GNS"),
  createTestCase(GNS_LIMIT_SHORT, "when limit short DAI on GNS"),
  createTestCase(GNS_MARKET_LONG, 'when token is "any" on GNS', {
    token: undefined,
  }),
  createTestCase(GNS_MARKET_LONG, 'when amount is "any" on GNS', {
    amount: undefined,
  }),
  createTestCase(GNS_MARKET_LONG, 'when orderType is "any" on GNS', {
    orderType: undefined,
  }),
  createTestCase(GNS_MARKET_LONG, 'when all are "any" on GNS', {
    token: undefined,
    amount: undefined,
    orderType: undefined,
  }),
];

export const failingTestCases = [
  createTestCase(MUX_ETH_MARKET_LONG, "when token is wrong using mux", {
    token: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
  }),
  createTestCase(MUX_ETH_MARKET_LONG, "when amount is wrong unisg mux", {
    amount: GreaterThanOrEqual(parseEther("1000")),
  }),
  createTestCase(MUX_ETH_MARKET_LONG, "when OrderType is wrong using mux", {
    orderType: OrderType.Limit,
  }),
  createTestCase(GMX_V2_MARKET_USDCE_LONG, "when token is wrong using GMXv2", {
    token: "0x912CE59144191C1204E64559FE8253a0e49E6548",
  }),
  createTestCase(GMX_V2_MARKET_USDCE_LONG, "when amount is wrong using GMXv2", {
    amount: GreaterThanOrEqual(parseUnits("100", 6)),
  }),
  createTestCase(
    GMX_V2_LIMIT_WBTC_LONG,
    "when OrderType is wrong using GMXv2",
    { orderType: OrderType.Market },
  ),
  createTestCase(
    GMX_V2_MULTICALL_USDCE_LIMIT,
    "when token is wrong using GMXv2 with multicall",
    { token: "0x812CE59144191C1204E64559FE8253a0e49E6548" },
  ),
  createTestCase(
    GMX_V2_MULTICALL_USDCE_LIMIT,
    "when amount is wrong using GMXv2 with multicall",
    { amount: GreaterThanOrEqual(parseUnits("100", 6)) },
  ),
  createTestCase(
    GMX_V2_MULTICALL_USDCE_LIMIT,
    "when OrderType is wrong using GMXv2 with multicall",
    { orderType: OrderType.Market },
  ),
  createTestCase(GNS_MARKET_LONG, "when amount is wrong using GNS", {
    amount: GreaterThanOrEqual(parseUnits("100", 18)),
  }),
  createTestCase(GNS_LIMIT_SHORT, "when OrderType is wrong using GNS", {
    orderType: OrderType.Market,
  }),
];
