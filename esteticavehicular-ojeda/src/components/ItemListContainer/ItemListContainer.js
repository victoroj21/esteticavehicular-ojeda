import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';
import { productos } from '../../data/productos'
import LinearProgress from '@mui/material/LinearProgress';
import CategoryListContainer from '../CategoryListContainer/CategoryListContainer';
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../firebase/firebase';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  async function getItems(db, idCat) {
    const itemsCol = collection(db, "items");
    let q;

    if (idCat)
      q = query(itemsCol, where("category", "==", idCat));
    else
      q = query(itemsCol, where("category", "!=", ""));

    const itemsSnapshot = await getDocs(q);
    const itemsList = itemsSnapshot.docs.map(doc => doc.data());
    console.log(itemsList)
    return itemsList
  }

  useEffect(() => {
    setLoader(true);
    getItems(db, id)
      .then((data) => {
        setItems(data)

      })
      .finally(() => setLoader(false));
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