export interface Category {
    id: number
    name: string
}

export type Query = Pick<Category, 'id'>
export type Payload = Pick<Category, 'name'>
