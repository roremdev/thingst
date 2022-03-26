import Model from '@models/Model'

import { Direction, Query, Payload } from './Direction.entity'

import directions from '@db/mocks/direction.mock'

export default class DirectionModel extends Model<Direction, Query, Payload> {
    /**
     * @description Find a direction by id.
     * @param {Query} {id} Direction ID.
     * @returns {Direction | undefined} Direction */
    static findUnique({ id }: Query): Direction | undefined {
        return directions.find((direction) => direction.id === id)
    }
    /**
     * @description Find pool of categories.
     * @returns {Direction[]} Array of categories. */
    static findMany(): Direction[] {
        return directions
    }
}
