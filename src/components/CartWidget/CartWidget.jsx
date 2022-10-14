import React from 'react'
import  icono from "./icone-de-panier-noir.png"
import "./CartWidget.css"
import {cartContext} from "../../context/cartContext";
import { useContext } from 'react';

function CartWidget() {
  const {getItemQty} = useContext(cartContext);
  return (
    <>
    <img src={icono} alt="carrito" />
    <span>{getItemQty() > 0 && getItemQty()}</span>
    </>
  )
}

export default CartWidget
