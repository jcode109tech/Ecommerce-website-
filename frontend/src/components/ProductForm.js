import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import productService from '../services/productService';
import categoryService from '../services/categoryService';
import '../styles/ProductForm.css'


const ProductForm = () => {
  const [formData, setFormData] = useState({
    categoryId: '',
    title: '',
    description: '',
    price: '',
    quantity: '',
    isPurchased: false,
    imgUrl: null
  });
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await categoryService.getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setMessage('Error fetching categories');
      }
    };

    fetchCategories();

    if (id) {
      // Fetch the product details to update
      productService.getProduct(id)
        .then(data => {
          setFormData({
            categoryId: data.categoryId,
            title: data.title,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            isPurchased: data.isPurchased,
            imgUrl: null // Image upload field reset for update
          });
        })
        .catch(error => {
          console.error('Error fetching product details:', error);
          setMessage('Error fetching product details');
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      imgUrl: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('categoryId', formData.categoryId);
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('quantity', formData.quantity);
    data.append('isPurchased', formData.isPurchased);
    data.append('imgUrl', formData.imgUrl);

    try {
      if (id) {
        await productService.updateProduct(id, data);
      } else {
        await productService.createProduct(data);
      }
      navigate('/products');
    } catch (error) {
      console.error('Error submitting product:', error);
      setMessage('Error submitting product');
    }
  };

  return (
    <div className="product-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Category:</label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Is Purchased:</label>
          <input type="checkbox" name="isPurchased" checked={formData.isPurchased} onChange={() => setFormData({ ...formData, isPurchased: !formData.isPurchased })} />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" name="imgUrl" onChange={handleFileChange} required />
        </div>
        <button type="submit">{id ? 'Update Product' : 'Create Product'}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductForm;
