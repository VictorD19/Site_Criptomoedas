import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DBCurrency from "./Config/DbCoinmarke";
import Home from "./Page/Home";
import AllCurrency from "./Page/AllCurrency";
import "./app.css";
import Navbar from './Components/Nabar'
import Loading from './Assets/Pulse-1.8s-211px.svg'
import Footer from "./Components/Footer";

function App() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const getCurrency = async () => {
      let currencyList = await DBCurrency.getAllCurrency();
      console.log(currencyList);
      setCurrency(currencyList);
    };
    getCurrency();
  }, []);

  return (

    <div>

    <Router>
        <Navbar/> 
      <Switch>
        <Route path="/" exact>
          {currency.length > 0 && <Home topCurrency={currency[0]} />}
        </Route>
        <Route path="/all">
         {currency.length > 0 &&  <AllCurrency currency={currency[1]} />}
        </Route>
      </Switch>
      {currency.length <= 0 &&  <div className="loading">
    <img src={Loading}/>
    </div>}
    <Footer/>
    </Router>
   
    </div>

  );
}

export default App;
