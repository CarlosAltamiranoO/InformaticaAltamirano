import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import {Link} from "react-router-dom";

function CartView() {
    const context = useContext(cartContext);
    const { cart, isEmpty, removeItem, empyCart, totalPrise } = context;

    if (isEmpty()) {
        return (
            <section>tu carrito esta vacio..  <Link to={"/"} ><b>Vamos a seguir comprando</b> </Link></section>
        )

    }

    return (
        <section className="ver">
            {cart.map((item) => (
                <section>
                    <hr />
                    <h4>Producto: </h4>
                    <h3>{item.title}</h3>
                    <p>Precio: ${item.prise}</p>
                    <p>{item.detail}</p>
                    <p>Cantidad: {item.count}</p>
                    <h4>Precio total: ${item.prise * item.count}</h4> {/* no me sale la funcion para sacar el total asique hise la operacion aca  */}
                    <div>
                        {/* <p>Precio total: <b className="price">${precioTotal()}</b></p> */}
                        <div>
                            <button onClick={() => {removeItem(item.id)}}>eliminar producto</button>
                        </div>
                    </div>
                    
                </section>
            ))}
            <section>
            <hr />
            <hr />
            <button onClick={empyCart}>Vaciar carrito</button>
            <button >Finalizar compra</button>
            </section>
        </section>
    );
}

export default CartView