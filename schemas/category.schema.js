const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3).max(15);
const status = joi.boolean();

const createCategorySchema = joi.object({
  name: name.required(),
  status: status.required()
});

const updateCategorySchema = joi.object({
  name: name,
  status: status
});

const deleteCategorySchema = joi.object({
  id: id.required(),
});

const getCategorySchema = joi.object({
  id: id.required(),
});

// const getUserRoleSchema = joi.object({
//   role: role.required(),
// });

module.exports = { createCategorySchema, updateCategorySchema, deleteCategorySchema, getCategorySchema }