const joi = require('joi');

const id = joi.string().uuid();
const table = joi.number().integer();
const user = joi.string().min(3).max(10);
const product = joi.string().min(3).max(20);
const status = joi.boolean();

const createOrderSchema = joi.object({
  table: table.required(),
  user: user.required(),
  product: product.required(),
  status: status.required()
});

const updateOrderSchema = joi.object({
  table: table,
  user: user,
  product: product,
  status: status
});

const deleteOrderSchema = joi.object({
  id: id.required(),
});

const getOrderSchema = joi.object({
  id: id.required(),
});

const getOrderStatusSchema = joi.object({
  status: status.required(),
});

module.exports = { createOrderSchema, updateOrderSchema, deleteOrderSchema, getOrderSchema, getOrderStatusSchema }