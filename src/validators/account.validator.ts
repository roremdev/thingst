import Joi from 'joi'

import ErrorServer from '@controllers/ErrorServer.controller'

import { Payload } from '@models/Account/Account.entity'
import { email, password } from '@validators/base.validator'

const account = Joi.object({
    email: email.required(),
    password: password.required(),
})

/**
 * @description Validate the payload of the account.
 * @param payload
 * @throws {Error} Trigger an BAD_REQUEST error if the payload is not valid. */
export default (payload: Payload) => {
    const { error } = account.validate(payload)
    if (error) throw new ErrorServer('BAD_REQUEST', error.message)
}
