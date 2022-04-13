import 'module-alias/register'
import { PrismaClient } from '@prisma/client'
import { complete, info, fail } from '@utils/logger.util'

import { IAccount } from '@models/Account/Account.entity'
import { ICategory } from '@models/Category/Category.entity'
import { IDirection } from '@models/Direction/Direction.entity'
import { IProduct } from '@models/Product/Product.entity'

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
    await createBatch<IAccount>('account', accounts)
    await createBatch<ICategory>('category', categories)
    await createBatch<IDirection>('direction', directions)
    await createBatch<IProduct>('product', products)
})()
    .then(() => {
        _prisma.$disconnect()
        complete('Database seeded')
    })
    .catch((error) => {
        _prisma.$disconnect()
        fail(error)
    })
