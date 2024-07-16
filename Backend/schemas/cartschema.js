const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        products: [
            {
                productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
                quantity: { type: Number, min: 1, default: 1, required: true },
                price: { type: Number },
                name: { type: String }
            }
        ],
        modifiedOn: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;