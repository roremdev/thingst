import Prisma, { IFilters } from '@libs/Prisma'

type TFilter = Partial<IFilters>

/**
 * @abstract
 * @class Model
 * @description Base class for all models. */
export default abstract class Model<TModel, TQuery, TPayload> {
    /**
     * @private
     * @description Prisma ORM definition handler library. */
    protected client: Prisma

    /**
     * @constructor
     * @description Generate link to Prisma model.
     * @param {string} model Model name. */
    protected constructor(model: string) {
        this.client = new Prisma(model)
    }

    /**
     * @abstract
     * @description Abstract method to find a unique register in model.
     * @param query Query object
     * @returns Register from model */
    abstract findUnique(query: TQuery): Promise<TModel>

    /**
     * @abstract
     * @description Abstract method to find registers in model.
     * @returns Array of register from model */
    abstract findMany(filter: TFilter): Promise<TModel[]>

    /**
     * @abstract
     * @description Abstract method to create a register in model.
     * @param payload Payload object
     * @returns Register from model as result operation */
    abstract create(payload: TPayload): Promise<TModel>
}
