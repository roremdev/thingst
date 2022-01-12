import { ApolloServer } from 'apollo-server'

import typeDefs from './graphql/models'
import resolvers from './graphql/controllers'

const server = new ApolloServer({ typeDefs, resolvers })

export default server
