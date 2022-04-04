import { IDirection } from '@models/Direction/Direction.entity'
import { Product } from '@models/Product/Product.entity'

export interface IOrder {
    id: number
    createdAt: string

    direction: IDirection
    products: Product[]
}
