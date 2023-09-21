export const DEPOSIT_ETH = {
  type: 'eip2930',
  blockHash:
    '0xb5a7ec990a7a38327d3561bbbb9be5511a3169d47fad94ce934ac1fb17a671ba',
  blockNumber: '18073017',
  from: '0xe751378ec5e5c0b64c4d16a077e8f11fbcfc958a',
  gas: '71783',
  hash: '0xa90420546af9facb433464c7d6de24dee62b63ec5eff9e542ccc54a7c1be0e1c',
  input:
    '0x1186ec33000000000000000000000000e751378ec5e5c0b64c4d16a077e8f11fbcfc958a000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000461977a33974000000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000002a6fefb6a42ce0000000000000000000000000000000000000000000000000000000064f79f040000000000000000000000000000000000000000000000000000000000000100ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000',
  nonce: 457,
  to: '0x5c7bcd6e7de5423a257d81b442095a1a6ced35c5',
  transactionIndex: 49,
  value: '315700000000000000',
  v: '1',
  r: '0xde2ae6267d6e595c4165281efd2e1de003fce554919a353d08c4ae106a3c0324',
  s: '0x77d0b71828a34bb7e747f8cf729fcd9565c46a8c44a589626d123c526120b88',
  gasPrice: '28469577825',
  chainId: 1,
  accessList: [],
  typeHex: '0x1',
}
export const DEPOSIT_ERC20 = {
  type: 'eip1559',
  blockHash:
    '0xe5f73d3f81f334e993ee2a1f2c3742a220ddb892c7d48f1b5035dd7c08141702',
  blockNumber: '18070429',
  from: '0xb3b873a999cff617307a351e32a3dd7a94add5b2',
  gas: '85063',
  hash: '0x1d27d0bd0b8bc1894f8e3b30fdb527f2a3d8eee2efaf6d43d23af05f4c7c976b',
  input:
    '0x1186ec33000000000000000000000000b3b873a999cff617307a351e32a3dd7a94add5b2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec70000000000000000000000000000000000000000000000000000000005f5e10000000000000000000000000000000000000000000000000000000000000000890000000000000000000000000000000000000000000000000001298f33a194000000000000000000000000000000000000000000000000000000000064f720740000000000000000000000000000000000000000000000000000000000000100ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000',
  nonce: 1,
  to: '0x5c7bcd6e7de5423a257d81b442095a1a6ced35c5',
  transactionIndex: 77,
  value: '0',
  v: '0',
  r: '0x6c84f45cf1dfefd4cdad59e02d24bfe615a6dd32ebbd339906c8f2eb6e77cff6',
  s: '0x77e2399b01e2ee8d05be7171513a5011d0900536d532e4b40128d927ed41ad77',
  gasPrice: '12517677963',
  maxFeePerGas: '14750000000',
  maxPriorityFeePerGas: '450000000',
  chainId: 1,
  accessList: [],
  typeHex: '0x2',
}
export const WITHDRAW_ERC20 = {
  blockHash:
    '0x88bb85e52cff52902327cd510708bb6c03c746f2785531a0d6a4cc87cf526bd6',
  blockNumber: '128390530',
  from: '0x49b887e3f64c7007e76f72c17ce29c7bcfb9af55',
  gas: '1936056',
  gasPrice: '100000000',
  maxFeePerGas: '135000000',
  maxPriorityFeePerGas: '0',
  hash: '0x0eed06fe27fcef1666d62ce9a0740eaf498ba94664588f3089b00602c930f23b',
  input:
    '0x1186ec3300000000000000000000000049b887e3f64c7007e76f72c17ce29c7bcfb9af55000000000000000000000000fd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb90000000000000000000000000000000000000000000000000000000001312d000000000000000000000000000000000000000000000000000000000000000089000000000000000000000000000000000000000000000000000585209cd1dc000000000000000000000000000000000000000000000000000000000064f7abe80000000000000000000000000000000000000000000000000000000000000100ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000',
  nonce: 322,
  to: '0xe35e9842fceaCA96570B734083f4a58e8F7C5f2A',
  transactionIndex: 1,
  value: '0',
  type: 'eip1559',
  accessList: [],
  chainId: 42161,
  v: '1',
  r: '0xac74be86881cc50d0204e8235a1b18296b9ecb79a76a38d905b0f09a00b54f90',
  s: '0x27a79140ccfe1b585edf22fcbc80938aabcb2e3ae2eca1d2e5ec16057cae16b5',
  typeHex: '0x2',
}
export const WITHDRAW_ETH = {
  blockHash:
    '0xb9c8af8a3b087b9fa819ac8db7c8d0b0f807c0a35fcf7299acf26c2b645c7190',
  blockNumber: '128390343',
  from: '0xbfe7a294ced3ce8c33c22c4dcaa6fd4522d6d32a',
  gas: '1904633',
  gasPrice: '100000000',
  maxFeePerGas: '135000000',
  maxPriorityFeePerGas: '0',
  hash: '0xae9c37671cc94cd9e4487a23b62c93c606601f7a1d5b751d7f2d8a71dc4f65ef',
  input:
    '0x1186ec33000000000000000000000000bfe7a294ced3ce8c33c22c4dcaa6fd4522d6d32a00000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab10000000000000000000000000000000000000000000000000214e8348c4f000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000073d8914cdcabc00000000000000000000000000000000000000000000000000000000064f7abe80000000000000000000000000000000000000000000000000000000000000100ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000',
  nonce: 18,
  to: '0xe35e9842fceaCA96570B734083f4a58e8F7C5f2A',
  transactionIndex: 1,
  value: '150000000000000000',
  type: 'eip1559',
  accessList: [],
  chainId: 42161,
  v: '0',
  r: '0xa4bbc679bc5fd22ec05f999e34ee0ed0a3412e364ff4c52523a0288d742ae81',
  s: '0x52f9b069de9660c17f9d33bc134623e75d6027af233ccdc8b157e0077f859ee4',
  typeHex: '0x2',
}