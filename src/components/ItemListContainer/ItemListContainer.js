import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getItems } from '../../utilities/utilities';

const ItemListContainer = ({ greeting }) => {

    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        const list = getItems()

        list.then(response => {
            setListItems(response)
        })
    }, [])

    return (
        <>
            <h1>{ greeting }</h1>
            <ItemList items={ listItems }/>
        </>
    )
}

export default ItemListContainer;