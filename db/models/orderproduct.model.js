const { Model, DataTypes, Sequelize } = require('sequelize');

const { PRODUCT_TABLE } = require('./product.model');
const { ORDER_TABLE } = require('./order.model');

const ORDERPRODUCT_TABLE = 'orderproducts';

const OrderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class OrderProduct extends Model {
  static associate(models) {
    // this.belongsToMany(models.Product, { as: 'product', through: 'order_product' });
    // this.hasMany(models.Product, {as: 'products'});
    // this.hasMany(models.Order, {as: 'orders'});
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDERPRODUCT_TABLE,
      modelName: 'OrderProduct',
      timestamps: false
    }
  }
}

module.exports = { ORDERPRODUCT_TABLE, OrderProductSchema, OrderProduct }