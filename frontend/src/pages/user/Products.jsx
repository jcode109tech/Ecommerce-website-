import React, { useState } from 'react';
import NavbarUser from '../NavbarUser';
import '../../style/Product.css';
import { useData } from '../../Context';

const Products = () => {
    const { products, cartItems, setCartItems, api } = useData();
    // const [cart, setCart] = useState([]);

    const handleAddToCart = async (product) => {
        try {
            const response = await fetch(`${api}/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId: product._id, userId: 'user1' }),
            });

            if (response.ok) {
                // setCartItems([...cartItems, product]);
                const updatedCartItems = [...cartItems, product];
                setCartItems(updatedCartItems);
            } else {
                console.error('Error adding to cart');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <>
            <NavbarUser />
            <div className="products-grid">
                {products && products.map((product) => (
                    <div key={product._id} className="product-item">
                        <img src={product.imgUrl} alt={product.title} />
                        <div className="product-details">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;
