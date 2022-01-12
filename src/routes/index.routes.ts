import { Router, Request, Response, NextFunction } from 'express'

import server from '../server'
import { info } from '@utils/logger.util'

const router = Router()

/**
 * @swagger
 *  tags:
 *      name: Index
 *      description: API root path.
 */

/**
 * @swagger
 * /:
 *   get:
 *     description: Root request operation
 *     tags: [Index]
 *     responses:
 *       200:
 *         description: Send a single response
 *         content:
 *          application/json:
 *           schema:
 *            type: object
 *            properties:
 *             project:
 *              type: string
 *              example: Evolution Nutrition
 *             mode:
 *              type: string
 *              example: development
 *             version:
 *              type: string
 *              example: 0.0.0
 */
router.get('/', (_, res: Response) => {
    info('GET /api')
    res.status(200).json({
        project: 'Evolution Nutrition',
        mode: server.get('mode'),
        version: server.get('version'),
    })
})

export default router
