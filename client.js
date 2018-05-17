const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');

app.use(morgan('dev'));

app.use('/public', productRoutes);

module.exports = app;