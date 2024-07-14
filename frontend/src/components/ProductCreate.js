import React, { useState, useEffect } from 'react';
import axios from 'axios';
import categoryService from '../services/categoryService';

const CreateProductForm = () => {
    const [formData, setFormData] = useState({
        categoryId: '',
        title: '',
        description: '',
        price: '',
        quantity: '',
        isPurchased: false,
        imgUrl: null  // This will hold the uploaded file object
    });

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const categoriesData = await categoryService.getAllCategories();
          setCategories(categoriesData);
        } catch (error) {
          console.error('Error fetching categories:', error);
          // setMessage('Error fetching categories');
        }
      };
      
      fetchCategories();
    }, [])
  

    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            imgUrl: file
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('categoryId', formData.categoryId);
            formDataToSend.append('title', formData.title);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('price', formData.price);
            formDataToSend.append('quantity', formData.quantity);
            formDataToSend.append('isPurchased', formData.isPurchased);
            formDataToSend.append('imgUrl', formData.imgUrl);

            const response = await axios.post('http://localhost:8080/api/products/create', formDataToSend);
            console.log('Product created successfully:', response.data);
            // Optionally, redirect or show a success message
        } catch (error) {
            console.error('Error creating product:', error);
            // Handle error, show error message
        }
    };

    return (
        <div>
            <h2>Create New Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Category:
                    <select name="categoryId" value={formData.categoryId} onChange={handleInputChange}>
                        <option value="">Select a category</option>
                        {categories.map(category => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea name="description" value={formData.description} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Quantity:
                    <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Is Purchased:
                    <input type="checkbox" name="isPurchased" checked={formData.isPurchased} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Image:
                    <input type="file" name="imgUrl" onChange={handleFileChange} />
                </label>
                <br />
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProductForm;


// import React, { useState } from 'react';
// import productService from '../services/productService';
// import { useNavigate } from 'react-router-dom';

// import '../styles/ProductForm.css'

// const CreateProductForm = () => {
//   const [formData, setFormData] = useState({
//     categoryId: '',
//     title: '',
//     description: '',
//     price: 0,
//     quantity: 0,
//     isPurchased: false,
//     imgUrl: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({...formData, [name]: value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await productService.createProduct(formData);
//       console.log('Product created successfully:', response);
//       navigate('/products')
//     } catch (error) {
//       console.error('Error creating product:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="categoryId"
//         value={formData.categoryId}
//         onChange={handleChange}
//         placeholder="Category ID"
//         required
//       />
//       <input
//         type="text"
//         name="title"
//         value={formData.title}
//         onChange={handleChange}
//         placeholder="Title"
//         required
//       />
//       <input
//         type="text"
//         name="description"
//         value={formData.description}
//         onChange={handleChange}
//         placeholder="Description"
//         required
//       />
//       <input
//         type="number"
//         name="price"
//         value={formData.price}
//         onChange={handleChange}
//         placeholder="Price"
//         required
//       />
//       <input
//         type="number"
//         name="quantity"
//         value={formData.quantity}
//         onChange={handleChange}
//         placeholder="Quantity"
//         required
//       />
//       <input
//         type="text"
//         name="imgUrl"
//         value={formData.imgUrl}
//         onChange={handleChange}
//         placeholder="Image URL"
//         required
//       />
//       <label>
//         Purchased:
//         <input
//           type="checkbox"
//           name="isPurchased"
//           checked={formData.isPurchased}
//           onChange={(e) =>
//             setFormData({ ...formData, isPurchased: e.target.checked })
//           }
//         />
//       </label>
//       <button type="submit">Create Product</button>
//     </form>
//   );
// };

// export default CreateProductForm;