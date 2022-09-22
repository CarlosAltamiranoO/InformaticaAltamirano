import React, { useState, useEffect } from 'react'

import './ItemListContainer.css'
import { getItems } from '../../services/mockAPI';
import ItemList from './ItemList';

function ItemListContainer(props) {
  let [data, setData] = useState([]);
  useEffect(
    () => {
      getItems().then((respuesta) => {
        setData(respuesta);
      });
    }, []
  )




  return (
    <>
      <h2>{props.greeting}</h2>
      <section className='maincontainer'>
        <ItemList data={data}/>
      </section>
    </>
    /*  <div>
       <h2>{props.greeting}</h2>
       <section className='maincontainer'>
         <Card title="Producto 1" description="Sescripcion del producto 1 " prise={2500} image="https://place-hold.it/400x300" source="#" />
         <Card title="Producto 2" description="Sescripcion del producto 2 " prise={2000} image="https://place-hold.it/400x300" source="#" />
         <Card title="Producto 3" description="Sescripcion del producto 3 " prise={3500} image="https://place-hold.it/400x300" source="#" />
         <Card title="Producto 4" description="Sescripcion del producto 4 " prise={1500} image="https://place-hold.it/400x300" source="#" />
       </section>
     </div> */
  )
}

export default ItemListContainer