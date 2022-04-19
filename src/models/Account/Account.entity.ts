export interface IAccount {
    id: number
    email: string
    password: string
}

export type Query = Pick<IAccount, 'email'>
export type Payload = Pick<IAccount, 'email' | 'password'>
