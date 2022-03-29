import { Filters } from '@libs/Prisma'

export interface Account {
    id: number
    email: string
    password: string
}

export type Query = Pick<Account, 'id'>
export type Payload = Pick<Account, 'email' | 'password'>
export type Filter = Partial<Filters>
