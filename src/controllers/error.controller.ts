import { ApolloError } from 'apollo-server-errors'

/**
 * @class ErrorServer
 * @description Error server logic */
export default class Error extends ApolloError {
    /**
     * @private
     * @description dictionary of errors */
    static #errors: { [key: string]: any } = {
        SERVER: {
            code: 500,
            message: 'Internal Server Error',
        },
        DRIVER: {
            code: 503,
            message: 'Service Unavailable',
        },
        BAD_REQUEST: {
            code: 400,
            message: 'Bad Request',
        },
        UNAUTHORIZED: {
            code: 401,
            message: 'Unauthorized',
        },
        NOT_FOUND: {
            code: 404,
            message: 'Not Found',
        },
        EXIST: {
            code: 409,
            message: 'Conflict',
        },
    }
    /**
     * @constructor
     * @param {string} message Error trace message; as default message SERVER.
     * @param {string=} type Error type; as default SERVER. */
    constructor(message?: string, type: string = 'SERVER') {
        super(message || Error.#errors[type].message, Error.#errors[type].code)
    }
}
