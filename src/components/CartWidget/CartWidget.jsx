import React from 'react'
import  icono from "./icone-de-panier-noir.png"
import "./CartWidget.css"
import {cartContext} from "../../context/cartContext";
import { useContext } from 'react';

function CartWidget() {
  const {getItemQty} = useContext(cartContext);
  return (
    <>
    <a className = "nav_link" href="/"><img src={icono} alt="carrito" /></a>
    <span>{getItemQty() > 0 && getItemQty()}</span>
    </>
  )
}

export default CartWidget
