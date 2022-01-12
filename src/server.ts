import express from 'express'
import SwaggerUI from 'swagger-ui-express'
import swagger from './swagger'
import cors from 'cors'

import { version } from '../package.json'
import { PORT, MODE, SERVER_URL } from '@config/env'

import index from '@routes/index.routes'

const server = express()

server.set('version', version)
server.set('port', PORT)
server.set('mode', MODE)
server.set('url', SERVER_URL)
server.set('json spaces', 4)

server.use(cors())
server.use(express.json({ limit: '25mb' }))
server.use(express.urlencoded({ limit: '25mb', extended: true }))

server.get('/', index)
server.use('/docs', SwaggerUI.serve, SwaggerUI.setup(swagger))

export default server
