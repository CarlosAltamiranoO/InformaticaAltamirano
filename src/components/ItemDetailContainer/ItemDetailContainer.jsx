import React, { useState, useEffect } from "react";
import { getItem } from "../../services/mockAPI"
import Item from "../Product/Item";
import ItemDetail from "../Product/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css";
function ItemDetailContainer() {

    let [data, setData] = useState({});

    useEffect(
        () => {
            getItem().then((respuesta) => {
                setData(respuesta);
            });
        }, []
    )

    return (
        <>


            {/*                 <Item
                    key={data.id}
                    title={data.title}
                    img={data.img}
                    detail={data.detail}
                    prise={data.prise}
                    stock={data.stock}
                /> */}
            <section className="seccion">
                <ItemDetail data={data} />
                <section>
                <ItemCount initial={1} stock={6} />
                <button className="agregar">Agregar carrito</button>
                </section>
                

            </section>


        </>
    )
}

export default ItemDetailContainer