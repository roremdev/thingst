import { gql } from 'apollo-server'

export default {
    Schema: gql`
        type WishList {
            id: ID!
            account: Account!
            products: [Product!]!
        }
    `,
}
