import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';
import { productos } from '../../data/productos'
import LinearProgress from '@mui/material/LinearProgress';
import CategoryListContainer from '../CategoryListContainer/CategoryListContainer';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoader(true);

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000)
    })

    getItems.then((data) => {
      id ? setItems(data.filter(x => x.category === id)) : setItems(data);

    }).finally(() => setLoader(false))
  }, [id])


  return (
    <div className="item-list-container">
      <div>
        <CategoryListContainer />
      </div>
      <div>
        {loader ? (<h3>Cargando productos...<LinearProgress color="error" /></h3>) : (
          <ItemList items={items} />)
        }
      </div>
    </div>
  );
}

export default ItemListContainer;