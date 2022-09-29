import React, { useState, useEffect } from "react";
import { getItem } from "../../services/mockAPI"
import ItemDetail from "../Product/ItemDetail";
import "./ItemDetailContainer.css";
import {useParams} from "react-router-dom";
function ItemDetailContainer() {

    let [data, setData] = useState({});
    const {itemId} = useParams(); //sugar sintax dextract que equivale a const id = useParams().id;
    useEffect(() => {
            getItem(itemId).then((respuesta) => {
                setData(respuesta);
            });
        }, [itemId])

    return (
        <>
            <section className="seccion">
                <ItemDetail data={data} />
                <section>
                <button className="agregar">Agregar carrito</button>
                </section>
            </section>
        </>
    )
}

export default ItemDetailContainer