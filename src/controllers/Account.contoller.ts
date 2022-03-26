import Error from '@controllers/Error.controller'

import Account from '@models/Account/Account.model'
import { Query, Payload } from '@models/Account/Account.entity'

export default class AccountController {
    #model = new Account()
    #error(error: any) {
        return error instanceof Error
            ? error
            : new Error('SERVER', error.message)
    }
    /**
     * @description Find an account by id.
     * @param {Query} query
     * @returns Account */
    async findAccount(query: Query) {
        try {
            const account = await this.#model.findUnique(query)
            if (!account) throw new Error('NOT_FOUND')
            return account
        } catch (error) {
            throw this.#error(error)
        }
    }
    /**
     * @description Find all accounts.
     * @returns Account */
    async findAccounts() {
        try {
            return await this.#model.findMany()
        } catch (error) {
            throw this.#error(error)
        }
    }
    /**
     * @description Create an account.
     * @param {Payload} payload
     * @returns Account */
    async createAccount(payload: Payload) {
        try {
            return await this.#model.create(payload)
        } catch (error) {
            throw this.#error(error)
        }
    }
}
