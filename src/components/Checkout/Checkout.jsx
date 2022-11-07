import React from 'react';
import { useParams } from "react-router-dom";

function Checkout() {
    const {orderid} = useParams();
  return (
    <div>
        <h3>GRACIAS POR TU COMPRA!!!</h3>
        <h4>su numero de compra es: {orderid} </h4>
    </div>
  )
}

export default Checkout