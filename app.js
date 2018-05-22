const express = require('express');
const app = express();
// const morgan = require('morgan');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');

mongoose.connect('mongodb://mongodb/nowakolekcja');

// app.use(morgan('dev'));

app.use('/public', productRoutes);

module.exports = app;