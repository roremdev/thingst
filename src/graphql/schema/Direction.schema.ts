import { gql } from 'apollo-server'

import { Query, Payload } from '@models/Direction/Direction.entity'

export default {
    Schema: gql`
        type Direction {
            id: ID!
            account: Account!
            fistName: String!
            lastName: String!
            address: String!
            city: String!
            country: String!
            province: String!
            zipCode: String!
            isDefault: Boolean!
        }
    `,
}
