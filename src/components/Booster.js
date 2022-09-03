import React from 'react'


const Booster = ({title, img, price}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt={title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Comprar</button>
    </div>
  </div>
</div>
  )
}

export default Booster