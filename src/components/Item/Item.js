import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, pictureUrl, title, price, stock, category }) => {

    return (
            <div key={ id } className="itemCard">  
                <img src={ pictureUrl } alt={ title }/>
                <span className='category'>{ category }</span>
                <h3>{ title }</h3>
                <span>{ price }</span>
                <Link to={`/detail/${id}`} className='buttonDetail'>Ver detalle</Link>
                <div className='stock'> Vacantes disponibles: { stock }</div>
            </div>
    )
}

export default Item;