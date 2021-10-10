import React from 'react'
import './style.css'
import {Link } from 'react-router-dom'

const featured = () => {
    return ( 
    <div className='featured-container'>
        <div className="featured-content">
            <h1 className="feature-title">Status Cripto </h1>
            <div className="feature-description">
                <p >
                   Aqui podras ver o estado atual das 100 criptomoedas mas cotizadas atualmente no mercado, podras encontrar o preço, o volumen movimentado, o ativo circulante e muito mas.!
                </p>
                <button><Link to="/all">Ver Todas</Link></button>
            </div>
        </div>
    </div> );
}
 
export default featured;