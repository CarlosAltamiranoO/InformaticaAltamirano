import React from 'react'
import  icono from "./icone-de-panier-noir.png"
import "./CartWidget.css"

function CartWidget() {
  return (
    <>
    <a className = "nav_link" href="#"><img src={icono} alt="carrito" /></a>
    </>
  )
}

export default CartWidget
