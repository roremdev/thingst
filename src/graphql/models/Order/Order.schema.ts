import { gql } from 'apollo-server'

export default {
    Schema: gql`
        scalar Date

        type Order {
            id: ID!
            direction: Direction!
            products: [Product!]!
            createdAt: Date
        }
    `,
}
