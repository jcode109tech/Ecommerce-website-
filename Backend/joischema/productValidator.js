const Joi = require('joi');

const productSchema = Joi.object({
    categoryId: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().optional(),
    isPurchased: Joi.boolean().optional(),
    imgUrl: Joi.string().required()
});

module.exports = { productSchema };
