import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/Cart.css'

const Cart = ({ cartItems, handleRemoveFromCart, handleCheckout }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
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
    );
};

export default Cart;
