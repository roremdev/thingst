import { gql } from 'apollo-server'

import { Query, Payload } from './Account.entity'
import AccountModel from './Account.model'

import Error from '@controllers/Error.controller'

const accountModel = new AccountModel()

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
        account: (_: any, query: Query) => {
            const account = accountModel.findUnique(query)
            if (!account) throw new Error('NOT_FOUND')
            return account
        },
        accounts: () => {
            return accountModel.findMany()
        },
    },
    Mutation: {
        createAccount: (_: any, payload: Payload) => {
            return accountModel.create(payload)
        },
    },
}
