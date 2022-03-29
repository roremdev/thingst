import Prisma from '@libs/Prisma'

import Model from '@models/Model'
import { Account, Query, Payload, Filter } from './Account.entity'

export default class AccountModel extends Model<
    Account,
    Query,
    Payload,
    Filter
> {
    /**
     * @private
     * @description Prisma ORM definition handler library. */
    private client = new Prisma('account')
    /**
     * @description Find an account by id.
     * @param {Query} query
     * @returns Account */
    async findUnique(query: Query): Promise<Account> {
        return await this.client.findUnique({
            where: query,
            include: { directions: true },
        })
    }
    /**
     * @description Find all accounts.
     * @returns {Account[]} Array of accounts. */
    async findMany(filter: Filter): Promise<Account[]> {
        return await this.client.findMany({
            include: { directions: true },
            ...filter,
        })
    }
    /**
     * @description Create an account.
     * @returns {Account} */
    async create(payload: Payload): Promise<Account> {
        return await this.client.create({
            data: payload,
        })
    }
}
