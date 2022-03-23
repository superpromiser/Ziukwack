import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'ZABAKU-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0d4Ff62FED8ef3eEAD8D522BA9D65359A3097441',
    },
    tokenSymbol: 'ZABAKU',
    tokenAddresses: {
      97: '',
      56: '0x1e5f009d4f8ca44b5fcc4963dd301da82b4eed09',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'ZABAKU-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61F56E94a7B06c3452f6e4D5eec7Cef44C2e154B',
    },
    tokenSymbol: 'ZABAKU',
    tokenAddresses: {
      97: '',
      56: '0x1e5f009d4f8ca44b5fcc4963dd301da82b4eed09',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ZABAKU',
    lpAddresses: {
      97: '',
      56: '0x0d4Ff62FED8ef3eEAD8D522BA9D65359A3097441', // ZABAKU-BUSD LP
    },
    tokenSymbol: 'ZABAKU',
    tokenAddresses: {
      97: '',
      56: '0x1e5f009d4f8ca44b5fcc4963dd301da82b4eed09',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x0d4Ff62FED8ef3eEAD8D522BA9D65359A3097441', // ZABAKU-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
