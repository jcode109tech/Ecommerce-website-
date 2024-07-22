import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarUser from '../NavbarUser';
// import '../../style/Cart.css';
import { useData } from '../../Context';
import cartServices from '../../services/cartServices';


const Cart = () => {
    const { Api } = useData();
    const [cartItems, setCartItems] = useState([]);
    
        useEffect (() => {
    
            const fetchCarts = async () => {
                   try {
                       const response = await cartServices.fetchCarts;
                       if (!response.ok) {
                           throw new Error('Network response was not ok');
                       }
                       const data = await response.json();
                       setCartItems(data);
                   } catch (error) {
                       console.error('Error fetching data:', error)
                   }
               };
    
              fetchCarts();
    
            }, [])


    const total = cartItems.reduce((sum, item) => sum + item.price, 0);


    const handleRemoveFromCart = async (product) => {
        try {
            const response = await cartServices.removeFromCart;
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
            const response = await cartServices.checkout;
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
