import { Request, Response, NextFunction } from 'express'
import Error from '@controllers/error.controller'
import { validate } from '@validators/request.validator'

/**
 * @name query
 * @description query validator
 * @param {Request} req - express request object
 * @param {Response} res - express response object
 * @param {Function} next - express next function
 * @throws {Error} - throws error if validation fails
 */
export const query = (req: Request, _: Response, next: NextFunction) => {
    const { error } = validate('query', req.query)
    error ? next(new Error(error.message, 'BAD_REQUEST')) : next()
}
