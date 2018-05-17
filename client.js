const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');

app.use('/public', productRoutes);

module.exports = app;