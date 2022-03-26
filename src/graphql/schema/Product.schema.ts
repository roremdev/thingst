import { gql } from 'apollo-server'

export default {
    Schema: gql`
        type Product {
            id: ID!
            category: Category!
            name: String!
            price: Int!
            quantity: Int!
            image: String!
        }

        input FindAnyProduct {
            id: ID
            name: String
        }

        type ProductResponse {
            success: Boolean!
            message: String
            product: Product
        }

        type ProductsResponse implements Response {
            code: String!
            message: String
            product: [Product]!
        }
    `,
}
