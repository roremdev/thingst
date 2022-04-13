import Model from '@models/Model'

import { IProduct, Query, Payload } from './Product.entity'

import products from '@db/mocks/product.mock'

export default class Product extends Model<IProduct, Query, Payload> {
    /**
     * @constructor
     * @description Generate link to Prisma model. */
    constructor() {
        super('product')
    }
    /**
     * @description Find a product by id.
     * @param {Query} {id} Product ID.
     * @returns Product. */
    async findUnique({ id }: Query): Promise<IProduct> {
        return products.find((product) => product.id === id) as IProduct
    }
    /**
     * @description Find pool of products.
     * @returns Array of products. */
    async findMany(): Promise<IProduct[]> {
        return products
    }
    /**
     * @description Create a product.
     * @returns Product. */
    async create(payload: Payload): Promise<IProduct> {
        throw new Error('Method not implemented.')
    }
}
