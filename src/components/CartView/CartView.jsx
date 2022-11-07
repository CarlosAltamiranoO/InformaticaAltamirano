import React, {useContext} from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from "react-router-dom";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import "./CartView.css"

function CartView() {

    const context = useContext(cartContext);
    const { cart, isEmpty, removeItem, empyCart, totalPrise, totalProduct } = context;

    if (isEmpty()) {
        return (
            <section>tu carrito esta vacio..  <Link to={"/"} ><b>Vamos a seguir comprando!</b> </Link></section>
        )

    }


    return (
        <>
        <section className="view">
            <h4>Productos: </h4>
            {cart.map((item) => (
                <section key={item.id}>
                    <hr />
                    <h3>{item.title}</h3>
                    <p>Precio: ${item.prise}</p>
                    <p>{item.detail}</p>
                    <p>Cantidad: {item.count}</p>
                    <h4>subtotal producto: ${totalProduct(item.id)}</h4>
                    <div>
                        <button onClick={() => { removeItem(item.id) }}>Eliminar producto</button>
                    </div>
                </section>
            ))}
            <section>
                <hr />
                <hr />
                <p>Precio total: <b className="price">${totalPrise()}</b></p>
                <button onClick={empyCart}>VACIAR TODO EL CARRITO</button> 
            </section>
        </section>
        <CheckoutForm/>
        </>
    );
}

export default CartView