const productInstance = require('../services/productservice');
const categoryInstance = require('../services/categoryservice');

const createProduct = async (req, res) => {
    try {
        const { categoryId, title, description, price, quantity, isPurchased, imgUrl } = req.body;
        const category = await categoryInstance.findOneCategory({ _id: categoryId });
        if (!category) {
            throw res.status(404).json('Category not found')
        }
        const details = {
            categoryId: category._id,
            title,
            description,
            price,
            quantity,
            isPurchased,
            imgUrl
        }
        const newProduct = await productInstance.createProduct(details);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await productInstance.findAllProducts();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}

const getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const oneProduct = await productInstance.findOneProduct(id);
        res.status(201).json(oneProduct);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}

module.exports = { createProduct, getAllProducts, getOneProduct };