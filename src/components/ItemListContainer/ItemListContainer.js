import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => {

    const onAdd = (count) => {
        console.log(`Se agregaron ${count} items al carrito`)
    }
    return (
        <>
            <h1>{ greeting }</h1>
            <ItemCount stock={ 5 } initial={ 1 } onAdd={ onAdd }/>
        </>
    )
}

export default ItemListContainer;