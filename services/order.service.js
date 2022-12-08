const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class OrderService {

    constructor() {
    }

    async create(data) {
        const newOrder = await models.Order.create(data);
        return newOrder;
    }

    async addItem(data){
        const newItem = await models.OrderProduct.create(data);
        return newItem;
    }

    async find(query) {
        const options = {
            include: ['user'],
            where: {}
        }

        const { limit, offset } = query;
        if (limit && offset) {
            options.limit = limit;
            options.offset = offset;
        }

        const { table } = query
        if (table) {
            options.where.table = table;
        }

        const { status } = query
        if (status) {
            options.where.status = status;
        }
        
        const orders = await models.Order.findAll(options);
        return orders;
    }

    async findOne(id) {
        const order = await models.Order.findByPk(id, {
            include: [
                'user',
                'items'
            ]
        });
        return order;
    }

    async update(id, changes) {
        const order = await this.findOne(id);
        const rta = await order.update(changes);
        return rta;
    }

    async updateItem(id, changes) {
        const item = await models.OrderProduct.findByPk(id);
        const rta = await item.update(changes);
        return rta;
    }

    async delete(id) {
        const order = await this.findOne(id);
        await order.destroy();
        return { id };
    }

    async deleteItem(id) {
        const item = await models.OrderProduct.findByPk(id);
        await item.destroy();
        return { id };
    }
}

module.exports = OrderService;