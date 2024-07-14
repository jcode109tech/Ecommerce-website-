import axios from 'axios';
import { toast } from 'react-toastify';

const Api = "http://localhost:8080";

const productService = {
  createProduct: async (data) => {
    try {
      const response = await axios.post(`${Api}/api/products/create`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(data)
      toast.success('Product created sucessfuly') 
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },


  getAllProducts: async () => {
    try {
      const response = await axios.get(`${Api}/api/products/`);
 
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },


  getProduct: async (id) => {
    try {
      const response = await axios.get(`${Api}/api/products/product/${id}`);
      
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },


  updateProduct: async (id, data) => {
    try {
      const response = await axios.post(`${Api}/api/products/update/${id}`, data);
      console.log(data)
      return response.data;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },


  deleteProduct: async (id) => {
    try {
      const response = await axios.get(`${Api}/api/products/delete/${id}`);
      
      return response.data;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }
};


export default productService;

