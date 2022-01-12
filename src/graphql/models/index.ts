import { gql } from 'apollo-server'

const typeDefs = gql`
    type Query {
        info: String!
    }
`
export default typeDefs
