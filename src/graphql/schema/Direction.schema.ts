import { gql } from 'apollo-server'

import { Query, Payload } from '@models/Direction/Direction.entity'

export default {
    Schema: gql`
        type Direction {
            id: ID!
            firstName: String!
            lastName: String!
            address: String!
            city: String!
            country: String!
            province: String!
            zipCode: String!
            isDefault: Boolean!
            account: Account!
        }
    `,
}
