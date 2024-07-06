const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        //products: { type: Array },
        description: { type: String, required: true }
    },
    { timestamps: true }
);

const Category = mongoose.model('Category', CatSchema);

module.exports = Category;