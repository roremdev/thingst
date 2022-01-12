import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

const env = dotenv.config()
dotenvExpand(env)

export const port = process.env.PORT
export const mode = process.env.MODE
export const DOMAIN = process.env.DOMAIN

export const SERVER_URL = process.env.SERVER_URL
export const DB_URL = process.env.DB_URL
