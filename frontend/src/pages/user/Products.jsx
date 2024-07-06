import React, { useState } from 'react';
import '../../style/Product.css';

const Products = ({ products, handleAddToCart }) => {
    const [cart, setCart] = useState([]);

    // Add product to cart
    const addToCart = (product) => {
        setCart([...cart, product._id]);
        handleAddToCart(product._id);
    };

    return (
        <div className="products-grid">
            {products.map((product) => (
                <div key={product._id} className="product-item">
                    <img src={product.imgUrl} alt={product.title} />
                    <div className="product-details">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;



















// import React, { useState } from 'react'

// const Products = ({products, handleAddToCart}) => {

//     const [cart, setCart] = useState([]);

//     // add product to cart
//     const AddToCart = (products) => {
//         setCart([...cart, products._id]);
//         handleAddToCart(products._id)
//     }


//     // shuffles data
//     // const shuffleArray = (array) => {
//     //     return array.sort(() => Math.random() - 0.5);
//     // };

 
//       return (
//         <div className="products-grid">      

//             {products.map((products) => (

//                 <div key={products._id}>
//                     <img src={products.imgUrl} alt={products.title} />
//                     <h2>{products.title}</h2>
//                     <p>{products.title}</p>
//                     <p>{products.description}</p>
//                     <p>{products.price}</p>
//                     <button onClick={() => AddToCart(products)}>Add to Cart</button>
//                 </div>
            
//             ))}

//         </div>
//       )
// }


// export default Products