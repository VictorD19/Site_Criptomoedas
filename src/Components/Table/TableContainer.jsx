import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import TableCell from './TableCell'

const style = makeStyles({
  table: {
    backgroundColor: "#fff",
    minWidth: "740px",
    padding: '0 15px'
  },
  TableCell:{
    fontSize: '15px',
    fontWeight:'bold'
  },
  positivo: {
    color: "#009000",
    fontWeight:'bold'
  },
  negativo: {
    color: "#ff453f",
    fontWeight:'bold'
  },
});

const getImg = (name, symbol) =>`https://cryptologos.cc/logos/${name.toLowerCase()}-${symbol.toLowerCase()}-logo.svg?v=014`



const TableCurrency = ({ listCurrency }) => {

  
    const contentTable = ['Rank #','Nome','Simbolo','Preço','24hr %','7d %','Volume(24hr)','Fonercimento Circulante']

  const styleClass = style();
  const newListCurrency = listCurrency.map(currency => ({
      rank: currency.cmc_rank,
      name: currency.name,
      id: currency.id,
      symbol: currency.symbol,
      price:  parseFloat(currency.quote.USD.price.toFixed(2)).toLocaleString('en-US'),
      change24h: currency.quote.USD.percent_change_24h.toFixed(2),
      change7d: currency.quote.USD.percent_change_7d.toFixed(2),
      volume: parseFloat(currency.quote.USD.volume_24h.toFixed(2)).toLocaleString('en-US'),
      circulating: parseFloat(Math.floor(currency.circulating_supply)).toLocaleString('en-US') + " " +currency.symbol
    }))


  return (
    <TableContainer className={styleClass.table}>
      <Table>
        <TableHead>
          <TableRow>
           {contentTable.map((title,i) => <TableCell style={styleClass.TableCell} text={title} key={i}/>)}
          </TableRow>
        </TableHead>
        <TableBody>

            {
                newListCurrency.map(currency => 
                <TableRow key={currency.id} >
                    <TableCell text={currency.rank} style={styleClass.TableCell} />
                    <TableCell text={currency.name} style={styleClass.TableCell}
                               urlImg={getImg(currency.name,currency.symbol)}/>
                    <TableCell text={currency.symbol} style={styleClass.TableCell}/>
                    <TableCell text={`$${currency.price}`} style={styleClass.TableCell}/>
                    <TableCell text={`${currency.change24h}%`} 
                               style={
                                    currency.change24h >= 0
                                      ? styleClass.positivo
                                      : styleClass.negativo
                                  }/>
                    <TableCell text={`${currency.change7d}%`}
                                style={
                                    currency.change7d >= 0
                                    ? styleClass.positivo
                                    : styleClass.negativo
                                    
                                }/>
                    <TableCell text={`$${currency.volume}`} style={styleClass.TableCell}/>
                    <TableCell text={currency.circulating} style={styleClass.TableCell}/>

                    
                   
                </TableRow>)
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCurrency;
