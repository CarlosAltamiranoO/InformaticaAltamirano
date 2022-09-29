import React from 'react'
import Item from './Item'

function ItemList(props) {
  return (
    props.data.map((item) => {
        return (
          <Item
            key={item.id}
            id = {item.id}
            title={item.title}
            img={item.img}
            detail={item.detail}
            prise={item.prise}
            stock={item.stock}
          />
        );
      })
  )
}

export default ItemList