import React from 'react';
import './CartWidget.css';
import Cart from './assets/cart.svg';

const CartWidget = ({ items }) => {
    return (
        <div className='cart'>
            <img src={ Cart } width='25' alt='Cart' />
            <span>{ items }</span>
        </div>
    )
}

export default CartWidget;