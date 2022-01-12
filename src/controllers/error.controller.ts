/**
 * @description dictionary of errors
 * @typedef {object} Errors
 * @property {object} DRIVER - Service Unavailable
 * @property {object} BAD_REQUEST - Bad Request
 * @property {object} UNAUTHORIZED - Unauthorized
 * @property {object} NOT_FOUND - Not Found
 *
 */
interface Errors {
    DRIVER: {
        code: number
        message: string
    }
    BAD_REQUEST: {
        code: number
        message: string
    }
    UNAUTHORIZED: {
        code: number
        message: string
    }
    NOT_FOUND: {
        code: number
        message: string
    }
}
/**
 * @typedef {object} ErrorServer
 * @property {number} code - identity error
 * @property {string} error - error message
 * @property {string} message - error trace message
 *
 * @private
 * @property {Errors} errors - dictionary of errors
 */
export default class ErrorServer extends Error {
    code: number
    error: string
    #errors: Errors = {
        DRIVER: {
            code: 500,
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
    }
    constructor(message: string, type: string) {
        super(message)
        this.code = this.#errors[type as keyof Errors].code
        this.error = this.#errors[type as keyof Errors].message
    }
}
