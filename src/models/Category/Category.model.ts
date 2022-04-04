import Error from '@controllers/Error.controller'
import Model from '@models/Model'
import { ICategory, Query, Payload } from './Category.entity'

export default class Category extends Model<ICategory, Query, Payload> {
    /**
     * @constructor
     * @description Generate link to Prisma model. */
    constructor() {
        super('category')
    }
    /**
     * @description Find a category by id.
     * @param {Query} query
     * @returns Category */
    async findUnique(query: Query): Promise<ICategory> {
        return await this.client.findUnique({
            where: query,
        })
    }
    /**
     * @description Find pool of categories.
     * @returns {Category[]} Array of categories. */
    async findMany(): Promise<ICategory[]> {
        return await this.client.findMany()
    }
    /**
     * @description Create a category.
     * @returns {Category} */
    async create(payload: Payload): Promise<ICategory> {
        throw new Error('Method not implemented.')
    }
}
