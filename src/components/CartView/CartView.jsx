import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import {Link} from "react-router-dom";
import { createBuyOrder } from '../../services/firestore';
import {useNavigate} from "react-router-dom";

function CartView() {
    const context = useContext(cartContext);
    const { cart, isEmpty, removeItem, empyCart, totalPrise, totalProduct } = context;
    const navigate = useNavigate();

    if (isEmpty()) {
        return (
            <section>tu carrito esta vacio..  <Link to={"/"} ><b>Vamos a seguir comprando</b> </Link></section>
        )

    }
    function handleCheckout(){
        const orderData ={
            buyer:{
                name: "carlos",
                phone: 3512368071,
                email: "carlos@gmail.com"
            },
            items: cart,
            total: totalPrise()
        }
        createBuyOrder(orderData).then(orderid => {
            navigate(`/checkout/${orderid}`);
        });
    }

    return (
        <section className="ver">
            {cart.map((item) => (
                <section key={item.id}>
                    <hr />
                    <h4>Producto: </h4>
                    <h3>{item.title}</h3>
                    <p>Precio: ${item.prise}</p>
                    <p>{item.detail}</p>
                    <p>Cantidad: {item.count}</p>
                    <h4>total productos: ${totalProduct(item.id)}</h4> {/* no me sale la funcion para sacar el total asique hise la operacion aca  */}
                    <div>
                            <button onClick={() => {removeItem(item.id)}}>eliminar producto</button>
                    </div>
                    
                </section>
            ))}
            <section>
            <hr />
            <hr />
            <p>Precio total: <b className="price">${totalPrise()}</b></p>
            <button onClick={empyCart}>Vaciar carrito</button>
            <button onClick={handleCheckout}>Finalizar compra</button>
            </section>
        </section>
    );
}

export default CartView