const productModel = require('../schemas/productschema');

class ProductService {
    async createProduct(productInfo) {
        try {
            const product = new productModel(productInfo);
            const saved = await product.save();
            return saved;
        } catch (err) {
            throw new Error(`Error creating product: ${err.message}`);
        }
    }

    async findAllProducts() { 
        try {
            const products = await productModel.find().populate('categoryId'); // Use the field name as a string
            return products;
        } catch (err) {
            throw new Error(`Error finding products: ${err.message}`);
        }
    }

    async findOneProduct(id) {
        try {
            const oneProduct = await productModel.findOne({ _id: id });
            return oneProduct;
        } catch (err) {
            throw new Error(`Error finding product: ${err.message}`);
        }
    }

    async updateProduct (id, productInfo) {
        try {
            const updated = await productModel.findOneAndUpdate({ _id: id}, productInfo, { new: true });
            return updated;
        } catch (err) {
            throw new Error(`Error updating product: ${err.message}`);
        }
    }

    async deleteProduct (id) {
        try {
            const deleted = await productModel.findOneAndDelete({ _id: id });
            return deleted;
        } catch (err) {
            throw new Error(`Error deleting product: ${err.message}`);
        }
    }
};

const productService = new ProductService();

module.exports = productService;