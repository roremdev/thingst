import { ApolloServer } from 'apollo-server'
import didEncounterErrors from './graphql/plugins/response.plugin'
import schema from './graphql/index'

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

export default server
