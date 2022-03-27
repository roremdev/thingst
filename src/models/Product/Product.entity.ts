import { Category } from '@models/Category/Category.entity'

export interface Product {
    id: number
    name: string
    price: number
    quantity: number
    image: string

    category?: string | Pick<Category, 'name'>
    categoryId?: number
}

export type Query = Pick<Product, 'id'>
export type Payload = Exclude<Product, 'category'>
