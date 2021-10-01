require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const session = require('session');
const app = express();
const PORT = process.env.PORT || 5000;
const productRoutes = require('./routes/productRoutes');


connectDB();

app.use (session({ secret: 'secretkey' }));

app.use(express.json())

app.use('/api/products', productRoutes);

app.listen(PORT, ()  => {
    console.log(`Server running on port ${PORT}`)
})