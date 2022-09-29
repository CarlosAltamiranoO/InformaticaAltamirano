import React from 'react'
import "./Item.css";
import {Link} from "react-router-dom";

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
            <Link to= {`/producto/${props.id}`} >
                VER MAS
            </Link>
        </section>

    )
}

export default Item