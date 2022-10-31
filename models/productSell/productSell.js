const {
    model,
    Schema
} = require('mongoose');

const productSellSchema = new Schema({
    name: String,
    description: String,
    createdAt: String,
    cost: Number,
    price: Number,
})

module.exports = model('productSell', productSellSchema);