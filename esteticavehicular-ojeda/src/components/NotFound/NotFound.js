import React from 'react';
import error from '../../assets/404.PNG'


const NotFound = () => {
    return (
        <div>
            <img src={error}></img>
            <h2 style={{color:'red'}}>Página no encontrada</h2>
        </div>
    );
}

export default NotFound;