const Joi = require("joi");

const employeeValidationSchema = Joi.object({
  user: Joi.string().required(), // user id (owner)
  name: Joi.string().min(2).max(100).required(),
  number: Joi.string().allow(""),
  salary: Joi.number().min(0).default(0),
  nationalID: Joi.string(),
  speciality: Joi.string(),
  jobDesignation: Joi.string(),
  email: Joi.string().email().allow(""),
  isActive: Joi.boolean().default(true),
});

module.exports = employeeValidationSchema;

