import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const onAdd = (count) => {
    console.log(`Se agregaron ${count} items al carrito`)
}

const ItemDetail = ({ item }) => {
    return (
        <article className='itemDetail'>
            <div className='flexColumn'>
                <div className='column'>
                    <img src={ item.pictureUrl }/>
                </div>
                <div className='column'>
                    <div className='date'>{ item.date }</div>
                    <h1>{ item.title }</h1>
                    <ul className='listFeatures'>
                        <li><span>Módulos:</span> { item.modules }</li>
                        <li><span>Horas:</span> { item.hours }</li>
                    </ul>
                    <div className='price'>{ item.price }</div>
                    <ItemCount stock={ 5 } initial={ 1 } onAdd={ onAdd }/>
                </div>
            </div>
            <div className='description'>
                <h2>Descripción</h2>
                { item.description }
            </div>
            <ul className='tutors'>
            <h3>Tutores</h3>
            { item.tutors.map((tutor) => {
                    return(
                        <li key={ tutor.name }>
                            <img src={ tutor.pictureUrl }/>
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