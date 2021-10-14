// import * as Sentry from '@sentry/node';
// const { mode, sentryDns } = config;
// Sentry.init({
//     dsn: sentryDns,
//     environment: mode,
//     tracesSampleRate: 1.0
// });
// Sentry.captureException(err);

/**
 * handler response for error events
 * @param {ErrorObject} err - error object from ServerError
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Object} next - next function
 */
export const error = (err, req, res, next) => {
    const { code, message } = err;

    res.status(code).json({});
};

/**
 * @description handler response for success events
 * @param {Object} res - response object express
 * @param {Object} data - data to response
 * @param {number} code - code of response
 */
export const success = (res, data, code) => {
    res.status(code || 200).json({ data });
};
