import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getDoc(doc(db, 'items', id)).then((querySnapshot) => {
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            setItem(product);
        })
    }, [id])

    return (
        <ItemDetail item={ item }/>
    )
}

export default ItemDetailContainer;