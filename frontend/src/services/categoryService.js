import axios from 'axios';

const Api = "http://localhost:8080";

const categoryService = {
  
  createCategory: async (data) => {
    try {
      const response = await axios.post(`${Api}/api/categories/create`, data,{
            headers: {
              'Content-Type': 'application/json',
            },
          });
      console.log(data);
      return response.data;
    } catch (error) {
      throw new Error(`Error creating category: ${error.message}`);
    }
  },



  getAllCategories: async () => {
    try {
      const response = await fetch(`${Api}/api/categories`);
      const data = response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(`Error fetching categories: ${error.message}`);
    }
  },



  getCategory: async (id) => {
    try {
      const response = await fetch(`${Api}/api/categories/categories/${id}`);
      const data = response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(`Error fetching category with ID ${id}: ${error.message}`);
    }
  },



  updateCategory: async (id, data) => {
    try {
      const response = await axios.post(`${Api}/api/categories/update/${id}`, data);
      console.log(data)
      return response.data;
    } catch (error) {
      throw new Error(`Error updating category with ID ${id}: ${error.message}`);
    }
  },



  deleteCategory: async (id) => {
    try {
      const response = await axios.get(`${Api}/api/categories/delete/${id}`);
      
      return response.data;
    } catch (error) {
      throw new Error(`Error deleting category with ID ${id}: ${error.message}`);
    }
  }
};


export default categoryService;

