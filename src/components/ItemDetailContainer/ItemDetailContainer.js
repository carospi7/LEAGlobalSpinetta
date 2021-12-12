import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../utilities/utilities';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const item = getProductById(id)

        item.then(response => {
            setItem(response)
        })
    }, [id])

    return (
        <ItemDetail item={ item }/>
    )
}

export default ItemDetailContainer;