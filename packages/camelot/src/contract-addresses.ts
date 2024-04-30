import { Tokens } from './utils'
import { type Address } from 'viem'

export const DEFAULT_TOKEN_LIST: Address[] = [
  Tokens.ETH, // '0x0000000000000000000000000000000000000000' - ETH
  Tokens.USDC, // '0xaf88d065e77c8cC2239327C5EDb3A432268e5831' - USDC
  Tokens.USDCE, // '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8' - USDC.e
  Tokens.USDT, // '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9' - USDT
  Tokens.GRAIL, // '0x3d9907F9a368ad0a51Be60f7Da3b97cf940982D8' - GRAIL
  Tokens.ARB, // '0x912CE59144191C1204E64559FE8253a0e49E6548' - ARB
  Tokens.GMX, // '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a' - GMX
  Tokens.DAI, // '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1' - DAI
  Tokens.MIM, // '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A' - MIM
  Tokens.WBTC, // '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f' - WBTC
  Tokens.WETH, // '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1' - WETH
  Tokens.SIZE, // '0x939727d85d99d0ac339bf1b76dfe30ca27c19067' - SIZE
]

export const INTERNAL_ETH_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
export const CAMELOT_V2_ROUTER = '0xc873fEcbd354f5A56E00E710B90EF4201db2448d'
export const CAMELOT_V3_ROUTER = '0x1f721e2e82f6676fce4ea07a5958cf098d339e18'
export const PARASWAP_ROUTER = '0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57'
export const YAK_ROUTER = '0x99D4e80DB0C023EFF8D25d8155E0dCFb5aDDeC5E'
