import { PrismaClient } from '@prisma/client'

/**
 * @class
 * @description Prisma ORM definition handler library */
export default class Prisma {
    /**
     * @private
     * @description Prisma model name. */
    #resource: string
    /**
     * @private
     * @description Prisma client reference. */
    #client: PrismaClient
    /**
     * @constructor
     * @param {string} resource Model name. */
    constructor(resource: string) {
        this.#resource = resource
    }
    /**
     * @description Singleton pattern for pool connection.
     * @returns Connection to model. */
    #connect() {
        if (!this.#client) this.#client = new PrismaClient()
        return this.#client[this.#resource]
    }
    /**
     * @description Find a register in model.
     * @param {object} [query] - Optional query object; default: {}
     * @returns Resultset. */
    findUnique(query: object = {}) {
        return this.#connect().findUnique(query)
    }
    /**
     * @description Find all registers in model.
     * @param {object} [query] - Optional query object; default: {}
     * @returns Resultset. */
    findMany(query: object = {}) {
        return this.#connect().findMany(query)
    }
    /**
     * @description Create a registers in model.
     * @param {object} payload - Payload object
     * @returns Resultset. */
    create(payload: object) {
        return this.#connect().create(payload)
    }
}
