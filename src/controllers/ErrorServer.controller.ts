import { ApolloError } from 'apollo-server-errors'

/**
 * @class ErrorServer
 * @description Error server logic */
export default class ErrorServer extends ApolloError {
    /**
     * @private
     * @description Dictionary of errors. */
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
     * @param {string=} type Error type; default SERVER.
     * @param {string} message Error trace message; default message SERVER. */
    constructor(type: string, message?: string) {
        super(
            message || ErrorServer.#errors[type].message,
            ErrorServer.#errors[type].code
        )
    }
}
