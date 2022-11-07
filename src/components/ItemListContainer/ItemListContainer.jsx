import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { getItems, getItemsByCategory } from "../../services/firestore";
import ItemList from '../Product/ItemList';

function ItemListContainer(props) {
  let [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(
    () => {
      if (categoryId === undefined) {
        getItems().then((respuesta) =>  setData(respuesta));
      }
      else {
        getItemsByCategory(categoryId).then((respuestaD) => setData(respuestaD));
      }
    }, [categoryId]
  )
  return (
    <>
      <h2>{props.greeting}</h2>
      <section className='maincontainer'>
        <ItemList data={data} />
      </section>
    </>
  )
}

export default ItemListContainer