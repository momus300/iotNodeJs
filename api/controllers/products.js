const Product = require('../models/product');

exports.product_get = (req, res) => {
    var product = new Product({
        mac: req.params.mac,
        data: req.query
    });

    product
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created successfully',
                createdProduct: {
                    mac: result.mac,
                    createdAt: result.created,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost/public/' + result._id
                    },
                    data: result.data
                }
            });
        })
        .catch(err => console.log(err))
    ;
};