const Joi = require("joi");
const shopSchema = Joi.object({
    shopName: Joi.string().min(3).required(),
    location: Joi.string().required(),
    phoneNumber: Joi.number().max(15).required(),
    workingHours: Joi.string().required(),
    goldPrice: Joi.number(),
    isActive: Joi.boolean().default(true)
});