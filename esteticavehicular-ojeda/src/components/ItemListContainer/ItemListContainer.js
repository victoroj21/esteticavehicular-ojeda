import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';
import { productos } from '../../data/productos'
import LinearProgress from '@mui/material/LinearProgress';
import CategoryListContainer from '../CategoryListContainer/CategoryListContainer';
import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase/firebase';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  async function getItems(db, idCat) {
    const itemsCol = collection(db, "items");
    const itemsSnapshot = await getDocs(itemsCol);
    const itemsList = itemsSnapshot.docs.map(doc => doc.data());
    //setItems(itemsList)
    //setLoader(false)
    console.log(itemsList)
    return itemsList
  }

  useEffect(() => {
    setLoader(true);
    getItems(db)
      .then((data) => {
        id ? setItems(data.filter(x => x.category === id)) : setItems(data);

      })
      .finally(() => setLoader(false));
  }, [id])


  return (
    <div className="item-list-container">
      <div>
        <CategoryListContainer />
      </div>
      <div>
        {loader ? (<h3>Cargando productos...<LinearProgress color="primary" /></h3>) : (
          <ItemList items={items} />)
        }
      </div>
    </div>
  );
}

export default ItemListContainer;