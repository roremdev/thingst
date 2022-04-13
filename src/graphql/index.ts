import { gql } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { merge } from 'lodash'

import Account from './schema/Account.schema'
import Category from './schema/Category.schema'
import Direction from './schema/Direction.schema'
import Order from './schema/Order.schema'
import Product from './schema/Product.schema'
import WishList from './schema/WishList.schema'

import FulFillmentStatus from './enums/FulFillmentStatus.enum'
import PaymentStatus from './enums/PaymentStatus.enum'

import dateScalar from './scalars/date.scalar'

import { info } from '@utils/logger.util'

const Global = {
    Schema: gql`
        interface Response {
            code: String!
            message: String
        }

        type Query {
            project: String!
            categories: CategoriesResponse!
            product(id: ID!): ProductResponse!
            products(where: FindAnyProduct): ProductsResponse!
        }

        type Mutation {
            createAccount(account: CreateAccount): Account
        }

        directive @constraint(
            # String constraints
            minLength: Int
        ) on INPUT_FIELD_DEFINITION
    `,
    Query: {
        project: () => {
            info('GET /api/graphql')
            return '⬢ Thingst'
        },
        ...Account.Query,
    },
    Mutation: {
        ...Account.Mutation,
    },
}

export default makeExecutableSchema({
    typeDefs: [
        Global.Schema,
        Account.Schema,
        Category.Schema,
        Direction.Schema,
        FulFillmentStatus.Schema,
        Order.Schema,
        PaymentStatus.Schema,
        Product.Schema,
        WishList.Schema,
    ],
    resolvers: merge({
        Query: Global.Query,
        Mutation: Global.Mutation,
        Date: dateScalar,
    }),
})
