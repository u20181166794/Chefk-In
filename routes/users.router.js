const express = require('express');
const UsersService = require('./../services/user.service');

const validatorHandler = require('./../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, deleteUserSchema, getUserSchema, getUserRoleSchema, queryUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UsersService();

router.get('/',
  validatorHandler(queryUserSchema, 'query'),
  async (req, res, next) => {
    try {
      const users = await service.find(req.query);
      res.json(users);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const users = await service.findOne(id);
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/role/:role',
  validatorHandler(getUserRoleSchema, 'params'),
  async (req, res, next) => {
    try {
      const { role } = req.params;
      const users = await service.findForRole(role);
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(deleteUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.delete(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;