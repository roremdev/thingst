import { IFilters } from '@libs/Prisma'
import Model from '@models/Model'
import { IAccount, Query, Payload } from './Account.entity'

export type Filter = Partial<IFilters>

export default class Account extends Model<IAccount, Query, Payload> {
    /**
     * @constructor
     * @description Generate link to Prisma model. */
    constructor() {
        super('account')
    }

    /**
     * @description Find an account by id.
     * @param {Query} query
     * @returns Account */
    async findUnique(query: Query): Promise<IAccount> {
        return await this.client.findUnique({
            where: query,
            include: { directions: true },
        })
    }

    /**
     * @description Find all accounts.
     * @returns {Account[]} Array of accounts. */
    async findMany(filter: Filter): Promise<IAccount[]> {
        return await this.client.findMany({
            include: { directions: true },
            ...filter,
        })
    }

    /**
     * @description Create an account.
     * @returns {Account} */
    async create(payload: Payload): Promise<IAccount> {
        return await this.client.create({
            data: payload,
        })
    }
}
