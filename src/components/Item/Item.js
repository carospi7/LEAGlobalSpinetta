import React from 'react';
import './Item.css';

const Item = ({ id, pictureUrl, title, price, stock }) => {

    return (
            <div key={ id } className="itemCard">  
                <img src={ pictureUrl } alt={ title }/>
                <h3>{ title }</h3>
                <span>{ price }</span>
                <div className='stock'> Vacantes disponibles: { stock }</div>
            </div>
    )
}

export default Item;