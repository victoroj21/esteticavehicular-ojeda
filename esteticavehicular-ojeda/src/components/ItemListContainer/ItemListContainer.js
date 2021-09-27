import React, {useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const getItems = new Promise((resolve) => {
    setTimeout(() => {
      const mockItems = [
        { id: 1, title: "PUERTA DELANTERA DERECHA", price: 1000, pictureUrl: "pdd.jpg" },
        { id: 2, title: "PUERTA DELANTERA IZQUIERDA", price: 2500, pictureUrl: "pdi.jpg" },
        { id: 3, title: "PUERTA TRASERA DERECHA", price: 3000, pictureUrl: "ptd.jpg" },
        { id: 4, title: "PUERTA TRASERA IZQUIERDA", price: 4500, pictureUrl: "pti.jpg" }
      ]

      resolve(mockItems);
    }, 2000)
  })

  useEffect(() => {
    getItems.then((data) => {
      setItems(data);
    })
  }, [])


  return (
    <div className="item-list-container">
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;