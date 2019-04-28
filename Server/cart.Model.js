var Mongoose = require('mongoose');

const Schema = Mongoose.Schema;
var cartSchema = new Schema({
    cartId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    productId: { type: String, required: true },
    product: {
        quantity: { type: Number, default: 1 },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String }
    }
});

var CartModel = Mongoose.model('cart', cartSchema);
module.exports = CartModel;