import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({title, price, img}) => {

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt={title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>${price}</p>
    <div className="card-actions justify-end">
      <ItemCount stock="5" initial="1"/>
    </div>
  </div>
</div>
  )
}

export default ItemDetail