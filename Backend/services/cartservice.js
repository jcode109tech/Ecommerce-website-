const CartModel = require('../schemas/cartschema.js');
const mongoose = require('mongoose');

class CartServices {
    async createUpdateCart(userId, productInfo) {
        try {
            // if (!mongoose.isValidObjectId(userId)) {
            //     throw new Error('Invalid user ID');
            // }
            // const userObjectId = new mongoose.Types.ObjectId(userId)
            //userId = new mongoose.Types.ObjectId(userId);
            console.log(userId)
            const cart = await CartModel.findOne({ userId }).populate('products.productId').populate('userId');

            if (cart) {
                const productIndex = cart.products.findIndex(p => p.productId.toString() === productInfo.productId);

                if (productIndex > -1) {
                    cart.products[productIndex].quantity += productInfo.quantity;
                    cart.products[productIndex].price = productInfo.price;
                } else {
                    cart.products.push(productInfo);
                }

                const updatedCart = await cart.save();
                return updatedCart;
            } else {
                const newCart = new CartModel({
                    userId: userId,
                    products: [productInfo],
                });

                const savedCart = await newCart.save();
                return savedCart;
            }
        } catch (err) {
            throw new Error(`Error creating or updating cart: ${err.message}`);
        }
    }
}

const cartService = new CartServices()

module.exports = cartService;