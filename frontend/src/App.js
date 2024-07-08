import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/user/Products';
import Cart from './pages/user/Cart';
import Billing from './pages/user/Billing';
import NotFoundPage from './pages/NotFoundPage';
import ProductList from './pages/user/ProductList';
import Home from './pages/landing/Home';
import LoginForm from './new/LoginForm';
import RegisterForm from './new/RegisterForm';
import ProtectedRoute from './new/ProtectedRoute';
import { DataProvider } from './Context';

const App = () => {
    return (
        <DataProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path='/productshome' element={
                        <ProtectedRoute>
                            <ProductList />
                        </ProtectedRoute>
                    } /> 
                    <Route path="/products" element={
                        <ProtectedRoute>
                            <Products />
                        </ProtectedRoute>
                    } />
                    <Route path="/cart" element={
                        <ProtectedRoute>
                            <Cart />
                        </ProtectedRoute>
                    } />
                    <Route path="/billing" element={
                        <ProtectedRoute>
                            <Billing />
                        </ProtectedRoute>
                    } />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Router>
        </DataProvider>
    );
};

export default App;
