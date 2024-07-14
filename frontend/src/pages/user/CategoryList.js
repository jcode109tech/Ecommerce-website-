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



// import React, { useState } from 'react';
// import { useData } from '../Context';


// const CategoryList = () => {
//     const { categories, api } = useData(); 

//     return (
//         <>
            
//             <div className="products-grid">
//                 {categories && categories.map((category) => (
//                     <div key={category._id} className="product-item">
//                         <img src={category.imgUrl} alt={category.title} />
//                         <div className="product-details">
//                             <h2>{category.title}</h2>
//                             <p>{category.description}</p>
//                             <p>${category.price}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default CategoryList;

