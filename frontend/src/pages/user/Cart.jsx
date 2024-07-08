import React from 'react';
import { Link } from 'react-router-dom';
import NavbarUser from '../NavbarUser';
import '../../style/Cart.css';
import { useData } from '../../Context';

const Cart = () => {
    const { cartItems, setCartItems, products, setFilteredProducts, setProducts, api } = useData();
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleSearch = (categoryId, searchTerm) => {
        let filteredProducts = products;

        if (categoryId) {
            filteredProducts = filteredProducts.filter(product => product.categoryId === categoryId);
        }

        if (searchTerm) {
            filteredProducts = filteredProducts.filter(product => 
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredProducts(filteredProducts);
        setProducts(filteredProducts);
    };

    const handleRemoveFromCart = async (product) => {
        try {
            const response = await fetch(`${api}/cart/${product._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: 'user1' }),
            });

            if (response.ok) {
                setCartItems(cartItems.filter(item => item._id !== product._id));
            } else {
                console.error('Error removing from cart');
            }
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    };

    const handleCheckout = async () => {
        try {
            const response = await fetch(`${api}/checkout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: 'user1' }),
            });

            if (response.ok) {
                setCartItems([]);
                console.log('Checkout successful');
            } else {
                console.error('Error during checkout');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <>
            <NavbarUser />
            <div className="cart">
                <h2>Your Cart</h2>
                {cartItems.map((item) => (
                    <div key={item._id} className="cart-item">
                        <img src={item.imgUrl} alt={item.title} />
                        <div className="cart-item-details">
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                        </div>
                    </div>
                ))}
                <div className="cart-total">
                    <h3>Total: ${total.toFixed(2)}</h3>
                    <button className="checkout-button">
                        <Link to="/billing">Proceed to Billing</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;
