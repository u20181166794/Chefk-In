const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService {

    constructor() {
        this.products = [];
        this.generate();
    }

    async generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                category: faker.commerce.department(),
                description: faker.commerce.productDescription(),
                image: faker.image.imageUrl(),
                status: faker.datatype.boolean()
            });
        }
    }

    async create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products);
            }, 2000)
        });
    }

    async findOne(id) {
        const product = this.products.find(item => item.id === id);
        if (!product) {
            throw boom.notFound('Product not found');
        }
        if (!product.status) {
            throw boom.conflict('Product is block');
        }
        return product;
    }

    async findForCategory(category) {
        const products = this.products.filter(item => item.category === category && item.status === true);
        if (!products) {
            throw boom.notFound('Products not found');
        }
        // if (!products.status) {
        //     throw boom.conflict('Products is block');
        // }
        return products;
    }

    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('Product not found');
        } else {
            const product = this.products[index];
            this.products[index] = {
                ...product,
                ...changes
            };
            return this.products[index];
        }
    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('Product not found');
        }
        this.products.splice(index, 1);
        return { id };
    }
}

module.exports = ProductsService;
