import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const footer = () => {
    return ( 
    <footer className="footer-container">
        <div className="footer-redes">
        <a href="https://github.com/VictorD19"><i class="fab fa-github fa-3x" ></i></a>
        <a href="https://api.whatsapp.com/send?phone=5549998218294&text=Oi%20gostaria%20de%20falar%20com%20voc%C3%AA.%20%C3%A9%20de%20teu%20interesse!."><i class="fab fa-whatsapp fa-3x"></i></a>
        <a href="https://www.linkedin.com/in/victord08/"><i class="fab fa-linkedin fa-3x"></i></a>
        
        </div>
        <div className="footer-agradecimento">
        <div>Api de coinmarketcap utilizadas para os dados das criptomoedas</div>
        <div>Site de cryptologos utilizados para os logo das criptomoedas</div>
        </div>
        <div className="criador">
            Site Criado para fines educacionais. <br/> Autor VictorD
        </div>
    </footer> );
}
 
export default footer;