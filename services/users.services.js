const faker = require('faker');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

class UsersService {

    constructor() {
        this.users = [];
        this.generate();
    }

    async generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            this.users.push({
                id: faker.datatype.uuid(),
                name: faker.name.firstName(),
                password: bcrypt.hashSync(faker.random.alpha(10), 5),
                role: faker.company.bsBuzz(),
                status: faker.datatype.boolean()
            });
        }
    }

    async create(data) {
        const newUser = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.users.push(newUser);
        return newUser;
    }

    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.users);
            }, 2000)
        });
    }

    async findOne(id) {
        const user = this.users.find(item => item.id === id);
        if (!user) {
            throw boom.notFound('User not found');
        }
        // if (!user.status) {
        //     throw boom.conflict('User is block');
        // }
        return user;
    }

    async findForRole(role) {
        const users = this.users.filter(item => item.role === role);
        if (!users) {
            throw boom.notFound('Users not found');
        }
        // if (!products.status) {
        //     throw boom.conflict('Products is block');
        // }
        return users;
    }

    async update(id, changes) {
        const index = this.users.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('User not found');
        } else {
            const user = this.users[index];
            this.users[index] = {
                ...user,
                ...changes
            };
            return this.users[index];
        }
    }

    async delete(id) {
        const index = this.users.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('User not found');
        }
        this.users.splice(index, 1);
        return { id };
    }
}

module.exports = UsersService;