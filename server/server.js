require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;
constprodtcRoutes = require('./routes/productRoutes');
const Product = require("./models/product")

connectDB();

app.use(express.json())

app.use('/api/products', productRoutes);

app.listen(PORT, ()  => {
    console.log(`Server running on port ${PORT}`)
})