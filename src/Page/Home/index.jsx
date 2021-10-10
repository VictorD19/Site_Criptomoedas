import React from "react";
import Featured from "../../Components/Featured";

 import TableCurrency from "../../Components/Table/TableContainer";
 import BgImage from '../../Assets/background.webp'


const Home = ({ topCurrency }) => {
    const listCurrency = topCurrency.items.data
    
  return (
    <div style={{
      backgroundImage: `url(${BgImage})`,
      backgroundSize:'contain',
      backgroundRepeat:'no-repeat',
      
      
    }} >
    
     <Featured/>
     <TableCurrency listCurrency={listCurrency}/> 
   
    </div>
  );
};

export default Home;
