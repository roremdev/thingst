import { PrismaClient } from '@prisma/client'

export interface Filters {
    skip: number
    take: number
    where: {
        AND?: Array<{
            [key: string]: any
        }>
        OR?: Array<{
            [key: string]: any
        }>
        [key: string]: any
    }
}

/**
 * @class
 * @description Prisma ORM definition handler library */
export default class Prisma {
    /**
     * @private
     * @description Prisma model name. */
    private readonly resource: string
    /**
     * @private
     * @description Prisma client reference. */
    private readonly client: PrismaClient = new PrismaClient()
    /**
     * @constructor
     * @param {string} resource Model name. */
    constructor(resource: string) {
        this.resource = resource
    }
    /**
     * @description Singleton pattern for pool connection.
     * @returns Connection to model. */
    private connect() {
        const model = Object.entries(this.client).find(
            ([key]) => key === this.resource
        )
        if (!model) throw new Error(`Model ${this.resource} not found`)
        return model[1]
    }
    /**
     * @description Find a register in model.
     * @param {object} [query] - Optional query object; default: {}
     * @returns Result. */
    findUnique(query: object = {}) {
        return this.connect().findUnique(query)
    }
    /**
     * @description Find all registers in model.
     * @param {object} [query] - Optional query object; default: {}
     * @returns Result. */
    findMany(query: object = {}) {
        return this.connect().findMany(query)
    }
    /**
     * @description Create a registers in model.
     * @param {object} payload - Payload object
     * @returns Result. */
    create(payload: object) {
        return this.connect().create(payload)
    }
}
