const express = require('express');
const CategoriesService = require('./../services/category.service');

const validatorHandler = require('./../middlewares/validator.handler');
const { createCategorySchema, updateCategorySchema, deleteCategorySchema, getCategorySchema } = require('./../schemas/category.schema');

const router = express.Router();
const service = new CategoriesService();

router.get('/', async (req, res, next) => {
    try {
        const categories = await service.find();
        res.json(categories);
    } catch (error) {
        next(error);
    }
});

router.get('/:id',
    validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const categories = await service.findOne(id);
            res.json(categories);
        } catch (error) {
            next(error);
        }
    }
);

// router.get('/role/:role',
//     validatorHandler(getUserRoleSchema, 'params'),
//     async (req, res, next) => {
//         try {
//             const { role } = req.params;
//             const users = await service.findForRole(role);
//             res.json(users);
//         } catch (error) {
//             next(error);
//         }
//     }
// );

router.post('/',
    validatorHandler(createCategorySchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newCategory = await service.create(body);
            res.status(201).json(newCategory);
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id',
    validatorHandler(getCategorySchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const category = await service.update(id, body);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    validatorHandler(deleteCategorySchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const category = await service.delete(id);
            res.json(category);
        } catch (error) {
            next(error);
        }
    });

module.exports = router;