import { skip } from 'node:test'
import { getSupportedTokenAddresses, options, stake, swap } from './OkuTrade'
import {
  CHAIN_ID_ARRAY,
  EXECUTE_ABI_FRAGMENTS,
  V2_SWAP_EXACT_TYPES,
  V3_SWAP_EXACT_TYPES,
} from './constants'
import {
  failingTestCasesOptions,
  failingTestCasesStake,
  failingTestCasesSwap,
  passingTestCasesOptions,
  passingTestCasesStake,
  passingTestCasesSwap,
} from './test-transactions'
import { getPools } from './utils'
import { GreaterThanOrEqual, apply } from '@rabbitholegg/questdk'
import { ActionType } from '@rabbitholegg/questdk-plugin-utils'
import { zeroAddress } from 'viem'
import { describe, expect, test } from 'vitest'

describe('Given the okutrade plugin', () => {
  describe('When handling the options action', () => {
    describe('should return a valid list of pools for a given token', () => {
      test('for USDC on Ethereum mainnet', async () => {
        const token = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
        const pools = await getPools(token, 1)
        if (!pools) {
          return
        }
        pools.forEach((pool) => {
          expect(pool).to.match(
            /^0x[a-fA-F0-9]{40}$/,
            `Pool address ${pool} is not a valid Ethereum address`,
          )
        })
      })
    })

    describe('should pass filter with valid transactions', () => {
      passingTestCasesOptions.forEach((testCase) => {
        const { transaction, params, description } = testCase
        test.skip(description, async () => {
          const filter = await options(params)
          // @ts-ignore transaction is on the test case
          expect(apply(transaction, filter)).to.be.true
        })
      })
    })

    describe('should not pass filter with invalid transactions', () => {
      failingTestCasesOptions.forEach((testCase) => {
        const { transaction, params, description } = testCase
        test.skip(description, async () => {
          const filter = await options(params)
          // @ts-ignore transaction is on the test case
          expect(apply(transaction, filter)).to.be.false
        })
      })
    })
  })

  describe('When handling the stake action', () => {
    describe('should return a valid action filter', () => {
      test('when making a valid stake action', async () => {
        const filter = await stake({
          chainId: 1,
        })
        expect(filter).toBeTypeOf('object')
        expect(Number(filter.chainId)).toBe(1)
        if (typeof filter.to === 'string') {
          expect(filter.to).toMatch(/^0x[a-fA-F0-9]{40}$/)
        } else {
          // if to is an object, it should have a logical operator as the only key
          expect(filter.to).toBeTypeOf('object')
          expect(Object.keys(filter.to)).toHaveLength(1)
          expect(
            ['$or', '$and'].some((prop) =>
              Object.hasOwnProperty.call(filter.to, prop),
            ),
          ).to.be.true
          expect(Object.values(filter.to)[0]).to.satisfy((arr: string[]) =>
            arr.every((val) => val.match(/^0x[a-fA-F0-9]{40}$/)),
          )
        }
        // Check the input property is the correct type and has a valid filter operator
        expect(filter.input).toBeTypeOf('object')
        expect(
          ['$abi', '$abiParams', '$abiAbstract', '$or', '$and'].some((prop) =>
            Object.hasOwnProperty.call(filter.input, prop),
          ),
        ).to.be.true
      })
    })

    describe('should pass filter with valid transactions', () => {
      passingTestCasesStake.forEach((testCase) => {
        const { transaction, params, description } = testCase
        test.skip(description, async () => {
          const filter = await stake(params)
          // @ts-ignore transaction is on the test case
          expect(apply(transaction, filter)).to.be.true
        })
      })
    })

    describe('should not pass filter with invalid transactions', () => {
      failingTestCasesStake.forEach((testCase) => {
        const { transaction, params, description } = testCase
        test.skip(description, async () => {
          const filter = await stake(params)
          // @ts-ignore transaction is on the test case
          expect(apply(transaction, filter)).to.be.false
        })
      })
    })
  })

  describe('When handling the swap action', () => {
    describe('should return a valid action filter', () => {
      test('with a valid swap action', async () => {
        const filter = await swap({
          chainId: 10,
          tokenIn: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
          tokenOut: '0x4200000000000000000000000000000000000006',
          amountIn: GreaterThanOrEqual(100000n),
          amountOut: GreaterThanOrEqual(100000n),
        })

        expect(filter).to.deep.equal({
          chainId: 10,
          to: '0xb555edF5dcF85f42cEeF1f3630a52A108E55A654',
          input: {
            $abi: EXECUTE_ABI_FRAGMENTS,
            inputs: {
              $some: {
                $or: [
                  {
                    $abiParams: V3_SWAP_EXACT_TYPES,
                    path: {
                      $and: [
                        {
                          $regex: '^0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
                        },
                        {
                          $regex: '4200000000000000000000000000000000000006$',
                        },
                      ],
                    },
                    amountIn: {
                      $gte: '100000',
                    },
                    amountOut: {
                      $gte: '100000',
                    },
                  },
                  {
                    $abiParams: V2_SWAP_EXACT_TYPES,
                    path: {
                      $and: [
                        {
                          $first: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
                        },
                        {
                          $last: '0x4200000000000000000000000000000000000006',
                        },
                      ],
                    },
                    amountIn: {
                      $gte: '100000',
                    },
                    amountOut: {
                      $gte: '100000',
                    },
                  },
                ],
              },
            },
          },
        })
      })
    })

    describe('should pass filter with valid transactions', () => {
      passingTestCasesSwap.forEach((testCase) => {
        const { transaction, params, description } = testCase
        test(description, async () => {
          const filter = await swap(params)
          // @ts-ignore transaction is on the test case
          expect(apply(transaction, filter)).to.be.true
        })
      })
    })

    describe('should not pass filter with invalid transactions', () => {
      failingTestCasesSwap.forEach((testCase) => {
        const { transaction, params, description } = testCase
        test(description, async () => {
          const filter = await swap(params)
          // @ts-ignore transaction is on the test case
          expect(apply(transaction, filter)).to.be.false
        })
      })
    })

    describe('should return a valid list of tokens for each supported chain', () => {
      CHAIN_ID_ARRAY.forEach((chainId) => {
        test(`for chainId: ${chainId}`, async () => {
          const tokens = await getSupportedTokenAddresses(
            chainId,
            ActionType.Options,
          )
          const addressRegex = /^0x[a-fA-F0-9]{40}$/
          expect(tokens).to.be.an('array')
          expect(tokens).to.not.contain(zeroAddress)
          expect(tokens).to.have.length.greaterThan(1)
          expect(tokens).to.have.length.lessThan(100)
          tokens.forEach((token) => {
            expect(token).to.match(
              addressRegex,
              `Token address ${token} is not a valid Ethereum address`,
            )
          })
        })
      })
    })
  })
})
