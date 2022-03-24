import Model from '@models/Model'

import { Category, Query, Payload } from './Category.entity'

import categories from '@db/mocks/category.mock'

export default class CategoryModel extends Model<Category, Query, Payload> {
    /**
     * @description Find a category by id.
     * @param {Query} {id} Category ID.
     * @returns {Category | undefined} Category */
    findUnique({ id }: Query): Category | undefined {
        return categories.find((category) => category.id === id)
    }
    /**
     * @description Find pool of categories.
     * @returns {Category[]} Array of categories. */
    findMany(): Category[] {
        return categories
    }
}
