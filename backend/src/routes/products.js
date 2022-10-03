const { addProducts } = require('../controllers/products');

const router = require('express').Router();

const productsRouter = router;

productsRouter.post('/add', addProducts);

module.exports = productsRouter;