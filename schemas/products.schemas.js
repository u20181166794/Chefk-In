const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(15);
const price = joi.number().integer().min(10);
const category = joi.string().min(3).max(20);
const description = joi.string().min(10).max(30);
const image = joi.string().uri();
const status = joi.boolean();

const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  category: category.required(),
  description: description.required(),
  image: image.required(),
  status: status.required()
});

const updateProductSchema = joi.object({
  name: name,
  price: price,
  category: category,
  description: description,
  image: image,
  status: status
});

const deleteProductSchema = joi.object({
  id: id.required(),
});

const getProductSchema = joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, deleteProductSchema, getProductSchema }