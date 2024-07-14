import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    // const [cartItems, setCartItems] = useState([]);

    const Api = "http://localhost:8080";

    // useEffect (() => {

    //     const fetchCarts = async () => {
    //            try {
    //                const response = await fetch(`${Api}/api/cart`);
    //                if (!response.ok) {
    //                    throw new Error('Network response was not ok');
    //                }
    //                const data = await response.json();
    //                setCartItems(data);
    //            } catch (error) {
    //                console.error('Error fetching data:', error)
    //            }
    //        };

    //       fetchCarts();

    //     }, [])

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    }

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    }


      return (
         <DataContext.Provider value={{ user, logout, login, Api}}>
             {children}
         </DataContext.Provider>
     );

};

export const useData = () => {
    return useContext(DataContext);
};

