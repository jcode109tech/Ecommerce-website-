import React from 'react';

import '../../style/Billing.css'

const Billing = ({ cartItems, handlePayment }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="billing">
            <h2>Billing Information</h2>
            <div className="billing-summary">
                <h3>Order Summary</h3>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item._id}>{item.title} - ${item.price}</li>
                    ))}
                </ul>
                <h3>Total: ${total.toFixed(2)}</h3>
            </div>
            <div className="payment-methods">
                <h3>Select Payment Method:</h3>
                <label>
                    <input type="radio" name="paymentMethod" value="paypal" /> PayPal Account
                </label>
                <label>
                    <input type="radio" name="paymentMethod" value="debitcard" /> Debit Card
                </label>
                {/* Add more payment methods as needed */}
                <button onClick={handlePayment}>Pay Now</button>
            </div>
        </div>
    );
};

export default Billing;
