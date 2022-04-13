import ErrorServer from '@controllers/ErrorServer.controller'

import Account from '@models/Account/Account.model'
import { Query, Payload } from '@models/Account/Account.entity'
import { IFilters } from '@libs/Prisma'

export default class AccountController {
    private model = new Account()
    /**
     * @description Find an account by id.
     * @param {Query} query
     * @returns Account */
    async findAccount(query: Query) {
        const account = await this.model.findUnique({
            id: Number(query.id),
        })
        if (!account) throw new ErrorServer('NOT_FOUND')
        return account
    }
    /**
     * @description Find all accounts.
     * @returns Account */
    async findAccounts(filter: IFilters) {
        return await this.model.findMany(filter)
    }
    /**
     * @description Create an account.
     * @param {Payload} payload
     * @returns Account */
    async createAccount(payload: Payload) {
        return await this.model.create(payload)
    }
}
