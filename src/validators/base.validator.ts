import Joi from 'Joi'

export const email = Joi.string().email()
export const password = Joi.string().min(6).max(30).messages({
    'string.min': 'Password must be at least 6 characters long',
    'string.max': 'Password must be less than 30 characters long',
    'any.required': 'Password is required',
})
