const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');

const ORDER_TABLE = 'orders';

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  table: {
    allowNull: false,
    type: DataTypes.STRING
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  total: {
    type: DataTypes.VIRTUAL,
    get(){
      if (this.items) {
        if (this.items.length > 0) {
          return this.items.reduce((total, item) => {
            return total + (item.price * item.OrderProduct.amount);
          }, 0)
        }
        return 0;
      }
      return 0;
    }
  }
}

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
    this.belongsToMany(models.Product, {
        through: models.OrderProduct,
        as: 'items',
        foreignKey: 'orderId',
        otherKey: 'productId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}

module.exports = { ORDER_TABLE, OrderSchema, Order }