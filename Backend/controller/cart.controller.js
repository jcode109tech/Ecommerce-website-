const cartInstance = require('../services/cartservice')
const productInstance = require('../services/productservice')

const addToCart = async (req, res) => {
    const userId = req.user.userId;
    const { productId, quantity } = req.body;

    try {
        const product = await productInstance.findOneProduct(productId)
        if (!product) {
            return res.status(404).json({ message: 'No product found'})
        }
        const { price, name } = product;
        
        const productInfo = {
            productId,
            quantity,
            price,
            name,
        }
        const newCart = await cartInstance.createUpdateCart(userId, productInfo)
        res.status(200).json(newCart)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }

}

module.exports = { addToCart }