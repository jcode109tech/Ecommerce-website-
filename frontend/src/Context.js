import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const api = "http://localhost:8000";

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch(`${api}/categories`); 
            const data = await response.json();
            setCategories(data);
        };

        const fetchProducts = async () => {
            const response = await fetch(`${api}/products`); 
            const data = await response.json();
            setProducts(data);
        };

        const fetchCarts = async () => {
            const response = await fetch(`${api}/cart`);
            const data = await response.json();
            setCartItems(data);
        };

        fetchCategories();
        fetchProducts();
        fetchCarts();
    }, []);

    return (
        <DataContext.Provider value={{ categories, products, cartItems }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};
