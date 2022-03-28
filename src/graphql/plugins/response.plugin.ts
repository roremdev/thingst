import { GraphQLRequestContext } from 'apollo-server-types'

export default async function({ response, errors }: GraphQLRequestContext) {
    if (errors?.length) {
        // @ts-ignore
        response.http.status = errors[0].extensions.code
    }
}
