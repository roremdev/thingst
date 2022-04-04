import Error from '@controllers/Error.controller'
import Model from '@models/Model'
import { IDirection, Query, Payload } from './Direction.entity'

import directions from '@db/mocks/direction.mock'

export default class Direction extends Model<IDirection, Query, Payload> {
    /**
     * @constructor
     * @description Generate link to Prisma model. */
    constructor() {
        super('direction')
    }
    /**
     * @description Find a direction by id.
     * @param {Query} {id} Direction ID.
     * @returns Direction. */
    async findUnique({ id }: Query): Promise<IDirection> {
        return directions.find((direction) => direction.id === id)
    }
    /**
     * @description Find pool of directions.
     * @returns Array of directions. */
    async findMany(): Promise<IDirection[]> {
        return directions
    }
    /**
     * @description Create a category.
     * @returns Direction. */
    async create(payload: Payload): Promise<IDirection> {
        throw new Error('Method not implemented.')
    }
}
