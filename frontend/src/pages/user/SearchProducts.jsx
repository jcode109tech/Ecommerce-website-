import React, { useState, useEffect } from "react";

const SearchProducts = ({ categories, products, onSearch }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(selectedCategory, searchTerm);
    };

    useEffect(() => {
        onSearch(selectedCategory, searchTerm);
    }, [selectedCategory, searchTerm, onSearch]);

    return (
        <div className="search-products">
            <div className="search-bar">
                <select onChange={handleCategoryChange} value={selectedCategory}>
                    <option value="">All</option>
                    {categories.map((categories) => (
                        <option key={categories._id} value={categories._id}>
                            {categories.name}
                        </option>
                    ))}
                </select>
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchTerm} 
                    onChange={handleInputChange} 
                />
                <button onClick={handleSearchClick}>Search</button>
            </div>
        </div>
    );
};

export default SearchProducts;
