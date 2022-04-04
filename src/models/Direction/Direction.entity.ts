import { IAccount } from '@models/Account/Account.entity'

export interface IDirection {
    id: number
    firstName: string
    lastName: string
    address: string
    city: string
    country: string
    zipCode: string
    isDefault: boolean

    account?: number | Pick<IAccount, 'id'>
    accountId?: number
}

export type Query = Pick<IDirection, 'id'>
export type Payload = Exclude<IDirection, 'account'>
