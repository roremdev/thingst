import { PrismaClient } from '@prisma/client'
import { complete, fail } from '@utils/logger.util'

import accounts from './mocks/account.mock'

const prisma = new PrismaClient()
/**
 * @desctrion Create a new batch records in the database.
 * @param {string} model Model name.
 * @param {Array<TModel>} collection Collection of records to be created. */
async function createByBatch<TModel>(model: string, collection: Array<TModel>) {
    await Promise.all(
        collection.map(async (item) => {
            try {
                await prisma[model].create({
                    data: item,
                })
            } catch ({ message }) {
                fail(message as string)
            }
        })
    )
    complete(`${model} created`)
}

;(async () => {
    await createByBatch('account', accounts)
})().finally(async () => await prisma.disconnect())
