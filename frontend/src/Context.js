import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const Api = "http://localhost:8080";
 
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

    const getToken = () => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            return JSON.parse(storedUser).token;
        }
        return null;
    };

    
    return (
         <DataContext.Provider value={{ user, getToken, logout, login, Api}}>
             {children}
         </DataContext.Provider>
     );

};

export const useData = () => {
    return useContext(DataContext);
};

