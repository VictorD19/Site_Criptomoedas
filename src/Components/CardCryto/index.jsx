import React from 'react'
import './style.css'

const CardCrypto = ({name,rank,symbol}) => {
    const getImg = () => `https://cryptologos.cc/logos/${name.toLowerCase()}-${symbol.toLowerCase()}-logo.svg?v=014`
    return ( 
        <div className="card-cripto-container">
            <div className="card-img">
                <img src={getImg()} alt="img" />
            </div>
            <div className="card-description">
                <div className="description-1">
                    <div>{name}</div>
                    <div>{`#${rank}`}</div>
                </div>
                <div className="description-2">
                    <div>
                        {symbol}
                    </div>
                    <div>
                        change34h
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CardCrypto;