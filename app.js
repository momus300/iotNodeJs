const express = require('express');
const app = express();
// const morgan = require('morgan');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');

mongoose.connect('mongodb://mongodb/nowakolekcja');

// app.use(morgan('dev'));

app.use('/public', productRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;