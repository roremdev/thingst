import { gql } from 'apollo-server'

import { IFilters } from '@libs/Prisma'

import { Query, Payload } from '@models/Account/Account.entity'
import AccountController from '@controllers/Account.contoller'
import validate from '@validators/account.validator'

const accountController = new AccountController()

export default {
    Schema: gql`
        type Account {
            id: ID!
            email: String!
            password: String!
            directions: [Direction]
        }

        input CreateAccount {
            email: String!
            password: String!
        }

        input FilterAccount {
            email: String
            password: String
        }

        extend type Query {
            account(id: ID!): Account!
            accounts(
                skip: Int = 0
                take: Int = 10
                where: FilterAccount
            ): [Account!]!
        }
    `,
    Query: {
        account: async (_: any, query: Query) => {
            return await accountController.findAccount(query)
        },
        accounts: async (_: any, filters: IFilters) => {
            return await accountController.findAccounts(filters)
        },
    },
    Mutation: {
        createAccount: async (_: any, { account }: { account: Payload }) => {
            validate(account)
            return await accountController.createAccount(account)
        },
    },
}
