import React, { useState, useEffect } from 'react';
import { categorias } from '../../data/categorias'
import db from '../../firebase/firebase';
import CategoryList from '../CategoryList/CategoryList';
import { collection, getDocs } from 'firebase/firestore'

const CategoryListContainer = () => {
  const [categories, setCategories] = useState([]);

  async function getCategories(db) {
    const categoriesCol = collection(db, "categories");
    const categoriesSnapshot = await getDocs(categoriesCol);
    const categoriesList = categoriesSnapshot.docs.map(doc => doc.data());
    setCategories(categoriesList);
    return categoriesList;
  }

  useEffect(() => {

    getCategories(db).then((data) => {
      setCategories(data);
    })
  }, [])


  return (
    <div className="category-list-container">
      <CategoryList categories={categories} />
    </div>
  );
}

export default CategoryListContainer;