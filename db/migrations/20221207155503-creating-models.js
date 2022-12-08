'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');
const { CategorySchema, CATEGORY_TABLE } = require('./../models/category.model');
const { UserSchema, USER_TABLE } = require('./../models/user.model');
const { OrderSchema, ORDER_TABLE } = require('./../models/order.model');
const { OrderProductSchema, ORDERPRODUCT_TABLE } = require('./../models/orderproduct.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
    await queryInterface.createTable(ORDERPRODUCT_TABLE, OrderProductSchema);
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(ORDERPRODUCT_TABLE);
  }
};