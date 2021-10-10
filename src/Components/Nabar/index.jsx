import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'


const navbar = () => {
    return ( 
    <header className='navbar-container'>
        <Link to='/' className="nav-logo">$ Cotações Cripto </Link>
        <nav>
            <ul className="nav-list">
                <li><Link to="/">Top 100 Criptomoedas </Link> </li>
                <li><Link to="/all">Todas as criptomedas</Link> </li>
            </ul>
        </nav>
    </header> );
}
 
export default navbar;