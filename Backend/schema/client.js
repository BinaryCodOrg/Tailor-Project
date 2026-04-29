const Joi = require("joi");

const createClientSchema = Joi.object({
  name: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  address: Joi.string().allow("").optional(),
  email: Joi.string().email().allow("").optional(),
});

module.exports = {
  createClientSchema,
};