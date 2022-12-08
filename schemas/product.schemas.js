const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3).max(30);
const description = joi.string().min(10).max(30);
const price = joi.number().integer().min(10);
const image = joi.string().uri();
const status = joi.boolean();
const categoryId = joi.number().integer();

const limit = joi.number().integer();
const offset = joi.number().integer();

const createProductSchema = joi.object({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  image: image.required(),
  status: status.required(),
  categoryId: categoryId.required()
});

const updateProductSchema = joi.object({
  name: name,
  description: description,
  price: price,
  image: image,
  status: status,
  categoryId: categoryId,  
});

const deleteProductSchema = joi.object({
  id: id.required(),
});

const getProductSchema = joi.object({
  id: id.required(),
});

const queryProductSchema = joi.object({
  limit,
  offset,
  categoryId,
  status
});

// const getProductCategorySchema = joi.object({
//   category: category.required(),
// });

module.exports = { createProductSchema, updateProductSchema, deleteProductSchema, getProductSchema, queryProductSchema }