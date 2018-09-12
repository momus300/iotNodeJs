const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/products');

router.get('/:mac', ProductController.product_get);

module.exports = router;