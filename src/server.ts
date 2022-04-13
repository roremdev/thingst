import { ApolloServer } from 'apollo-server-express'
import express from 'express'

import didEncounterErrors from './graphql/plugins/response.plugin'
import schema from './graphql/index'

import index from '@routes/index.routes'

const app = express()
app.use('/api/', index)

const server = new ApolloServer({
    schema,
    debug: false,
    formatError: (error) => ({
        message: error.message,
        code: error.extensions.code,
    }),
    plugins: [
        {
            requestDidStart: async () => ({ didEncounterErrors }),
        },
    ],
})

server.start().then((_) => {
    server.applyMiddleware({ app, path: '/api/graphql' })
})

export default app
