import React from 'react'
import "./Card.css";
import ItemCount from '../ItemCount/ItemCount';

function Card(props) {
    return (
        <section className="card">
            <section className="card-img">
                <img src={props.image} alt="card img" />
            </section>
            <section className="card-detail">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <h4>$ {props.prise}</h4>
            </section>
            {/* <a href={props.source}>Ver más</a> */}
            <ItemCount initial={1} stock={6}/>
        </section>

    )
}

export default Card