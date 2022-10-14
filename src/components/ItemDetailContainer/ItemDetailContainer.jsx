import React, { useState, useEffect } from "react";
import ItemDetail from "../Product/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/firestore";
function ItemDetailContainer() {

    let [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { itemId } = useParams(); //sugar sintax dextract que equivale a const id = useParams().id;
    useEffect(() => {
        getItem(itemId).then((respuesta) => setData(respuesta))
            .catch((errormsg) => {
                setError(errormsg.message)
            })
            .finally(() => setIsLoading(false));
    }, [itemId])
    if (isLoading) {
        return (
            <>
                {error ? (
                    <div>
                        <h2 style={{ color: "#aa0033" }}>Error obteniendo los datos</h2>
                        <p>{error}</p>
                    </div>
                ) : (
                    <h3>Cargando . . .</h3>
                )}
            </>
        );
    }

    return (
        <>
            <section className="seccion">
                <ItemDetail data={data} />
            </section>
        </>
    )
}

export default ItemDetailContainer;