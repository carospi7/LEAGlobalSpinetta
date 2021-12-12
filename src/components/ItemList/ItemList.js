import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ items }) => {

    return (
        <div className='itemList'>
            { items.map((item) => {
                return(
                    <Item
                    key={ item.id }
                    id={ item.id }
                    title={ item.title }
                    pictureUrl={ item.pictureUrl }
                    price={ item.price }
                    stock={ item.stock }
                    category={ item.category }
                    />
                )
            } )
            }
        </div>
    )
}

export default ItemList;