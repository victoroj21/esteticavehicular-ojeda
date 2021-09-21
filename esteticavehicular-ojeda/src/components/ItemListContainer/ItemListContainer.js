import React from 'react';

const ItemListContainer = (producto) => {
  return (
    <p>Producto: <b>{producto.nombre}</b> <br />
    Precio: <b>${producto.precio}</b><br />
    Stock disponible: <b>{producto.stock}</b></p>
  );
}

export default ItemListContainer;