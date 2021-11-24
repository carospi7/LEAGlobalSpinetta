import React from 'react';
import './NavBar.css';
import Logo from './assets/logo-lea.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <div className='logo'><img src={ Logo } width={ '50px' } alt='LEA Global' /></div>
            <ul className='menu'>
                <li><a href="https://www.google.com.ar" className='active'>Inicio</a></li>
                <li><a href="https://www.google.com.ar">Capacitaciones</a></li>
                <li><a href="https://www.google.com.ar">Tasaciones</a></li>
                <li><a href="https://www.google.com.ar">Certificados de valor</a></li>
            </ul>
            <CartWidget items={ 7 } />
        </nav>
    )
}

export default NavBar;