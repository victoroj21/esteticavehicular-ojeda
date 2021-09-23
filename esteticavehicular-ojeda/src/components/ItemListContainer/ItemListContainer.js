import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (producto) => {

  const onAdd = (unidades) => {
    console.log(`Se agregaron las ${unidades} unidades correctamente al carrito`)
  }

  return (
    <div className="ItemListContainer">
      <p>Producto: <b>{producto.nombre}</b> <br />
        Precio: <b>${producto.precio}</b><br />
        Stock disponible: <b>{producto.stock}</b></p>
      <ItemCount stock={producto.stock} initial={0} onAdd={onAdd}/>
    </div>
  );
}

export default ItemListContainer;