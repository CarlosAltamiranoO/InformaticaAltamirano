import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail(props) {

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
            <ItemCount initial={1} stock={8} />
        </section>
    )
}

export default ItemDetail