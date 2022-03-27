import 'module-alias/register'
import { PrismaClient } from '@prisma/client'
import { complete, info, fail } from '@utils/logger.util'

import { Account } from '@models/Account/Account.entity'
import { Category } from '@models/Category/Category.entity'
import { Direction } from '@models/Direction/Direction.entity'
import { Product } from '@models/Product/Product.entity'

import accounts from './mocks/account.mock'
import categories from './mocks/category.mock'
import directions from './mocks/direction.mock'
import products from './mocks/product.mock'

const _prisma = new PrismaClient()

/**
 * @description Create a new batch records in the database.
 * @param {string} name Model name.
 * @param {Array} collection Collection of records to be created. */
async function createBatch<TModel>(name: string, collection: Array<TModel>) {
    const model = Object.entries(_prisma).find(([key]) => key === name)
    if (!model) throw new Error(`Model ${name} not found`)
    await Promise.all(
        collection.map(async (item) => {
            await model[1].create({ data: item })
        })
    ).catch(({ message }) => fail(message))
    info(`${name} created`)
}

;(async () => {
    await createBatch<Account>('account', accounts)
    await createBatch<Category>('category', categories)
    await createBatch<Direction>('direction', directions)
    await createBatch<Product>('product', products)
})()
    .then(() => {
        _prisma.$disconnect()
        complete('Database seeded')
    })
    .catch((error) => {
        _prisma.$disconnect()
        fail(error)
    })
