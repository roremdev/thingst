import { info } from '@utils/logger.util'

export default {
    Query: {
        info: () => {
            info('GET /api')
            return '⬢ Thingst'
        },
    },
}
