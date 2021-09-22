import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (producto) => {
  
  return (
    <div className="ItemListContainer">
      <p>Producto: <b>{producto.nombre}</b> <br />
        Precio: <b>${producto.precio}</b><br />
        Stock disponible: <b>{producto.stock}</b></p>
      {/* <ItemCount disponible={producto.stock} initial={0}/> */}
    </div>
  );
}

export default ItemListContainer;