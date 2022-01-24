import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';

const ItemListContainer = () => {

    const [listItems, setListItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if(!id){
            getDocs(collection(db, 'items')).then((querySnapshot) => {
                const products = querySnapshot.docs.map( doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setListItems(products)
            })
        } else {
            getDocs(query(collection(db, 'items'), where('category', '==', id))).then((querySnapshot) => {
                const products = querySnapshot.docs.map( doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setListItems(products)
            })
        } 
    }, [id])

    return (
        <>
            <h1>Cursos { id === 'presencial' ? 'presenciales' : 'a distancia'}</h1>
            <ItemList items={ listItems }/>
        </>
    )
}

export default ItemListContainer;