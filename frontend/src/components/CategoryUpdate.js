import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import categoryService from '../services/categoryService';
import NavbarUser from '../pages/NavbarUser';

const CategoryUpdate = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await categoryService.getCategory(id);
        setName(data.name);
        setDescription(data.description);
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchCategory();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await categoryService.updateCategory(id, { name, description });
      navigate('/');
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <>
      <NavbarUser />
      <div>
        <h2>Update Category</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Description:
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
      
    </>
  );
};

export default CategoryUpdate;
