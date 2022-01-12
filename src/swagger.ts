import { version, description } from '../package.json'
import swaggerJsdoc from 'swagger-jsdoc'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: description,
            version,
        },
    },
    apis: ['./project/api/*.yml'],
}

export default swaggerJsdoc(options)
