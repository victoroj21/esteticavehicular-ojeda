import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import { productos } from '../../data/productos'
import LinearProgress from '@mui/material/LinearProgress';
import { doc, getDoc } from '@firebase/firestore';
import db from '../../firebase/firebase';
import CartContext from '../../Context/CartContext';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  const cartData = useContext(CartContext);
  
  async function getItem(db, itemId) {
    const docRef = doc(db, "items", itemId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let itemFB = docSnap.data();
     
      if (cartData.isInCart(itemId)) {
        let aux = cartData.items.find(x => x.id == itemId);
        itemFB.quantity = aux.quantity;
      }

      setItem(itemFB)
    }
    else{
      let itemAux = {
        id:null,
        quantity : 0
      }
      setItem(itemAux)
    }

    setLoader(false);
  }

  useEffect(() => {
    setLoader(true);
    getItem(db, id)
  }, [id])


  return (
    <div className="item-detail-container">
      {loader ? (<h3> Obteniendo información del producto...<LinearProgress color="error" /></h3>) : (
        <ItemDetail item={item} />)
      }

    </div>
  );
}

export default ItemDetailContainer;