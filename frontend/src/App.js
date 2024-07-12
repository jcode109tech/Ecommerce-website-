import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Products from './pages/user/Products';
import ProductCreate from './components/ProductCreate';
import ProductUpdate from './components/ProductUpdate';
import ProductDelete from './components/ProductDelete';

import Categorys from './pages/user/Categorys';
import CategoryCreate from './components/CategoryCreate';
import CategoryUpdate from './components/CategoryUpdate';
import CategoryDelete from './components/CategoryDelete' 


import NotFoundPage from './pages/NotFoundPage';

import Home from './pages/landing/Home';
import LoginForm from './new/LoginForm';
import RegisterForm from './new/RegisterForm';

import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import HomeUser from './pages/user/HomeUser';

// import ProtectedRoute from './new/ProtectedRoute';

import { DataProvider } from './Context';

const App = () => {
    return (
        <DataProvider>
            <Router>

                <Routes>

                    {/* <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                     */}
                    
                    {/* <Route path='/productshome' element={
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
                    } /> */}

                    <Route path='*' element={<NotFoundPage />} />

                    {/* 
                    <Route path='/categorys' element={<Categorys />} /> 
                    <Route path="/products" element={<Products />} /> */}

                    <Route path='/' element={<HomeUser />} />
                    <Route path='/categorys' element={<CategoryList />} /> 
                    <Route path="/products" element={<ProductList />} />

                    <Route path="/categorys/create" element={<CategoryCreate />} />
                    <Route path="/categorys/update/:id" element={<CategoryUpdate />} />
                    <Route path="/categorys/delete/:id" element={<CategoryDelete />} />

                    <Route path="/products/create" element={<ProductCreate />} />
                    <Route path="/products/update/:id" element={<ProductUpdate />} />
                    <Route path="/products/delete/:id" element={<ProductDelete />} />
                    

                </Routes>

            </Router>
        </DataProvider>
    );
};

export default App;
