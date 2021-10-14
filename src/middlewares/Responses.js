import { fail, complete } from '../utils/Log';

/**
 * handler response for error events
 * @param {ErrorObject} err - error object from ServerError
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Object} next - next function
 */
export const error = (err, req, res, next) => {
    const { code, error, message } = err;
    fail('Bad operation', error, message);
    res.status(code).json({});
};

/**
 * @description handler response for success events
 * @param {Object} res - response object express
 * @param {Object} data - data to response
 * @param {number} code - code of response
 */
export const success = (res, data, code) => {
    complete('Success operation', code || 200);
    res.status(code || 200).json({ data });
};
