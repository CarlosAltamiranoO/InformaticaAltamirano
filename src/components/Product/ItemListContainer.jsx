import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { getItems, getItemsByCategory } from '../../services/mockAPI';
import ItemList from './ItemList';

function ItemListContainer(props) {
  let [data, setData] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(
    () => {
      if (categoryId === undefined) {
        getItems().then((respuesta) => { setData(respuesta); });
      }
      else {
        getItemsByCategory(categoryId).then((respuesta) => { setData(respuesta); });
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