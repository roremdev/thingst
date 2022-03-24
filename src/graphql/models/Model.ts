import Error from '@controllers/Error.controller'

export default class Model<TModel, TQuery, P> {
    findUnique(payload: TQuery): TModel | undefined {
        throw new Error('Method not implemented.')
    }
    findMany(): TModel[] {
        throw new Error('Method not implemented.')
    }
    create(payload: P): TModel {
        throw new Error('Method not implemented.')
    }
}
