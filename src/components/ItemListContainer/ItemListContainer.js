import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getItems, getProductsByCategory } from '../../utilities/utilities';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

    const [listItems, setListItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const list =  id ? getProductsByCategory(id) : getItems()

        list.then(response => {
            setListItems(response)
        })
    }, [id])

    return (
        <>
            <h1>{ greeting }</h1>
            <ItemList items={ listItems }/>
        </>
    )
}

export default ItemListContainer;