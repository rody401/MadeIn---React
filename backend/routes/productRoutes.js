const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById} = require('../controller/productControllers')

//Get all products from db | /api/products
router.get('/', getAllProducts);

//Get a product by id from db | /api/products/:id
router.get('/:id', getProductById);

module.exports = router;

