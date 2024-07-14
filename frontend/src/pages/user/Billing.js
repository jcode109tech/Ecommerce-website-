import React from 'react'
import NavbarUser from '../NavbarUser'


const Billing = () => {
  return (
    <>
        <NavbarUser />
        <div>Billing</div>
    </>
  )
}

export default Billing


// import React from 'react';
// import Navbar from '../components/Navbar';
// import '../../style/Billing.css';
// import { useData } from '../../Context';

// const Billing = () => {
//     const { api } = useData();
//     const total = cartItems.reduce((sum, item) => sum + item.price, 0);

//     const handlePayment = async () => {
//         try {
//             const response = await fetch(`${api}/checkout`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ userId: 'user1' }),
//             });

//             if (response.ok) {
//                 setCartItems([]);
//                 console.log('Payment successful');
//             } else {
//                 console.error('Error processing payment');
//             }
//         } catch (error) {
//             console.error('Error processing payment:', error);
//         }
//     };

//     return (
//         <>
//             <NavbarUser />
//             <div className="billing">
//                 <h2>Billing Information</h2>
//                 <div className="billing-summary">
//                     <h3>Order Summary</h3>
//                     <ul>
//                         {cartItems.map((item) => (
//                             <li key={item._id}>{item.title} - ${item.price}</li>
//                         ))}
//                     </ul>
//                     <h3>Total: ${total.toFixed(2)}</h3>
//                 </div>
//                 <div className="payment-methods">
//                     <h3>Select Payment Method:</h3>
//                     <label>
//                         <input type="radio" name="paymentMethod" value="paypal" /> PayPal Account
//                     </label>
//                     <label>
//                         <input type="radio" name="paymentMethod" value="debitcard" /> Debit Card
//                     </label>
//                     {/* Add more payment methods as needed */}
//                     <button onClick={handlePayment}>Pay Now</button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Billing;
