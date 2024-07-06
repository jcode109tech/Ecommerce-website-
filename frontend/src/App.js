import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Products from './pages/user/Products';
import Cart from './pages/user/Cart';
import Billing from './pages/user/Billing';
import NotFoundPage from './pages/NotFoundPage';
import Login from './pages/landing/Login';
import Register from './pages/landing/Register';
import ProductList from './pages/user/ProductList';
import ProtectedRoute from './pages/ProtectedRoute';

import Home from './pages/landing/Home';
import Features from './pages/landing/Features';
import About from './pages/landing/About';
import MoreAboutUs from './pages/landing/MoreAboutUs';
import Footer from './pages/landing/Footer'

const api = "http://localhost:8000"

const App = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    
    const [isloggedIn, setIsloggedin] = useState(false);
    // const [isloggedIn, setIsloggedin] = useState(false);
    
    useEffect(() => {
        // Fetch categories and products from your API
        const fetchCategories = async () => {
            const response = await fetch(`${api}/categories`); // Adjust the API endpoint as needed
            const data = await response.json();
            setCategories(data);
        };

        const fetchProducts = async () => {
            const response = await fetch(`${api}/products`); // Adjust the API endpoint as needed
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data);
        };

        const fetchCarts = async () => {
            const response = await fetch(`${api}/cart`);
            const data = await response.json();
            setCartItems(data);
        };

        fetchCategories();
        fetchProducts();
        fetchCarts();

        const token = localStorage.getItem('authToken');
        if(token) {
            setIsloggedin(true);
        }

    }, []);


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
                setCartItems([...cartItems, product]);
            } else {
                console.error('Error adding to cart');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
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

    const handlePayment = async () => {
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
                console.log('Payment successful');
            } else {
                console.error('Error processing payment');
            }
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('AuthToken');
        setIsloggedin(false);
    }
  

    return (
        <Router>
            <Navbar isloggedIn={isloggedIn} categories={categories} products={products} handleSearch={handleSearch}/>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/features' element={<Features />} />
                <Route path='/about' element={<About />} />
                <Route path='/moreaboutus' element={<MoreAboutUs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
               

                <Route path='/productshome' element={<ProtectedRoute isLoggedIn={isloggedIn}>
                        <ProductList Products={products} categories={categories}/>
                        </ProtectedRoute>}/>
                <Route path="/products" element={<ProtectedRoute isLoggedIn={isloggedIn}>
                        <Products products={products} handleAddToCart={handleAddToCart}/>
                        </ProtectedRoute>}/>
                <Route path="/cart" 
                        element={<ProtectedRoute isLoggedIn={isloggedIn}>
                        <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} handleCheckout={handleCheckout}/>
                        </ProtectedRoute>} />
                <Route path="/billing" 
                        element={<ProtectedRoute isLoggedIn={isloggedIn}>
                        <Billing cartItems={cartItems} handlePayment={handlePayment}/>
                        </ProtectedRoute>} />
               
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;
