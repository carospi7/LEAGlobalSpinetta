import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [ count, setCount] = useState(initial)

    const handleCountAdd = () => {
        setCount(count < stock ? count + 1 : stock)
    }

    const handleCountSubtract = () => {
        setCount(count > 0 ? count - 1 : 0)
    }

    return (
        <>
            <div className='quantityBlock'>
                <button onClick={ handleCountSubtract }> - </button>
                <span>{ count }</span>
                <button onClick={ handleCountAdd }> + </button>
            </div>
            <button className='addButton' onClick={ () => onAdd(count) }>Agregar al carrito</button>
        </>
    )
}

export default ItemCount;