import Error from '@controllers/Error.controller'

export default class Model<TModel, TQuery, TPayload> {
    findUnique(query: TQuery): TModel | undefined {
        throw new Error('Method not implemented.')
    }
    findMany(): TModel[] {
        throw new Error('Method not implemented.')
    }
    create(payload: TPayload): TModel {
        throw new Error('Method not implemented.')
    }
}
