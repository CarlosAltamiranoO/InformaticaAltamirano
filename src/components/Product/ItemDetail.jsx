import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import "./ItemDetail.css";

function ItemDetail(props) {
    const [estadoCompra, setEstadoCompra] = useState(false);
    const { addItem } = useContext(cartContext);

    function handleAdd(count) {
        setEstadoCompra(true);
        addItem(props.data, count);
    }

    return (
        <section className="itemDetail">
            <section className="item-img">
                <img src={props.data.img} alt="card img" />
            </section>
            <h3>{props.data.title}</h3>
            <p>{props.data.detail}</p>
            <h4>$ {props.data.prise}</h4>
            <section className='contador'>
                {!estadoCompra ? <ItemCount initial={1} stock={props.data.stock} onAdd={handleAdd} /> : <Link to={"/cart"} >Ir al carrito </Link>}
            </section>

        </section>
    )
}

export default ItemDetail