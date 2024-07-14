import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import categoryService from '../services/categoryService';

const CategoryDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteCategory = async () => {
      try {
        await categoryService.deleteCategory(id);
        navigate('/');
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    };

    deleteCategory();
  }, [id, navigate]);

  return (
    <div>
      <h2>Deleting Category...</h2>
    </div>
  );
};

export default CategoryDelete;
