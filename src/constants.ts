import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export const BIG_DECIMAL_1E6 = BigDecimal.fromString('1e6')

export const BIG_DECIMAL_1E18 = BigDecimal.fromString('1e18')

export const BIG_DECIMAL_ZERO = BigDecimal.fromString('0')

export const BIG_DECIMAL_ONE = BigDecimal.fromString('1')

export const BIG_INT_ONE = BigInt.fromI32(1)

export const BIG_INT_ZERO = BigInt.fromI32(0)

export const FACTORY_ADDRESS = Address.fromString('0xb9E15055807FcDd1f845c1eBF04BF7A176379faA')

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

// TODO: DAI address to be updated
export const DAI_WETH_PAIR = '0xb72b464bd84f548a7d5ee187c31602dbecbb6870' // TODO 0 => Needs to be NONCHECKSUMED

export const USDC_WETH_PAIR = '0xcd833908dffffac712848d0abcd16092fda77347'

export const USDT_WETH_PAIR = '0x49d7d68db959984614977d5d464ececdad132abb'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0')

export const WETH_ADDRESS = Address.fromString('0x0c477ae2e8e5ce1666468e44b066542fa46f9f72')
