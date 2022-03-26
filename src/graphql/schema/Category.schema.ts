import { gql } from 'apollo-server'

import { Query, Payload } from '@models/Category/Category.entity'

export default {
    Schema: gql`
        type Category {
            id: ID!
            name: String!
        }

        type CategoryResponse implements Response {
            code: String!
            message: String
            category: Category
        }

        type CategoriesResponse implements Response {
            code: String!
            message: String
            category: [Category]!
        }
    `,
}
