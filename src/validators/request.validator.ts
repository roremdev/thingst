import Joi from 'joi'

/**
 * @description validation catalog schemas
 * @typedef {object} Validators
 * @property {object} params - params request
 * @property {object} query - query request
 * @property {object} body - body request
 */
interface Validators {
    params: Joi.ObjectSchema
    query: Joi.ObjectSchema
}
const validators: Validators = {
    params: Joi.object({
        keyword: Joi.string(),
    }),
    query: Joi.object({
        type: Joi.array().items(
            Joi.string()
                .valid('Breakfast', 'Lunch', 'Dinner')
                .message('type must be a valid option')
        ),
        status: Joi.array().items(
            Joi.string()
                .valid('Draft', 'Done', 'Published', 'Archived')
                .message('status must be a valid option')
        ),
        category: Joi.array().items(
            Joi.string()
                .valid('Flexetarian', 'Vegetarian', 'Low Carb')
                .message('category must be a valid option')
        ),
    }),
}
/**
 * @description validate schema from params
 * @param {string} schema - schema selection
 * @param {object} args - object to validate
 * @returns {object} - joi validation object
 */
export const validate = (
    schema: string,
    args: Object
): Joi.ValidationResult => {
    return validators[schema as keyof Validators].validate(args)
}
