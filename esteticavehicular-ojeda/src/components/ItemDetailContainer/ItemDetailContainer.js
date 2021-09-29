import React, {useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const getItem = new Promise((resolve) => {
    setTimeout(() => {
      const mockItem = { 
          id: 1, 
          title: "PUERTA DELANTERA DERECHA", 
          price: 1000, 
          pictureUrl: "pdd.jpg",
          description:"Puerta delantera del lado derecho, sin pintar, para repuesto"
        }

      resolve(mockItem);
    }, 2000)
  })

  useEffect(() => {
    getItem.then((data) => {
      setItem(data);
    })
  }, [])


  return (
    <div className="item-detail-container">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;