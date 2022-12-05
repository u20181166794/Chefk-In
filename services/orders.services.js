const faker = require('faker');
const boom = require('@hapi/boom');

class OrdersService {

    constructor() {
        this.orders = [];
        this.generate();
    }

    async generate() {
        const limit = 10;
        for (let i = 0; i < limit; i++) {
            this.orders.push({
                id: faker.datatype.uuid(),
                table: parseInt(faker.datatype.number(), 10),
                user: faker.name.firstName(),
                product: faker.commerce.productName(),
                status: faker.datatype.boolean()
            });
        }
    }

    async create(data) {
        const newOrder = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.orders.push(newOrder);
        return newOrder;
    }

    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.orders);
            }, 2000)
        });
    }

    async findOne(id) {
        const order = this.orders.find(item => item.id === id);
        if (!order) {
            throw boom.notFound('Order not found');
        }
        if (!order.status) {
            throw boom.conflict('Order is block');
        }
        return order;
    }

    async findForStatus(status) {
        const orders = this.orders.filter(item => item.status === JSON.parse(status.toLowerCase()));
        if (!orders) {
            throw boom.notFound('Orders not found');
        }
        // if (!products.status) {
        //     throw boom.conflict('Products is block');
        // }
        return orders;
    }

    async update(id, changes) {
        const index = this.orders.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('Order not found');
        } else {
            const order = this.orders[index];
            this.orders[index] = {
                ...order,
                ...changes
            };
            return this.orders[index];
        }
    }

    async delete(id) {
        const index = this.orders.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('Order not found');
        }
        this.orders.splice(index, 1);
        return { id };
    }
}

module.exports = OrdersService;