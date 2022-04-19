import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { JWT_TOKEN } from '@config/env'
import AccountController from '@controllers/Account.contoller'
import ErrorServer from '@controllers/ErrorServer.controller'
import { Payload } from '@models/Account/Account.entity'

export default class AuthController {
    private accountController = new AccountController()
    /**
     * @description Authenticate an account.
     * @param {Payload} payload
     * @throws ErrorServer - UNAUTHORIZED
     * @returns Account */
    async login({ email, password }: Payload) {
        const account = await this.accountController.findAccount({
            email,
        })
        if (!account) throw new ErrorServer('UNAUTHORIZED')
        const isMatchPassword = await bcrypt.compare(password, account.password)
        if (!isMatchPassword) throw new ErrorServer('UNAUTHORIZED')
        return { token: jwt.sign(account, JWT_TOKEN as string) }
    }
}
