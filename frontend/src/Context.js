import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const Api = "http://localhost:8080";

    useEffect (() => {

        const fetchCarts = async () => {
               try {
                   const response = await fetch(`${Api}/api/cart`);
                   if (!response.ok) {
                       throw new Error('Network response was not ok');
                   }
                   const data = await response.json();
                   setCartItems(data);
               } catch (error) {
                   console.error('Error fetching data:', error)
               }
           };

          fetchCarts();

        }, [])


      return (
         <DataContext.Provider value={{ cartItems, Api }}>
             {children}
         </DataContext.Provider>
     );

};

export const useData = () => {
    return useContext(DataContext);
};
































// import React, { createContext, useContext, useState, useEffect } from 'react';

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//     const [categories, setCategories] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [cartItems, setCartItems] = useState([]);

//     const api = "http://localhost:8080";

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const response = await fetch(`${api}/api/categorys/categories`); 
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setCategories(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }

//         };

//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch(`${api}/api/products`); 
//                 if (!response.ok) {
//                      throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setProducts(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };  

        // const fetchCarts = async () => {
        //     try {
        //         const response = await fetch(`${api}/api/cart`);
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         const data = await response.json();
        //         setCartItems(data);
        //     } catch (error) {
        //         console.error('Error fetching data:', error)
        //     }
        // };

//         fetchCategories();
//         fetchProducts();
//         fetchCarts();
//     }, []);

//     return (
//         <DataContext.Provider value={{ categories, products, cartItems }}>
//             {children}
//         </DataContext.Provider>
//     );
// };

// export const useData = () => {
//     return useContext(DataContext);
// };
