import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import { productos } from '../../data/productos'
import LinearProgress from '@mui/material/LinearProgress';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoader(true);
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        const mockItem = productos.find(x => x.id == id)
        resolve(mockItem);
      }, 2000)
    })

    getItem.then((data) => {
      setItem(data);
    }).finally(() => setLoader(false))
  }, [id])


  return (
    <div className="item-detail-container">
      {loader ? (<h3> Obteniendo información del producto...<LinearProgress color="error"/></h3>) : (
        <ItemDetail item={item} />)
      }

    </div>
  );
}

export default ItemDetailContainer;