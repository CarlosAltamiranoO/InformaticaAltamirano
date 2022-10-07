import React, {useContext, useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom";
import {cartContext} from "../../context/cartContext";

function ItemDetail(props) {
    const [estadoCompra, setEstadoCompra] = useState(false);
    const {addItem} = useContext(cartContext);
    
    function handleAdd(count){
        alert(`agergaste al carrito ${count} ${props.data.title}`);
        setEstadoCompra(true);
        addItem(props.data, count);
    }

    return (
        <section className="item">
            <section className="item-img">
                <img src={props.data.img} alt="card img" />
            </section>
            <section className="item-detail">
                <h3>{props.data.title}</h3>
                <p>{props.data.detail}</p>
                <h4>$ {props.data.prise}</h4>
            </section>
            {/* <ItemCount initial={1} stock={props.data.stock} />  no toma los datos que emvio*/}
            {!estadoCompra? <ItemCount initial={1} stock={8} onAdd ={handleAdd} /> : <Link to={"/cart"} >Ir al carrito </Link>}
        </section>
    )
}

export default ItemDetail