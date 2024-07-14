import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productService from '../../services/productService';
import NavbarUser from '../NavbarUser';
import '../../styles/product.css'; 
import { useData } from '../../Context';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const { Api } = useData();

  const handleAddToCart = async (product) => {
    try {
      const response = await fetch(`${Api}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product._id, userId: 'user1' }),
      });

      if (response.ok) {
        const updatedCartItems = [...cartItems, product];
        setCartItems(updatedCartItems);
      } else {
        console.error('Error adding to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <>
      <NavbarUser />
      <div>
        <h2>Products</h2>
      </div>
      <div className="product-list">
        {products.map(product => (
          <ul key={product._id}>
            <li className="product-card">
              <img src={product.imgUrl} alt={product.title} />
              <div className="product-details">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p className="price">Price: ${product.price}</p>
                <p className="quantity">Quantity: {product.quantity}</p>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </li>
          </ul>

        ))}
      </div>
    </>
  );
};

export default ProductList;
