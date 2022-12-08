const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3).max(15);
const email = joi.string().email();
const user = joi.string().min(3).max(15);
const password = joi.string();
const status = joi.boolean();
const role = joi.string().min(3).max(20);

const createUserSchema = joi.object({
  name: name.required(),
  email: email.required(),
  user: user.required(),
  password: password.required(),
  status: status.required(),
  role: role.required()
});

const updateUserSchema = joi.object({
  name: name,
  email: email,
  user: user,
  password: password,
  status: status,
  role: role
});

const deleteUserSchema = joi.object({
  id: id.required(),
});

const getUserSchema = joi.object({
  id: id.required(),
});

const queryUserSchema = joi.object({
  role,
  status
});

// const getUserRoleSchema = joi.object({
//   role: role.required(),
// });

module.exports = { createUserSchema, updateUserSchema, deleteUserSchema, getUserSchema, queryUserSchema }