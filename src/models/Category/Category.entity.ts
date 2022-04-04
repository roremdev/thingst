export interface ICategory {
    id: number
    name: string
}

export type Query = Pick<ICategory, 'id'>
export type Payload = Pick<ICategory, 'name'>
