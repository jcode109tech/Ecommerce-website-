import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import categoryService from '../services/categoryService';
import NavbarUser from '../pages/NavbarUser';

const CategoryCreate = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await categoryService.createCategory({ name, description });
      navigate('/');
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <>
      <NavbarUser />
      <div>
        <h2>Create Category</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Description:
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default CategoryCreate;
