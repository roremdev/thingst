import { ICategory } from '@models/Category/Category.entity'

export interface IProduct {
    id: number
    name: string
    price: number
    quantity: number
    image: string

    category?: string | Pick<ICategory, 'name'>
    categoryId?: number
}

export type Query = Pick<IProduct, 'id'>
export type Payload = Exclude<IProduct, 'category'>
