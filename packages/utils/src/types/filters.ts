import type { Abi, Transaction } from 'viem'

export type ArrayOperator =
  | {
      $some?: FilterOperator[]
    }
  | {
      $first?: FilterOperator
    }
  | {
      $last?: FilterOperator
    }
  | {
      $nth?: NthFilter
    }

export type LogicalOperator =
  | {
      $and?: FilterOperator[]
    }
  | {
      $or?: FilterOperator[]
    }

export type NumericOperator =
  | bigint
  | number
  | string
  | {
      $gt?: bigint | string | number;
    }
  | {
      $gte?: bigint | string | number;
    }
  | {
      $lt?: bigint | string | number;
    }
  | {
      $lte?: bigint | string | number;
    }

export type StringOperator = {
  $regex?: string
}

export type FilterOperator =
  | LogicalOperator
  | NumericOperator
  | ArrayOperator
  | StringOperator

export type TransactionFilter = {
  [K in keyof Transaction]: FilterOperator
}

type Primitive = string | number | boolean
export type FilterObject = {
  [key: string]: Filter
}
export type BitmaskFilter = {
  bitmask: bigint | number | string
  value: bigint | number | string | NumericOperator
}
export type NthFilter = {
  index: bigint | number | string
  value: TransactionFilter | FilterObject
}
export type Filter = Primitive | FilterObject | FilterArray | Abi
export type FilterArray = Filter[]
export interface AbiFilter extends FilterObject {
  $abi: Abi
}

export interface AbstractAbiFilter extends FilterObject {
  $abiAbstract: Abi
}
export interface AbiParamFilter extends FilterObject {
  $abiParams: string[]
}
