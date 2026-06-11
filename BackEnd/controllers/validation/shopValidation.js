// const Joi = require("joi");
// const shopSchema = Joi.object({
//     shopName: Joi.string().min(3).required(),
//     location: Joi.string().required(),
//     phoneNumber: Joi.number().max(15).required(),
//     // workingHours: Joi.string().required(),
//     goldPrice: Joi.number(),
//     isActive: Joi.boolean().default(true)
// });
// module.exports = shopSchema;
const Joi = require("joi");

const shopSchema = Joi.object({
    shopName: Joi.string().min(3).required(),
    location: Joi.string().required(),

    phoneNumber: Joi.string()
        .pattern(/^\+?[0-9]{10,15}$/)
        .required(),

    // workingHours: Joi.object({
    //     from: Joi.string().required(),
    //     to: Joi.string().required()
    // }).required(),

    goldPrice: Joi.number().optional(),

    isActive: Joi.boolean().default(true)
});

module.exports = shopSchema;