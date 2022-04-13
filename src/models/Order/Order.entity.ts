import { IDirection } from '@models/Direction/Direction.entity'
import { IProduct } from '@models/Product/Product.entity'

export interface IOrder {
    id: number
    createdAt: string

    direction: IDirection
    products: IProduct[]
}
