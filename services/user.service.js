const boom = require('@hapi/boom');
// const bcrypt = require('bcrypt');
const { models } = require('./../libs/sequelize');

class UserService {

    constructor() {
    }

    async create(data) {
        const newUser = await models.User.create(data);
        return newUser;
    }

    async find(query) {
        const options = {
            where: {}
        }

        const { role } = query
        if (role) {
            options.where.role = role;
        }

        const { status } = query
        if (status) {
            options.where.status = status;
        }

        const users = await models.User.findAll(options);
        return users;
    }

    async findOne(id) {
        const user = await models.User.findByPk(id, {
            include: ['orders']
        });
        return user;
    }

    async update(id, changes) {
        const user = await this.findOne(id);
        const rta = await user.update(changes);
        return rta;
    }

    async delete(id) {
        const user = await this.findOne(id);
        await user.destroy();
        return { id };
    }
}

module.exports = UserService;