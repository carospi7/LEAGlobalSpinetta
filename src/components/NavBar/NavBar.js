import React from 'react';
import './NavBar.css';
import Logo from './assets/logo-lea.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
    return (
        <nav>
            <Link to={'/'} className='logo'><img src={ Logo } width={ '50px' } alt='LEA Global' /></Link>
            <ul className='menu'>
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/category/presencial'}>Capacitaciones presenciales</Link></li>
                <li><Link to={'/category/online'}>Capacitaciones a distancia</Link></li>
            </ul>
            <CartWidget items={ 7 } />
        </nav>
    )
}

export default NavBar;