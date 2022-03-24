import dayjs from 'dayjs'
import { GraphQLScalarType, Kind } from 'graphql'

export default new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize: (date) => dayjs(date as string).toJSON(),
    parseValue: (date) => dayjs(date as number),
    parseLiteral: (ast) =>
        ast.kind === Kind.INT ? dayjs(parseInt(ast.value, 10)) : null,
})
