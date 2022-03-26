import { gql } from 'apollo-server'

import { Query, Payload } from '@models/Account/Account.entity'

import AccountController from '@controllers/Account.contoller'
const accountController = new AccountController()

export default {
    Schema: gql`
        type Account {
            id: ID!
            email: String!
            password: String!
        }

        input CreateAccount {
            email: String!
            password: String!
        }

        extend type Query {
            account(id: ID!): Account!
            accounts: [Account!]!
        }
    `,
    Query: {
        account: async (_: any, query: Query) => {
            return await accountController.findAccount(query)
        },
        accounts: async () => {
            return await accountController.findAccounts()
        },
    },
    Mutation: {
        createAccount: async (_: any, payload: Payload) => {
            return accountController.createAccount(payload)
        },
    },
}
