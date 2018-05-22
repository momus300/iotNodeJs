const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    mac: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true
    },
    data: {
        type: Object,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);