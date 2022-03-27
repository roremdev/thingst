import { Account } from '@models/Account/Account.entity'

export interface Direction {
    id: number
    firstName: string
    lastName: string
    address: string
    city: string
    country: string
    zipCode: string
    isDefault: boolean

    account?: number | Pick<Account, 'id'>
    accountId?: number
}

export type Query = Pick<Direction, 'id'>
export type Payload = Exclude<Direction, 'account'>
