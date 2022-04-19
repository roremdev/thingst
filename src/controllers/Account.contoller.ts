import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { JWT_TOKEN } from '@config/env'

import ErrorServer from '@controllers/ErrorServer.controller'
import { IFilters } from '@libs/Prisma'
import Account from '@models/Account/Account.model'
import { Query, Payload } from '@models/Account/Account.entity'

export default class AccountController {
    private model = new Account()
    /**
     * @description Find an account by id.
     * @param {Query} query
     * @returns Account */
    async findAccount(query: Query) {
        const account = await this.model.findUnique({
            email: query.email,
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
    async createAccount({ password, ...payload }: Payload) {
        const account = await this.model.create({
            password: bcrypt.hashSync(password, 3),
            ...payload,
        })
        return { token: jwt.sign(account, JWT_TOKEN as string) }
    }
}
