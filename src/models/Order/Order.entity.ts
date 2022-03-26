import { Direction } from '@models/Direction/Direction.entity'
import { Product } from '@models/Product/Product.entity'

export interface Order {
    id: number
    createdAt: string

    direction: Direction
    products: Product[]
}
