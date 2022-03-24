import Model from '@models/Model'

import { Product, Query, Payload } from './Product.entity'

import products from '@db/mocks/product.mock'

export default class ProductyModel extends Model<Product, Query, Payload> {
    /**
     * @description Find a product by id.
     * @param {Query} {id} Product ID.
     * @returns {Product | undefined} Product */
    static findUnique({ id }: Query): Product | undefined {
        return products.find((product) => product.id === id)
    }
    /**
     * @description Find pool of products.
     * @returns {Product[]} Array of products. */
    static findMany(): Product[] {
        return products
    }
}
