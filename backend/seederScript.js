require('dotenv').config();

const productData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/product');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productData);

        console.log("Data imported");

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

}

importData();
