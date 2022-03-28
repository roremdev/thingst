import Joi from 'Joi'

import Error from '@controllers/Error.controller'

import { Payload } from '@models/Account/Account.entity'
import { email, password } from '@validators/base.validator'

const account = Joi.object({
    email: email.required(),
    password: password.required(),
})

export default (payload: Payload) => {
    const { error } = account.validate(payload)
    if (error) throw new Error('BAD_REQUEST', error.message)
}
