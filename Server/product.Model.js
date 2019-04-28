var Mongoose = require('mongoose');

const Schema = Mongoose.Schema;
var productSchema = new Schema({
    productId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    quantity: { type: Number, default: 10 },
    description: { type: String, default: 'This product is so cool' },
    createdDate: { type: Date, default: new Date().getTime() },
    brand: { type: String, required: true, default: 'LKM' },
    ratings: { type: Number, default: 4.5 },
    reviews: { type: Number, default: 100 },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, default: 'General' },
    seller: { type: String, default: 'Lkmcart' },
    owner: {
        email: { type: String, required: true },
        name: { type: String, required: true }
    }
});

var ProductModel = Mongoose.model('product', productSchema);
module.exports = ProductModel;