import 'module-alias/register'
import { version } from '../package.json'
import { MODE, PORT, SERVER_URL } from '@config/env'

import server from './server'

server.set('mode', MODE)
server.set('port', PORT)
server.set('url', SERVER_URL)
server.set('version', version)

server.listen(server.get('port'), () => {
    console.log(`⬢ Thingst - ${server.get('mode')}`)
    console.log(`◌ Listening on ${server.get('url')}`)
    console.log(`◌ v${server.get('version')}`)
})
