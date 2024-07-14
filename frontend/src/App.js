import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import ProductCreate from './components/ProductCreate';
import ProductUpdate from './components/ProductUpdate';
import ProductDelete from './components/ProductDelete';

import CategoryCreate from './components/CategoryCreate';
import CategoryUpdate from './components/CategoryUpdate';
import CategoryDelete from './components/CategoryDelete' 


import NotFoundPage from './pages/NotFoundPage';

import Home from './pages/landing/Home';
import Authform from './auth/Authform';


import CategoryList from './pages/user/CategoryList';
import ProductList from './pages/user/ProductList';
import HomeUser from './pages/user/HomeUser';
import Cart from './pages/user/Cart';
import Billing from './pages/user/Billing';

import Admin from './pages/user/Admin';

import ProtectedRoute from './auth/ProtectedRoute';

import { DataProvider } from './Context';



const App = () => {
    return (
        <div className='App'>
                <DataProvider>
                    <Router>

                        <Routes>

                            <Route path='/' element={<Home />} />
                            <Route path='/home' element={<Home />} />

                            <Route path='*' element={<NotFoundPage />} />

                            <Route path='/login' element={<Authform/>} />

                            <Route path='/homeuser' element={<HomeUser />} />
                            <Route path='/categories' element={<ProtectedRoute>
                                <CategoryList /></ProtectedRoute>}/>
                            <Route path="/products" element={<ProtectedRoute>
                                <ProductList /></ProtectedRoute>}/>
                            <Route path='/admin' element={<ProtectedRoute>
                                <Admin /></ProtectedRoute>} />
                            <Route path='/cart' element={<ProtectedRoute>
                                <Cart /></ProtectedRoute>} />
                            <Route path='/billing' element={<ProtectedRoute>
                                <Billing /></ProtectedRoute>} />

                            <Route path="/categories/create" element={<ProtectedRoute>
                                <CategoryCreate /> </ProtectedRoute>} />
                            <Route path="/categories/update/:id" element={<ProtectedRoute>
                                <CategoryUpdate /></ProtectedRoute>} />
                            <Route path="/categories/delete/:id" element={<ProtectedRoute>
                                <CategoryDelete /></ProtectedRoute>} />

                            <Route path="/products/create" element={<ProtectedRoute>
                                <ProductCreate /></ProtectedRoute>} />
                            <Route path="/products/update/:id" element={<ProtectedRoute>
                                <ProductUpdate /></ProtectedRoute>} />
                            <Route path="/products/delete/:id" element={<ProtectedRoute>
                                <ProductDelete /></ProtectedRoute>} />

                        </Routes>

                    </Router>
                </DataProvider>


        </div>
    );
};

export default App;
