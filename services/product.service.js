const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class ProductService {

    constructor() {
        this.products = [];
    }

    async create(data) {
        const newProduct = await models.Product.create(data);
        return newProduct;
    }

    async find(query) {
        const options = {
            include: ['category'],
            where: {}
        }

        const { limit, offset } = query;
        if (limit && offset) {
            options.limit = limit;
            options.offset = offset;
        }
        const { name } = query
        if (name) {
            options.where.name = name;
        }

        const { categoryId } = query
        if (categoryId) {
            options.where.categoryId = categoryId;
        }        

        const { status } = query
        if (status) {
            options.where.status = status;
        }

        const products = await models.Product.findAll(options);
        return products;
    }

    async findOne(id) {
        const product = await models.Product.findByPk(id, {
            include: ['category']
        });
        return product;
    }

    // async findForCategory(category) {
    //     const products = this.products.filter(item => item.category === category && item.status === true);
    //     if (!products) {
    //         throw boom.notFound('Products not found');
    //     }
    //     // if (!products.status) {
    //     //     throw boom.conflict('Products is block');
    //     // }
    //     return products;
    // }

    async update(id, changes) {
        const product = await this.findOne(id);
        const rta = await product.update(changes);
        return rta;
    }

    async delete(id) {
        const product = await this.findOne(id);
        await product.destroy();
        return { id };
    }
}

module.exports = ProductService;
