import React, { useState, useEffect } from 'react';
import productService from '../services/productService';
import categoryService from '../services/categoryService';  
import '../styles/ProductCreate.css'

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await categoryService.getAllCategories();
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        title,
        categoryId,
        description,
        price,
        quantity,
        imgUrl,
      };
      const newCategory = { name, description: categoryDescription };
      await productService.createProduct(newProduct);
      await categoryService.createCategory(newCategory);
      setTitle('');
      setDescription('');
      setPrice('');
      setQuantity('');
      setCategoryId('');
      setImgUrl('');
      setName('');
      setCategoryDescription('');
      alert('Product and category created successfully');
    } catch (err) {
      alert(`Error creating product or category: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
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

      <div>
        <label>Price:</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Category:</label>
        <select 
          value={categoryId} 
          onChange={(e) => setCategoryId(e.target.value)} 
          required>
          <option value="">Select a category</option>
          {categories.map(category => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Furnitures</option>
          <option>Books</option>
          <option>Toys</option>
          <option>Household</option>
        </select>
      </div>

      <div>
        <label>Category Description:</label>
        <textarea 
          value={categoryDescription} 
          onChange={(e) => setCategoryDescription(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Image URL:</label>
        <input 
          type="text" 
          value={imgUrl} 
          onChange={(e) => setImgUrl(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;








// import React, { useState, useEffect } from 'react';
// import productService from '../services/productService';
// import categoryService from '../services/categoryService';  
// import '../styles/ProductForm.css'; // Import the CSS file

// const ProductForm = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [categoryId, setCategoryId] = useState('');
//   const [imgUrl, setImgUrl] = useState('');
//   const [categories, setCategories] = useState([]);

//   const [name, setName] = useState('');
//   const [categorydescription, setCategoryDescription] = useState('');
 

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const response = await categoryService.getAllCategories();
//       setCategories(response.data);
//     };
//     fetchCategories();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newProduct = {
//         title,
//         categoryId,
//         description,
//         price,
//         quantity,
//         imgUrl,
//       };
//       const newCategory = { name, categorydescription };
//       await productService.createProduct(newProduct);
//       await categoryService.createCategory(newCategory);
//       setTitle('');
//       setDescription('');
//       setPrice('');
//       setQuantity('');
//       setCategoryId('');
//       setImgUrl('');
//       setName('');
//       setDescription('');
//       alert('Product created successfully');
//       alert('Category created successfully');
//     } catch (err) {
//       alert(`Error creating product: ${err.message}`);
//       alert(`Error creating category: ${err.message}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="product-form">
//       <div>
//         <label>Title:</label>
//         <input 
//           type="text" 
//           value={title} 
//           onChange={(e) => setTitle(e.target.value)} 
//           required 
//         />
//       </div>

//       <div>
//         <label>Description:</label>
//         <textarea 
//           value={description} 
//           onChange={(e) => setDescription(e.target.value)} 
//           required 
//         />
//       </div>


//       <div>
//         <label>Price:</label>
//         <input 
//           type="number" 
//           value={price} 
//           onChange={(e) => setPrice(e.target.value)} 
//           required 
//         />
//       </div>
//       <div>
//         <label>Quantity:</label>
//         <input 
//           type="number" 
//           value={quantity} 
//           onChange={(e) => setQuantity(e.target.value)} 
//           required 
//         />
//       </div>

//       <div>
//         <label>Category:</label>
//         <select 
//           value={categoryId} 
//           onChange={(e) => setCategoryId(e.target.value)} 
//           required>
//           {/* <option value="">Select a category</option>
//           {categories.map(category => (
//             <option key={category._id} value={category._id}>
//               {category.name}
//             </option>
//           ))} */}
//            <option>Electronics</option>
//            <option>Clothing</option>
//            <option>Funitures</option>
//            <option>Books</option>
//            <option>Toys</option>
//            <option>Household </option>
//         </select>
//       </div>

//        <div>
//         <label>Description:</label>
//         <textarea 
//           value={categorydescription} 
//           onChange={(e) => setCategoryDescription(e.target.value)} 
//           required 
//         />
//       </div>

//       <div>
//         <label>Image URL:</label>
//         <input 
//           type="text" 
//           value={imgUrl} 
//           onChange={(e) => setImgUrl(e.target.value)} 
//           required 
//         />
//       </div>
//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default ProductForm;
