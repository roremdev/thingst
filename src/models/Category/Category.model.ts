import Prisma from '@libs/Prisma'

import Model from '@models/Model'
import { Category, Query, Payload } from './Category.entity'

export default class CategoryModel extends Model<Category, Query, Payload> {
    /**
     * @private
     * @description Prisma ORM definition handler library. */
    private client = new Prisma('account')
    /**
     * @description Find a category by id.
     * @param {Query} query
     * @returns Category */
    async findUnique(query: Query): Promise<Category> {
        return await this.client.findUnique({
            where: query,
        })
    }
    /**
     * @description Find pool of categories.
     * @returns {Category[]} Array of categories. */
    async findMany(): Promise<Category[]> {
        return await this.client.findMany()
    }
}
