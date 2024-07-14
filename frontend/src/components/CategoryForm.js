import React, { useState } from 'react';
import categoryService from '../services/categoryService';
import '../styles/CategoryForm.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCategory = { name, description };
      await categoryService.createCategory(newCategory);
      setName('');
      setDescription('');
      alert('Category created successfully');
    } catch (err) {
      alert(`Error creating category: ${err.message}`);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="category-form">
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Add Category</button>
    </form>
    
    </>
  );
};

export default CategoryForm;
