import React, { useState, useEffect } from "react";
import { useData } from '../../Context';

const SearchProducts = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const { categories, setProducts, api } = useData();

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = async () => {
        let query = [];
        if (selectedCategory) query.push(`categoryId=${selectedCategory}`);
        if (searchTerm) query.push(`searchTerm=${searchTerm}`);

        const response = await fetch(`${api}/products/search?${query.join('&')}`);
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        handleSearch();
    }, [selectedCategory, searchTerm]);

    return (
        <div className="search-products">
            <div className="search-bar">
                <select onChange={handleCategoryChange} value={selectedCategory}>
                    <option value="">All</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <input 
                    type="text" 
                    placeholder="Search categories..." 
                    value={searchTerm} 
                    onChange={handleInputChange} 
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default SearchProducts;
