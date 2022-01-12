import 'module-alias/register'
import { version } from '../package.json'
import { port, mode } from '@config/env'

import server from './server'

server.listen({ port }).then(({ url }) => {
    console.log(`⬢ Thingst - ${mode}`)
    console.log(`◌ Listening on ${url}`)
    console.log(`v${version}`)
})
