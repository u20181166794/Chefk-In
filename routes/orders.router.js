const express = require('express');
const OrdersService = require('./../services/orders.services');

const validatorHandler = require('./../middlewares/validator.handler');
const { createOrderSchema, updateOrderSchema, deleteOrderSchema, getOrderSchema, getOrderStatusSchema } = require('./../schemas/orders.schema');

const router = express.Router();
const service = new OrdersService();

router.get('/', async (req, res) => {
  const orders = await service.find();
  res.json(orders);
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

router.get('/status/:status',
  validatorHandler(getOrderStatusSchema, 'params'),
  async (req, res, next) => {
    try {
      const { status } = req.params;
      const orders = await service.findForStatus(status);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newOrder = await service.create(body);
    res.status(201).json(newOrder);
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
  async (req, res) => {
    const { id } = req.params;
    const order = await service.delete(id);
    res.json(order);
  });

module.exports = router;