import React, { useState } from 'react'
import "./ItemCount.css";

export default function ItemCount(props) {
    const [value, setValue] = useState({count: props.initial, stock: props.stock });
    console.log("Valor inicail: "+props.initial+" stock: "+props.stock );

    function onAdd(){
        if(value.stock > 1) setValue({count: value.count + 1, stock: value.stock -1});
        
    }
    function onSus(){
        
        if(value.count > 1) setValue({count: value.count - 1, stock: value.stock +1});
    }
  return (
    <>
        <div className='contenedor'>
        <button onClick={onSus}> - </button>
        <span>{value.count}</span>
        <button onClick={onAdd}> + </button>
    </div>
    <span>Stock actual: {value.stock -1 }</span>
    <button onClick={() => props.onAdd(value.count)}>agergar al carrito</button>
    </>
  )
}
