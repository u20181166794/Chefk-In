const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(15);
const password = joi.string();
const role = joi.string().min(3).max(20);
const status = joi.boolean();

const createUserSchema = joi.object({
  name: name.required(),
  password: password.required(),
  role: role.required(),
  status: status.required()
});

const updateUserSchema = joi.object({
  name: name,
  password: password,
  role: role,
  status: status
});

const deleteUserSchema = joi.object({
  id: id.required(),
});

const getUserSchema = joi.object({
  id: id.required(),
});

const getUserRoleSchema = joi.object({
  role: role.required(),
});

module.exports = { createUserSchema, updateUserSchema, deleteUserSchema, getUserSchema, getUserRoleSchema }