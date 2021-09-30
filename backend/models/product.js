const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName:{
        type: String,
        require: true,
    },
    productPrice:{
        type: Number,
        required: true,
    },
    productLocation:{
        type: String,
        required: true,
    },
    productLink:{
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    productDescription:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Product', ProductSchema);