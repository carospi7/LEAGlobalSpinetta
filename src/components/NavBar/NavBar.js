import React, { useContext } from 'react';
import './NavBar.css';
import Logo from './assets/logo-lea.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const NavBar = () => {

    const { totalQuantity } = useContext(CartContext);

    return (
        <nav>
            <NavLink to={'/'} className='logo'><img src={ Logo } width={ '50px' } alt='LEA Global' /></NavLink>
            <ul className='menu'>
                <li><NavLink to={'/'} className='home' activeClassName='active'>Inicio</NavLink></li>
                <li ><NavLink to={'/category/presencial'} activeClassName='active'>Capacitaciones presenciales</NavLink></li>
                <li><NavLink to={'/category/online'} activeClassName='active'>Capacitaciones a distancia</NavLink></li>
            </ul>
            <CartWidget items={ totalQuantity ? totalQuantity : 'No hay items' } />
        </nav>
    )
}

export default NavBar;