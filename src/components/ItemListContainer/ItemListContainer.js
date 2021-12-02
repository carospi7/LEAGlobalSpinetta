import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const getItems = () => {
    return new Promise((resolve, reject) => {
        const object = [
            {
                id: '1',
                title: 'Seguro de avería de maquinaria',
                price: '270USD',
                pictureUrl: 'https://tienda.lea-global.com/wp-content/uploads/2021/11/rotura-de-maquinas.jpg',
                stock: '10'
            },
            {
                id: '2',
                title: 'Seguros de CAR/EAR en Latinoamérica',
                price: '220USD',
                pictureUrl: 'https://tienda.lea-global.com/wp-content/uploads/2020/04/curso-car-ear-lea.jpg',
                stock: '3'
            },
            {
                id: '3',
                title: 'Seguros para la industria del Oil & Gas',
                price: '140USD',
                pictureUrl: 'https://tienda.lea-global.com/wp-content/uploads/2021/11/oil-gas-600x400.jpg',
                stock: '8'
            },
            {
                id: '4',
                title: 'Introducción al seguro de riesgo',
                price: '400USD',
                pictureUrl: 'https://tienda.lea-global.com/wp-content/uploads/2021/11/introduccion-al-seguro-600x400.jpg',
                stock: '1'
            }
        ]
        setTimeout(() => resolve(object), 3000)
    })
}

const ItemListContainer = ({ greeting }) => {

    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        const list = getItems()

        list.then(response => {
            setListItems(response)
        })
    }, [])

    const onAdd = (count) => {
        console.log(`Se agregaron ${count} items al carrito`)
    }
    return (
        <>
            <h1>{ greeting }</h1>
            <ItemCount stock={ 5 } initial={ 1 } onAdd={ onAdd }/>
            <ItemList items={ listItems }/>
        </>
    )
}

export default ItemListContainer;