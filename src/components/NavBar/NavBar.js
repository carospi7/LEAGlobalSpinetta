import React from 'react';
import './NavBar.css';
import Logo from './assets/logo-lea.png'

const NavBar = () => {
    return (
        <nav>
            <div className='logo'><img src={ Logo } width={ '50px' } /></div>
            <ul className='menu'>
                <li><a href="#" className='active'>Inicio</a></li>
                <li><a href="#">Capacitaciones</a></li>
                <li><a href="#">Tasaciones</a></li>
                <li><a href="#">Certificados de valor</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;