import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItem } from '../../utilities/utilities';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    useEffect(() => {
        const item = getItem()

        item.then(response => {
            setItem(response)
        })
    }, [])

    return (
        <ItemDetail item={ item }/>
    )
}

export default ItemDetailContainer;