import 'module-alias/register'
import { version } from '../package.json'
import { PORT, MODE } from '@config/env'

import server from './server'

server.listen({ port: PORT }).then(({ url }) => {
    console.log(`⬢ Thingst - ${MODE}`)
    console.log(`◌ Listening on ${url}`)
    console.log(`◌ v${version}`)
})
