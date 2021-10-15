/**
 * @description dictionary
 * @typedef {Object} TypeError
 * @property {number} code - identity error
 * @property {string} message - error message
 */

export default class ServerError extends Error {
    /**
     * @private
     * @description dictionary
     */
    _Errors = {
        DRIVER: {
            code: 500,
            message: 'Service Unavailable',
        },
        DEFINITION: {
            code: 501,
            message: 'No Synchronization',
        },
    };
    /**
     * @constructor
     * @description constructor server-error
     * @param {string} message - error message
     * @param {string} type - error type description
     */
    constructor(message, type) {
        super(message);
        this.code = this._Errors[type].code;
        this.error = this._Errors[type].message;
    }
}
