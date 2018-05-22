const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');

const Product = require('../models/product');

// router.get('/', (req, res, next) => {
//    res.status(200).json({
//        message: 'Odebrane zadanie GET do /public/'
//    }) ;
// });
//
// router.post('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Odebrane zadanie POST do /public/'
//     }) ;
// });

router.get('/:mac', (req, res, next) => {
    var date = new Date();
    var product = new Product({
        // _id: new mongoose.Types.ObjectId(),
        mac: req.params.mac,
        created: date,
        data: req.query
    });
    product
        .save()
        // .then(result => {
        //     console.log(result)
        // })
        .catch(err => console.log(err))
    ;

    res.status(201).json({
        message: 'OK',
        created: date,
        // set: req.query
    });
});

module.exports = router;