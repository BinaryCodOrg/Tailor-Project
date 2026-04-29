const Joi = require("joi");

const userValidationSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(128).required(),
  phoneNumber: Joi.string().allow(""),
  role: Joi.string().valid("owner", "admin", "staff").default("owner"),
  isActive: Joi.boolean().default(true),
});

module.exports = userValidationSchema;

