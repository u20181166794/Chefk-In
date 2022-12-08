const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class CategoryService {

    constructor() {
    }

    async create(data) {
        const newCategory = await models.Category.create(data);
        return newCategory;
    }

    async find() {
        const categories = await models.Category.findAll();
        return categories;
    }

    async findOne(id) {
        const category = await models.Category.findByPk(id, {
            include: ['products']
        });
        return category;
    }

    // async findForStatus(status) {
    //     const orders = this.orders.filter(item => item.status === JSON.parse(status.toLowerCase()));
    //     if (!orders) {
    //         throw boom.notFound('Orders not found');
    //     }
    //     // if (!products.status) {
    //     //     throw boom.conflict('Products is block');
    //     // }
    //     return orders;
    // }

    async update(id, changes) {
        const category = await this.findOne(id);
        const rta = await category.update(changes);
        return rta;
    }

    async delete(id) {
        const category = await this.findOne(id);
        await category.destroy();
        return { id };
    }
}

module.exports = CategoryService;