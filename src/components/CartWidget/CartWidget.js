import React from 'react';
import './CartWidget.css';
import Cart from './assets/cart.svg';
import { Link } from 'react-router-dom';

const CartWidget = ({ items }) => {
    return (
        <Link to={'/cart'} className='cart'>
            <img src={ Cart } width='25' alt='Cart' />
            <span>{ items }</span>
        </Link>
    )
}

export default CartWidget;