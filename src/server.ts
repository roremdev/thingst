import { ApolloServer } from 'apollo-server'

import schema from './graphql/index'

const server = new ApolloServer({ schema, debug: false })

export default server
