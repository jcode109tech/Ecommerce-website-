import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productService from '../services/productService';
import NavbarUser from '../pages/NavbarUser';

const ProductDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteProduct = async () => {
      try {
        await productService.deleteProduct(id);
        navigate('/products');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    };

    deleteProduct();
  }, [id, navigate]);

  return (
    <>
      <NavbarUser />
      <div>
        <h2>Deleting Product...</h2>
      </div>
    </>
  );
};

export default ProductDelete;
