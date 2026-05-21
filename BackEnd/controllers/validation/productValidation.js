const Joi = require("joi");

const productSchema = Joi.object({
    productName: Joi.string().min(3).required(),
    description: Joi.string().min(4).required(),
    price: Joi.number().positive().required(),
    category: Joi.string().valid("ring", "necklace", "coin", "bracelet", "earring", "bar").default("ring").required(),
    karat: Joi.number().valid(18, 21, 24).required(),
    weight: Joi.number().required(),
    stock: Joi.number().min(1).required(),
    views: Joi.number()
});
module.exports = productSchema;