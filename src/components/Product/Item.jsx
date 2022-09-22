import React from 'react'
import "./Item.css";
import ItemCount from '../ItemCount/ItemCount';

function Item(props) {
    return (
        <section className="item">
            <section className="item-img">
                <img src={props.img} alt="card img" />
            </section>
            <section className="item-detail">
                <h3>{props.title}</h3>
                <p>{props.detail}</p>
                <h4>$ {props.prise}</h4>
            </section>
            {/* <a href={props.source}>Ver más</a> */}
            <ItemCount initial={1} stock={props.stock}/>
        </section>

    )
}

export default Item