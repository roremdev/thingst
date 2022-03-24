// FIXME - Global Abstrac model class

import { gql } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { merge } from 'lodash'

import Account from '@models/Account/Account.schema'
import Category from '@models/Category/Category.schema'
import Direction from '@models/Direction/Direction.schema'
import Order from '@models/Order/Order.schema'
import Product from '@models/Product/Product.schema'
import WishList from '@models/WishList/WishList.schema'

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
            info: String!
            categories: CategoriesResponse!
            product(id: ID!): ProductResponse!
            products(where: FindAnyProduct): ProductsResponse!
        }

        type Mutation {
            createAccount(account: CreateAccount): Account
        }
    `,
    Query: {
        info: () => {
            info('GET /api')
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
