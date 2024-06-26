import {
  type ActionParams,
  type IActionPlugin,
  type MintActionParams,
  PluginActionNotImplementedError,
} from '@rabbitholegg/questdk-plugin-utils'

import {
  getDynamicNameParams,
  getFees,
  getMintIntent,
  getProjectFees,
  getSupportedChainIds,
  getSupportedTokenAddresses,
  mint,
  simulateMint,
} from './Soundxyz.js'

export const Soundxyz: IActionPlugin = {
  pluginId: 'soundxyz',
  getSupportedTokenAddresses,
  getSupportedChainIds,
  mint,
  bridge: async () => new PluginActionNotImplementedError(),
  swap: async () => new PluginActionNotImplementedError(),
  getDynamicNameParams,
  getMintIntent,
  getProjectFees: async (params: ActionParams) =>
    getProjectFees(params as unknown as MintActionParams),
  getFees: async (params: ActionParams) =>
    getFees(params as unknown as MintActionParams),
  simulateMint,
}
