import React, { useState, useEffect } from 'react';
import { categorias } from '../../data/categorias'
import CategoryList from '../CategoryList/CategoryList';

const CategoryListContainer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categorias);
      }, 2000)
    })

    getItems.then((data) => {
        setCategories(data);

    })
  }, [])


  return (
    <div className="category-list-container">
      <CategoryList categories={categories}/>
    </div>
  );
}

export default CategoryListContainer;