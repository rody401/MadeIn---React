const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "Server Error"});
    }
}

const getProductById = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
};