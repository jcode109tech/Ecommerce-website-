const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
    title:{ type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true},
    quantity: { type: Number},
    isPurchased: { type: Boolean, default: false},
    categoryId: { type: mongoose.Types.ObjectId, ref: 'Category' },
    imgUrl: {type: String, required: true}
},
{timestamps: true }

);

const Products = mongoose.model('Products', ProductSchema);

module.exports = Products;