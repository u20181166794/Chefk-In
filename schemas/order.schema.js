const joi = require('joi');

const id = joi.number().integer();
const table = joi.number().integer();
const status = joi.boolean();
const userId = joi.number().integer();

const orderId = joi.number().integer();
const productId = joi.number().integer();
const amount = joi.number().integer().min(1);

const limit = joi.number().integer();
const offset = joi.number().integer();

const createOrderSchema = joi.object({
  table: table.required(),
  status: status.required(),
  userId: userId.required()
});

const updateOrderSchema = joi.object({
  table: table,
  status: status,
  userId: userId
});

const deleteOrderSchema = joi.object({
  id: id.required(),
});

const getOrderSchema = joi.object({
  id: id.required(),
});

const addItemSchema = joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required()
});

const updateItemSchema = joi.object({
  orderId: orderId,
  productId: productId,
  amount: amount
});

const deleteItemSchema = joi.object({
  id: id.required(),
});

const getItemSchema = joi.object({
  id: id.required(),
});

const queryOrderSchema = joi.object({
  limit,
  offset,
  status,
  table
});


// const getOrderStatusSchema = joi.object({
//   status: status.required(),
// });

module.exports = { createOrderSchema, updateOrderSchema, deleteOrderSchema, getOrderSchema, addItemSchema, updateItemSchema, deleteItemSchema, getItemSchema, queryOrderSchema }