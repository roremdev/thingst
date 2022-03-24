import { PrismaClient } from '@prisma/client'

import { fail } from '@utils/logger.util'

/**
 * @class
 * @description Prisma ORM definition handler library */
export class Prisma {
    /**
     * @private
     * @description prisma client reference */
    private static client: any

    /**
     * @private
     * @description singleton pattern for pool connection
     * @returns connection client */
    static #connect(resource: string) {
        Prisma.client = new PrismaClient()
        return Prisma.client[resource]
    }

    /**
     * @description find all registers
     * @param {string} resource - resource name to work
     * @param {object} options - query options
     * @throws {ErrorServer}
     * @returns query response as array */
    static async findMany(resource: string, options: any): Promise<any> {
        try {
            const client = Prisma.#connect(resource)
            return await client.findMany(options)
        } catch (error: any) {
            fail(error.message)
        }
    }
}
