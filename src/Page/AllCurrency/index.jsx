import React, { useState } from "react";
import ButtonRow from "../../Components/ButtonRow";
import CardCrypto from "../../Components/CardCryto";
import "./style.css";



const Currency = ({ currency }) => {
  const data = currency.items.data;
  const newData = data.sort((cryptoA, cryptoB) => {
    if (cryptoA.rank > cryptoB.rank) return 1;
    if (cryptoA.rank < cryptoB.rank) return -1;

    return 0;
  });
  const listArra = [
    newData.slice(0, 100),
    newData.slice(101, 201),
    newData.slice(201, 301),
    newData.slice(301, 401),
  ];
  const [ViewList, setList] = useState(listArra[0]);

  const changeList=(id)=>{ 
    setList(listArra[id])
  }

  return (
    <div className="all-container">
      <div className="all-header">
        <h1>Todas as criptomoedas Disponiveis</h1>
        <h3>Atualmente existem {currency.items.data.length} criptomoedas</h3>
      </div>
      <div className="all-currency">
        {ViewList.map((crypto) => (
          <CardCrypto
            name={crypto.name}
            rank={crypto.rank}
            symbol={crypto.symbol}
          />
        ))}
      </div>
      <div className="button-list">
        {listArra.map((i,id) => <ButtonRow changeList={changeList} position={id} key={id}/>)}
      </div>
    </div>
  );
};

export default Currency;
