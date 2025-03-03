import { Chain } from 'background/service/openapi';
import IconEthLogo from 'ui/assets/chain-logos/eth.svg';
import IconEthWhiteLogo from 'ui/assets/chain-logos/eth-white.svg';
import IconEthChainLogo from 'ui/assets/dashboard/selectChain/eth.svg';
import IconHecoLogo from 'ui/assets/chain-logos/heco.svg';
import IconHecoChainLogo from 'ui/assets/dashboard/selectChain/heco.svg';
import IconHecoWhiteLogo from 'ui/assets/chain-logos/heco-white.svg';
import IconBscLogo from 'ui/assets/chain-logos/bsc.svg';
import IconBscWhiteLogo from 'ui/assets/chain-logos/bsc-white.svg';
import IconBscChainLogo from 'ui/assets/dashboard/selectChain/bsc.svg';
import IconDaiLogo from 'ui/assets/chain-logos/gnosis.svg';
import IconDaiWhiteLogo from 'ui/assets/chain-logos/gnosis-white.svg';
import IconDaiChainLogo from 'ui/assets/dashboard/selectChain/gnosis.svg';
import IconPolygonLogo from 'ui/assets/chain-logos/polygon.svg';
import IconPolygonWhiteLogo from 'ui/assets/chain-logos/polygon-white.svg';
import IconPolygonChainLogo from 'ui/assets/dashboard/selectChain/polygon.svg';
import IconFantom from 'ui/assets/chain-logos/fantom.svg';
import IconFantomWhiteLogo from 'ui/assets/chain-logos/fantom-white.svg';
import IconFantomChainLogo from 'ui/assets/dashboard/selectChain/fantom.svg';
import IconOKTLogo from 'ui/assets/chain-logos/okex.svg';
import IconOKTWhiteLogo from 'ui/assets/chain-logos/okex-white.svg';
import IconOKTChainLogo from 'ui/assets/dashboard/selectChain/okex.svg';
import IconMetisLogo from 'ui/assets/chain-logos/metis.svg';
import IconMetisWhiteLogo from 'ui/assets/chain-logos/metis-white.svg';
import IconMetisChainLogo from 'ui/assets/dashboard/selectChain/metis.svg';
import IconArbitrumLogo from 'ui/assets/chain-logos/arbitrum.svg';
import IconArbitrumWhiteLogo from 'ui/assets/chain-logos/arbitrum-white.svg';
import IconArbitrumChainLogo from 'ui/assets/dashboard/selectChain/arbitrum.svg';
import IconHarmonyLogo from 'ui/assets/chain-logos/harmony.svg';
import IconHarmonyWhiteLogo from 'ui/assets/chain-logos/harmony-white.svg';
import IconHarmonyChainLogo from 'ui/assets/dashboard/selectChain/harmony.svg';
import IconOPLogo from 'ui/assets/chain-logos/op.svg';
import IconOPWhiteLogo from 'ui/assets/chain-logos/op-white.svg';
import IconOPChainLogo from 'ui/assets/dashboard/selectChain/optimism.svg';
import IconAvaxLogo from 'ui/assets/chain-logos/avax.svg';
import IconAvaxWhiteLogo from 'ui/assets/chain-logos/avax-white.svg';
import IconAvaxChainLogo from 'ui/assets/dashboard/selectChain/avalanche.svg';
import IconCeloLogo from 'ui/assets/chain-logos/celo.svg';
import IconCeloWhiteLogo from 'ui/assets/chain-logos/celo-white.svg';
import IconCeloChainLogo from 'ui/assets/dashboard/selectChain/celo.svg';
import IconMoonriverLogo from 'ui/assets/chain-logos/movr.svg';
import IconMoonriverWhiteLogo from 'ui/assets/chain-logos/movr-white.svg';
import IconMoonriverChainLogo from 'ui/assets/dashboard/selectChain/moonriver.svg';
import IconCronosLogo from 'ui/assets/chain-logos/cronos.svg';
import IconCronosWhiteLogo from 'ui/assets/chain-logos/cronos-white.svg';
import IconCronosChainLogo from 'ui/assets/dashboard/selectChain/cronos.svg';
import IconBobaLogo from 'ui/assets/chain-logos/boba.png';
import IconBobaWhiteLogo from 'ui/assets/chain-logos/boba-white.svg';
import IconBobaChainLogo from 'ui/assets/dashboard/selectChain/boba-chain.png';
import IconBttLogo from 'ui/assets/chain-logos/bttc.svg';
import IconBttWhiteLogo from 'ui/assets/chain-logos/bttc-white.svg';
import IconBttChainLogo from 'ui/assets/dashboard/selectChain/bttc.svg';
import IconAuroraLogo from 'ui/assets/chain-logos/aurora.svg';
import IconAuroraWhiteLogo from 'ui/assets/chain-logos/aurora-white.svg';
import IconAuroraChainLogo from 'ui/assets/dashboard/selectChain/aurora.svg';
import IconMobmLogo from 'ui/assets/chain-logos/mobm.svg';
import IconMobmWhiteLogo from 'ui/assets/chain-logos/mobm-white.svg';
import IconMobmChainLogo from 'ui/assets/dashboard/selectChain/mobm.svg';
import IconSbchLogo from 'ui/assets/chain-logos/smartBCH.svg';
import IconSbchWhiteLogo from 'ui/assets/chain-logos/smartBCH-white.svg';
import IconSbchChainLogo from 'ui/assets/dashboard/selectChain/smartBCH.svg';
import IconFuseLogo from 'ui/assets/chain-logos/fuse.svg';
import IconFuseWhiteLogo from 'ui/assets/chain-logos/fuse-white.svg';
import IconFuseChainLogo from 'ui/assets/dashboard/selectChain/fuse.svg';
import IconEN from 'ui/assets/langs/en.svg';
import IconZH from 'ui/assets/langs/zh_cn.svg';
import IconAmber from 'ui/assets/walletlogo/amber.png';
import IconBitBox02 from 'ui/assets/walletlogo/bitbox02.png';
import IconBitBox02WithBorder from 'ui/assets/walletlogo/bitbox02.png';
import IconFireblocks from 'ui/assets/walletlogo/fireblocks.png';
import IconFireblocksWithBorder from 'ui/assets/walletlogo/fireblocks-border.png';
import IconCobo from 'ui/assets/walletlogo/cobo.png';
import IconImtoken from 'ui/assets/walletlogo/imtoken.png';
import IconJade from 'ui/assets/walletlogo/jade.png';
import IconGnosis from 'ui/assets/walletlogo/gnosis.png';
import IconMath from 'ui/assets/walletlogo/math.png';
import IconOnekey from 'ui/assets/walletlogo/onekey.png';
import IconOneKey18 from 'ui/assets/walletlogo/onekey18.png';
import IconTokenpocket from 'ui/assets/walletlogo/tp.png';
import IconTrezor from 'ui/assets/walletlogo/trezor.png';
import IconMetaMask from 'ui/assets/walletlogo/metamask.png';
import IconTrust from 'ui/assets/walletlogo/trust.png';
import IconMnemonicPurple from 'ui/assets/walletlogo/mnemonic-purple.svg';
import IconPrivateKeyPurple from 'ui/assets/walletlogo/privatekey-purple.svg';
import IconWatchPurple from 'ui/assets/walletlogo/watch-purple.svg';
import IconTrezor24 from 'ui/assets/walletlogo/trezor24.png';
import IconTrezor24Border from 'ui/assets/walletlogo/trezor24-border.png';
import LogoTrust from 'ui/assets/walletlogo/TrustWalletLogo.png';
import LogoTp from 'ui/assets/walletlogo/TokenPocketLogo.png';
import LogoMath from 'ui/assets/walletlogo/MathWalletLogo.png';
import LogoJade from 'ui/assets/walletlogo/JadeLogo.png';
import LogoImtoken from 'ui/assets/walletlogo/imTokenLogo.png';
import LogoCobo from 'ui/assets/walletlogo/CoboLogo.png';
import LogoAmber from 'ui/assets/walletlogo/AmberLogo.png';
import LogoOnekey from 'ui/assets/walletlogo/onekey28.png';
import LogoTrezor from 'ui/assets/walletlogo/Trezor28.png';
import LogoMnemonic from 'ui/assets/walletlogo/mnemoniclogo.svg';
import LogoPrivateKey from 'ui/assets/walletlogo/privatekeylogo.svg';
import LogoWatch from 'ui/assets/walletlogo/watchlogo.svg';
import IconPrivateKeyWhite from 'ui/assets/walletlogo/private-key-white.svg';
import IconWatchWhite from 'ui/assets/walletlogo/IconWatch-white.svg';
import IconMnemonicWhite from 'ui/assets/walletlogo/IconMnemonic-white.svg';
import LogoLedgerDark from 'ui/assets/walletlogo/ledgerdark.png';
import LogoLedgerWhite from 'ui/assets/walletlogo/ledgerwhite.png';
import IconGridPlus from 'ui/assets/walletlogo/gridplus.png';

export enum CHAINS_ENUM {
  ETH = 'ETH',
  BSC = 'BSC',
  GNOSIS = 'GNOSIS',
  HECO = 'HECO',
  POLYGON = 'POLYGON',
  FTM = 'FTM',
  OKT = 'OKT',
  ARBITRUM = 'ARBITRUM',
  AVAX = 'AVAX',
  OP = 'OP',
  CELO = 'CELO',
  MOVR = 'MOVR',
  CRO = 'CRO',
  BOBA = 'BOBA',
  METIS = 'METIS',
  BTT = 'BTT',
  AURORA = 'AURORA',
  MOBM = 'MOBM',
  SBCH = 'SBCH',
  FUSE = 'FUSE',
  HMY = 'HMY',
}

export const CHAINS: Record<string, Chain> = {
  [CHAINS_ENUM.ETH]: {
    id: 1,
    serverId: 'eth',
    name: 'Ethereum',
    hex: '0x1',
    enum: CHAINS_ENUM.ETH,
    logo: IconEthLogo,
    whiteLogo: IconEthWhiteLogo,
    selectChainLogo: IconEthChainLogo,
    network: '1',
    nativeTokenSymbol: 'ETH',
    nativeTokenLogo:
      'https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png',
    nativeTokenDecimals: 18,
    nativeTokenAddress: 'eth',
    scanLink: 'https://etherscan.io/tx/_s_',
    thridPartyRPC:
      'https://mainnet.infura.io/v3/67fed3c058594b7586fec0c1a4d769cc',
    eip: {
      '1559': true,
    },
  },
  [CHAINS_ENUM.BSC]: {
    id: 56,
    name: 'BSC',
    serverId: 'bsc',
    hex: '0x38',
    enum: CHAINS_ENUM.BSC,
    logo: IconBscLogo,
    whiteLogo: IconBscWhiteLogo,
    selectChainLogo: IconBscChainLogo,
    network: '56',
    nativeTokenSymbol: 'BNB',
    nativeTokenAddress: 'bsc',
    scanLink: 'https://bscscan.com/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/bsc_token/logo_url/bsc/8bfdeaa46fe9be8f5cd43a53b8d1eea1.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://bsc-dataseed1.binance.org',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.GNOSIS]: {
    id: 100,
    name: 'Gnosis',
    serverId: 'xdai',
    hex: '0x64',
    enum: CHAINS_ENUM.GNOSIS,
    logo: IconDaiLogo,
    whiteLogo: IconDaiWhiteLogo,
    selectChainLogo: IconDaiChainLogo,
    network: '100',
    nativeTokenSymbol: 'xDai',
    nativeTokenAddress: 'xdai',
    scanLink: 'https://blockscout.com/xdai/mainnet/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/xdai_token/logo_url/xdai/1207e67652b691ef3bfe04f89f4b5362.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://rpc.xdaichain.com',
    eip: {
      '1559': true,
    },
  },
  [CHAINS_ENUM.POLYGON]: {
    id: 137,
    serverId: 'matic',
    name: 'Polygon',
    hex: '0x89',
    enum: CHAINS_ENUM.POLYGON,
    logo: IconPolygonLogo,
    whiteLogo: IconPolygonWhiteLogo,
    selectChainLogo: IconPolygonChainLogo,
    network: '137',
    nativeTokenSymbol: 'MATIC',
    nativeTokenAddress: 'matic',
    nativeTokenDecimals: 18,
    scanLink: 'https://polygonscan.com/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/matic_token/logo_url/matic/e5a8a2860ba5cf740a474dcab796dc63.png',
    thridPartyRPC: 'https://polygon-rpc.com',
    eip: {
      '1559': true,
    },
  },
  [CHAINS_ENUM.FTM]: {
    id: 250,
    serverId: 'ftm',
    name: 'Fantom',
    hex: '0xfa',
    enum: CHAINS_ENUM.FTM,
    logo: IconFantom,
    whiteLogo: IconFantomWhiteLogo,
    selectChainLogo: IconFantomChainLogo,
    network: '250',
    nativeTokenSymbol: 'FTM',
    nativeTokenAddress: 'ftm',
    scanLink: 'https://ftmscan.com/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://rpc.ftm.tools',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.OKT]: {
    id: 66,
    serverId: 'okt',
    name: 'OEC',
    enum: CHAINS_ENUM.OKT,
    logo: IconOKTLogo,
    whiteLogo: IconOKTWhiteLogo,
    selectChainLogo: IconOKTChainLogo,
    hex: '0x42',
    network: '66',
    nativeTokenSymbol: 'OKT',
    nativeTokenAddress: 'okt',
    scanLink: 'https://www.oklink.com/okexchain/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/ftm_token/logo_url/ftm/33fdb9c5067e94f3a1b9e78f6fa86984.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://exchainrpc.okex.org',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.HECO]: {
    id: 128,
    serverId: 'heco',
    name: 'HECO',
    enum: CHAINS_ENUM.HECO,
    logo: IconHecoLogo,
    whiteLogo: IconHecoWhiteLogo,
    selectChainLogo: IconHecoChainLogo,
    hex: '0x80',
    network: '128',
    nativeTokenSymbol: 'HT',
    nativeTokenAddress: 'heco',
    scanLink: 'https://hecoinfo.com/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/heco_token/logo_url/heco/c399dcddde07e1944c4dd8f922832b53.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://http-mainnet.hecochain.com',
    eip: {
      '1559': true,
    },
  },
  // https://developer.offchainlabs.com/docs/public_testnet#connection-information
  [CHAINS_ENUM.ARBITRUM]: {
    id: 42161,
    serverId: 'arb',
    name: 'Arbitrum',
    enum: CHAINS_ENUM.ARBITRUM,
    logo: IconArbitrumLogo,
    whiteLogo: IconArbitrumWhiteLogo,
    selectChainLogo: IconArbitrumChainLogo,
    hex: '0xa4b1',
    network: '42161',
    nativeTokenSymbol: 'ETH',
    nativeTokenAddress: 'arb',
    scanLink: 'https://arbiscan.io/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/arb_token/logo_url/arb/d61441782d4a08a7479d54aea211679e.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://arb1.arbitrum.io/rpc',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.AVAX]: {
    id: 43114,
    serverId: 'avax',
    network: '43114',
    name: 'Avalanche',
    nativeTokenSymbol: 'AVAX',
    nativeTokenAddress: 'avax',
    enum: CHAINS_ENUM.AVAX,
    logo: IconAvaxLogo,
    whiteLogo: IconAvaxWhiteLogo,
    selectChainLogo: IconAvaxChainLogo,
    hex: '0xa86a',
    scanLink: 'https://snowtrace.io/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/avax_token/logo_url/avax/0b9c84359c84d6bdd5bfda9c2d4c4a82.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://api.avax.network/ext/bc/C/rpc',
    eip: {
      '1559': true,
    },
  },
  [CHAINS_ENUM.OP]: {
    id: 10,
    serverId: 'op',
    network: '10',
    name: 'Optimism',
    enum: CHAINS_ENUM.OP,
    logo: IconOPLogo,
    whiteLogo: IconOPWhiteLogo,
    selectChainLogo: IconOPChainLogo,
    hex: '0xa',
    scanLink: 'https://optimistic.etherscan.io/tx/_s_',
    nativeTokenSymbol: 'ETH',
    nativeTokenAddress: 'op',
    nativeTokenLogo:
      'https://static.debank.com/image/op_token/logo_url/op/d61441782d4a08a7479d54aea211679e.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://mainnet.optimism.io',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.CELO]: {
    id: 42220,
    serverId: 'celo',
    network: '42220',
    name: 'Celo',
    nativeTokenSymbol: 'CELO',
    nativeTokenAddress: '0x471ece3750da237f93b8e339c536989b8978a438',
    enum: CHAINS_ENUM.CELO,
    logo: IconCeloLogo,
    whiteLogo: IconCeloWhiteLogo,
    selectChainLogo: IconCeloChainLogo,
    hex: '0xa4ec',
    scanLink: 'https://explorer.celo.org/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/celo_token/logo_url/0x471ece3750da237f93b8e339c536989b8978a438/6f524d91db674876ba0f5767cf0124cc.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://forno.celo.org',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.MOVR]: {
    id: 1285,
    serverId: 'movr',
    network: '1285',
    name: 'Moonriver',
    nativeTokenSymbol: 'MOVR',
    nativeTokenAddress: 'movr',
    enum: CHAINS_ENUM.MOVR,
    logo: IconMoonriverLogo,
    whiteLogo: IconMoonriverWhiteLogo,
    selectChainLogo: IconMoonriverChainLogo,
    hex: '0x505',
    scanLink: 'https://moonriver.moonscan.io/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/chain/logo_url/movr/c66f89fdceaea8d8fce263a1f816d671.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://rpc.moonriver.moonbeam.network',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.CRO]: {
    id: 25,
    serverId: 'cro',
    network: '25',
    name: 'Cronos',
    nativeTokenSymbol: 'CRO',
    nativeTokenAddress: 'cro',
    enum: CHAINS_ENUM.CRO,
    logo: IconCronosLogo,
    whiteLogo: IconCronosWhiteLogo,
    selectChainLogo: IconCronosChainLogo,
    hex: '0x19',
    scanLink: 'https://cronoscan.com/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/chain/logo_url/cro/affddd53019ffb9dbad0c724e12500c0.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://evm-cronos.crypto.org',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.BOBA]: {
    id: 288,
    serverId: 'boba',
    network: '288',
    name: 'Boba',
    nativeTokenSymbol: 'ETH',
    nativeTokenAddress: 'boba',
    enum: CHAINS_ENUM.BOBA,
    logo: IconBobaLogo,
    whiteLogo: IconBobaWhiteLogo,
    selectChainLogo: IconBobaChainLogo,
    hex: '0x120',
    scanLink: 'https://blockexplorer.boba.network/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/op_token/logo_url/0x4200000000000000000000000000000000000006/d61441782d4a08a7479d54aea211679e.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://mainnet.boba.network/',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.METIS]: {
    id: 1088,
    serverId: 'metis',
    network: '1088',
    name: 'Metis',
    nativeTokenSymbol: 'Metis',
    nativeTokenAddress: 'metis',
    enum: CHAINS_ENUM.METIS,
    logo: IconMetisLogo,
    whiteLogo: IconMetisWhiteLogo,
    selectChainLogo: IconMetisChainLogo,
    hex: '0x440',
    scanLink: 'https://andromeda-explorer.metis.io/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/chain/logo_url/metis/b289da32db4d860ebf6fb46a6e41dcfc.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://andromeda.metis.io/?owner=1088',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.BTT]: {
    id: 199,
    serverId: 'btt',
    network: '199',
    name: 'BTTC',
    nativeTokenSymbol: 'BTT',
    nativeTokenAddress: 'btt',
    enum: CHAINS_ENUM.BTT,
    logo: IconBttLogo,
    whiteLogo: IconBttWhiteLogo,
    selectChainLogo: IconBttChainLogo,
    hex: '0xc7',
    scanLink: 'https://scan.bt.io/#/transaction/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/chain/logo_url/btt/2130a8d57ff2a0f3d50a4ec9432897c6.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://rpc.bittorrentchain.io/',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.AURORA]: {
    id: 1313161554,
    serverId: 'aurora',
    network: '1313161554',
    name: 'Aurora',
    nativeTokenSymbol: 'AETH',
    nativeTokenAddress: 'aurora',
    enum: CHAINS_ENUM.AURORA,
    logo: IconAuroraLogo,
    whiteLogo: IconAuroraWhiteLogo,
    selectChainLogo: IconAuroraChainLogo,
    hex: '0x4e454152',
    scanLink: 'https://aurorascan.dev/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://mainnet.aurora.dev',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.MOBM]: {
    id: 1284,
    serverId: 'mobm',
    network: '1284',
    name: 'Moonbeam',
    nativeTokenSymbol: 'GLMR',
    nativeTokenAddress: 'mobm',
    enum: CHAINS_ENUM.MOBM,
    logo: IconMobmLogo,
    whiteLogo: IconMobmWhiteLogo,
    selectChainLogo: IconMobmChainLogo,
    hex: '0x504',
    scanLink: 'https://moonscan.io/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/mobm_token/logo_url/mobm/a8442077d76b258297181c3e6eb8c9cc.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://blockscout.moonbeam.network/api/eth-rpc',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.SBCH]: {
    id: 10000,
    serverId: 'sbch',
    network: '10000',
    name: 'smartBCH',
    nativeTokenSymbol: 'BCH',
    nativeTokenAddress: 'sbch',
    enum: CHAINS_ENUM.SBCH,
    logo: IconSbchLogo,
    whiteLogo: IconSbchWhiteLogo,
    selectChainLogo: IconSbchChainLogo,
    hex: '0x2710',
    scanLink: 'https://www.smartscan.cash/transaction/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/sbch_token/logo_url/sbch/03007b5353bb9e221efb82a6a70d9ec9.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://rpc-mainnet.smartbch.org',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.FUSE]: {
    id: 122,
    serverId: 'fuse',
    network: '122',
    name: 'Fuse',
    nativeTokenSymbol: 'FUSE',
    nativeTokenAddress: 'fuse',
    enum: CHAINS_ENUM.FUSE,
    logo: IconFuseLogo,
    whiteLogo: IconFuseWhiteLogo,
    selectChainLogo: IconFuseChainLogo,
    hex: '0x7a',
    scanLink: 'https://explorer.fuse.io/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/chain/logo_url/fuse/ea4c9e12e7f646d42aa8fb07ab8dfec8.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://rpc.fuse.io',
    eip: {
      '1559': false,
    },
  },
  [CHAINS_ENUM.HMY]: {
    id: 1666600000,
    serverId: 'hmy',
    network: '1666600000',
    name: 'Harmony',
    nativeTokenSymbol: 'ONE',
    nativeTokenAddress: 'hmy',
    enum: CHAINS_ENUM.HMY,
    logo: IconHarmonyLogo,
    whiteLogo: IconHarmonyWhiteLogo,
    selectChainLogo: IconHarmonyChainLogo,
    hex: '0x63564c40',
    scanLink: 'https://explorer.harmony.one/tx/_s_',
    nativeTokenLogo:
      'https://static.debank.com/image/chain/logo_url/hmy/734c003023531e31c636ae25d5a73172.png',
    nativeTokenDecimals: 18,
    thridPartyRPC: 'https://a.api.s0.t.hmny.io',
    eip: {
      '1559': false,
    },
  },
};

export const KEYRING_TYPE = {
  HdKeyring: 'HD Key Tree',
  SimpleKeyring: 'Simple Key Pair',
  HardwareKeyring: 'hardware',
  WatchAddressKeyring: 'Watch Address',
  WalletConnectKeyring: 'WalletConnect',
  GnosisKeyring: 'Gnosis',
};

export const KEYRING_CLASS = {
  PRIVATE_KEY: 'Simple Key Pair',
  MNEMONIC: 'HD Key Tree',
  HARDWARE: {
    BITBOX02: 'BitBox02 Hardware',
    TREZOR: 'Trezor Hardware',
    LEDGER: 'Ledger Hardware',
    ONEKEY: 'Onekey Hardware',
    GRIDPLUS: 'GridPlus Hardware',
  },
  WATCH: 'Watch Address',
  WALLETCONNECT: 'WalletConnect',
  GNOSIS: 'Gnosis',
};

export const KEYRING_WITH_INDEX = [
  KEYRING_CLASS.HARDWARE.LEDGER,
  KEYRING_CLASS.HARDWARE.GRIDPLUS,
];

export const SUPPORT_1559_KEYRING_TYPE = [
  KEYRING_CLASS.HARDWARE.LEDGER,
  KEYRING_CLASS.HARDWARE.GRIDPLUS,
  KEYRING_CLASS.PRIVATE_KEY,
  KEYRING_CLASS.MNEMONIC,
];

export const KEYRING_TYPE_TEXT = {
  [KEYRING_TYPE.HdKeyring]: 'Created by Mnemonic',
  [KEYRING_TYPE.SimpleKeyring]: 'Imported by Private Key',
  [KEYRING_TYPE.WatchAddressKeyring]: 'Watch Mode',
  [KEYRING_CLASS.HARDWARE.BITBOX02]: 'Imported by BitBox02',
  [KEYRING_CLASS.HARDWARE.LEDGER]: 'Imported by Ledger',
  [KEYRING_CLASS.HARDWARE.TREZOR]: 'Imported by Trezor',
  [KEYRING_CLASS.HARDWARE.ONEKEY]: 'Imported by Onekey',
  [KEYRING_CLASS.HARDWARE.GRIDPLUS]: 'Imported by GridPlus',
  [KEYRING_CLASS.GNOSIS]: 'Imported by Gnosis Safe',
};
export const BRAND_ALIAN_TYPE_TEXT = {
  [KEYRING_TYPE.HdKeyring]: 'Mnemonic',
  [KEYRING_TYPE.SimpleKeyring]: 'Private Key',
  [KEYRING_TYPE.WatchAddressKeyring]: 'Watch',
  [KEYRING_CLASS.HARDWARE.LEDGER]: 'Ledger',
  [KEYRING_CLASS.HARDWARE.TREZOR]: 'Trezor',
  [KEYRING_CLASS.HARDWARE.ONEKEY]: 'Onekey',
  [KEYRING_CLASS.HARDWARE.BITBOX02]: 'BitBox02',
  [KEYRING_CLASS.GNOSIS]: 'Gnosis',
  [KEYRING_CLASS.HARDWARE.GRIDPLUS]: 'GridPlus',
};
export const HARDWARE_KEYRING_TYPES = {
  BitBox02: {
    type: 'BitBox02 Hardware',
    brandName: 'BitBox02',
  },
  Ledger: {
    type: 'Ledger Hardware',
    brandName: 'Ledger',
  },
  Trezor: {
    type: 'Trezor Hardware',
    brandName: 'Trezor',
  },
  Onekey: {
    type: 'Onekey Hardware',
    brandName: 'Onekey',
  },
  GridPlus: {
    type: 'GridPlus Hardware',
    brandName: 'GridPlus',
  },
};

export enum TX_TYPE_ENUM {
  SEND = 1,
  APPROVE = 2,
  CANCEL_APPROVE = 3,
  CANCEL_TX = 4,
  SIGN_TX = 5,
}

export const IS_CHROME = /Chrome\//i.test(navigator.userAgent);

export const IS_FIREFOX = /Firefox\//i.test(navigator.userAgent);

export const IS_LINUX = /linux/i.test(navigator.userAgent);

let chromeVersion: number | null = null;

if (IS_CHROME) {
  const matches = navigator.userAgent.match(/Chrome\/(\d+[^.\s])/);
  if (matches && matches.length >= 2) {
    chromeVersion = Number(matches[1]);
  }
}

export const IS_AFTER_CHROME91 = IS_CHROME
  ? chromeVersion && chromeVersion >= 91
  : false;

export const GAS_LEVEL_TEXT = {
  slow: 'Standard',
  normal: 'Fast',
  fast: 'Instant',
  custom: 'Custom',
};

export const IS_WINDOWS = /windows/i.test(navigator.userAgent);

export const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: IconEN,
  },
  {
    value: 'zh_CN',
    label: '中文',
    icon: IconZH,
  },
];

export const CHECK_METAMASK_INSTALLED_URL = {
  Chrome: 'chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/phishing.html',
  Firefox: '',
  Brave: '',
  Edge: '',
};

export const SAFE_RPC_METHODS = [
  'eth_blockNumber',
  'eth_call',
  'eth_chainId',
  'eth_coinbase',
  'eth_decrypt',
  'eth_estimateGas',
  'eth_gasPrice',
  'eth_getBalance',
  'eth_getBlockByHash',
  'eth_getBlockByNumber',
  'eth_getBlockTransactionCountByHash',
  'eth_getBlockTransactionCountByNumber',
  'eth_getCode',
  'eth_getEncryptionPublicKey',
  'eth_getFilterChanges',
  'eth_getFilterLogs',
  'eth_getLogs',
  'eth_getProof',
  'eth_getStorageAt',
  'eth_getTransactionByBlockHashAndIndex',
  'eth_getTransactionByBlockNumberAndIndex',
  'eth_getTransactionByHash',
  'eth_getTransactionCount',
  'eth_getTransactionReceipt',
  'eth_getUncleByBlockHashAndIndex',
  'eth_getUncleByBlockNumberAndIndex',
  'eth_getUncleCountByBlockHash',
  'eth_getUncleCountByBlockNumber',
  'eth_getWork',
  'eth_hashrate',
  'eth_mining',
  'eth_newBlockFilter',
  'eth_newFilter',
  'eth_newPendingTransactionFilter',
  'eth_protocolVersion',
  'eth_sendRawTransaction',
  'eth_sendTransaction',
  'eth_submitHashrate',
  'eth_submitWork',
  'eth_syncing',
  'eth_uninstallFilter',
  'wallet_requestPermissions',
  'wallet_getPermissions',
  'net_version',
];

export const MINIMUM_GAS_LIMIT = 21000;

export enum WATCH_ADDRESS_CONNECT_TYPE {
  WalletConnect = 'WalletConnect',
}

export enum BRAND_WALLET_CONNECT_TYPE {
  WalletConnect = 'WalletConnect',
  BitBox02Connect = 'BitBox02Connect',
  LedgerConnect = 'LedgerConnect',
  OneKeyConnect = 'OneKeyConnect',
  TrezorConnect = 'TrezorConnect',
  GnosisConnect = 'GnosisConnect',
  GridPlusConnect = 'GridPlusConnect',
}

export const WALLETCONNECT_STATUS_MAP = {
  PENDING: 1,
  CONNECTED: 2,
  WAITING: 3,
  SIBMITTED: 4,
  REJECTED: 5,
  FAILD: 6,
};

export const INTERNAL_REQUEST_ORIGIN = 'https://rabby.io';

export const INTERNAL_REQUEST_SESSION = {
  name: 'Rabby',
  origin: INTERNAL_REQUEST_ORIGIN,
  icon: './images/icon-128.png',
};

export const INITIAL_OPENAPI_URL = 'https://openapi.debank.com';

export const EVENTS = {
  broadcastToUI: 'broadcastToUI',
  broadcastToBackground: 'broadcastToBackground',
  SIGN_FINISHED: 'SIGN_FINISHED',
  WALLETCONNECT: {
    STATUS_CHANGED: 'WALLETCONNECT_STATUS_CHANGED',
    INIT: 'WALLETCONNECT_INIT',
    INITED: 'WALLETCONNECT_INITED',
  },
  GNOSIS: {
    TX_BUILT: 'TransactionBuilt',
    TX_CONFIRMED: 'TransactionConfirmed',
  },
};

export enum WALLET_BRAND_TYPES {
  AMBER = 'AMBER',
  BITBOX02 = 'BITBOX02',
  COBO = 'COBO',
  FIREBLOCKS = 'FIREBLOCKS',
  IMTOKEN = 'IMTOKEN',
  JADE = 'JADE',
  LEDGER = 'LEDGER',
  MATHWALLET = 'MATHWALLET',
  ONEKEY = 'ONEKEY',
  TP = 'TP',
  TREZOR = 'TREZOR',
  TRUSTWALLET = 'TRUSTWALLET',
  GNOSIS = 'Gnosis',
  GRIDPLUS = 'GRIDPLUS',
  METAMASK = 'MetaMask',
}

export const WALLET_BRAND_CONTENT = {
  [WALLET_BRAND_TYPES.AMBER]: {
    id: 0,
    name: 'Amber',
    brand: WALLET_BRAND_TYPES.AMBER,
    icon: IconAmber,
    image: LogoAmber,
    connectType: BRAND_WALLET_CONNECT_TYPE.WalletConnect,
  },
  [WALLET_BRAND_TYPES.BITBOX02]: {
    id: 10,
    name: 'BitBox02',
    brand: WALLET_BRAND_TYPES.BITBOX02,
    icon: IconBitBox02,
    image: IconBitBox02WithBorder,
    connectType: BRAND_WALLET_CONNECT_TYPE.BitBox02Connect,
  },
  [WALLET_BRAND_TYPES.COBO]: {
    id: 1,
    name: 'Cobo Wallet',
    brand: WALLET_BRAND_TYPES.COBO,
    icon: IconCobo,
    image: LogoCobo,
    connectType: BRAND_WALLET_CONNECT_TYPE.WalletConnect,
  },
  [WALLET_BRAND_TYPES.FIREBLOCKS]: {
    id: 11,
    name: 'FireBlocks',
    brand: WALLET_BRAND_TYPES.FIREBLOCKS,
    icon: IconFireblocks,
    image: IconFireblocksWithBorder,
    connectType: BRAND_WALLET_CONNECT_TYPE.WalletConnect,
  },
  [WALLET_BRAND_TYPES.GNOSIS]: {
    id: 13,
    name: 'Gnosis Safe',
    brand: WALLET_BRAND_TYPES.GNOSIS,
    icon: IconGnosis,
    image: IconGnosis,
    connectType: BRAND_WALLET_CONNECT_TYPE.GnosisConnect,
  },
  [WALLET_BRAND_TYPES.GRIDPLUS]: {
    id: 12,
    name: 'GridPlus',
    brand: WALLET_BRAND_TYPES.GRIDPLUS,
    icon: IconGridPlus,
    image: IconGridPlus,
    connectType: BRAND_WALLET_CONNECT_TYPE.GridPlusConnect,
  },
  [WALLET_BRAND_TYPES.IMTOKEN]: {
    id: 2,
    name: 'imToken',
    brand: WALLET_BRAND_TYPES.IMTOKEN,
    icon: IconImtoken,
    image: LogoImtoken,
    connectType: BRAND_WALLET_CONNECT_TYPE.WalletConnect,
  },
  [WALLET_BRAND_TYPES.JADE]: {
    id: 3,
    name: 'Jade Wallet',
    brand: WALLET_BRAND_TYPES.JADE,
    icon: IconJade,
    image: LogoJade,
    connectType: BRAND_WALLET_CONNECT_TYPE.WalletConnect,
  },
  [WALLET_BRAND_TYPES.LEDGER]: {
    id: 4,
    name: 'Ledger',
    brand: WALLET_BRAND_TYPES.LEDGER,
    icon: LogoLedgerWhite,
    image: LogoLedgerDark,
    connectType: BRAND_WALLET_CONNECT_TYPE.LedgerConnect,
  },
  [WALLET_BRAND_TYPES.METAMASK]: {
    id: 14,
    name: 'MetaMask Mobile',
    brand: WALLET_BRAND_TYPES.METAMASK,
    icon: IconMetaMask,
    image: IconMetaMask,
    connectType: BRAND_WALLET_CONNECT_TYPE.WalletConnect,
  },
  [WALLET_BRAND_TYPES.MATHWALLET]: {
    id: 5,
    name: 'Math Wallet',
    brand: WALLET_BRAND_TYPES.MATHWALLET,
    icon: IconMath,
    image: LogoMath,
    connectType: BRAND_WALLET_CONNECT_TYPE.WalletConnect,
  },
  [WALLET_BRAND_TYPES.ONEKEY]: {
    id: 6,
    name: 'OneKey',
    brand: WALLET_BRAND_TYPES.ONEKEY,
    icon: IconOnekey,
    image: LogoOnekey,
    connectType: BRAND_WALLET_CONNECT_TYPE.OneKeyConnect,
  },
  [WALLET_BRAND_TYPES.TP]: {
    id: 7,
    name: 'TokenPocket',
    brand: WALLET_BRAND_TYPES.TP,
    icon: IconTokenpocket,
    image: LogoTp,
    connectType: BRAND_WALLET_CONNECT_TYPE.WalletConnect,
  },
  [WALLET_BRAND_TYPES.TREZOR]: {
    id: 8,
    name: 'Trezor',
    brand: WALLET_BRAND_TYPES.TREZOR,
    icon: IconTrezor,
    image: LogoTrezor,
    connectType: BRAND_WALLET_CONNECT_TYPE.TrezorConnect,
  },
  [WALLET_BRAND_TYPES.TRUSTWALLET]: {
    id: 9,
    name: 'Trust Wallet',
    brand: WALLET_BRAND_TYPES.TRUSTWALLET,
    icon: IconTrust,
    image: LogoTrust,
    connectType: BRAND_WALLET_CONNECT_TYPE.WalletConnect,
  },
};

export const KEYRING_ICONS = {
  [KEYRING_CLASS.MNEMONIC]: IconMnemonicPurple,
  [KEYRING_CLASS.PRIVATE_KEY]: IconPrivateKeyPurple,
  [KEYRING_CLASS.WATCH]: IconWatchPurple,
  [HARDWARE_KEYRING_TYPES.BitBox02.type]: IconBitBox02,
  [HARDWARE_KEYRING_TYPES.Ledger.type]: LogoLedgerWhite,
  [HARDWARE_KEYRING_TYPES.Onekey.type]: LogoOnekey,
  [HARDWARE_KEYRING_TYPES.Trezor.type]: IconTrezor24,
  [HARDWARE_KEYRING_TYPES.GridPlus.type]: IconGridPlus,
};

export const KEYRING_ICONS_WHITE = {
  [KEYRING_CLASS.MNEMONIC]: IconMnemonicWhite,
  [KEYRING_CLASS.PRIVATE_KEY]: IconPrivateKeyWhite,
  [KEYRING_CLASS.WATCH]: IconWatchWhite,
  [HARDWARE_KEYRING_TYPES.BitBox02.type]: IconBitBox02,
  [HARDWARE_KEYRING_TYPES.Ledger.type]: LogoLedgerWhite,
  [HARDWARE_KEYRING_TYPES.Onekey.type]: LogoOnekey,
  [HARDWARE_KEYRING_TYPES.Trezor.type]: IconTrezor24,
  [HARDWARE_KEYRING_TYPES.GridPlus.type]: IconGridPlus,
};
export const KEYRING_PURPLE_LOGOS = {
  [KEYRING_CLASS.MNEMONIC]: IconMnemonicPurple,
  [KEYRING_CLASS.PRIVATE_KEY]: IconPrivateKeyPurple,
  [KEYRING_CLASS.WATCH]: IconWatchPurple,
};

export const KEYRINGS_LOGOS = {
  [KEYRING_CLASS.MNEMONIC]: LogoMnemonic,
  [KEYRING_CLASS.PRIVATE_KEY]: LogoPrivateKey,
  [KEYRING_CLASS.WATCH]: LogoWatch,
  [HARDWARE_KEYRING_TYPES.BitBox02.type]: IconBitBox02WithBorder,
  [HARDWARE_KEYRING_TYPES.Ledger.type]: LogoLedgerWhite,
  [HARDWARE_KEYRING_TYPES.Onekey.type]: IconOneKey18,
  [HARDWARE_KEYRING_TYPES.Trezor.type]: IconTrezor24Border,
  [HARDWARE_KEYRING_TYPES.GridPlus.type]: IconGridPlus,
};

export const NOT_CLOSE_UNFOCUS_LIST: string[] = [
  WALLET_BRAND_TYPES.AMBER,
  WALLET_BRAND_TYPES.COBO,
];

export const SPECIFIC_TEXT_BRAND = {
  [WALLET_BRAND_TYPES.JADE]: {
    i18nKey: 'WatchGuideStep2JADE',
  },
};

export const SORT_WEIGHT = {
  [KEYRING_TYPE.HdKeyring]: 1,
  [KEYRING_TYPE.SimpleKeyring]: 2,
  [KEYRING_TYPE.HardwareKeyring]: 3,
  [KEYRING_TYPE.WalletConnectKeyring]: 4,
  [KEYRING_TYPE.WatchAddressKeyring]: 5,
};

export const GASPRICE_RANGE = {
  [CHAINS_ENUM.ETH]: [0, 10000],
  [CHAINS_ENUM.BOBA]: [0, 1000],
  [CHAINS_ENUM.OP]: [0, 1000],
  [CHAINS_ENUM.ARBITRUM]: [0, 1000],
  [CHAINS_ENUM.AURORA]: [0, 1000],
  [CHAINS_ENUM.BSC]: [0, 1000],
  [CHAINS_ENUM.AVAX]: [0, 4000],
  [CHAINS_ENUM.POLYGON]: [0, 250000],
  [CHAINS_ENUM.FTM]: [0, 360000],
  [CHAINS_ENUM.GNOSIS]: [0, 500000],
  [CHAINS_ENUM.OKT]: [0, 15000],
  [CHAINS_ENUM.HECO]: [0, 50000],
  [CHAINS_ENUM.CELO]: [0, 100000],
  [CHAINS_ENUM.MOVR]: [0, 3000],
  [CHAINS_ENUM.CRO]: [0, 100000],
  [CHAINS_ENUM.BTT]: [0, 20000000000],
  [CHAINS_ENUM.METIS]: [0, 3000],
};
