import Prisma from '@libs/Prisma'

import Model from '@models/Model'
import { Account, Query, Payload } from './Account.entity'

export default class AccountModel extends Model<Account, Query, Payload> {
    /**
     * @private
     * @description Prisma ORM definition handler library. */
    #client = new Prisma('Account')
    /**
     * @description Find an account by id.
     * @param {Query} {id} Account ID.
     * @returns Account */
    async findUnique({ id }: Query): Promise<Account> {
        return await this.#client.findUnique({
            where: { id },
        })
    }
    /**
     * @description Find all accounts.
     * @returns {Account[]} Array of accounts. */
    async findMany(): Promise<Account[]> {
        return await this.#client.findMany()
    }
    /**
     * @description Create an account.
     * @returns {Account} */
    async create(payload: Payload): Promise<Account> {
        return await this.#client.create({
            data: payload,
        })
    }
}
