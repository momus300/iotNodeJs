const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    mac: String,
    created: Date,
    data: Object
});

module.exports = mongoose.model('Product', productSchema);