const productInstance = require('../services/productservice');
const categoryInstance = require('../services/categoryservice');
const formidable = require('formidable')
const uploadFile = require('../utilities/upload.utility')
const { verifyToken, verifyAdmin } = require('../middleware/authorization.middleware');

const createProduct = async (req, res, next) => {
    const form = formidable({ maxFieldsSize: 400 * 1024 *1024 });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            return next(err);
        }
        try {
            const { categoryId, title, description, price, quantity, isPurchased } = fields;
            const userId = req.user.userId
            console.log('this is the user', userId)
            if (!categoryId || !userId) {
                res.status(400).json({ message: 'please select a category'})
            }
            const uploadedFiles = await uploadFile(files['imgUrl'].filepath, 'intro')
            let imgUrl = uploadedFiles.url;

            const category = await categoryInstance.findOneCategory(categoryId);
            if (!category) {
                throw res.status(500).json('category not found')
            }
            const details = {
                title: title,
                categoryId: category._id,
                description: description,
                price: price,
                quantity: quantity,
                isPurchased: isPurchased,
                imgUrl: imgUrl,
                userId
            }

            const newProduct = await productInstance.createProduct(details);
            res.status(201).json(newProduct)
        } catch (err) {
            res.status(500).json({ message: err.message})
        }
    
    })
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

const productUpdate = async (req, res, next) => {
    const { id } = req.params;
    const form = formidable({ maxFieldsSize: 400 * 1024 * 1024 });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            return next(err);
        }

        try {
            const { categoryId, title, description, price, quantity, isPurchased } = fields;
            let imgUrl;

            if (files['imgUrl']) {
                const uploadedFiles = await uploadFile(files['imgUrl'].filepath, 'intro');
                imgUrl = uploadedFiles.url;
            }

            let details = {};
            if (title) details.title = title;
            if (description) details.description = description;
            if (price) details.price = price;
            if (quantity) details.quantity = quantity;
            if (typeof isPurchased !== 'undefined') details.isPurchased = isPurchased;
            if (imgUrl) details.imgUrl = imgUrl;

            if (categoryId) {
                const category = await categoryInstance.findOneCategory(categoryId);
                if (!category) {
                    return res.status(400).json({ message: 'Category not found' });
                }
                details.categoryId = category._id;
            }

            const updatedProduct = await productInstance.updateProduct(id, details);
            res.status(200).json(updatedProduct);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });
};


const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const deleted = await productInstance.deleteProduct(id)
        res.status(201).json(deleted)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

module.exports = { createProduct, getAllProducts, getOneProduct, productUpdate, deleteProduct };