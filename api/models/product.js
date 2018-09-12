const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    mac: {type: String, required: true},
    created: {type: String, required: true},
    data: {type: Object, required: true}
});

module.exports = mongoose.model('Product', productSchema);