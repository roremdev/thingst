import { Router, Response } from 'express'

import server from '@src/server'
import { info } from '@utils/logger.util'

const router = Router()

/**
 * @name GET /
 * @description This route is used to test the server is up and running. */
router.get('/', (_, res: Response) => {
    info('GET /api')
    res.status(200).json({
        project: 'Thingst',
        mode: server.get('mode'),
        version: server.get('version'),
    })
})

export default router
