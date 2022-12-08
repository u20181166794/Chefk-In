const express = require('express');
const OrdersService = require('./../services/order.service');

const validatorHandler = require('./../middlewares/validator.handler');
const { createOrderSchema, updateOrderSchema, deleteOrderSchema, getOrderSchema, addItemSchema, updateItemSchema, deleteItemSchema, getItemSchema, queryOrderSchema } = require('./../schemas/order.schema');

const router = express.Router();
const service = new OrdersService();

router.get('/',
  validatorHandler(queryOrderSchema, 'query'),
  async (req, res, next) => {
    try {
      const orders = await service.find(req.query);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const orders = await service.findOne(id);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const order = await service.update(id, body);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(deleteOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.delete(id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  });

router.post('/item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  });

router.patch('/item/:id',
  validatorHandler(getItemSchema, 'params'),
  validatorHandler(updateItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const item = await service.updateItem(id, body);
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/item/:id',
  validatorHandler(deleteItemSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await service.deleteItem(id);
      res.json(item);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;