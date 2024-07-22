import axios from "axios";

const Api = "http://localhost:8080";

const cartServices = {
    
     fetchCarts: async (Api) => {
        try {
            const response = await axios(`${Api}/api/carts`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },
    
    removeFromCart: async (Api, productId, userId) => {
        try {
            const response = await axios.delete(`${Api}/api/carts/remove/${productId}`, {
                // method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId }), // Pass dynamic user ID
            });
    
            if (!response.ok) {
                throw new Error('Error removing from cart');
            }
        } catch (error) {
            console.error('Error removing from cart:', error);
            throw error;
        }
    },
    
    checkout: async (Api, userId) => {
        try {
            const response = await axios.post(`${Api}/api/carts/checkout`, {
                // method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId }), // Pass dynamic user ID
            });
    
            if (!response.ok) {
                throw new Error('Error during checkout');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            throw error;
        }
    }

};


export default cartServices;
