import Model from '@models/Model'

import { Account, Query, Payload } from './Account.entity'

import accounts from '@db/mocks/account.mock'

export default class AccountModel extends Model<Account, Query, Payload> {
    /**
     * @description Find an account by id.
     * @param {Query} {id} Account ID.
     * @returns {Account | undefined} Account */
    findUnique({ id }: Query): Account | undefined {
        return accounts.find((account) => account.id === id)
    }
    /**
     * @description Find pool of accounts.
     * @returns {Account[]} Array of accounts. */
    findMany(): Account[] {
        return accounts
    }
    /**
     * @description Create an account.
     * @returns {Account} */
    create(payload: Payload): Account {
        return {
            id: 1,
            ...payload,
        }
    }
}
