import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import categoryService from '../../services/categoryService';
import NavbarUser from '../NavbarUser';
import '../../styles/Royalbackground.css';


const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryService.getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
        <NavbarUser /> 
        <div className='royal-background'>
          <h2>Categories</h2>
          {/* <Link to="/create">Create New Category</Link> */}
          <ul>
            {categories.map(category => (
              <li key={category._id}>
                <strong>{category.name}</strong>: {category.description}
            
              </li>
            ))}
          </ul>
        </div>
    
    </>
  );
};

export default CategoryList;
