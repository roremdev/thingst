import { gql } from 'apollo-server'

import AuthController from '@controllers/Auth.controller'
import { Payload } from '@models/Account/Account.entity'

const authController = new AuthController()

export default {
    Schema: gql`
        input AuthAccount {
            email: String!
            password: String!
        }

        type AuthToken {
            token: String!
        }

        type Mutation {
            login(auth: AuthAccount): AuthToken!
        }
    `,
    Mutation: {
        login: async (_: any, { email, password }: Payload) => {
            return await authController.login({ email, password })
        },
    },
}
