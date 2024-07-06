const Joi = require('joi');

const categorySchema = Joi.object({
    name: Joi.string().min(5).required(),
    //products: Joi.array().items(Joi.string()).required(),
    description: Joi.string().min(5).required()
});

module.exports = { categorySchema };