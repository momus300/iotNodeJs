const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
   res.status(200).json({
       message: 'Odebrane zadanie GET do /public/'
   }) ;
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Odebrane zadanie POST do /public/'
    }) ;
});

router.get('/:mac', (req, res, next) => {
    const mac = req.params.mac;

    res.status(200).json({
        mac: mac,
        message: 'Odebrane zadanie POST do /public/ z nowym tekstem3'
    }) ;
});

module.exports = router;