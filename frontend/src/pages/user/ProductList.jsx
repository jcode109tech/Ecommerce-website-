import React from 'react';

const ProductList = ({ products, categories }) => {


    if (!products || !categories) {
        return <div>Loading...</div>; // or handle the loading state appropriately
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product._id} className="product-item">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Category: {categories.find(cat => cat._id === product.categoryId)?.title}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
