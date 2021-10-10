import React from 'react'
import './style.css'
const ButtonRow = ({position,changeList}) => {
    return ( <button onClick={()=>changeList(position)} >{position+1}</button> );
}
 
export default ButtonRow;