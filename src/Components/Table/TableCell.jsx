import { TableCell } from '@material-ui/core';
import React from 'react'
import './style.css'

const tableCell = ({text,style,urlImg}) => {
   
    return ( 
    <TableCell align="center"  className={`${style} text`}>
        {urlImg !== undefined ? <img src={urlImg} className='iconCryto'alt='img '/>: ' '}
        {" "+ text}
    </TableCell> );
}
 
export default tableCell;