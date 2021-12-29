import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({ item }) => {

    const { setProduct } = useContext(CartContext);
    const [countItems, setCountItems] = useState(0);

    const onAdd = (count) => {
        console.log(`Se agregaron ${count} items al carrito`)
        setCountItems(count);
        setProduct(item, count);
    }

    return (
        <article className='itemDetail'>
            <div className='flexColumn'>
                <div className='column'>
                    <img src={ item.pictureUrl } alt={ item.title }/>
                </div>
                <div className='column'>
                    <div className='date'>{ item.date }</div>
                    <h1>{ item.title }</h1>
                    <ul className='listFeatures'>
                        <li><span>Módulos:</span> { item.modules }</li>
                        <li><span>Horas:</span> { item.hours }</li>
                    </ul>
                    <div className='price'>{ item.price }</div>
                    { countItems === 0 ? 
                        <ItemCount stock={ item.stock } initial={ 1 } onAdd={ onAdd }/>
                        :
                        <Link to={'/cart'} className='checkoutButton'>Terminar compra</Link>
                    }
                </div>
            </div>
            <div className='description'>
                <h2>Descripción</h2>
                { item.description }
            </div>
            <ul className='tutors'>
            <h3>Tutores</h3>
            { item.tutors?.map((tutor) => {
                    return(
                        <li key={ tutor.name }>
                            <img src={ tutor.pictureUrl } alt={ tutor.name }/>
                            { tutor.name }
                            <span>{ tutor.profession }</span>
                        </li>
                    )
                }) }
            </ul>
        </article>
    )
}

export default ItemDetail;