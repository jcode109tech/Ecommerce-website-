import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productService from '../../services/productService';
import NavbarUser from '../NavbarUser';
import CategoryForm from '../../components/CategoryForm';
import ProductForm from '../../components/ProductForm';

import '../../styles/Settings.css'
import { useData } from '../../Context';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const { Api, user } = useData(); // Assuming you have user context

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

  // if (!user || user.role !== 'seller') {
  //   return <div>Access Denied</div>; // Or redirect to another page
  // }

  return (
    <>
      <NavbarUser />
      <div className="settings-container">
        <div className="settings-header">
          <h2>YOUR PRODUCTS</h2>
          {/* <Link to="/products/create">Create New Product</Link> */}
        </div>
        <div className="settings-list">
          {products.map(product => (
            <div key={product._id} className="settings-card">
              <img src={product.imgUrl} alt={product.title} />
              <div className="settings-details">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p className="price">Price: ${product.price}</p>
                <p className="quantity">Quantity: {product.quantity}</p>
                <Link to={`/products/update/${product._id}`}>Edit</Link>
                <Link to={`/products/delete/${product._id}`}>Delete</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="settings-header">
          <h3> ADD MORE PRODUCTS AND CATEGORIES </h3>
      </div>

      <div className='add-layout'>
          <div className='add-product'>
              <ProductForm />
          </div>
          <div className='add-category'>
              <CategoryForm />
          </div>
      </div>

      
    </>
  );
};

export default Admin;
