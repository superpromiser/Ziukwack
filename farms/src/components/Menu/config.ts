import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://pancakeswap.finance/swap#/swap?outputCurrency=0x1e5f009d4f8ca44b5fcc4963dd301da82b4eed09',
      },
      {
        label: 'Liquidity',
        href: 'https://pancakeswap.finance/add/BNB/0x1e5f009d4f8ca44b5fcc4963dd301da82b4eed09',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x1e5f009d4f8ca44b5fcc4963dd301da82b4eed09',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0x1e5f009d4f8ca44b5fcc4963dd301da82b4eed09',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: '#',
      },
      {
        label: 'Docs',
        href: 'http://www.zabakuinu.it',
      },
      {
        label: 'Request Form',
        href: 'https://forms.gle/sbTsnPu4ky9XkHS7A',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: '#',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: '#',
  },
]

export default config
