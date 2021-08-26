const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById} = require('../controller/productControllers')

//Get all products from db | /api/products
router.get('/', (req, res) => {

})

//Get a product by id from db | /api/products/:id
router.get('/:id', (req, res) => {

})

module.exports = router;

